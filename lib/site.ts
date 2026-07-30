// Constantes e conteúdo do site — AD Contábil

export const WHATSAPP_NUMBER = "5551997643864";
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de uma avaliação fiscal para minha atuação na área da saúde.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const PHONE_E164 = "+5551997643864";
export const PHONE_DISPLAY = "(51) 99764.3864";
export const PHONE_HREF = `tel:${PHONE_E164}`;
export const EMAIL = "contato@adcontabil.net.br";
export const ADDRESS = "Rua Fernando Abott, 895 sala 107 — Centro";
export const CITY = "Santa Cruz do Sul – RS";
export const CITY_LOCALITY = "Santa Cruz do Sul";
export const CITY_REGION = "RS";
export const SITE_URL = "https://contabilidade.adcontabil.net.br";

export const CRC = "CRC/RS RS094939/O-4";
export const RESPONSIBLE = "Lidiane Assis Duarte";
export const BRAND = "AD Contábil";
export const OFFICE_CRC = "RS-011030/O-4";
export const TAGLINE = "Inteligência Contábil";
export const LOGO_PATH = "/logo-ad-contabil.png";

export const SOCIAL = {
  instagram: "https://www.instagram.com/ad_inteligenciacontabil",
  facebook: "https://www.facebook.com/ADContabilrs/",
} as const;

export const DEFAULT_DESCRIPTION =
  "Contabilidade especializada para médicos, dentistas, psicólogos, fisioterapeutas, fonoaudiólogos e nutricionistas. Análise de Fator R, SUP-ISS e enquadramento tributário. Atendimento em Santa Cruz do Sul/RS.";

export type SpecialtyIconKey =
  | "stethoscope"
  | "smile"
  | "brain"
  | "activity"
  | "ear"
  | "apple";

export type Specialty = {
  slug: string;
  label: string;
  title: string;
  h1: string;
  short: string;
  desc: string;
  icon: SpecialtyIconKey;
  subtitle: string;
  intro: string;
  introSecondary?: string;
  solutions: readonly { title: string; desc: string }[];
  audience?: readonly string[];
  analysis?: readonly string[];
  differentials?: string;
  process?: readonly string[];
  faqs?: readonly { q: string; a: string }[];
  ctaBadge?: string;
  ctaTitle?: string;
  ctaText?: string;
  primaryCta?: string;
  secondaryCta?: string;
};

