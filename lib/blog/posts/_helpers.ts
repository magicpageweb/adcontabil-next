import type { BlogBlock, BlogCalloutVariant, BlogRichPart } from "@/lib/blog";
import { BRAND, BRAND_LEGAL } from "@/lib/site";

export { BRAND, BRAND_LEGAL };

export function p(...parts: BlogRichPart[]): BlogBlock {
  return { type: "p", parts };
}

export function h2(text: string): BlogBlock {
  return { type: "h2", text };
}

export function h3(text: string): BlogBlock {
  return { type: "h3", text };
}

export function ul(...items: string[]): BlogBlock {
  return { type: "ul", items };
}

export function link(href: string, label: string): BlogRichPart {
  return { type: "link", href, label };
}

export function callout(
  variant: BlogCalloutVariant,
  ...parts: BlogRichPart[]
): BlogBlock {
  return { type: "callout", variant, parts };
}

export function calloutTitled(
  variant: BlogCalloutVariant,
  title: string,
  ...parts: BlogRichPart[]
): BlogBlock {
  return { type: "callout", variant, title, parts };
}

/** Ressalva padrão para artigos com regras que mudam. */
export function ressalvaLegislacao(): BlogBlock {
  return callout(
    "importante",
    "Regras, prazos e valores tributários ou trabalhistas podem mudar. Use este conteúdo como orientação geral e confirme a versão vigente com a contabilidade antes de decidir.",
  );
}
