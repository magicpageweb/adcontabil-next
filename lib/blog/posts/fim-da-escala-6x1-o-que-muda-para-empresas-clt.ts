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

export const FIM_DA_ESCALA_6X1_O_QUE_MUDA_PARA_EMPRESAS_CLT_POST: BlogPost = {
  slug: "fim-da-escala-6x1-o-que-muda-para-empresas-clt",
  title: "Fim da escala 6x1: o que muda para empresas com CLT",
  seoTitle: "Fim da escala 6x1: o que muda para empresas",
  seoDescription:
    "Veja o que a EC 141/2026 muda na jornada CLT e quais pontos a empresa deve revisar com a contabilidade.",
  excerpt:
    "A EC 141/2026 extingue a escala 6x1 e institui a 5x2 como regra geral no CLT. Entenda transição, exceções e o que revisar na folha.",
  keywords: [
    "fim da escala 6x1",
    "EC 141/2026",
    "jornada 5x2",
    "folha de pagamento",
    "escala CLT",
  ],
  tags: ["CLT", "jornada", "folha", "legislação"],
  summaryBullets: [
    "Regra geral passa a ser 5x2 no CLT, conforme a EC 141/2026.",
    "Transição de carga horária em etapas, sem corte de salário previsto no texto-base.",
    "Acordos coletivos e situações específicas podem ter regras próprias.",
    "Mapeie jornada atual e simule impacto na escala de atendimento.",
  ],
  category: "gestao-contabil",
  publishedAt: "2026-11-05",
  readingMinutes: 8,
  featured: false,
  coverImage: "/blog/fim-da-escala-6x1-o-que-muda-para-empresas-clt.webp",
  coverAlt: "Planner e calendário em composição minimalista, organização de jornada",
  relatedSlugs: [
    "esocial-para-pequenas-empresas-o-que-observar",
    "calendario-fiscal-obrigacoes-pequena-empresa",
  ],
  faq: [
    {
      q: "A regra já está em vigor?",
      a: "Confirme a vigência e a regulamentação na data da decisão. O texto-base aponta entrada em até 60 dias após a promulgação.",
    },
    {
      q: "Microempresas têm transição própria?",
      a: "O texto menciona lei complementar futura para transição específica de micro e pequenas empresas e MEIs. Acompanhe a regulamentação.",
    },
  ],
  content: [
    p(
      "No dia 16 de outubro de 2026, o Congresso Nacional promulgou a Emenda Constitucional nº 141/2026, que extingue a escala 6x1 e institui a 5x2 como regra geral para trabalhadores em regime CLT. Para quem administra um negócio com funcionários registrados, entender prazos e transição evita dor de cabeça com folha e escala.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), essa leitura deve caminhar com a rotina de ",
      link(
        "/blog/esocial-para-pequenas-empresas-o-que-observar",
        "eSocial e folha",
      ),
      ".",
    ),
    ressalvaLegislacao(),

    h2("O que foi promulgado"),
    p(
      "A EC 141/2026 garante dois dias de descanso semanal — consecutivos ou não, dependendo do acordo — para empregados CLT, substituindo o modelo de seis dias trabalhados por um de descanso. A entrada em vigor é em até 60 dias após a promulgação, apontando para meados de dezembro de 2026. Confirme a data efetiva vigente.",
    ),

    h2("Como funciona a transição da jornada"),
    p(
      "A redução da carga horária semanal acontece em duas etapas, sem corte de salário, conforme o texto-base:",
    ),
    ul(
      "Nos primeiros 60 dias: de 44 horas semanais para 42 horas.",
      "Cerca de 12 meses depois: de 42 horas para 40 horas semanais.",
    ),
    p(
      "No período entre as etapas, as horas que ainda excedem as 40h semanais se distribuem ao longo dos cinco dias — na prática, cerca de 8h24 por dia. Depois da transição completa, o limite passa a ser de 8 horas diárias e 40 semanais, em cinco dias.",
    ),
    callout(
      "importante",
      "Números de transição e exceções podem receber regulamentação complementar. Valide com a contabilidade e o jurídico trabalhista antes de alterar escalas.",
    ),

    h2("Exceções que valem a pena conhecer"),
    ul(
      "Acordo ou convenção coletiva pode prever escala diferente da 5x2, com folgas compensadas no mesmo mês.",
      "Trabalhadores com diploma de ensino superior em determinada faixa salarial podem ter jornada diferenciada, mantendo a 5x2.",
      "Terceirizados da administração pública têm 12 meses para se adequar.",
      "Lei complementar futura deve tratar de transição específica para micro e pequenas empresas e MEIs.",
    ),

    h2("O que fazer agora"),
    ul(
      "Mapear quantos funcionários estão em CLT e qual a jornada atual.",
      "Simular o impacto da redução de 44h para 42h (e depois 40h) na escala de atendimento.",
      "Avaliar se será preciso contratar mais horas de equipe.",
      "Conversar com a contadora para simular o impacto na folha com antecedência.",
    ),

    h2("Próximo passo"),
    p(
      "Fonte de referência: Emenda Constitucional nº 141/2026. Avalie o impacto na folha com a ",
      BRAND,
      " pelos ",
      link("/servicos", "serviços"),
      ". Inclua a revisão no ",
      link(
        "/blog/calendario-fiscal-obrigacoes-pequena-empresa",
        "calendário fiscal",
      ),
      " da empresa.",
    ),
  ],
};
