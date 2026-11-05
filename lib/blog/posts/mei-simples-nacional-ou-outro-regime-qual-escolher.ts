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

export const MEI_SIMPLES_NACIONAL_OU_OUTRO_REGIME_QUAL_ESCOLHER_POST: BlogPost =
  {
    slug: "mei-simples-nacional-ou-outro-regime-qual-escolher",
    title: "MEI, Simples Nacional ou outro regime: como escolher",
    seoTitle: "MEI, Simples ou outro regime: como escolher",
    seoDescription:
      "Compare MEI, Simples e outros regimes e veja quais critérios usar antes de formalizar o negócio.",
    excerpt:
      "Ao formalizar, a escolha entre MEI, Simples, Lucro Presumido ou Real depende de faturamento, atividade, custos e estrutura. Veja critérios para decidir com orientação.",
    keywords: [
      "MEI ou Simples Nacional",
      "formalizar empresa",
      "Lucro Presumido",
      "enquadramento tributário",
      "escolher regime tributário",
    ],
    tags: ["MEI", "Simples", "formalização", "regime"],
    summaryBullets: [
      "Não existe “melhor regime” genérico.",
      "MEI tem teto, limite de empregados e lista de atividades.",
      "Simples unifica tributos, mas as faixas mudam o imposto efetivo.",
      "Presumido e Real pedem simulação caso a caso.",
    ],
    category: "abertura-de-empresa",
    publishedAt: "2026-11-11",
    readingMinutes: 9,
    featured: false,
    coverImage:
      "/blog/mei-simples-nacional-ou-outro-regime-qual-escolher.webp",
    coverAlt: "Composição visual de caminhos e decisões de formalização empresarial",
    relatedSlugs: [
      "nova-lei-do-mei-lc-238-2026-o-que-muda",
      "hora-de-migrar-de-mei-para-microempresa",
      "simples-nacional-faixas-de-faturamento-e-imposto",
      "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
    ],
    faq: [
      {
        q: "Profissionais da saúde podem ser MEI?",
        a: "A maioria das profissões regulamentadas da saúde continua fora da lista do MEI, independentemente do novo teto. Confirme a atividade permitida antes de optar.",
      },
      {
        q: "O teto do MEI mudou?",
        a: "A LC 238/2026 prevê novos tetos a partir de 2027 e 2028. Confirme vigência e regulamentação antes de decidir.",
      },
    ],
    content: [
      p(
        "Uma das primeiras decisões ao formalizar um negócio é escolher o enquadramento certo — e essa escolha impacta quanto imposto se paga e quais obrigações se assume.",
      ),
      p(
        "Na ",
        BRAND_LEGAL,
        " (",
        BRAND,
        "), essa análise entra no fluxo de ",
        link("/solucoes/abertura-cnpj", "abertura de CNPJ"),
        " e se conecta a ",
        link(
          "/blog/pf-ou-pj-qual-compensa-mais-na-area-da-saude",
          "PF ou PJ na área da saúde",
        ),
        ".",
      ),
      ressalvaLegislacao(),

      h2("MEI"),
      p(
        "Pensado para quem fatura até o teto do regime. Com a Lei Complementar nº 238/2026, o teto previsto sobe de R$ 81 mil por ano para R$ 110 mil em 2027 e R$ 140 mil em 2028, com possibilidade de até dois empregados (antes, um), desde que a atividade esteja na lista permitida. É o regime mais simples de manter, mas com limitações claras.",
      ),
      callout(
        "importante",
        "Confirme tetos, contratação e lista de atividades na regra vigente. Detalhes da LC 238/2026 estão em ",
        link(
          "/blog/nova-lei-do-mei-lc-238-2026-o-que-muda",
          "nova lei do MEI: o que muda na prática",
        ),
        ".",
      ),

      h2("Simples Nacional"),
      p(
        "Para negócios que já faturam acima do teto do MEI ou têm atividade fora da lista permitida. Unifica vários tributos em uma guia, com alíquota que varia por faixa de faturamento. Entenda a lógica em ",
        link(
          "/blog/simples-nacional-faixas-de-faturamento-e-imposto",
          "faixas de faturamento e imposto",
        ),
        ".",
      ),

      h2("Lucro Presumido e Lucro Real"),
      p(
        "Fazem mais sentido para negócios de porte maior, ou quando a margem de lucro real está muito diferente do que o regime presume. A escolha entre os dois depende de simulação específica, caso a caso.",
      ),

      h2("Como decidir"),
      ul(
        "Faturamento atual e projetado.",
        "Atividade exercida (incluindo restrições do MEI).",
        "Estrutura de custos, sócios e funcionários.",
        "Necessidade de emitir notas e operar fora do município/estado.",
      ),
      p(
        "Não existe “melhor regime” de forma genérica. Se o MEI já ficou apertado, veja ",
        link(
          "/blog/hora-de-migrar-de-mei-para-microempresa",
          "sinais de migração para microempresa",
        ),
        ".",
      ),

      h2("Próximo passo"),
      p(
        "Solicite uma análise de enquadramento com a ",
        BRAND,
        " ou conheça os ",
        link("/servicos", "serviços"),
        ". A decisão certa é a que cabe na sua operação — sem promessa genérica de economia.",
      ),
    ],
  };
