// REVISAR-LEGAL: confirmar com a contadora antes de publicar
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

export const COMO_DECLARAR_INVESTIMENTOS_NO_IMPOSTO_DE_RENDA_POST: BlogPost = {
  slug: "como-declarar-investimentos-no-imposto-de-renda",
  title: "Como declarar investimentos no Imposto de Renda",
  seoTitle: "Como declarar investimentos no IR",
  seoDescription:
    "Saiba como organizar informes, saldos e rendimentos na declaração de investimentos — com ressalvas importantes.",
  excerpt:
    "Informes, saldos em bens e direitos, rendimentos tributados na fonte e apuração própria: organize a declaração de investimentos com cuidado e orientação.",
  keywords: [
    "declarar investimentos no IR",
    "informe de rendimentos",
    "bens e direitos",
    "malha fina investimentos",
    "declaração de aplicações",
  ],
  tags: ["IRPF", "investimentos", "declaração", "bens e direitos"],
  summaryBullets: [
    "Reúna informes de todas as instituições antes de começar.",
    "Diferencie rendimento retido na fonte do que exige apuração própria.",
    "Declare o saldo em bens e direitos, não só o rendimento.",
    "Carteiras complexas pedem ajuda profissional.",
  ],
  category: "tributacao",
  publishedAt: "2026-11-05",
  readingMinutes: 8,
  featured: false,
  coverImage: "/blog/como-declarar-investimentos-no-imposto-de-renda.webp",
  coverAlt: "Laptop e extrato genérico em composição de conferência de declaração",
  relatedSlugs: [
    "declaracao-de-imposto-de-renda-quem-e-obrigado",
    "investimentos-basicos-por-onde-comecar-com-cnpj",
  ],
  faq: [
    {
      q: "Investimento pequeno precisa ser declarado?",
      a: "Em muitos casos, sim. “Valor pequeno” não é critério seguro para omitir. Confirme as regras do ano-calendário.",
    },
    {
      q: "Este artigo substitui a contabilidade?",
      a: "Não. Cada carteira tem particularidades. Use como organização geral e busque análise individual.",
    },
  ],
  content: [
    p(
      "Declarar investimentos é uma das partes da declaração de IR que mais gera dúvida — e também uma das que mais aparece em notificação da Receita quando feita incorretamente.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), o trabalho começa pela organização dos informes e pela conferência de saldos. Complemente com ",
      link(
        "/blog/declaracao-de-imposto-de-renda-quem-e-obrigado",
        "quem é obrigado a declarar",
      ),
      ".",
    ),
    ressalvaLegislacao(),
    callout(
      "importante",
      "Este artigo não substitui orientação contábil individual. Não é recomendação de investimento.",
    ),

    h2("Reunir os informes de cada instituição"),
    p(
      "Cada banco, corretora ou instituição financeira onde há investimento costuma emitir um informe de rendimentos anual. Reunir todos antes de começar evita esquecer algum ativo.",
    ),

    h2("Diferenciar rendimento tributado na fonte do que precisa ser apurado"),
    p(
      "Alguns investimentos já têm o imposto retido automaticamente; outros (como operações em bolsa) exigem apuração própria, mês a mês, ao longo do ano. Esse controle precisa existir durante o ano, não só na hora de declarar.",
    ),

    h2("Declarar o saldo, não só o rendimento"),
    p(
      "Além de informar o rendimento obtido, é preciso declarar o saldo de cada investimento na ficha de bens e direitos, com o valor de fim de ano. Divergências entre o saldo declarado e o saldo real costumam gerar questionamento.",
    ),

    h2("Erros mais comuns"),
    ul(
      "Esquecer de declarar investimento de valor pequeno.",
      "Declarar o valor errado do saldo.",
      "Confundir o tipo de rendimento (isento, tributado na fonte, sujeito a apuração).",
    ),

    h2("Quando buscar ajuda profissional"),
    p(
      "Carteiras mais diversificadas, com operações em bolsa, fundos imobiliários ou investimentos no exterior, costumam se beneficiar de acompanhamento profissional na declaração. Se o desafio anterior é organizar PJ/PF, leia ",
      link(
        "/blog/investimentos-basicos-por-onde-comecar-com-cnpj",
        "por onde começar quando se tem CNPJ",
      ),
      ".",
    ),

    h2("Próximo passo"),
    p(
      "Peça ajuda na declaração com a ",
      BRAND,
      " pelos ",
      link("/servicos", "serviços"),
      ". Cada carteira tem particularidades — o objetivo é declaração correta, não atalho genérico.",
    ),
  ],
};
