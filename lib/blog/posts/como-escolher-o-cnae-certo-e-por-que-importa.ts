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

export const COMO_ESCOLHER_O_CNAE_CERTO_E_POR_QUE_IMPORTA_POST: BlogPost = {
  slug: "como-escolher-o-cnae-certo-e-por-que-importa",
  title: "Como escolher o CNAE certo e por que isso importa",
  seoTitle: "Como escolher o CNAE certo",
  metaDescription:
    "CNAE para MEI e empresas em geral: imposto, licenças e notas — visão ampla, não específica da saúde.",
  seoDescription:
    "CNAE para MEI e empresas em geral: imposto, licenças e notas — visão ampla, não específica da saúde.",
  excerpt:
    "O CNAE descreve o que a empresa faz e influencia imposto, licenças, regime e emissão de notas. Veja erros comuns e quando revisar o cadastro.",
  keywords: [
    "como escolher CNAE",
    "CNAE Simples Nacional",
    "CNAE errado",
    "atividade econômica empresa",
    "CNAE principal e secundário",
  ],
  tags: ["CNAE", "abertura", "enquadramento", "formalização"],
  summaryBullets: [
    "CNAE influencia anexo do Simples, licenças e notas.",
    "Evite código “parecido”: descreva a atividade real.",
    "É possível ter CNAE principal e secundários.",
    "Revise o cadastro antes de emitir nota para atividade nova.",
  ],
  category: "abertura-de-empresa",
  publishedAt: "2026-11-05",
  readingMinutes: 7,
  featured: false,
  coverImage: "/blog/como-escolher-o-cnae-certo-e-por-que-importa.webp",
  coverAlt: "Fichário e etiquetas organizadas sugerindo classificação de atividades",
  relatedSlugs: [
    "mei-simples-nacional-ou-outro-regime-qual-escolher",
    "nota-fiscal-eletronica-erros-comuns-que-geram-multa",
    "como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
  ],
  faq: [
    {
      q: "Este artigo substitui o guia de CNAE para saúde?",
      a: "Não. Aqui o foco é amplo (MEI, empresas e liberais). Para especialidades da saúde, use também o guia específico do blog.",
    },
    {
      q: "Posso ter mais de um CNAE?",
      a: "Sim. Muitas empresas precisam de principal e secundários para refletir todas as atividades exercidas.",
    },
  ],
  content: [
    p(
      "O CNAE (Classificação Nacional de Atividades Econômicas) é o código que descreve o que a empresa faz — e, apesar de parecer um detalhe burocrático, influencia diretamente imposto, licenças e até o regime tributário disponível.",
    ),
    p(
      "Este artigo é a visão geral para MEI, empresas e profissionais liberais. Se você é profissional da saúde, veja o ",
      link(
        "/blog/como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
        "guia de CNAE por especialidade na saúde",
      ),
      " — o recorte clínico e sanitário fica naquele texto. Conteúdo da ",
      BRAND_LEGAL,
      " (",
      BRAND,
      ").",
    ),
    ressalvaLegislacao(),

    h2("O que o CNAE determina, na prática"),
    ul(
      "No Simples Nacional, a atividade ajuda a definir o anexo — empresas com faturamento parecido podem ter tributação diferente.",
      "Licenças específicas (vigilância sanitária, bombeiros, meio ambiente) podem depender da atividade cadastrada.",
      "A emissão de nota precisa conversar com o que está registrado no cadastro.",
    ),
    p(
      "Por isso a escolha do CNAE entra na mesma conversa de ",
      link(
        "/blog/mei-simples-nacional-ou-outro-regime-qual-escolher",
        "MEI, Simples ou outro regime",
      ),
      " e de ",
      link("/solucoes/abertura-cnpj", "abertura de CNPJ"),
      ".",
    ),

    h2("O erro mais comum"),
    p(
      "Escolher um CNAE genérico ou “parecido” com a atividade real, em vez de descrever exatamente o que a empresa faz. Isso pode gerar enquadramento tributário incorreto, negativa de licença ou problema na emissão de nota para determinado serviço.",
    ),
    callout(
      "importante",
      "CNAE desalinhado também aumenta retrabalho na ",
      link(
        "/blog/nota-fiscal-eletronica-erros-comuns-que-geram-multa",
        "nota fiscal eletrônica",
      ),
      ".",
    ),

    h2("Mais de um CNAE é permitido"),
    p(
      "Uma empresa pode (e muitas vezes deve) ter mais de um CNAE registrado — o principal e os secundários — quando exerce mais de uma atividade. Isso evita restringir a nota fiscal a uma única linha de atuação.",
    ),

    h2("Quando revisar o CNAE"),
    ul(
      "Quando o negócio passar a exercer atividade nova não prevista no cadastro.",
      "Antes de começar a emitir nota para esse novo serviço — não depois.",
      "Quando houver dúvida se o anexo ou as licenças ainda fazem sentido.",
    ),

    h2("Próximo passo"),
    p(
      "Validar CNAE com a ",
      BRAND,
      " evita retrabalho na formalização e na operação. Conheça os ",
      link("/servicos", "serviços"),
      " ou solicite uma análise antes de alterar o cadastro por conta própria.",
    ),
  ],
};
