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

export const SIMPLES_NACIONAL_FAIXAS_DE_FATURAMENTO_E_IMPOSTO_POST: BlogPost = {
  slug: "simples-nacional-faixas-de-faturamento-e-imposto",
  title: "Simples Nacional: como as faixas de faturamento afetam o imposto",
  seoTitle: "Faixas do Simples Nacional e imposto",
  seoDescription:
    "Entenda como as faixas do Simples Nacional influenciam o imposto e quando vale revisar o enquadramento.",
  excerpt:
    "No Simples, o imposto varia conforme a faixa de faturamento dos últimos 12 meses. Entenda alíquota nominal, parcela a deduzir e quando revisar o regime.",
  keywords: [
    "faixas Simples Nacional",
    "alíquota efetiva Simples",
    "faturamento 12 meses",
    "parcela a deduzir",
    "revisão enquadramento",
  ],
  tags: ["Simples Nacional", "faixas", "tributação"],
  summaryBullets: [
    "A alíquota nominal da faixa não é o imposto efetivo.",
    "A fórmula com parcela a deduzir suaviza o salto entre faixas.",
    "Acompanhe o faturamento acumulado de 12 meses o ano todo.",
    "Perto do teto ou com margem diferente, outro regime pode caber na análise.",
  ],
  category: "simples-nacional",
  publishedAt: "2026-11-09",
  readingMinutes: 8,
  featured: false,
  coverImage: "/blog/simples-nacional-faixas-de-faturamento-e-imposto.webp",
  coverAlt: "Composição abstrata de níveis e crescimento financeiro sem números legíveis",
  relatedSlugs: [
    "simples-nacional-para-profissionais-da-saude",
    "mei-simples-nacional-ou-outro-regime-qual-escolher",
    "como-funciona-o-fator-r-para-profissionais-da-saude",
    "planejamento-tributario-para-profissionais-da-saude",
  ],
  faq: [
    {
      q: "Ao subir de faixa, todo o faturamento passa a ser tributado pela alíquota nova?",
      a: "Não é assim que a lógica funciona. A fórmula com parcela a deduzir faz o imposto efetivo subir de forma gradual.",
    },
    {
      q: "Este artigo traz a tabela atual de alíquotas?",
      a: "Não. Tabelas mudam. Confirme os percentuais vigentes com a contabilidade antes de usar qualquer número.",
    },
  ],
  content: [
    p(
      "Dentro do Simples Nacional, o imposto não é um percentual fixo — ele varia conforme a faixa de faturamento acumulado nos últimos 12 meses. Entender essa lógica evita surpresas quando o faturamento cresce.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), essa conversa costuma andar junto com o ",
      link(
        "/blog/simples-nacional-para-profissionais-da-saude",
        "Simples para profissionais da saúde",
      ),
      " e o ",
      link(
        "/blog/como-funciona-o-fator-r-para-profissionais-da-saude",
        "Fator R",
      ),
      ".",
    ),
    ressalvaLegislacao(),

    h2("Como funciona o sistema de faixas"),
    p(
      "O Simples organiza as empresas em faixas de faturamento, e cada faixa tem uma alíquota nominal associada. Mas o cálculo não é simplesmente “aplicar a alíquota da faixa sobre o faturamento do mês”: existe uma fórmula com uma parcela a deduzir, o que faz o imposto efetivo ser menor do que a alíquota nominal sugere à primeira vista.",
    ),
    callout(
      "importante",
      "Este artigo não cita percentuais exatos de cada faixa porque a tabela pode ser atualizada. Confirme os valores vigentes com a contabilidade.",
    ),

    h2("Por que isso confunde tanto"),
    p(
      "É comum achar que, ao entrar numa faixa mais alta, todo o faturamento passa a ser tributado pela alíquota nova — o que não é verdade. A alíquota efetiva sobe de forma gradual, não “de uma vez”, por conta da parcela a deduzir.",
    ),

    h2("O que acompanhar de perto"),
    ul(
      "Faturamento acumulado dos últimos 12 meses — o ano todo, não só no fechamento.",
      "Saltos de receita (contrato grande, sazonalidade) que podem mudar a faixa no meio do ano.",
      "Impacto já no mês seguinte após a migração de faixa.",
    ),

    h2("Quando o Simples deixa de ser a melhor opção"),
    p(
      "Em alguns casos, especialmente perto do teto do regime ou quando a margem de lucro real muda, outro regime (Lucro Presumido ou Real) pode se tornar mais adequado. Essa é uma simulação que vale fazer pelo menos uma vez ao ano — veja também ",
      link(
        "/blog/mei-simples-nacional-ou-outro-regime-qual-escolher",
        "MEI, Simples ou outro regime",
      ),
      " e o ",
      link(
        "/blog/planejamento-tributario-para-profissionais-da-saude",
        "planejamento tributário",
      ),
      ".",
    ),

    h2("Próximo passo"),
    p(
      "Quer revisar faixas e enquadramento com a ",
      BRAND,
      "? Solicite uma análise ou conheça os ",
      link("/servicos", "serviços"),
      ". Sem promessa de economia: o objetivo é clareza com base na sua operação.",
    ),
  ],
};
