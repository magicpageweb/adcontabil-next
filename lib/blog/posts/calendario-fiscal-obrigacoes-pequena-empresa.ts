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

export const CALENDARIO_FISCAL_OBRIGACOES_PEQUENA_EMPRESA_POST: BlogPost = {
  slug: "calendario-fiscal-obrigacoes-pequena-empresa",
  title: "Calendário fiscal para pequenas empresas: obrigações essenciais",
  seoTitle: "Calendário fiscal para pequenas empresas",
  seoDescription:
    "Organize o calendário fiscal da sua empresa: obrigações recorrentes, anuais e o erro mais comum que gera multa.",
  excerpt:
    "Monte um calendário fiscal simples para a pequena empresa: obrigações mensais, compromissos anuais e a rotina que reduz risco de multa e atraso.",
  keywords: [
    "calendário fiscal pequena empresa",
    "obrigações fiscais mensais",
    "prazos contábeis",
    "rotina fiscal ME",
    "obrigaciones acessórias",
    "organização fiscal empresa",
  ],
  tags: ["calendário fiscal", "prazos", "pequena empresa", "rotina"],
  summaryBullets: [
    "Perder prazo costuma custar mais do que o imposto em si.",
    "Separe obrigações mensais e anuais em um só lugar.",
    "Revise o calendário com a contabilidade pelo menos uma vez ao ano.",
    "Trate o fiscal como rotina do negócio, não como evento isolado.",
  ],
  category: "gestao-contabil",
  publishedAt: "2026-11-04",
  readingMinutes: 7,
  featured: false,
  coverImage: "/blog/calendario-fiscal-obrigacoes-pequena-empresa.webp",
  coverAlt: "Notas de tarefas e organização em ambiente de trabalho, sugerindo rotina e prazos fiscais",
  relatedSlugs: [
    "nota-fiscal-eletronica-erros-comuns-que-geram-multa",
    "esocial-para-pequenas-empresas-o-que-observar",
    "documentos-contabilidade-consultorio-checklist",
  ],
  faq: [
    {
      q: "Preciso de um software caro para organizar o calendário fiscal?",
      a: "Não. Agenda compartilhada, planilha ou sistema de gestão funcionam — o essencial é manter periodicidade e dia-limite visíveis.",
    },
    {
      q: "O calendário é igual para todo tipo de empresa?",
      a: "Não. Regime, porte, folha e atividade mudam as obrigações. Por isso a lista precisa ser montada caso a caso.",
    },
  ],
  content: [
    p(
      "Perder um prazo fiscal costuma custar mais caro do que o imposto em si — multa e juros se acumulam rápido. Organizar um calendário próprio, com as obrigações recorrentes da empresa, é uma das formas mais simples de reduzir esse risco.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), vemos que empresas que tratam o calendário fiscal com a mesma prioridade de pagar fornecedor ou fechar venda tendem a ter menos sustos. O objetivo deste artigo é ajudar você a montar essa rotina com clareza.",
    ),
    ressalvaLegislacao(),

    h2("Obrigações que se repetem todo mês"),
    p(
      "A maioria das empresas tem uma rotina mensal fixa. Dependendo do regime e da estrutura, isso pode incluir:",
    ),
    ul(
      "Apuração e pagamento do imposto do regime (por exemplo, DAS no Simples Nacional).",
      "Guias de FGTS e INSS quando há funcionários.",
      "Envio de obrigações acessórias ligadas à folha.",
      "Conferência de notas emitidas e documentos para a contabilidade.",
    ),
    p(
      "Se você ainda está organizando o fluxo documental, o ",
      link(
        "/blog/documentos-contabilidade-consultorio-checklist",
        "checklist mensal de documentos",
      ),
      " ajuda a alimentar essa rotina com consistência.",
    ),

    h2("Obrigações anuais"),
    p(
      "Além das mensais, existem compromissos que acontecem uma vez por ano — declarações de imposto de renda da pessoa jurídica e dos sócios, declarações específicas do regime tributário e renovações de licenças ou alvarás com prazo de validade.",
    ),
    p(
      "Esses eventos costumam ser os mais esquecidos justamente porque não aparecem todo mês. Por isso merecem espaço próprio no calendário, com alerta antecipado.",
    ),

    h2("Como montar o calendário"),
    ul(
      "Liste cada obrigação com periodicidade e dia-limite de pagamento ou envio.",
      "Centralize em um só lugar: agenda compartilhada, planilha ou sistema.",
      "Defina quem é responsável por avisar a contabilidade sobre admissões, demissões e mudanças operacionais.",
      "Revise o calendário com a contadora pelo menos uma vez ao ano.",
    ),
    p(
      "Temas como ",
      link(
        "/blog/nota-fiscal-eletronica-erros-comuns-que-geram-multa",
        "erros na nota fiscal eletrônica",
      ),
      " e ",
      link(
        "/blog/esocial-para-pequenas-empresas-o-que-observar",
        "pendências no eSocial",
      ),
      " entram naturalmente nessa rotina de conferência.",
    ),

    h2("O erro mais comum"),
    p(
      "Tratar cada obrigação como um evento isolado, resolvido “quando lembra”, em vez de como parte de uma rotina fixa do negócio. O calendário fiscal só funciona quando vira hábito operacional.",
    ),
    callout(
      "dica",
      "Comece simples: três colunas — obrigação, periodicidade e responsável. Depois refine com a contabilidade.",
    ),

    h2("Próximo passo"),
    p(
      "Se quiser montar o calendário com os prazos vigentes do seu regime, fale com a equipe da ",
      BRAND,
      " pelos ",
      link("/servicos", "serviços contábeis"),
      " ou solicite uma análise. Este artigo não cita datas ou valores específicos porque eles mudam conforme o regime, o porte e o ano-calendário.",
    ),
  ],
};
