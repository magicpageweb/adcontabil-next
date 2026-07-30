import { CRC, RESPONSIBLE } from "@/lib/site";
import { PLANEJAMENTO_TRIBUTARIO_POST } from "@/lib/blog/posts/planejamento-tributario";
import { SIMPLES_NACIONAL_POST } from "@/lib/blog/posts/simples-nacional";

export type BlogCategorySlug =
  | "profissionais-da-saude"
  | "tributacao"
  | "abertura-de-empresa"
  | "simples-nacional"
  | "pf-x-pj"
  | "gestao-contabil"
  | "fonoaudiologia"
  | "psicologia"
  | "odontologia"
  | "medicina"
  | "fisioterapia"
  | "nutricao";

export type BlogRichPart =
  | string
  | { type: "link"; href: string; label: string };

export type BlogBlock =
  | { type: "p"; parts: BlogRichPart[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  category: BlogCategorySlug;
  publishedAt: string;
  readingMinutes: number;
  featured: boolean;
  coverImage: string;
  coverAlt: string;
  relatedSlugs: string[];
  content: BlogBlock[];
};

export const BLOG_CATEGORIES: {
  slug: BlogCategorySlug;
  label: string;
}[] = [
  { slug: "profissionais-da-saude", label: "Profissionais da saúde" },
  { slug: "tributacao", label: "Tributação" },
  { slug: "abertura-de-empresa", label: "Abertura de empresa" },
  { slug: "simples-nacional", label: "Simples Nacional" },
  { slug: "pf-x-pj", label: "PF x PJ" },
  { slug: "gestao-contabil", label: "Gestão contábil" },
  { slug: "fonoaudiologia", label: "Fonoaudiologia" },
  { slug: "psicologia", label: "Psicologia" },
  { slug: "odontologia", label: "Odontologia" },
  { slug: "medicina", label: "Medicina" },
  { slug: "fisioterapia", label: "Fisioterapia" },
  { slug: "nutricao", label: "Nutrição" },
];

export const BLOG_AUTHOR = {
  name: RESPONSIBLE,
  crc: CRC,
  role: "Contadora responsável técnica",
  bio: "Lidiane Assis Duarte lidera a AD Contábil com atuação consultiva voltada a profissionais da saúde. Orientação técnica, clareza tributária e proximidade no atendimento.",
} as const;

function p(...parts: BlogRichPart[]): BlogBlock {
  return { type: "p", parts };
}

function h2(text: string): BlogBlock {
  return { type: "h2", text };
}

function h3(text: string): BlogBlock {
  return { type: "h3", text };
}

function ul(...items: string[]): BlogBlock {
  return { type: "ul", items };
}

function link(href: string, label: string): BlogRichPart {
  return { type: "link", href, label };
}

export const BLOG_POSTS: BlogPost[] = [
  SIMPLES_NACIONAL_POST,
  PLANEJAMENTO_TRIBUTARIO_POST,
  {
    slug: "contabilidade-para-profissionais-da-saude-guia-completo",
    title: "Contabilidade para profissionais da saúde: guia completo para começar certo",
    excerpt:
      "Entenda como estruturar a contabilidade para profissionais da saúde com foco em enquadramento, organização e clareza tributária.",
    category: "profissionais-da-saude",
    publishedAt: "2026-07-28",
    readingMinutes: 9,
    featured: true,
    coverImage: "/blog/contabilidade-para-profissionais-da-saude-guia-completo.webp",
    coverAlt:
      "Consultório moderno com documentos e elementos de saúde em composição editorial",
    relatedSlugs: [
      "planejamento-tributario-para-profissionais-da-saude",
      "como-funciona-o-fator-r-para-profissionais-da-saude",
      "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
      "como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
    ],
    content: [
      p(
        "A contabilidade para profissionais da saúde não é apenas obrigação acessória. Ela organiza a operação, orienta decisões e ajuda a avaliar o enquadramento tributário mais coerente com o modelo de atendimento — seja consultório, clínica ou atuação autônoma.",
      ),
      p(
        "Médicos, dentistas, psicólogos, fisioterapeutas, nutricionistas e fonoaudiólogos compartilham um ponto em comum: a atividade exige atenção técnica na escolha de CNAE, regime e estrutura societária. Uma orientação genérica, fora do nicho, costuma deixar lacunas.",
      ),
      h2("Por que a especialização faz diferença"),
      p(
        "Cada especialidade tem particularidades de faturamento, custos e forma de atendimento. Um plantonista pejotizado não opera como uma clínica odontológica com insumos e próteses; um psicólogo autônomo enfrenta desafios distintos de um estúdio de fisioterapia com mensalidades.",
      ),
      p(
        "Por isso, a AD Contábil estrutura a contabilidade a partir do perfil real do profissional. Avaliamos a operação antes de indicar caminhos — sem atalhos e sem promessas genéricas.",
      ),
      h2("Principais desafios no dia a dia"),
      ul(
        "Definir se a atuação como pessoa física ou jurídica é a mais adequada ao momento.",
        "Escolher CNAE e natureza jurídica compatíveis com a atividade.",
        "Organizar emissão de notas, guias e obrigações mensais sem sobrecarregar a agenda clínica.",
        "Acompanhar regras de ISS e exigências municipais.",
        "Analisar a viabilidade do Fator R e do Simples Nacional conforme o perfil da empresa.",
      ),
      p(
        "Esses pontos aparecem com frequência em ",
        link("/contabilidade-para/medicos", "contabilidade para médicos"),
        ", ",
        link("/contabilidade-para/dentistas", "dentistas"),
        ", ",
        link("/contabilidade-para/psicologos", "psicólogos"),
        ", ",
        link("/contabilidade-para/fisioterapeutas", "fisioterapeutas"),
        ", ",
        link("/contabilidade-para/nutricionistas", "nutricionistas"),
        " e ",
        link("/contabilidade-para/fonoaudiologos", "fonoaudiólogos"),
        ".",
      ),
      h2("O enquadramento tributário na prática"),
      p(
        "O enquadramento não é um detalhe burocrático: ele influencia alíquotas, obrigações e a forma de retirar recursos da operação. A análise deve considerar faturamento, estrutura de custos, folha e pró-labore — sempre caso a caso.",
      ),
      p(
        "Ferramentas como o ",
        link("/solucoes/fator-r", "Fator R"),
        " e a avaliação de ",
        link("/solucoes/carne-leao-pj", "migração de PF para PJ"),
        " entram nessa leitura técnica. O objetivo é orientar com clareza, não garantir resultados.",
      ),
      h2("Como a contabilidade consultiva ajuda"),
      p(
        "A contabilidade consultiva traduz regras em decisões práticas: o que analisar antes de abrir CNPJ, como organizar a rotina fiscal e quando revisar o regime. Você mantém o foco no paciente; nós estruturamos a base contábil com previsibilidade.",
      ),
      p(
        "Se quiser começar com um diagnóstico do seu cenário, fale com a AD Contábil. Avaliamos juntos o melhor caminho para a sua especialidade.",
      ),
    ],
  },
  {
    slug: "como-funciona-o-fator-r-para-profissionais-da-saude",
    title: "Como funciona o Fator R para profissionais da saúde",
    excerpt:
      "Veja como o Fator R influencia o enquadramento tributário e por que ele é tão importante para profissionais da saúde.",
    category: "tributacao",
    publishedAt: "2026-07-25",
    readingMinutes: 8,
    featured: true,
    coverImage: "/blog/como-funciona-o-fator-r-para-profissionais-da-saude.webp",
    coverAlt: "Mesa de análise tributária com calculadora e documentos em ambiente consultivo",
    relatedSlugs: [
      "simples-nacional-para-profissionais-da-saude",
      "planejamento-tributario-para-profissionais-da-saude",
      "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
    ],
    content: [
      p(
        "O Fator R é uma regra do Simples Nacional que pode alterar o enquadramento tributário da empresa conforme a relação entre folha de pagamento (incluindo pró-labore) e faturamento. Para profissionais da saúde, essa análise costuma ser estratégica — e precisa ser feita com método.",
      ),
      h2("O que é o Fator R"),
      p(
        "Em termos práticos, o Fator R compara a massa salarial com a receita bruta em um período definido pela legislação. Quando a proporção atinge o patamar previsto, a empresa pode buscar um enquadramento distinto no Simples Nacional.",
      ),
      p(
        "As alíquotas podem variar conforme o anexo e o perfil da operação. Por isso falamos em avaliar e orientar — não em reduzir imposto de forma automática.",
      ),
      h2("Por que importa na saúde"),
      p(
        "Muitas atividades da saúde iniciam em anexos com carga potencialmente mais elevada. O acompanhamento mensal do Fator R ajuda a verificar se a estrutura de pró-labore e folha está coerente com o faturamento e com o enquadramento pretendido.",
      ),
      p(
        "Isso vale para clínicas e consultórios de diferentes especialidades. Conheça nossa abordagem em ",
        link("/solucoes/fator-r", "Fator R e planejamento tributário"),
        ".",
      ),
      h2("Folha, pró-labore e faturamento"),
      ul(
        "Mapear o faturamento real do período.",
        "Organizar pró-labore e demais custos de folha com clareza.",
        "Simular cenários antes de mudanças estruturais.",
        "Revisar o cálculo periodicamente — o enquadramento não é estático.",
      ),
      h2("Análise caso a caso"),
      p(
        "Dois consultórios da mesma especialidade podem ter resultados diferentes. Volume de atendimentos, contratação de equipe e modelo de retirada influenciam a viabilidade do Fator R. A orientação correta parte dos números da sua operação.",
      ),
      h2("Erros comuns"),
      ul(
        "Tratar o Fator R como garantia de alíquota mínima.",
        "Ajustar pró-labore sem acompanhar o faturamento do período.",
        "Ignorar obrigações acessórias e o impacto na folha.",
        "Deixar de revisar o cálculo quando a operação cresce ou muda.",
      ),
      p(
        "Se quiser avaliar o impacto do Fator R no seu consultório, fale com a AD Contábil. Fazemos a leitura técnica com base no seu perfil.",
      ),
    ],
  },
  {
    slug: "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
    title: "PF ou PJ: qual compensa mais na área da saúde?",
    excerpt:
      "Compare os caminhos de atuação como pessoa física ou jurídica e entenda qual faz mais sentido para o seu caso.",
    category: "pf-x-pj",
    publishedAt: "2026-07-22",
    readingMinutes: 8,
    featured: true,
    coverImage: "/blog/pf-ou-pj-qual-compensa-mais-na-area-da-saude.webp",
    coverAlt: "Composição visual clean comparando dois caminhos de negócio",
    relatedSlugs: [
      "como-funciona-o-fator-r-para-profissionais-da-saude",
      "contabilidade-para-fonoaudiologos-o-que-avaliar-antes-de-abrir-empresa",
      "contabilidade-para-profissionais-da-saude-guia-completo",
    ],
    content: [
      p(
        "A dúvida entre pessoa física e pessoa jurídica é recorrente entre profissionais da saúde. Não existe resposta única: a melhor estrutura depende do faturamento, dos custos, do município e do modelo de atendimento.",
      ),
      h2("Diferença prática entre PF e PJ"),
      p(
        "Na pessoa física, a tributação costuma ocorrer via Carnê-Leão e demais obrigações do IRPF, com regras próprias de base de cálculo. Na pessoa jurídica, a operação passa por CNPJ, regime tributário (como Simples Nacional) e rotina contábil societária.",
      ),
      p(
        "A AD Contábil compara esses cenários em um ",
        link("/solucoes/carne-leao-pj", "estudo de migração PF → PJ"),
        ", sempre de forma individualizada.",
      ),
      h2("Impacto tributário e operacional"),
      ul(
        "Na PF, a carga pode ser elevada conforme a faixa de rendimento e o INSS.",
        "Na PJ, alíquotas e anexos dependem do enquadramento — inclusive da análise do Fator R.",
        "Há também diferenças de burocracia, emissão de notas e organização patrimonial.",
      ),
      h2("Quando a migração costuma fazer sentido"),
      p(
        "A migração tende a ser avaliada quando o faturamento cresce, quando há necessidade de emitir notas com frequência ou quando a estrutura do consultório pede mais formalização. Ainda assim, a decisão deve nascer de números reais — não de slogans.",
      ),
      h2("Vantagens e cuidados"),
      p(
        "A PJ pode trazer organização e possibilidades de enquadramento mais adequadas ao perfil, incluindo distribuição de lucros conforme a legislação. A PF pode ser coerente em fases iniciais ou em volumes menores. Em ambos os casos, o risco está em decidir sem análise.",
      ),
      p(
        "Se você atua em ",
        link("/contabilidade-para/psicologos", "psicologia"),
        " ou ",
        link("/contabilidade-para/fonoaudiologos", "fonoaudiologia"),
        ", por exemplo, o Carnê-Leão costuma entrar com força na conversa — e merece comparação técnica.",
      ),
      h2("Decisão baseada no perfil"),
      p(
        "Liste faturamento médio, custos, necessidade de equipe e objetivos de crescimento. Com esses dados, avaliamos juntos a viabilidade de cada modelo.",
      ),
      p(
        "Quer uma leitura personalizada? Fale com a AD Contábil e solicite um diagnóstico do seu cenário PF x PJ.",
      ),
    ],
  },
  {
    slug: "contabilidade-para-fonoaudiologos-o-que-avaliar-antes-de-abrir-empresa",
    title: "Contabilidade para fonoaudiólogos: o que avaliar antes de abrir empresa",
    excerpt:
      "Entenda o que observar antes de abrir CNPJ como fonoaudiólogo e como escolher a estrutura correta.",
    category: "fonoaudiologia",
    publishedAt: "2026-07-20",
    readingMinutes: 10,
    featured: false,
    coverImage:
      "/blog/contabilidade-para-fonoaudiologos-o-que-avaliar-antes-de-abrir-empresa.webp",
    coverAlt: "Consultório de fonoaudiologia com composição editorial profissional",
    relatedSlugs: [
      "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
      "como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
      "como-funciona-o-fator-r-para-profissionais-da-saude",
    ],
    content: [
      p(
        "Abrir empresa na fonoaudiologia exige mais do que preencher formulários. CNAE, regime, ISS municipal e o modelo de atendimento (consultório, clínica ou domicílio) precisam ser analisados antes da formalização.",
      ),
      p(
        "Neste guia, reunimos o que avaliar com calma — alinhado à nossa página de ",
        link("/contabilidade-para/fonoaudiologos", "contabilidade para fonoaudiólogos"),
        ".",
      ),
      h2("Particularidades da fonoaudiologia"),
      p(
        "A rotina pode combinar sessões individuais, pacotes e atendimentos em instituições. Essa diversidade afeta faturamento, emissão de notas e organização de caixa. A contabilidade precisa acompanhar o ritmo real da clínica.",
      ),
      h2("CNAE e regime tributário"),
      p(
        "O CNAE frequentemente associado à fonoaudiologia é o 8650-0/06, mas a definição correta deve ser validada no contexto da operação e do município. O regime tributário (incluindo a possibilidade de Simples Nacional) depende do perfil concreto da empresa.",
      ),
      p(
        "Saiba mais sobre escolha cuidadosa de códigos em nosso artigo sobre ",
        link(
          "/blog/como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
          "como escolher o CNAE certo",
        ),
        " e na solução de ",
        link("/solucoes/abertura-cnpj", "abertura de CNPJ para saúde"),
        ".",
      ),
      h2("PF x PJ na fonoaudiologia"),
      p(
        "Autônomos costumam comparar a carga do Carnê-Leão com cenários de pessoa jurídica. Avaliamos os dois caminhos com base no faturamento e na estrutura desejada — sem prometer economia automática.",
      ),
      h2("Fator R e Simples Nacional"),
      p(
        "Com a PJ aberta, o acompanhamento de folha, pró-labore e faturamento permite analisar a viabilidade do ",
        link("/solucoes/fator-r", "Fator R"),
        ". O enquadramento pode variar; a análise mensal reduz surpresas.",
      ),
      h2("ISS e organização municipal"),
      p(
        "As regras de ISS mudam conforme o município. Revisamos a incidência aplicável ao local de registro e de prestação do serviço, inclusive quando há atendimento em mais de um endereço.",
      ),
      p(
        "Se você está avaliando abrir ou reorganizar a empresa, fale com a AD Contábil. Montamos um diagnóstico alinhado à realidade da fonoaudiologia.",
      ),
    ],
  },
  {
    slug: "como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
    title: "Como escolher o CNAE certo para sua especialidade na saúde",
    excerpt:
      "Saiba por que o CNAE influencia sua operação e como ele deve ser escolhido com cuidado.",
    category: "abertura-de-empresa",
    publishedAt: "2026-07-18",
    readingMinutes: 7,
    featured: false,
    coverImage: "/blog/como-escolher-o-cnae-certo-para-sua-especialidade-na-saude.webp",
    coverAlt: "Organização de pastas e documentos em mesa corporativa elegante",
    relatedSlugs: [
      "contabilidade-para-profissionais-da-saude-guia-completo",
      "contabilidade-para-fonoaudiologos-o-que-avaliar-antes-de-abrir-empresa",
      "contabilidade-para-dentistas-como-organizar-sua-rotina-fiscal-e-crescer-com-seguranca",
    ],
    content: [
      p(
        "O CNAE (Classificação Nacional de Atividades Econômicas) descreve a atividade principal da empresa perante o fisco e órgãos de registro. Na saúde, a escolha inadequada pode gerar enquadramento incoerente, obrigações desalinhadas e retrabalho.",
      ),
      h2("O que é o CNAE"),
      p(
        "Trata-se do código que identifica o tipo de serviço ou comércio exercido. Ele aparece na abertura do CNPJ e influencia permissões, licenças e, em muitos casos, o caminho tributário da operação.",
      ),
      h2("Por que impacta a tributação"),
      p(
        "O CNAE não “escolhe sozinho” o imposto, mas participa do conjunto que define anexos, alíquotas possíveis e obrigações. Combinado ao regime e à estrutura de folha, ele entra na análise de viabilidade do Simples Nacional e de regras municipais de ISS.",
      ),
      h2("Erros comuns"),
      ul(
        "Copiar o CNAE de outro profissional sem validar a atividade real.",
        "Usar código genérico demais ou restrito demais para o que de fato é prestado.",
        "Não revisar o enquadramento quando a clínica amplia serviços.",
        "Ignorar exigências municipais e de vigilância sanitária ligadas à atividade.",
      ),
      h2("CNAE, regime e atividade"),
      p(
        "A orientação correta cruza três frentes: o que você faz, onde opera e como fatura. Em ",
        link("/solucoes/abertura-cnpj", "abertura de CNPJ médico/saúde"),
        ", a AD Contábil prioriza essa leitura antes de protocolar o registro.",
      ),
      h2("Quando revisar"),
      p(
        "Mudança de especialidade predominante, inclusão de novos serviços, expansão para clínica multidisciplinar ou alteração de município são bons momentos para reavaliar o CNAE e o restante do enquadramento.",
      ),
      p(
        "Precisa de apoio para validar o código da sua especialidade? Fale com a AD Contábil e solicite uma análise antes de formalizar ou alterar a empresa.",
      ),
    ],
  },
  {
    slug: "contabilidade-para-dentistas-como-organizar-sua-rotina-fiscal-e-crescer-com-seguranca",
    title:
      "Contabilidade para dentistas: como organizar sua rotina fiscal e crescer com segurança",
    excerpt:
      "Veja como estruturar a rotina contábil de dentistas com mais previsibilidade, segurança e organização.",
    category: "odontologia",
    publishedAt: "2026-07-15",
    readingMinutes: 8,
    featured: false,
    coverImage:
      "/blog/contabilidade-para-dentistas-como-organizar-sua-rotina-fiscal-e-crescer-com-seguranca.webp",
    coverAlt: "Consultório odontológico moderno com composição visual sofisticada",
    relatedSlugs: [
      "como-funciona-o-fator-r-para-profissionais-da-saude",
      "como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
      "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
    ],
    content: [
      p(
        "Consultórios e clínicas odontológicas lidam com fluxo intenso de pacientes, insumos, próteses e, muitas vezes, equipe multiprofissional. Sem rotina fiscal clara, a operação cresce — e a desorganização também.",
      ),
      p(
        "A ",
        link("/contabilidade-para/dentistas", "contabilidade para dentistas"),
        " da AD Contábil parte dessa realidade: organizar documentos, orientar o enquadramento e acompanhar o mês a mês com previsibilidade.",
      ),
      h2("Contexto da odontologia"),
      p(
        "Além da receita de consultas e procedimentos, há custos variáveis relevantes. Comparar Livro Caixa e PJ, analisar Fator R e verificar regras de ISS são etapas frequentes na estruturação do consultório.",
      ),
      h2("Rotina fiscal do consultório"),
      ul(
        "Separar receitas e despesas com disciplina mensal.",
        "Organizar notas fiscais e comprovantes de insumos.",
        "Acompanhar guias, DAS e obrigações acessórias no prazo.",
        "Manter pró-labore e folha alinhados ao planejamento tributário.",
      ),
      h2("Organização de documentos"),
      p(
        "Digitalizar e padronizar o envio de informações reduz retrabalho e erros. Uma rotina simples — datas fixas, pasta única, checklist — já eleva a qualidade da apuração.",
      ),
      h2("Impactos do regime tributário"),
      p(
        "O regime influencia caixas, obrigações e a forma de retirar lucros. Avaliamos a coerência com o faturamento e com soluções como ",
        link("/solucoes/fator-r", "Fator R"),
        " e, quando aplicável, ",
        link("/solucoes/sociedade-uniprofissional", "Sociedade Uniprofissional (SUP-ISS)"),
        " conforme regras do município.",
      ),
      h2("Papel da contabilidade consultiva"),
      p(
        "Mais do que entregar guias, a contabilidade consultiva explica opções, aponta riscos e ajuda a decidir com dados. O dentista ganha tempo para o consultório; a operação ganha clareza.",
      ),
      p(
        "Quer organizar a rotina fiscal do seu consultório? Fale com a AD Contábil e solicite um diagnóstico personalizado.",
      ),
    ],
  },
];

export function getBlogCategory(slug: BlogCategorySlug) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPosts(limit = 3) {
  return BLOG_POSTS.filter((p) => p.featured).slice(0, limit);
}

export function getRecentPosts(limit?: number) {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export function getPostsByCategory(category: BlogCategorySlug) {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  const related = post.relatedSlugs
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => Boolean(p));
  if (related.length >= limit) return related.slice(0, limit);
  const extras = getRecentPosts().filter(
    (p) => p.slug !== post.slug && !related.some((r) => r.slug === p.slug),
  );
  return [...related, ...extras].slice(0, limit);
}

export function formatBlogDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}

