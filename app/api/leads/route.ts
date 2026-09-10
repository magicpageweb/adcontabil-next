import { scoreLead } from "@/lib/leads/scoring";
import {
  MAX_BODY_BYTES,
  sanitizeSheetCell,
  validateLeadServer,
} from "@/lib/leads/validation";
import { buildLeadWhatsAppUrl } from "@/lib/leads/whatsapp";
import type { LeadApiResponse, LeadRecord } from "@/lib/leads/types";

export const runtime = "nodejs";

const FALLBACK_ERROR =
  "Não foi possível registrar seus dados neste momento. Você pode continuar diretamente pelo WhatsApp.";

type RateBucket = { count: number; resetAt: number };
const rateBuckets = new Map<string, RateBucket>();
const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 60_000;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

/** Best-effort only — serverless instances não compartilham memória. */
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

async function forwardToSheets(record: LeadRecord, secret: string, url: string) {
  const payload = {
    secret,
    data: {
      name: sanitizeSheetCell(record.name),
      whatsapp: sanitizeSheetCell(record.whatsapp),
      profile: sanitizeSheetCell(record.profile),
      interest: sanitizeSheetCell(record.interest),
      moment: sanitizeSheetCell(record.moment),
      score: record.score,
      classification: record.classification,
      pageUrl: sanitizeSheetCell(record.pageUrl),
      utmSource: sanitizeSheetCell(record.utmSource),
      utmMedium: sanitizeSheetCell(record.utmMedium),
      utmCampaign: sanitizeSheetCell(record.utmCampaign),
      referrer: sanitizeSheetCell(record.referrer),
      status: record.status,
    },
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("[leads] Sheets webhook HTTP", res.status);
      return false;
    }

    const text = await res.text();
    try {
      const json = JSON.parse(text) as { ok?: boolean; error?: string };
      if (json.ok === true) return true;
      console.error("[leads] Sheets webhook rejected:", json.error || "ok_false");
      return false;
    } catch {
      console.error(
        "[leads] Sheets webhook invalid JSON",
        res.status,
        text.slice(0, 180),
      );
      return false;
    }
  } catch {
    console.error("[leads] Sheets webhook failed");
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) {
    const body: LeadApiResponse = {
      ok: false,
      error: "Não foi possível enviar. Tente novamente.",
    };
    return Response.json(body, { status: 413 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    const body: LeadApiResponse = {
      ok: false,
      error: "Muitas tentativas. Aguarde um minuto e tente novamente.",
    };
    return Response.json(body, { status: 429 });
  }

  let json: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      const body: LeadApiResponse = {
        ok: false,
        error: "Não foi possível enviar. Tente novamente.",
      };
      return Response.json(body, { status: 413 });
    }
    json = JSON.parse(raw);
  } catch {
    const body: LeadApiResponse = {
      ok: false,
      error: "Não foi possível enviar. Verifique os campos e tente novamente.",
    };
    return Response.json(body, { status: 400 });
  }

  const validated = validateLeadServer(json);
  if (!validated.ok) {
    // Spam: resposta genérica 200 para não ensinar bots (sem WA url)
    if (validated.spam) {
      const body: LeadApiResponse = {
        ok: false,
        error: validated.error,
      };
      return Response.json(body, { status: 400 });
    }
    const body: LeadApiResponse = {
      ok: false,
      error: validated.error,
      fieldErrors: validated.fieldErrors,
    };
    return Response.json(body, { status: 400 });
  }

  const { data } = validated;
  const { score, classification } = scoreLead({
    profile: data.profile,
    interest: data.interest,
    moment: data.moment,
  });

  const whatsappUrl = buildLeadWhatsAppUrl({
    name: data.name,
    profile: data.profile,
    interest: data.interest,
  });

  const record: LeadRecord = {
    name: data.name,
    whatsapp: data.whatsapp,
    profile: data.profile,
    interest: data.interest,
    moment: data.moment,
    score,
    classification,
    pageUrl: data.pageUrl,
    referrer: data.referrer,
    utmSource: data.utmSource,
    utmMedium: data.utmMedium,
    utmCampaign: data.utmCampaign,
    status: "Novo",
  };

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET?.trim();

  if (!webhookUrl || !webhookSecret) {
    console.error("[leads] Missing GOOGLE_SHEETS_WEBHOOK_URL or SECRET");
    const body: LeadApiResponse = {
      ok: false,
      error: FALLBACK_ERROR,
      whatsappUrl,
    };
    return Response.json(body, { status: 503 });
  }

  const recorded = await forwardToSheets(record, webhookSecret, webhookUrl);

  if (!recorded) {
    const body: LeadApiResponse = {
      ok: false,
      error: FALLBACK_ERROR,
      whatsappUrl,
    };
    return Response.json(body, { status: 502 });
  }

  const body: LeadApiResponse = {
    ok: true,
    recorded: true,
    whatsappUrl,
  };
  return Response.json(body);
}
