import type { BlogPost } from "@/lib/blog";
import {
  BRAND,
  BRAND_LEGAL,
  callout,
  h2,
  link,
  p,
  ressalvaLegislacao,
  ul,
} from "./_helpers";

export const PLANEJAMENTO_DE_FIM_DE_ANO_O_QUE_REVISAR_POST: BlogPost = {
  slug: "planejamento-de-fim-de-ano-o-que-revisar",
  title: "Planejamento de fim de ano: o que revisar antes de fevereiro",
  seoTitle: "Planejamento de fim de ano para empresas",
  seoDescription:
    "Saiba o que revisar no fim do ano: regime, pró-labore, documentos e decisões que impactam o ano seguinte.",
  excerpt:
    "Fim de ano é o momento natural para revisar regime, pró-labore, documentos e investimentos maiores — com impacto direto no ano seguinte.",
  keywords: [
    "planejamento tributário fim de ano",
    "revisão regime tributário",
    "pró-labore",
    "fechamento contábil",
    "planejamento empresarial",
  ],
  tags: ["fim de ano", "planejamento", "revisão", "pró-labore"],
  summaryBullets: [
    "Revise se o regime ainda cabe no faturamento projetado.",
    "Ajuste pró-labore e distribuição antes da virada, com simulação.",
    "Organize documentos do ano para fechamento e IR.",
    "Planeje despesas maiores ainda em dezembro.",
  ],
  category: "gestao-contabil",
  publishedAt: "2026-11-14",
  readingMinutes: 7,
  featured: false,
  coverImage: "/blog/planejamento-de-fim-de-ano-o-que-revisar.webp",
  coverAlt: "Mesa com notas, caneta e café em clima de fechamento de ano",
  relatedSlugs: [
    "simples-nacional-faixas-de-faturamento-e-imposto",
    "declaracao-de-imposto-de-renda-quem-e-obrigado",
    "planejamento-tributario-para-profissionais-da-saude",
    "mei-simples-nacional-ou-outro-regime-qual-escolher",
  ],
  faq: [
    {
      q: "Posso mudar de regime a qualquer momento?",
      a: "Em geral, a alteração segue janelas específicas do calendário. Confirme prazos vigentes com a contabilidade.",
    },
    {
      q: "Por que organizar documentos ainda em dezembro?",
      a: "Facilita o fechamento contábil e a declaração de IR que vem nos meses seguintes.",
    },
  ],
  content: [
    p(
      "O fim de ano é o momento mais natural para revisar decisões que, no dia a dia, ficam sempre para depois — e é também quando pequenos ajustes rendem mais no ano seguinte.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), esse checklist costuma caminhar com o ",
      link(
        "/blog/planejamento-tributario-para-profissionais-da-saude",
        "planejamento tributário",
      ),
      ".",
    ),
    ressalvaLegislacao(),

    h2("Revisar o regime tributário"),
    p(
      "Checar se o regime atual (Simples, Presumido ou Real) ainda é o mais adequado para o faturamento projetado do próximo ano é uma das decisões de maior impacto — e normalmente só pode ser alterada em janelas específicas. Veja também ",
      link(
        "/blog/simples-nacional-faixas-de-faturamento-e-imposto",
        "faixas do Simples",
      ),
      " e ",
      link(
        "/blog/mei-simples-nacional-ou-outro-regime-qual-escolher",
        "como escolher o regime",
      ),
      ".",
    ),

    h2("Revisar pró-labore e distribuição de lucros"),
    p(
      "Avaliar se o valor retirado mensalmente ainda condiz com o momento da empresa, e simular o impacto de eventuais ajustes antes que o ano novo comece, evita decisões apressadas em janeiro.",
    ),

    h2("Fazer um balanço informal do ano"),
    ul(
      "Quais meses foram mais fortes.",
      "Onde os custos mais pesaram.",
      "Quais metas foram atingidas.",
    ),
    p(
      "Esses dados embasam o ano seguinte com evidência, não só com percepção.",
    ),

    h2("Organizar a documentação"),
    p(
      "Reunir notas, comprovantes e documentos do ano antes da virada facilita o fechamento contábil e a ",
      link(
        "/blog/declaracao-de-imposto-de-renda-quem-e-obrigado",
        "declaração de Imposto de Renda",
      ),
      ".",
    ),
    callout(
      "dica",
      "Se há planos de equipamento, contratação ou expansão, planeje o caixa ainda em dezembro — mesmo que a execução seja em janeiro.",
    ),

    h2("Próximo passo"),
    p(
      "Quer revisar 2026/2027 com a ",
      BRAND,
      "? Conheça os ",
      link("/servicos", "serviços"),
      " ou solicite uma análise. Um checklist curto agora evita pressa em fevereiro.",
    ),
  ],
};