export const SPECIALTIES: readonly Specialty[] = [
  {
    slug: "medicos",
    label: "Médicos",
    title: "Contabilidade para Médicos",
    h1: "Contabilidade Especializada para Médicos e Clínicas Médicas",
    short: "Médicos & Clínicas Médicas",
    desc: "Abertura de CNPJ, enquadramento no CNAE correto, equiparação hospitalar e planejamento para plantonistas, residentes e clínicas.",
    icon: "stethoscope",
    subtitle:
      "Do plantão ao consultório próprio: análise tributária, proteção patrimonial e conformidade fiscal para médicos.",
    intro:
      "Atuamos com médicos plantonistas, residentes, pejotizados e proprietários de clínicas — com orientação tributária alinhada ao perfil de cada operação.",
    solutions: [
      {
        title: "Médicos plantonistas e pejotizados",
        desc: "Abertura de PJ médica, escolha do CNAE adequado e emissão de notas fiscais para hospitais.",
      },
      {
        title: "Consultórios e clínicas",
        desc: "Gestão de folha, análise de equiparação hospitalar, adequação à LGPD médica e controle de distribuição de lucros.",
      },
      {
        title: "Planejamento do Fator R",
        desc: "Ajuste do pró-labore para buscar o enquadramento mais vantajoso — alíquotas podem variar entre 6% e 15,5%, dependendo do perfil.",
      },
    ],
  },
  {
    slug: "dentistas",
    label: "Dentistas",
    title: "Contabilidade para Dentistas",
    h1: "Contabilidade Especializada para Dentistas e Consultórios Odontológicos",
    short: "Dentistas & Consultórios Odontológicos",
    desc: "Gestão do Livro Caixa x PJ, análise do Fator R, controle de próteses e regularização junto aos órgãos da saúde.",
    icon: "smile",
    subtitle:
      "Consultórios e clínicas odontológicas com orientação tributária e gestão financeira sob medida.",
    intro:
      "Do Livro Caixa à Sociedade Uniprofissional, analisamos o cenário fiscal mais adequado ao seu consultório odontológico.",
    solutions: [
      {
        title: "Livro Caixa x PJ",
        desc: "Comparativo detalhado para avaliar o regime mais adequado ao seu faturamento.",
      },
      {
        title: "Fator R para dentistas",
        desc: "Ajuste do pró-labore para buscar o enquadramento mais vantajoso — alíquotas podem variar entre 6% e 15,5%, dependendo do perfil.",
      },
      {
        title: "Controle de próteses e insumos",
        desc: "Rotina financeira e fiscal adaptada à realidade da odontologia.",
      },
    ],
  },
  {
    slug: "psicologos",
    label: "Psicólogos",
    title: "Contabilidade para Psicólogos",
    h1: "Contabilidade Especializada para Psicólogos e Terapeutas",
    short: "Psicólogos & Terapeutas",
    desc: "Reduza a carga tributária do Carnê-Leão migrando para PJ. Análise de enquadramento e estruturação de CNPJ conforme o perfil profissional.",
    icon: "brain",
    subtitle:
      "Reduza a carga tributária do Carnê-Leão migrando para PJ. Avaliamos o enquadramento adequado à sua atuação.",
    intro:
      "Para psicólogos e terapeutas, avaliamos a migração para PJ com organização financeira profissional e análise técnica do enquadramento.",
    solutions: [
      {
        title: "Abertura de CNPJ",
        desc: "Formalização com CNAE adequado e análise do enquadramento tributário mais coerente com a sua prática.",
      },
      {
        title: "Emissão de notas fiscais",
        desc: "Notas de consulta e atendimento com clareza para o paciente e para o fisco.",
      },
      {
        title: "Distribuição de lucros",
        desc: "Orientação sobre a possibilidade de distribuição de lucros isenta, conforme o enquadramento da PJ.",
      },
    ],
  },
  {
    slug: "fisioterapeutas",
    label: "Fisioterapeutas",
    title: "Contabilidade para Fisioterapeutas",
    h1: "Contabilidade Especializada para Fisioterapeutas e Clínicas",
    short: "Fisioterapeutas & Clínicas",
    desc: "Planejamento tributário para atendimentos autônomos, estúdios de Pilates e clínicas multidisciplinares.",
    icon: "activity",
    subtitle:
      "Planejamento tributário para atendimentos autônomos, estúdios de Pilates e clínicas multidisciplinares.",
    intro:
      "Fisioterapeutas contam com orientação contábil que entende os fluxos da reabilitação e analisa o enquadramento adequado a cada modelo.",
    solutions: [
      {
        title: "Atendimentos autônomos e domiciliares",
        desc: "Modelo de PJ enxuto, com emissão de nota e apuração alinhadas à rotina do atendimento.",
      },
      {
        title: "Estúdios de Pilates",
        desc: "Controle de mensalidades, pacotes e folha, com análise contínua do Fator R.",
      },
      {
        title: "Clínicas multidisciplinares",
        desc: "Estruturação societária e análise de SUP-ISS quando aplicável — regra que varia conforme o município.",
      },
    ],
  },
  {
    slug: "nutricionistas",
    label: "Nutricionistas",
    title: "Contabilidade para Nutricionistas",
    h1: "Contabilidade Especializada para Nutricionistas",
    short: "Nutricionistas & Clínicas",
    desc: "Formalização ágil, emissão correta de notas fiscais de consultas e gestão financeira descomplicada.",
    icon: "apple",
    subtitle:
      "Formalização ágil, emissão correta de notas fiscais de consultas e gestão financeira descomplicada.",
    intro:
      "Ideal para nutricionistas clínicos, esportivos e consultores — com apoio para quem também vende produtos e ebooks.",
    solutions: [
      {
        title: "Abertura e enquadramento",
        desc: "CNPJ adequado para consultas, pacotes e conteúdos digitais.",
      },
      {
        title: "Fator R para nutricionistas",
        desc: "Ajuste do pró-labore para buscar o enquadramento mais vantajoso — alíquotas podem variar entre 6% e 15,5%, dependendo do perfil.",
      },
      {
        title: "Consultoria financeira",
        desc: "Organização de fluxo de caixa e precificação estratégica.",
      },
    ],
  },
  {
    slug: "fonoaudiologos",
    label: "Fonoaudiólogos",
    title: "Contabilidade para Fonoaudiólogos",
    h1: "Contabilidade Especializada para Fonoaudiólogos",
    short: "Fonoaudiólogos & Clínicas",
    desc: "Estratégia tributária, enquadramento correto e apoio contábil para fonoaudiólogos, consultórios e clínicas.",
    icon: "ear",
    subtitle:
      "Estratégia tributária, enquadramento correto e apoio contábil para fonoaudiólogos, consultórios e clínicas que querem atuar com mais segurança e organização.",
    intro:
      "A fonoaudiologia tem particularidades contábeis que exigem atenção na escolha do CNAE, do regime tributário e da estrutura de atuação. A AD Contábil ajuda fonoaudiólogos a avaliar o melhor caminho com base no faturamento, no tipo de atendimento e no modelo do consultório ou clínica.",
    introSecondary:
      "Nosso trabalho é orientar sua operação com clareza, reduzir riscos e estruturar a contabilidade de forma compatível com a realidade da fonoaudiologia. Isso inclui análise de abertura de CNPJ, enquadramento tributário e acompanhamento da rotina fiscal.",
    solutions: [
      {
        title: "Abertura de CNPJ",
        desc: "Orientação para estruturar sua empresa com o CNAE adequado e o enquadramento compatível com a atividade. Avaliamos se o melhor caminho é atuar como PF ou formalizar como PJ.",
      },
      {
        title: "Fator R e Simples Nacional",
        desc: "Acompanhamos folha, pró-labore e faturamento para avaliar o enquadramento tributário mais vantajoso dentro das regras do Simples Nacional.",
      },
      {
        title: "Carnê-Leão e migração PF → PJ",
        desc: "Para autônomos, analisamos a carga tributária da pessoa física e comparamos com cenários de PJ, de forma técnica e individualizada.",
      },
      {
        title: "ISS e operação municipal",
        desc: "Revisamos a incidência de ISS conforme as regras do município, considerando consultório, clínica e estrutura de atendimento.",
      },
      {
        title: "Rotina contábil completa",
        desc: "Emissão de guias, acompanhamento mensal, suporte nas obrigações fiscais e organização da documentação com previsibilidade.",
      },
      {
        title: "Organização financeira do consultório",
        desc: "Apoio na organização do fluxo de caixa, precificação de sessões e pacotes e controle de receitas, para alinhar a gestão financeira ao ritmo da fonoaudiologia.",
      },
    ],
    audience: [
      "Fonoaudiólogos autônomos que atendem em consultório ou domicílio.",
      "Fonoaudiólogos que desejam migrar de PF para PJ.",
      "Clínicas e consultórios de fonoaudiologia.",
      "Profissionais que precisam organizar emissão de notas, impostos e obrigações mensais.",
      "Estruturas que buscam avaliar o melhor enquadramento tributário para a atividade.",
    ],
    analysis: [
      "CNAE e natureza jurídica adequados para a atividade.",
      "Regime tributário mais compatível com o faturamento.",
      "Possibilidade de enquadramento no Simples Nacional.",
      "Impacto do Fator R no imposto mensal.",
      "Regras de ISS conforme município.",
      "Organização fiscal para migração de pessoa física para pessoa jurídica.",
    ],
    differentials:
      "A fonoaudiologia pode exigir atenção redobrada em temas como enquadramento tributário, organização da folha e definição do regime ideal. Em muitos casos, a decisão entre atuar como PF ou PJ depende do volume de faturamento, da estrutura de custos e da estratégia da operação. Por isso, nossa atuação é sempre consultiva: analisamos o cenário, explicamos as opções e indicamos o caminho mais coerente com a realidade do cliente.",
    process: [
      "Entendemos seu modelo atual de atuação.",
      "Avaliamos CNAE, regime e estrutura.",
      "Simulamos os cenários tributários aplicáveis.",
      "Estruturamos a operação contábil.",
      "Mantemos o acompanhamento mensal com suporte técnico.",
    ],
    faqs: [
      {
        q: "Vale a pena abrir CNPJ sendo fonoaudiólogo?",
        a: "Depende do seu faturamento, da sua rotina de atendimento e da estrutura que você deseja manter. Em muitos casos, a pessoa jurídica pode trazer mais organização e melhores condições de enquadramento, mas isso precisa ser analisado caso a caso.",
      },
      {
        q: "Qual é o CNAE de fonoaudiologia?",
        a: "O CNAE frequentemente associado à atividade é o 8650-0/06, referente às atividades de fonoaudiologia. A definição correta deve sempre ser validada no contexto da operação e do município.",
      },
      {
        q: "Fonoaudiólogo pode entrar no Simples Nacional?",
        a: "Sim, a atividade de fonoaudiologia é tratada dentro do Simples Nacional, mas o enquadramento e a faixa aplicável dependem do caso concreto, da estrutura da empresa e da análise tributária mensal.",
      },
      {
        q: "O Fator R pode ajudar a reduzir o imposto?",
        a: "Ele pode influenciar o enquadramento tributário e, por consequência, o valor do imposto, mas isso deve ser calculado com base na folha, no pró-labore e no faturamento da empresa.",
      },
      {
        q: "Posso continuar como autônomo?",
        a: "Sim. A permanência como pessoa física pode fazer sentido em alguns cenários, mas é importante comparar os regimes antes de decidir.",
      },
    ],
    ctaBadge: "Diagnóstico tributário para fonoaudiólogos",
    ctaTitle: "Quer avaliar o melhor caminho para sua atuação?",
    ctaText:
      "Fale com a AD Contábil e receba uma análise personalizada para sua rotina, seu faturamento e sua forma de atendimento. Vamos ajudar você a estruturar a contabilidade com mais clareza e segurança.",
    primaryCta: "Fale com a AD Contábil",
    secondaryCta: "Solicitar diagnóstico",
  },
];

