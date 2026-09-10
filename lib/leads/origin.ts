import type { LeadOrigin } from "@/lib/leads/types";

/**
 * Captura origem no momento do envio (URL atual + referrer + UTMs da URL).
 * Não usa sessionStorage — evita dependência de storage bloqueado.
 */
export function captureLeadOrigin(): LeadOrigin {
  if (typeof window === "undefined") {
    return {
      pageUrl: "",
      referrer: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    pageUrl: window.location.href.slice(0, 500),
    referrer: (document.referrer || "").slice(0, 500),
    utmSource: (params.get("utm_source") || "").slice(0, 120),
    utmMedium: (params.get("utm_medium") || "").slice(0, 120),
    utmCampaign: (params.get("utm_campaign") || "").slice(0, 120),
  };
}
