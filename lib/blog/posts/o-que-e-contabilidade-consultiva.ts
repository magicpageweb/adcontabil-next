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

export const O_QUE_E_CONTABILIDADE_CONSULTIVA_POST: BlogPost = {
  slug: "o-que-e-contabilidade-consultiva",
  title: "O que é contabilidade consultiva e por que ela é diferente",
  seoTitle: "O que é contabilidade consultiva",
  seoDescription:
    "Entenda a diferença entre contabilidade operacional e consultiva — e como isso muda as decisões do negócio.",
  excerpt:
    "Contabilidade consultiva vai além de entregar guia: acompanha decisões de regime, pró-labore e estrutura com orientação contínua.",
  keywords: [
    "contabilidade consultiva",
    "contador consultivo",
    "orientação tributária",
    "contabilidade estratégica",
    "AD Contábil",
  ],
  tags: ["consultiva", "marca", "gestão", "orientação"],
  summaryBullets: [
    "Operacional cumpre obrigações; consultiva participa das decisões.",
    "Regime, pró-labore e estrutura pedem revisão contínua.",
    "A relação consultiva antecipa problemas em vez de só reagir.",
    "Na AD Contábil, o acompanhamento muda conforme a fase do negócio.",
  ],
  category: "gestao-contabil",
  publishedAt: "2026-11-05",
  readingMinutes: 7,
  featured: true,
  coverImage: "/blog/o-que-e-contabilidade-consultiva.webp",
  coverAlt:
    "Reunião profissional em mesa com papéis, sem rostos reconhecíveis, tom consultivo",
  relatedSlugs: [
    "bastidores-ad-contabil-acompanha-cliente",
    "escritorio-de-contabilidade-gestao-estrategica",
    "planejamento-tributario-para-profissionais-da-saude",
  ],
  faq: [
    {
      q: "Contabilidade consultiva substitui as obrigações legais?",
      a: "Não. Ela inclui o cumprimento das obrigações e acrescenta orientação para decisões do negócio.",
    },
    {
      q: "Para quem faz sentido?",
      a: "Para quem quer mais do que “estar em dia”: empresas e profissionais que precisam de clareza antes de contratar, mudar regime ou reorganizar a operação.",
    },
  ],
  content: [
    p(
      "Muita gente só percebe a diferença entre um serviço contábil tradicional e um consultivo quando já precisou de uma decisão mais estratégica e não teve esse suporte.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), a proposta é unir cumprimento das obrigações com orientação próxima — especialmente para profissionais da saúde e empresas em crescimento.",
    ),

    h2("O modelo tradicional"),
    p(
      "Em geral, limita-se a cumprir as obrigações legais: calcular e emitir guia de imposto, enviar declarações obrigatórias, fechar a folha de pagamento. É um serviço necessário, mas reativo — resolve o que é obrigatório, no prazo, sem necessariamente discutir o motivo por trás dos números.",
    ),

    h2("O que muda na contabilidade consultiva"),
    ul(
      "Simular o impacto de uma contratação antes que ela aconteça.",
      "Acompanhar se o regime tributário continua fazendo sentido conforme o faturamento muda.",
      "Trazer à conversa pontos que o empresário talvez não soubesse que precisava perguntar.",
      "Conectar a rotina fiscal às decisões de crescimento e estrutura.",
    ),
    p(
      "Esse olhar se conecta ao ",
      link(
        "/blog/planejamento-tributario-para-profissionais-da-saude",
        "planejamento tributário",
      ),
      " e à ",
      link(
        "/blog/escritorio-de-contabilidade-gestao-estrategica",
        "gestão contábil estratégica",
      ),
      ".",
    ),

    h2("Por que isso importa mais do que parece"),
    p(
      "Decisões como regime tributário, pró-labore e estrutura societária, quando tomadas sem acompanhamento, tendem a ser definidas uma vez e esquecidas — mesmo quando o negócio muda de tamanho ou de momento. É o acompanhamento contínuo que evita que decisões antigas fiquem desatualizadas sem ninguém perceber.",
    ),
    callout(
      "resumo",
      "Estar em dia com o imposto é o mínimo. Estar no controle do negócio pede conversa regular sobre números e decisões.",
    ),

    h2("O que esperar de uma relação consultiva"),
    ul(
      "Contato mais frequente do que só “na hora do imposto”.",
      "Disposição para explicar o porquê de cada número.",
      "Postura de antecipar problemas ou oportunidades, em vez de só reagir.",
    ),
    p(
      "Para ver como isso se desdobra na prática da ",
      BRAND,
      ", leia ",
      link(
        "/blog/bastidores-ad-contabil-acompanha-cliente",
        "como acompanhamos o cliente do início ao crescimento",
      ),
      " e conheça a página ",
      link("/quem-somos", "Quem somos"),
      ".",
    ),

    h2("Próximo passo"),
    p(
      "Se você busca orientação contábil com proximidade, conheça os ",
      link("/servicos", "serviços"),
      " da ",
      BRAND,
      " ou solicite uma análise. Contabilidade consultiva é método de acompanhamento — não promessa de resultado tributário.",
    ),
  ],
};
