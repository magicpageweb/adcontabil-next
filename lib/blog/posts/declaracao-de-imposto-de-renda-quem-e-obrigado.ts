// Revisado por Lidiane Assis Duarte (CRC/RS RS094939/O-4) em 2026-11-05
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

export const DECLARACAO_DE_IMPOSTO_DE_RENDA_QUEM_E_OBRIGADO_POST: BlogPost = {
  slug: "declaracao-de-imposto-de-renda-quem-e-obrigado",
  title: "Declaração de Imposto de Renda: quem é obrigado e o que observar",
  seoTitle: "Declaração de IR: quem é obrigado",
  seoDescription:
    "Veja quem costuma precisar declarar o IR, erros frequentes e o que organizar ao longo do ano com orientação contábil.",
  excerpt:
    "Quem precisa declarar o IR muda todo ano. Veja critérios gerais, erros frequentes, atenção a pró-labore e Carnê-Leão, e o que organizar com antecedência.",
  keywords: [
    "declaração Imposto de Renda",
    "Carnê-Leão",
    "pró-labore",
    "malha fina",
    "obrigatoriedade IRPF",
  ],
  tags: ["IRPF", "declaração", "tributação", "pró-labore"],
  summaryBullets: [
    "Limites e prazos mudam a cada ano-calendário.",
    "Omitir rendimentos e divergências de bens geram notificação.",
    "Pró-labore e Carnê-Leão pedem controle mensal.",
    "Organize informes e comprovantes ao longo do ano.",
  ],
  category: "tributacao",
  publishedAt: "2026-11-05",
  readingMinutes: 8,
  featured: false,
  coverImage: "/blog/declaracao-de-imposto-de-renda-quem-e-obrigado.webp",
  coverAlt: "Documentos, envelope e calculadora em composição clean de declaração",
  relatedSlugs: [
    "como-declarar-investimentos-no-imposto-de-renda",
    "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
    "planejamento-de-fim-de-ano-o-que-revisar",
  ],
  faq: [
    {
      q: "Qual o valor exato de obrigatoriedade deste ano?",
      a: "Não publicamos número fixo aqui porque muda todo ano. Confirme o limite vigente com a Receita ou com a contabilidade.",
    },
    {
      q: "Sócio de empresa sempre declara?",
      a: "Depende dos rendimentos, bens e demais critérios do ano. Pró-labore e distribuição entram na análise.",
    },
  ],
  content: [
    p(
      "Todo ano, parte das dúvidas mais frequentes de clientes de contabilidade giram em torno de quem precisa declarar o Imposto de Renda e o que muda de um ano para o outro.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), a orientação começa cedo: organizar documentos ao longo do ano reduz pressa e risco na entrega. Este artigo cobre obrigatoriedade e organização geral — não o detalhe de aplicações financeiras (isso está em ",
      link(
        "/blog/como-declarar-investimentos-no-imposto-de-renda",
        "como declarar investimentos no IR",
      ),
      "). Não substitui análise individual.",
    ),
    ressalvaLegislacao(),

    h2("Quem costuma ser obrigado a declarar"),
    p(
      "De forma geral, entram na obrigatoriedade quem recebeu rendimentos tributáveis acima de determinado limite anual, quem teve movimentação significativa em bens, quem realizou operações em bolsa, ou quem se tornou residente fiscal no Brasil durante o ano. Os valores exatos desses limites mudam a cada ano-calendário.",
    ),
    callout(
      "importante",
      "Não use um valor de anos anteriores como regra atual. Confirme limites e prazos vigentes antes de decidir.",
    ),

    h2("Erros que mais geram problema"),
    ul(
      "Omitir rendimentos — inclusive de fontes diferentes do emprego principal.",
      "Declarar bens com valor incompatível com a declaração anterior sem justificativa.",
      "Esquecer dependentes ou alterações de estado civil.",
    ),

    h2("Pró-labore e Carnê-Leão pedem atenção especial"),
    p(
      "Quem recebe pró-labore ou apura rendimento como autônomo via Carnê-Leão precisa de controle organizado ao longo do ano. Na declaração anual, divergências entre o que foi recolhido mês a mês e o que consta nos informes são um dos principais motivos de malha fina. Relacione com ",
      link(
        "/blog/pf-ou-pj-qual-compensa-mais-na-area-da-saude",
        "PF ou PJ na saúde",
      ),
      ".",
    ),

    h2("O que fazer com antecedência"),
    ul(
      "Reunir informes de rendimento.",
      "Guardar comprovantes de despesas dedutíveis (saúde, educação, previdência), quando cabíveis.",
      "Organizar documentos de bens adquiridos ou vendidos no ano.",
    ),
    p(
      "Quem tem aplicações deve complementar com ",
      link(
        "/blog/como-declarar-investimentos-no-imposto-de-renda",
        "como declarar investimentos no IR",
      ),
      ". O ",
      link(
        "/blog/planejamento-de-fim-de-ano-o-que-revisar",
        "planejamento de fim de ano",
      ),
      " ajuda a reunir essa papelada antes da temporada.",
    ),

    h2("Próximo passo"),
    p(
      "Limites de obrigatoriedade e prazos de entrega mudam todo ano. Peça orientação para IR com a ",
      BRAND,
      " pelos ",
      link("/servicos", "serviços"),
      " — sem promessa de restituição ou de “passar limpo”: o foco é declaração correta e organizada.",
    ),
  ],
};