export type SpecialtySlug = Specialty["slug"];

export const SOLUTIONS = [
  {
    slug: "fator-r",
    label: "Fator R e Planejamento Tributário",
    title: "Fator R e Planejamento Tributário",
    subtitle:
      "Ajuste seu pró-labore para buscar o enquadramento mais vantajoso — alíquotas podem variar entre 6% e 15,5%, dependendo do seu perfil.",
    problem:
      "Atividades da saúde entram por padrão no Anexo V do Simples Nacional, com alíquotas que podem iniciar em 15,5%, conforme o enquadramento.",
    solution:
      "Analisamos folha e pró-labore para verificar a viabilidade do Fator R e orientar o enquadramento mais adequado ao perfil da operação.",
    bullets: [
      "Cálculo mensal do Fator R e ajustes preventivos",
      "Simulação de cenários antes de contratar colaboradores",
      "Acompanhamento de faturamento e comparativos de enquadramento",
    ],
  },
  {
    slug: "sociedade-uniprofissional",
    label: "Sociedade Uniprofissional (SUP-ISS)",
    title: "Sociedade Uniprofissional (SUP - ISS)",
    subtitle:
      "Avalie se sua sociedade se enquadra no ISS fixo por profissional — regra que varia conforme o município.",
    problem:
      "Em muitos municípios, clínicas pagam ISS percentual sobre o faturamento, o que pode se tornar oneroso conforme o consultório cresce.",
    solution:
      "Verificamos a viabilidade do regime especial de ISS fixo por profissional habilitado e orientamos o enquadramento junto à prefeitura, quando aplicável.",
    bullets: [
      "Análise de viabilidade e enquadramento na prefeitura",
      "Documentação e defesa técnica junto ao fisco municipal",
      "Manutenção anual do regime especial, quando cabível",
    ],
  },
  {
    slug: "carne-leao-pj",
    label: "Carnê-Leão e Migração PF para PJ",
    title: "Carnê-Leão e Migração PF para PJ",
    subtitle:
      "Avalie a migração de PF para PJ: alíquotas podem partir de 6%, dependendo do seu enquadramento, com possibilidade de distribuição de lucros isenta.",
    problem:
      "Profissionais autônomos podem enfrentar tributação elevada no Carnê-Leão (IR até 27,5%) e INSS sobre grande parte do rendimento.",
    solution:
      "Realizamos estudo comparativo PF vs PJ, abertura de CNPJ e orientação sobre o enquadramento e a distribuição de lucros conforme a legislação.",
    bullets: [
      "Estudo comparativo PF vs PJ com números reais",
      "Processo de abertura do CNPJ e alvarás",
      "Transição organizada, sem interromper o atendimento aos pacientes",
    ],
  },
  {
    slug: "abertura-cnpj",
    label: "Abertura de CNPJ Médico/Saúde",
    title: "Abertura de CNPJ Médico/Saúde",
    subtitle:
      "Do CNAE adequado ao alvará sanitário: cuidamos do processo com análise técnica do enquadramento.",
    problem:
      "Escolher o CNAE e o regime tributário inadequados pode gerar custos desnecessários e risco fiscal ao longo do ano.",
    solution:
      "Conduzimos o processo — Junta Comercial, Receita Federal, Inscrição Municipal e alvarás — com orientação para o enquadramento alinhado à sua atuação.",
    bullets: [
      "Escolha estratégica de CNAE e análise de regime tributário",
      "Registro em Junta Comercial e Receita Federal",
      "Alvará de funcionamento e vigilância sanitária",
    ],
  },
] as const;

