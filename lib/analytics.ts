/**
 * Google Analytics 4 — um único Measurement ID.
 * Não usar GT-5N5NVKLB em paralelo (evita duplicidade de tag).
 *
 * Eventos custom (enviar via `sendGAEvent` / `GaClick`):
 * | Evento                 | Quando                         | Marcar como conversão no GA4? |
 * |------------------------|--------------------------------|-------------------------------|
 * | click_whatsapp         | Clique WhatsApp                | Sim (recomendado)             |
 * | click_phone            | Clique telefone                | Sim (recomendado)             |
 * | click_email            | Clique e-mail                  | Opcional                      |
 * | click_maps             | “Ver no Google Maps”           | Opcional                      |
 * | cta_fale_ad_contabil   | CTA “Fale com a AD Contábil”   | Sim (recomendado)             |
 * | cta_solicitar_diagnostico | CTA “Solicitar diagnóstico” | Sim (recomendado)             |
 * | blog_search            | Busca interna do blog          | Não (engajamento)             |
 *
 * Conversões NÃO são marcadas no código — configure em GA4:
 * Admin → Eventos → Marcar como evento principal.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-R6N0LEW2LD";

export const GA_EVENTS = {
  clickWhatsapp: "click_whatsapp",
  clickPhone: "click_phone",
  clickEmail: "click_email",
  clickMaps: "click_maps",
  ctaFaleAdContabil: "cta_fale_ad_contabil",
  ctaSolicitarDiagnostico: "cta_solicitar_diagnostico",
  blogSearch: "blog_search",
} as const;

export type GaEventName = (typeof GA_EVENTS)[keyof typeof GA_EVENTS];

export function isGaEnabled() {
  return /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);
}
