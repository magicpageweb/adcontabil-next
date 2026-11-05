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

export const NOVA_LEI_DO_MEI_LC_238_2026_O_QUE_MUDA_POST: BlogPost = {
  slug: "nova-lei-do-mei-lc-238-2026-o-que-muda",
  title: "Nova lei do MEI (LC 238/2026): o que muda na prática",
  seoTitle: "Nova lei do MEI LC 238/2026: o que muda",
  seoDescription:
    "Entenda o que a LC 238/2026 altera no MEI: teto de faturamento, contratação e pontos de atenção antes de decidir.",
  excerpt:
    "A LC 238/2026 amplia o teto do MEI, permite até dois empregados e prevê remissão de débitos. Veja o que muda e para quem a novidade realmente vale.",
  keywords: [
    "nova lei do MEI 2026",
    "LC 238/2026",
    "teto MEI",
    "MEI funcionários",
    "perdão de dívidas MEI",
  ],
  tags: ["MEI", "LC 238", "legislação", "formalização"],
  summaryBullets: [
    "Novos tetos previstos: R$ 110 mil (2027) e R$ 140 mil (2028).",
    "Contratação de até dois empregados, com condições.",
    "Remissão de débitos depende de regulamentação e regularidade.",
    "Profissões regulamentadas da saúde em geral seguem fora do MEI.",
  ],
  category: "abertura-de-empresa",
  publishedAt: "2026-11-12",
  readingMinutes: 8,
  featured: false,
  coverImage: "/blog/nova-lei-do-mei-lc-238-2026-o-que-muda.webp",
  coverAlt: "Mesa clean com caderno e documentos abstratos sob luz suave",
  relatedSlugs: [
    "mei-simples-nacional-ou-outro-regime-qual-escolher",
    "hora-de-migrar-de-mei-para-microempresa",
    "simples-nacional-para-profissionais-da-saude",
  ],
  faq: [
    {
      q: "Médicos e dentistas passam a poder ser MEI com a nova lei?",
      a: "Em regra, não. A restrição de atividades permitidas para o MEI não é resolvida pelo novo teto. Confirme a lista vigente.",
    },
    {
      q: "O perdão de dívidas já está automático?",
      a: "Não trate como automático. A lei prevê remissão, mas prazos e procedimentos podem depender de regulamentação complementar.",
    },
  ],
  content: [
    p(
      "Em 21 de outubro de 2026 foi sancionada a Lei Complementar nº 238/2026, que amplia o limite de faturamento do MEI, permite a contratação de mais funcionários e prevê perdão de dívidas com a União. A lei tem origem no Projeto de Lei Complementar 186/2026, aprovado pelo Senado em 15/10/2026.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), a leitura é clara: a novidade interessa — mas não a todos. Vale entender o que muda antes de decidir.",
    ),
    ressalvaLegislacao(),

    h2("Novo teto de faturamento"),
    ul(
      "Referência anterior: R$ 81 mil por ano.",
      "A partir de 2027: R$ 110 mil por ano.",
      "A partir de 2028: R$ 140 mil por ano.",
    ),
    callout(
      "importante",
      "Confirme a vigência desses valores e qualquer ajuste regulamentar antes de usar como base de decisão.",
    ),

    h2("Contratação de funcionários"),
    p(
      "O MEI passa a poder contratar até dois empregados (antes o limite era um), desde que cada um receba pelo menos um salário mínimo ou o piso salarial da categoria. Revise o impacto na folha antes de contratar o segundo funcionário.",
    ),

    h2("Perdão de dívidas"),
    p(
      "A lei prevê remissão de débitos com a União constituídos até 13/10/2026, incluindo juros e multas ligados às contribuições do MEI. Para manter o benefício, é preciso cumprir condições de regularidade nos pagamentos posteriores e exigências formais de adesão — detalhes de prazo e procedimento ainda podem ser regulamentados.",
    ),

    h2("Outra mudança relevante"),
    p(
      "Pequenos negócios terão participação facilitada em licitações públicas, com regras específicas para contratações de menor valor. Acompanhe as normas complementares.",
    ),

    h2("Quem pode (e quem não pode) aproveitar"),
    p(
      "A maioria das profissões regulamentadas da área da saúde — médicos, dentistas, entre outras — continua fora da lista de atividades permitidas para o MEI, independentemente do novo teto. A novidade interessa mais a quem tem negócio paralelo informal ou mal enquadrado, ou a profissionais de outras áreas que planejam formalizar ou ampliar a operação.",
    ),
    p(
      "Para comparar caminhos, leia ",
      link(
        "/blog/mei-simples-nacional-ou-outro-regime-qual-escolher",
        "MEI, Simples ou outro regime",
      ),
      ". Se o teto já aperta, veja ",
      link(
        "/blog/hora-de-migrar-de-mei-para-microempresa",
        "quando migrar para microempresa",
      ),
      ".",
    ),

    h2("O que fazer agora"),
    ul(
      "Simular o novo teto para 2027 e 2028, se o faturamento estiver perto do limite atual.",
      "Acompanhar a regulamentação do perdão de dívidas para não perder prazo de adesão.",
      "Revisar o impacto na folha antes de contratar o segundo funcionário como MEI.",
    ),

    h2("Próximo passo"),
    p(
      "Fonte de referência deste texto: Lei Complementar nº 238/2026 (origem PLP 186/2026). Solicite orientação sobre MEI com a ",
      BRAND,
      " pelos ",
      link("/servicos", "serviços"),
      " — especialmente se a atividade estiver na área da saúde ou perto do teto.",
    ),
  ],
};
