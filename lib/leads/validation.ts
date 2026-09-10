import {
  LEAD_INTERESTS,
  LEAD_MOMENTS,
  LEAD_PROFILES,
  type LeadFormFields,
  type LeadInterest,
  type LeadMoment,
  type LeadProfile,
  type LeadSubmitPayload,
} from "@/lib/leads/types";

export const MIN_FORM_MS = 3000;
export const MAX_BODY_BYTES = 8_192;
export const MAX_NAME_LENGTH = 120;
export const MAX_WHATSAPP_LENGTH = 40;
export const MAX_ORIGIN_LENGTH = 500;

const FIELD_ERRORS = {
  name: "Informe seu nome.",
  whatsapp: "Informe um WhatsApp válido.",
  profile: "Selecione uma opção.",
  interest: "Selecione o que você procura.",
  moment: "Selecione uma opção.",
  consent: "Confirme a ciência sobre o uso dos dados.",
} as const;

export type LeadFieldErrors = Partial<Record<keyof LeadFormFields, string>>;

export function isLeadProfile(value: unknown): value is LeadProfile {
  return typeof value === "string" && (LEAD_PROFILES as readonly string[]).includes(value);
}

export function isLeadInterest(value: unknown): value is LeadInterest {
  return typeof value === "string" && (LEAD_INTERESTS as readonly string[]).includes(value);
}

export function isLeadMoment(value: unknown): value is LeadMoment {
  return typeof value === "string" && (LEAD_MOMENTS as readonly string[]).includes(value);
}

/** Remove máscara e normaliza para E.164 BR sem +: 55 + DDD + número. */
export function normalizeBrazilianWhatsApp(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;

  let n = digits;
  if (n.startsWith("55") && n.length >= 12) {
    n = n.slice(2);
  }
  // Remove zero à esquerda do DDD (ex.: 051...)
  if (n.length === 11 && n.startsWith("0")) {
    n = n.slice(1);
  }
  if (n.length === 10 || n.length === 11) {
    const ddd = n.slice(0, 2);
    const rest = n.slice(2);
    if (!/^[1-9]\d$/.test(ddd)) return null;
    if (rest.length === 9 && !rest.startsWith("9")) return null;
    if (rest.length === 8 || rest.length === 9) {
      return `55${ddd}${rest}`;
    }
  }
  return null;
}

export function formatWhatsAppDisplay(e164: string): string {
  const d = e164.replace(/\D/g, "");
  if (d.length === 13 && d.startsWith("55")) {
    const ddd = d.slice(2, 4);
    const num = d.slice(4);
    if (num.length === 9) {
      return `(${ddd}) ${num.slice(0, 5)}-${num.slice(5)}`;
    }
    if (num.length === 8) {
      return `(${ddd}) ${num.slice(0, 4)}-${num.slice(4)}`;
    }
  }
  return e164;
}

/** Evita formula injection ao gravar no Google Sheets. */
export function sanitizeSheetCell(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^[=+\-@]/.test(trimmed)) {
    return `'${trimmed}`;
  }
  return trimmed;
}

export function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return value.slice(0, max);
}

export function validateLeadClient(fields: LeadFormFields): LeadFieldErrors {
  const errors: LeadFieldErrors = {};
  if (!fields.name.trim()) errors.name = FIELD_ERRORS.name;
  if (!normalizeBrazilianWhatsApp(fields.whatsapp)) errors.whatsapp = FIELD_ERRORS.whatsapp;
  if (!fields.profile) errors.profile = FIELD_ERRORS.profile;
  if (!fields.interest) errors.interest = FIELD_ERRORS.interest;
  if (!fields.moment) errors.moment = FIELD_ERRORS.moment;
  if (!fields.consent) errors.consent = FIELD_ERRORS.consent;
  return errors;
}

export type ValidatedLead = {
  name: string;
  whatsapp: string;
  profile: LeadProfile;
  interest: LeadInterest;
  moment: LeadMoment;
  pageUrl: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

export type ValidateLeadServerResult =
  | { ok: true; data: ValidatedLead }
  | { ok: false; error: string; fieldErrors?: LeadFieldErrors; spam?: boolean };

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function validateLeadServer(payload: unknown): ValidateLeadServerResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "Não foi possível enviar. Verifique os campos e tente novamente." };
  }

  const body = payload as LeadSubmitPayload;

  // Honeypot
  if (asString(body.website).trim()) {
    return { ok: false, error: "Não foi possível enviar. Tente novamente.", spam: true };
  }

  const openedAt = typeof body.formOpenedAt === "number" ? body.formOpenedAt : 0;
  const elapsed = Date.now() - openedAt;
  if (!openedAt || elapsed < MIN_FORM_MS || elapsed > 1000 * 60 * 60 * 6) {
    return { ok: false, error: "Aguarde um instante e envie novamente.", spam: true };
  }

  const fieldErrors: LeadFieldErrors = {};
  const name = truncate(asString(body.name).trim(), MAX_NAME_LENGTH);
  if (!name) fieldErrors.name = FIELD_ERRORS.name;

  const whatsapp = normalizeBrazilianWhatsApp(asString(body.whatsapp));
  if (!whatsapp) fieldErrors.whatsapp = FIELD_ERRORS.whatsapp;

  if (!isLeadProfile(body.profile)) fieldErrors.profile = FIELD_ERRORS.profile;
  if (!isLeadInterest(body.interest)) fieldErrors.interest = FIELD_ERRORS.interest;
  if (!isLeadMoment(body.moment)) fieldErrors.moment = FIELD_ERRORS.moment;
  if (body.consent !== true) fieldErrors.consent = FIELD_ERRORS.consent;

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: "Verifique os campos destacados e tente novamente.",
      fieldErrors,
    };
  }

  return {
    ok: true,
    data: {
      name,
      whatsapp: whatsapp!,
      profile: body.profile as LeadProfile,
      interest: body.interest as LeadInterest,
      moment: body.moment as LeadMoment,
      pageUrl: truncate(asString(body.pageUrl).trim(), MAX_ORIGIN_LENGTH),
      referrer: truncate(asString(body.referrer).trim(), MAX_ORIGIN_LENGTH),
      utmSource: truncate(asString(body.utmSource).trim(), 120),
      utmMedium: truncate(asString(body.utmMedium).trim(), 120),
      utmCampaign: truncate(asString(body.utmCampaign).trim(), 120),
    },
  };
}