export type SolutionSlug = (typeof SOLUTIONS)[number]["slug"];

export const HOME_FAQS = [
  {
    q: "Vale a pena abrir CNPJ sendo médico ou profissional da saúde?",
    a: "Depende do perfil. Na Pessoa Física, os rendimentos podem ser tributados em até 27,5% no IRPF, além do INSS. Na Pessoa Jurídica, avaliamos o enquadramento — alíquotas podem partir de 6% no Simples Nacional, dependendo do caso, com possibilidade de distribuição de lucros isenta.",
  },
  {
    q: "O que é e como funciona o Fator R no Simples Nacional?",
    a: "É a regra que permite buscar um enquadramento mais vantajoso no Simples Nacional. Quando os custos com folha e pró-labore atingem proporção suficiente em relação ao faturamento, a empresa pode migrar para o Anexo III. As alíquotas podem variar entre 6% e 15,5%, dependendo do perfil — por isso a análise mensal é essencial.",
  },
  {
    q: "Como funciona a contabilidade digital?",
    a: "Você envia documentos e informações fiscais de forma prática pela plataforma online. Nossa equipe cuida da apuração, folha e emissão de guias, com suporte contínuo via WhatsApp e reuniões por vídeo.",
  },
  {
    q: "Quanto tempo leva para abrir uma empresa na área da saúde?",
    a: "O processo dura em média de 7 a 15 dias úteis, incluindo registro na Junta Comercial, CNPJ na Receita Federal, Inscrição Municipal e alvarás de funcionamento — prazos que podem variar conforme o município e os órgãos envolvidos.",
  },
] as const;