const SPECIALTY_POSTS: Record<string, string[]> = {
  medicos: [
    "simples-nacional-para-profissionais-da-saude",
    "planejamento-tributario-para-profissionais-da-saude",
  ],
  dentistas: [
    "simples-nacional-para-profissionais-da-saude",
    "contabilidade-para-dentistas-como-organizar-sua-rotina-fiscal-e-crescer-com-seguranca",
  ],
  psicologos: [
    "simples-nacional-para-profissionais-da-saude",
    "planejamento-tributario-para-profissionais-da-saude",
  ],
  fisioterapeutas: [
    "simples-nacional-para-profissionais-da-saude",
    "como-funciona-o-fator-r-para-profissionais-da-saude",
  ],
  nutricionistas: [
    "simples-nacional-para-profissionais-da-saude",
    "planejamento-tributario-para-profissionais-da-saude",
  ],
  fonoaudiologos: [
    "simples-nacional-para-profissionais-da-saude",
    "contabilidade-para-fonoaudiologos-o-que-avaliar-antes-de-abrir-empresa",
  ],
};

const SOLUTION_POSTS: Record<string, string[]> = {
  "fator-r": [
    "simples-nacional-para-profissionais-da-saude",
    "como-funciona-o-fator-r-para-profissionais-da-saude",
  ],
  "carne-leao-pj": [
    "simples-nacional-para-profissionais-da-saude",
    "pf-ou-pj-qual-compensa-mais-na-area-da-saude",
  ],
  "abertura-cnpj": [
    "simples-nacional-para-profissionais-da-saude",
    "como-escolher-o-cnae-certo-para-sua-especialidade-na-saude",
  ],
  "sociedade-uniprofissional": [
    "planejamento-tributario-para-profissionais-da-saude",
    "contabilidade-para-dentistas-como-organizar-sua-rotina-fiscal-e-crescer-com-seguranca",
  ],
};

export function getPostsForSpecialty(specialtySlug: string, limit = 2) {
  const slugs = SPECIALTY_POSTS[specialtySlug] ?? [
    "contabilidade-para-profissionais-da-saude-guia-completo",
  ];
  return slugs
    .map((s) => getBlogPost(s))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, limit);
}

export function getPostsForSolution(solutionSlug: string, limit = 2) {
  const slugs = SOLUTION_POSTS[solutionSlug] ?? [
    "contabilidade-para-profissionais-da-saude-guia-completo",
  ];
  return slugs
    .map((s) => getBlogPost(s))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, limit);
}
