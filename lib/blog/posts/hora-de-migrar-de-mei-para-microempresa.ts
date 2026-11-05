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

export const HORA_DE_MIGRAR_DE_MEI_PARA_MICROEMPRESA_POST: BlogPost = {
  slug: "hora-de-migrar-de-mei-para-microempresa",
  title: "Migrar de MEI para microempresa: sinais de que chegou a hora",
  seoTitle: "Migrar de MEI para microempresa",
  seoDescription:
    "Veja sinais de que o MEI ficou pequeno demais e como planejar a migração para microempresa com segurança.",
  excerpt:
    "Faturamento perto do teto, necessidade de mais equipe ou de estrutura fiscal maior: sinais de que vale simular a saída do MEI antes do desenquadramento automático.",
  keywords: [
    "migrar de MEI para ME",
    "desenquadramento MEI",
    "teto MEI",
    "MEI para microempresa",
    "migração Simples Nacional",
  ],
  tags: ["MEI", "migração", "microempresa", "crescimento"],
  summaryBullets: [
    "Perto do teto de forma consistente, simule a migração.",
    "Equipe além do limite do MEI é sinal estrutural.",
    "Operação interestadual ou clientes mais exigentes pedem outra estrutura.",
    "Migrar planejado evita ajuste nas pressas após desenquadramento.",
  ],
  category: "abertura-de-empresa",
  publishedAt: "2026-11-05",
  readingMinutes: 7,
  featured: false,
  coverImage: "/blog/hora-de-migrar-de-mei-para-microempresa.webp",
  coverAlt: "Composição abstrata de crescimento e níveis empresariais",
  relatedSlugs: [
    "nova-lei-do-mei-lc-238-2026-o-que-muda",
    "mei-simples-nacional-ou-outro-regime-qual-escolher",
    "simples-nacional-faixas-de-faturamento-e-imposto",
  ],
  faq: [
    {
      q: "Preciso esperar estourar o teto para migrar?",
      a: "Não. Migrar de forma voluntária e planejada costuma ser mais seguro do que reagir ao desenquadramento automático.",
    },
    {
      q: "O que muda na apuração de imposto?",
      a: "No Simples como ME, a apuração deixa de ser a guia fixa típica do MEI e passa a considerar atividade e faixa de faturamento.",
    },
  ],
  content: [
    p(
      "Crescer como MEI é bom sinal — mas também é o momento de ficar atento a quando esse enquadramento deixa de ser suficiente.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), a recomendação é simular a migração antes do limite “estourar”. Os tetos citados abaixo consideram a ",
      link(
        "/blog/nova-lei-do-mei-lc-238-2026-o-que-muda",
        "LC 238/2026",
      ),
      " e devem ser confirmados na regra vigente.",
    ),
    ressalvaLegislacao(),

    h2("Sinal 1: faturamento perto do teto"),
    p(
      "Com o novo teto trazido pela Lei Complementar nº 238/2026 (R$ 110 mil em 2027, R$ 140 mil em 2028), o ponto de atenção muda de valor, mas a lógica continua: faturar perto do limite de forma consistente (não só em um mês isolado) é sinal de que vale simular a migração antes do desenquadramento automático.",
    ),

    h2("Sinal 2: necessidade de mais funcionários"),
    p(
      "Mesmo com o novo limite de dois empregados trazido pela mesma lei, negócios que precisam de equipe maior para sustentar a operação já sinalizam que o MEI não acompanha o tamanho real do negócio.",
    ),

    h2("Sinal 3: estrutura fiscal mais robusta"),
    p(
      "Negócios que passam a vender para fora do município ou do estado, ou que atendem clientes (empresas) com mais exigência formal na nota, costumam se beneficiar da migração.",
    ),

    h2("Como funciona a migração"),
    p(
      "Ao ultrapassar o teto ou optar pela mudança voluntariamente, o MEI passa para microempresa dentro do Simples Nacional, com outra forma de apuração de imposto — baseada na atividade e na faixa de faturamento — e outras obrigações acessórias. Veja a lógica das faixas em ",
      link(
        "/blog/simples-nacional-faixas-de-faturamento-e-imposto",
        "faixas do Simples e imposto",
      ),
      ".",
    ),
    callout(
      "dica",
      "Não é preciso esperar o limite estourar. Migrar planejado evita ajuste nas pressas.",
    ),

    h2("Próximo passo"),
    ul(
      "Reunir faturamento dos últimos meses e projeção.",
      "Listar necessidade real de equipe e de emissão de notas.",
      "Simular ME no Simples com a contabilidade.",
    ),
    p(
      "Compare também ",
      link(
        "/blog/mei-simples-nacional-ou-outro-regime-qual-escolher",
        "MEI, Simples ou outro regime",
      ),
      " e fale com a ",
      BRAND,
      " pelos ",
      link("/servicos", "serviços"),
      " para simular a migração com segurança.",
    ),
  ],
};