export const HERO_SLIDES = [
  {
    title: "Estratégia tributária para crescer com segurança",
    subtitle: "Planejamento claro para consultórios e clínicas.",
  },
  {
    title: "Fator R, ISS e CNAE com clareza",
    subtitle: "Orientação contábil para médicos, dentistas e clínicas.",
  },
  {
    title: "Atendimento humano com operação digital",
    subtitle: "Menos burocracia para você, mais foco no consultório.",
  },
] as const;

export const PHOTOS = {
  hero: "/lidiane-hero500px.webp",
  portrait: "/lidiane-portrait.webp",
  cover: "/foto-lidi-capa.webp",
} as const;

export const PLANS = [
  {
    slug: "prata",
    name: "Plano Prata",
    badge: "Essencial",
    description:
      "Essencial para a rotina contábil e fiscal do profissional da saúde. Ideal para quem precisa manter obrigações em dia com suporte confiável.",
    features: [
      "Abertura da empresa (quando necessário)",
      "Escrituração contábil e fiscal da rotina",
      "Apuração e emissão de guias do Simples Nacional",
      "Envio de declarações obrigatórias",
      "Suporte via WhatsApp e e-mail",
      "Relatórios mensais objetivos",
    ],
    includesPrevious: null as string | null,
    featured: false,
  },
  {
    slug: "ouro",
    name: "Plano Ouro",
    badge: "Estratégico",
    description:
      "Para quem deseja mais acompanhamento e planejamento. Contabilidade regular com orientação tributária alinhada ao consultório ou clínica.",
    features: [
      "Análise e planejamento tributário básico",
      "Elaboração de folha de pagamento e pró-labore",
      "Consultas mensais com contador",
      "Relatórios financeiros personalizados",
      "Acompanhamento fiscal e regularização",
      "Atendimento online e presencial",
    ],
    includesPrevious: "Inclui tudo do Plano Prata, mais:",
    featured: true,
  },
  {
    slug: "diamante",
    name: "Plano Diamante",
    badge: "Consultivo",
    description:
      "Para clínicas e profissionais com maior complexidade. Acompanhamento próximo, revisão tributária avançada e gestão financeira consultiva.",
    features: [
      "Planejamento e revisão tributária avançada",
      "BPO financeiro (conciliação, contas a pagar/receber)",
      "Acompanhamento estratégico com relatórios gerenciais",
      "Análise de enquadramentos (Fator R, ISS e regimes)",
      "Apoio com certidões, balanços e documentação técnica",
      "Atendimento preferencial e consultivo",
    ],
    includesPrevious: "Inclui tudo do Plano Ouro, mais:",
    featured: false,
  },
] as const;

export type PlanSlug = (typeof PLANS)[number]["slug"];

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function planWhatsAppUrl(planName: string) {
  return whatsappUrl(
    `Olá! Tenho interesse no ${planName} da AD Contábil. Gostaria de mais informações.`
  );
}

export function getSpecialty(slug: string) {
  return SPECIALTIES.find((s) => s.slug === slug);
}

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
