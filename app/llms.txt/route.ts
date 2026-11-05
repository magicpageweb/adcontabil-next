import {
  BRAND,
  BRAND_LEGAL,
  CITY,
  CRC,
  RESPONSIBLE,
  SITE_URL,
  SPECIALTIES,
  SOLUTIONS,
} from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${BRAND}`,
    "",
    `> ${BRAND_LEGAL} — contabilidade consultiva com especialização em profissionais da saúde e atendimento a empresas, MEIs e profissionais liberais. Sede em ${CITY}; atendimento digital em todo o Brasil.`,
    "",
    `Responsável técnica: ${RESPONSIBLE} (${CRC}).`,
    "",
    "## Páginas principais",
    "",
    `- [Home](${SITE_URL}/): Visão geral dos serviços e especialidades.`,
    `- [Serviços](${SITE_URL}/servicos): Escopo de atendimento para empresas e profissionais.`,
    `- [Quem somos](${SITE_URL}/quem-somos): Sobre o escritório e a responsável técnica.`,
    `- [Contato](${SITE_URL}/contato): WhatsApp, telefone, e-mail e localização.`,
    `- [Blog](${SITE_URL}/blog): Artigos sobre tributação, rotina fiscal e gestão.`,
    `- [Médicos em Santa Cruz do Sul](${SITE_URL}/contabilidade-para-medicos-em-santa-cruz-do-sul): Landing local para médicos.`,
    "",
    "## Especialidades",
    "",
    ...SPECIALTIES.map(
      (s) =>
        `- [${s.title}](${SITE_URL}/contabilidade-para/${s.slug}): ${s.short}.`,
    ),
    "",
    "## Soluções",
    "",
    ...SOLUTIONS.map((s) => {
      const blurb = s.metaDescription.slice(0, 140);
      return `- [${s.title}](${SITE_URL}/solucoes/${s.slug}): ${blurb}`;
    }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
