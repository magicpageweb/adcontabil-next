/**
 * Google Analytics 4 — um único Measurement ID.
 * Não usar GT-5N5NVKLB em paralelo (evita duplicidade de tag).
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-R6N0LEW2LD";

export function isGaEnabled() {
  return /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);
}
