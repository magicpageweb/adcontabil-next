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
 * | lead_form_open         | Abertura do formulário de lead | Não (funil)                   |
 * | lead_form_submit       | Envio do formulário de lead    | Sim (recomendado)             |
 * | lead_whatsapp_click    | Abertura do WhatsApp pós-form  | Sim (recomendado)             |
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
  leadFormOpen: "lead_form_open",
  leadFormSubmit: "lead_form_submit",
  leadWhatsappClick: "lead_whatsapp_click",
} as const;

export type GaEventName = (typeof GA_EVENTS)[keyof typeof GA_EVENTS];

export function isGaEnabled() {
  return /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);
}
