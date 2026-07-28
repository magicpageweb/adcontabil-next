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
export const TAGLINE = "Inteligência Contábil";
export const LOGO_PATH = "/logo-ad-contabil.png";

export const SOCIAL = {
  instagram: "https://www.instagram.com/ad_inteligenciacontabil",
  facebook: "https://www.facebook.com/ADContabilrs/",
} as const;

export const DEFAULT_DESCRIPTION =
  "Contabilidade especializada para médicos, dentistas, psicólogos, fisioterapeutas e nutricionistas. Reduza impostos com Fator R e SUP-ISS. Atendimento digital em todo o Brasil e presencial em Santa Cruz do Sul/RS.";

export type SpecialtyIconKey =
  | "stethoscope"
  | "smile"
  | "brain"
  | "activity"
  | "apple";

export const SPECIALTIES = [
  {
    slug: "medicos",
    label: "Médicos",
    title: "Contabilidade para Médicos",
    h1: "Contabilidade Especializada para Médicos e Clínicas Médicas",
    short: "Médicos & Clínicas Médicas",
    desc: "Abertura de CNPJ, enquadramento no CNAE correto, equiparação hospitalar e planejamento para plantonistas, residentes e clínicas.",
    icon: "stethoscope" as SpecialtyIconKey,
    subtitle:
      "Do plantão ao consultório próprio: redução de impostos, proteção patrimonial e conformidade fiscal completa para médicos.",
    intro:
      "Atuamos com médicos plantonistas, residentes, pejotizados e proprietários de clínicas — sempre com foco em economia tributária dentro da lei.",
    solutions: [
      {
        title: "Médicos plantonistas e pejotizados",
        desc: "Abertura de PJ médica, escolha do melhor CNAE e emissão ágil de notas fiscais para hospitais.",
      },
      {
        title: "Consultórios e clínicas",
        desc: "Gestão de folha, equiparação hospitalar, adequação à LGPD médica e controle de distribuição de lucros.",
      },
      {
        title: "Planejamento do Fator R",
        desc: "Garantia mensal de enquadramento na menor alíquota do Simples Nacional (6%).",
      },
    ],
  },
  {
    slug: "dentistas",
    label: "Dentistas",
    title: "Contabilidade para Dentistas",
    h1: "Contabilidade Especializada para Dentistas e Consultórios Odontológicos",
    short: "Dentistas & Consultórios Odontológicos",
    desc: "Gestão do Livro Caixa x PJ, Fator R para redução de imposto, controle de próteses e regularização junto aos órgãos da saúde.",
    icon: "smile" as SpecialtyIconKey,
    subtitle:
      "Consultórios e clínicas odontológicas com tributação otimizada e gestão financeira sob medida.",
    intro:
      "Do Livro Caixa à Sociedade Uniprofissional, desenhamos o cenário fiscal mais eficiente para o seu consultório odontológico.",
    solutions: [
      {
        title: "Livro Caixa x PJ",
        desc: "Comparativo detalhado para escolher o regime mais econômico para o seu faturamento.",
      },
      {
        title: "Fator R para dentistas",
        desc: "Estratégia de pró-labore para migrar do Anexo V (15,5%) para o Anexo III (6%).",
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
    desc: "Fim da mordida do Carnê-Leão de até 27,5%. Estruturação de CNPJ com tributação simplificada a partir de 6%.",
    icon: "brain" as SpecialtyIconKey,
    subtitle:
      "Chega de perder até 27,5% no Carnê-Leão. Estruturamos seu CNPJ com tributação a partir de 6%.",
    intro:
      "Para psicólogos e terapeutas, a migração para PJ traz economia imediata e organização financeira profissional.",
    solutions: [
      {
        title: "Abertura de CNPJ ágil",
        desc: "Todo o processo de formalização com CNAE correto e menor tributação possível.",
      },
      {
        title: "Emissão de notas fiscais",
        desc: "Notas de consulta e atendimento com clareza para o paciente e para o fisco.",
      },
      {
        title: "Distribuição de lucros isenta",
        desc: "Retire lucros da sua PJ sem incidência de Imposto de Renda.",
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
    icon: "activity" as SpecialtyIconKey,
    subtitle:
      "Planejamento tributário para atendimentos autônomos, estúdios de Pilates e clínicas multidisciplinares.",
    intro:
      "Fisioterapeutas ganham eficiência e economia com uma contabilidade que entende os fluxos da reabilitação.",
    solutions: [
      {
        title: "Atendimentos autônomos e domiciliares",
        desc: "Modelo de PJ enxuto, com emissão de nota simples e apuração automatizada.",
      },
      {
        title: "Estúdios de Pilates",
        desc: "Controle de mensalidades, pacotes e folha, com Fator R otimizado.",
      },
      {
        title: "Clínicas multidisciplinares",
        desc: "Estruturação societária e SUP-ISS quando aplicável para reduzir imposto municipal.",
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
    icon: "apple" as SpecialtyIconKey,
    subtitle:
      "Formalização ágil, emissão correta de notas fiscais de consultas e gestão financeira descomplicada.",
    intro:
      "Ideal para nutricionistas clínicos, esportivos e consultores — com apoio para quem também vende produtos e ebooks.",
    solutions: [
      {
        title: "Abertura e enquadramento",
        desc: "CNPJ correto para consultas, pacotes e conteúdos digitais.",
      },
      {
        title: "Fator R para nutricionistas",
        desc: "Redução da alíquota de imposto para 6% no Simples Nacional.",
      },
      {
        title: "Consultoria financeira",
        desc: "Organização de fluxo de caixa e precificação estratégica.",
      },
    ],
  },
] as const;

export type SpecialtySlug = (typeof SPECIALTIES)[number]["slug"];

export const SOLUTIONS = [
  {
    slug: "fator-r",
    label: "Fator R e Economia de Impostos",
    title: "Fator R e Economia de Impostos",
    subtitle:
      "Reduza a alíquota do Simples Nacional de 15,5% para 6% com um planejamento de pró-labore inteligente.",
    problem:
      "Atividades da saúde entram por padrão no Anexo V do Simples Nacional, começando em 15,5% de imposto.",
    solution:
      "Estruturamos folha e pró-labore para atingir a proporção de 28%, migrando sua empresa para o Anexo III, que inicia em 6%.",
    bullets: [
      "Cálculo mensal do Fator R e ajustes preventivos",
      "Simulação de cenários antes de contratar colaboradores",
      "Acompanhamento de faturamento e comparativos de economia",
    ],
  },
  {
    slug: "sociedade-uniprofissional",
    label: "Sociedade Uniprofissional (SUP-ISS)",
    title: "Sociedade Uniprofissional (SUP - ISS)",
    subtitle:
      "Pague ISS fixo por profissional habilitado ao invés de percentual sobre todo o faturamento.",
    problem:
      "Clínicas pagam ISS percentual sobre 100% do faturamento, o que se torna caro conforme o consultório cresce.",
    solution:
      "Enquadramos sua sociedade no regime especial de ISS fixo por profissional habilitado, com expressiva economia mensal.",
    bullets: [
      "Análise de viabilidade e enquadramento na prefeitura",
      "Documentação e defesa técnica junto ao fisco municipal",
      "Manutenção anual do regime especial",
    ],
  },
  {
    slug: "carne-leao-pj",
    label: "Carnê-Leão e Migração PF para PJ",
    title: "Carnê-Leão e Migração PF para PJ",
    subtitle:
      "Saia da tributação de até 27,5% e comece a pagar a partir de 6% com distribuição de lucros isenta.",
    problem:
      "Profissionais autônomos pagam até 27,5% de IR no Carnê-Leão + INSS sobre praticamente todo o rendimento.",
    solution:
      "Abertura ágil de CNPJ, enquadramento no melhor regime e distribuição de lucros sem incidência de Imposto de Renda.",
    bullets: [
      "Estudo comparativo PF vs PJ com números reais",
      "Todo o processo de abertura do CNPJ e alvarás",
      "Transição sem quebrar o atendimento aos pacientes",
    ],
  },
  {
    slug: "abertura-cnpj",
    label: "Abertura de CNPJ Médico/Saúde",
    title: "Abertura de CNPJ Médico/Saúde",
    subtitle:
      "Do CNAE correto ao alvará sanitário: cuidamos de todo o processo em 7 a 15 dias úteis.",
    problem:
      "Escolher o CNAE e o regime tributário errado pode custar milhares de reais em impostos por ano.",
    solution:
      "Fazemos todo o processo — Junta Comercial, Receita Federal, Inscrição Municipal e alvarás — com o enquadramento ideal para a sua atuação.",
    bullets: [
      "Escolha estratégica de CNAE e regime tributário",
      "Registro em Junta Comercial e Receita Federal",
      "Alvará de funcionamento e vigilância sanitária",
    ],
  },
] as const;

export type SolutionSlug = (typeof SOLUTIONS)[number]["slug"];

export const HOME_FAQS = [
  {
    q: "Vale a pena abrir CNPJ sendo médico ou profissional da saúde?",
    a: "Sim. Na Pessoa Física, seus rendimentos são tributados em até 27,5% no IRPF + INSS. Na Pessoa Jurídica (PJ), a tributação pode iniciar em 6% no Simples Nacional com Fator R, permitindo distribuição de lucros com isenção de imposto.",
  },
  {
    q: "O que é e como funciona o Fator R no Simples Nacional?",
    a: "É a regra que permite reduzir a alíquota de imposto de 15,5% para 6%. Quando os custos com folha de pagamento e pró-labore representam 28% ou mais do faturamento da empresa, o enquadramento muda para o Anexo III.",
  },
  {
    q: "Como funciona a contabilidade 100% digital?",
    a: "Você envia seus documentos e informações fiscais de forma prática pela plataforma online. Nossa equipe cuida de toda a apuração, folha e emissão de guias, oferecendo suporte contínuo via WhatsApp e reuniões por vídeo.",
  },
  {
    q: "Quanto tempo leva para abrir uma empresa na área da saúde?",
    a: "O processo dura em média de 7 a 15 dias úteis, incluindo registro na Junta Comercial, CNPJ na Receita Federal, Inscrição Municipal e alvarás de funcionamento.",
  },
] as const;

export const HERO_SLIDES = [
  {
    title: "Contabilidade para profissionais da saúde",
    subtitle: "Estratégia tributária para crescer com segurança.",
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
      "Essencial para começar certo. Ideal para MEIs e pequenos negócios que precisam manter obrigações em dia com suporte confiável.",
    features: [
      "Abertura da empresa (se necessário)",
      "Escrituração contábil e fiscal básica",
      "Emissão de DAS (Simples Nacional)",
      "Envio de declarações obrigatórias",
      "Suporte via WhatsApp e e-mail",
      "Relatórios mensais simples",
    ],
    includesPrevious: null as string | null,
    featured: false,
  },
  {
    slug: "ouro",
    name: "Plano Ouro",
    badge: "Mais escolhido",
    description:
      "Equilíbrio entre controle e crescimento. Para empresas do Simples Nacional ou Lucro Presumido que querem contabilidade regular com orientação estratégica.",
    features: [
      "Planejamento tributário básico",
      "Elaboração de folha de pagamento",
      "Consultas mensais com contador",
      "Relatórios financeiros personalizados",
      "Regularização e acompanhamento fiscal",
      "Atendimento online e presencial",
    ],
    includesPrevious: "Inclui tudo do Plano Prata, mais:",
    featured: true,
  },
  {
    slug: "diamante",
    name: "Plano Diamante",
    badge: "Completo",
    description:
      "Contabilidade estratégica e assessoria completa. Para empresas que precisam de acompanhamento próximo, suporte técnico, participação em licitações e gestão financeira completa.",
    features: [
      "Assessoria completa em licitações públicas",
      "BPO financeiro (conciliação, contas a pagar/receber)",
      "Planejamento e revisão tributária avançada",
      "Acompanhamento estratégico com relatórios gerenciais",
      "Apoio com certidões, balanços e propostas técnicas",
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
