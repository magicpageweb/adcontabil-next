import type { BlogPost } from "@/lib/blog";
import {
  BRAND,
  BRAND_LEGAL,
  callout,
  h2,
  link,
  p,
  ul,
} from "./_helpers";

export const BASTIDORES_AD_CONTABIL_ACOMPANHA_CLIENTE_POST: BlogPost = {
  slug: "bastidores-ad-contabil-acompanha-cliente",
  title: "Como a AD Contábil acompanha o cliente do início ao crescimento",
  seoTitle: "Como a AD Contábil acompanha o cliente",
  seoDescription:
    "Conheça as fases do acompanhamento da AD Contábil: organização inicial, crescimento e planejamento.",
  excerpt:
    "Do enquadramento inicial ao planejamento de maturidade: como a AD Contábil acompanha o cliente em cada fase do negócio, sem inventar cases.",
  keywords: [
    "contabilidade AD Contábil",
    "acompanhamento contábil",
    "parceiro contábil",
    "contabilidade consultiva Santa Cruz",
  ],
  tags: ["AD Contábil", "bastidores", "acompanhamento", "marca"],
  summaryBullets: [
    "No início: organização, regime, CNAE e rotina básica.",
    "No crescimento: revisão de regime e simulações antes das decisões.",
    "Na maturidade: planejamento de mais longo prazo dentro da lei.",
    "O fio condutor é não deixar o cliente adivinhar sozinho.",
  ],
  category: "gestao-contabil",
  publishedAt: "2026-11-05",
  readingMinutes: 6,
  featured: false,
  coverImage: "/blog/bastidores-ad-contabil-acompanha-cliente.webp",
  coverAlt: "Workspace compartilhado em tom institucional, parceria profissional",
  relatedSlugs: [
    "o-que-e-contabilidade-consultiva",
    "escritorio-de-contabilidade-em-santa-cruz-do-sul-guia",
    "escritorio-de-contabilidade-gestao-estrategica",
  ],
  faq: [
    {
      q: "Isso é um case de cliente real?",
      a: "Não. O texto descreve fases típicas de acompanhamento, sem dados ou histórias identificáveis de clientes.",
    },
  ],
  content: [
    p(
      "Receber um cliente novo é só o começo de uma relação que, bem conduzida, atravessa várias fases diferentes do negócio dele.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), o acompanhamento muda conforme a fase — sempre na linha da ",
      link(
        "/blog/o-que-e-contabilidade-consultiva",
        "contabilidade consultiva",
      ),
      ". Conheça também ",
      link("/quem-somos", "quem somos"),
      ".",
    ),

    h2("No início: organização e enquadramento"),
    ul(
      "Formalizar corretamente a empresa (regime, CNAE, estrutura).",
      "Separar contas pessoais das contas da empresa.",
      "Estabelecer rotina básica de controle financeiro, muitas vezes do zero.",
    ),

    h2("No crescimento: revisão e antecipação"),
    p(
      "Conforme o faturamento cresce, o acompanhamento muda: revisar se o regime ainda serve, simular impacto de contratações e discutir decisões estruturais (sociedade, expansão, novos investimentos) antes que aconteçam — não depois.",
    ),

    h2("Na maturidade: estratégia e planejamento"),
    p(
      "Com o negócio mais consolidado, a conversa se volta para planejamento de mais longo prazo — sucessão, diversificação, estruturação patrimonial — sempre dentro do que a legislação permite.",
    ),
    callout(
      "resumo",
      "Em qualquer fase, a lógica se repete: o cliente não precisa adivinhar sozinho se uma decisão financeira ou tributária faz sentido.",
    ),

    h2("O fio condutor"),
    p(
      "Esse acompanhamento é o que diferencia estar “em dia com o imposto” de estar, de fato, no controle do próprio negócio. Para quem busca escritório em Santa Cruz do Sul, veja também o ",
      link(
        "/blog/escritorio-de-contabilidade-em-santa-cruz-do-sul-guia",
        "guia local",
      ),
      " e a ",
      link(
        "/blog/escritorio-de-contabilidade-gestao-estrategica",
        "visão de gestão estratégica",
      ),
      ".",
    ),

    h2("Próximo passo"),
    p(
      "Quer conhecer a forma de trabalho da ",
      BRAND,
      "? Explore os ",
      link("/servicos", "serviços"),
      " ou solicite uma conversa. Sem promessa de resultado — com método de acompanhamento.",
    ),
  ],
};
