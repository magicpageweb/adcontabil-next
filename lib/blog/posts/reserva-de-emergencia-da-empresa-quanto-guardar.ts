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

export const RESERVA_DE_EMERGENCIA_DA_EMPRESA_QUANTO_GUARDAR_POST: BlogPost = {
  slug: "reserva-de-emergencia-da-empresa-quanto-guardar",
  title: "Reserva de emergência da empresa: quanto guardar e onde deixar",
  seoTitle: "Reserva de emergência da empresa",
  seoDescription:
    "Entenda por que a reserva de emergência da empresa importa, quanto considerar e como começar com constância.",
  excerpt:
    "Uma reserva de emergência empresarial separa um mês ruim de uma crise de caixa. Veja referências de quanto guardar, prioridade de liquidez e como começar.",
  keywords: [
    "reserva de emergência empresa",
    "caixa empresa",
    "liquidez empresarial",
    "custos fixos",
    "organização financeira clínica",
  ],
  tags: ["caixa", "reserva", "finanças", "gestão"],
  summaryBullets: [
    "A reserva cobre custos fixos, não o faturamento.",
    "Priorize liquidez e baixo risco acima de rentabilidade.",
    "Forme a reserva com percentual fixo mensal, não com “o que sobrar”.",
    "Separe claramente o caixa da empresa do dinheiro pessoal.",
  ],
  category: "gestao-contabil",
  publishedAt: "2026-11-05",
  readingMinutes: 6,
  featured: false,
  coverImage: "/blog/reserva-de-emergencia-da-empresa-quanto-guardar.webp",
  coverAlt:
    "Composição sóbria sugerindo reserva financeira e liquidez empresarial",
  relatedSlugs: [
    "organizar-financas-pessoais-no-dia-a-dia",
    "investimentos-basicos-por-onde-comecar-com-cnpj",
    "o-que-e-contabilidade-consultiva",
  ],
  faq: [
    {
      q: "A reserva da empresa e a reserva pessoal são a mesma coisa?",
      a: "Não. Cada uma tem objetivo próprio. Misturar caixa da empresa com finanças pessoais aumenta o risco operacional.",
    },
    {
      q: "A AD Contábil indica produtos de investimento?",
      a: "Não. O foco aqui é organização de caixa e liquidez. Escolha de produtos financeiros deve ser feita com profissional habilitado.",
    },
  ],
  content: [
    p(
      "Assim como nas finanças pessoais, uma reserva de emergência empresarial é o que separa um mês ruim de uma crise de caixa.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), tratamos esse tema como organização financeira — não como recomendação de produtos de investimento.",
    ),

    h2("Por que toda empresa precisa de uma"),
    p(
      "Receita por convênio que atrasa, um cliente grande que demora a pagar, um mês sazonalmente mais fraco — esses imprevistos são praticamente garantidos ao longo do tempo. Sem reserva, cada um desses eventos obriga a empresa a recorrer a crédito caro ou a atrasar compromissos.",
    ),

    h2("Quanto guardar"),
    p(
      "Uma referência comum é cobrir de três a seis meses de custos fixos (não de faturamento) — o valor mínimo que a empresa precisa para se manter operando mesmo sem receita entrando. Esse número fica mais claro depois de ter o ponto de equilíbrio definido.",
    ),
    callout(
      "dica",
      "Some aluguel, folha essencial, sistemas, impostos recorrentes e demais custos que não param quando a receita cai. Esse é o base da meta.",
    ),

    h2("Onde deixar esse dinheiro"),
    p(
      "A reserva de emergência da empresa deve priorizar liquidez (poder resgatar rápido, sem perda) acima de rentabilidade. Produtos conservadores, com liquidez adequada e baixo risco, costumam ser mais adequados do que alternativas de maior retorno com resgate demorado ou risco de perda de capital.",
    ),
    p(
      "Este texto não recomenda produtos específicos. A ",
      BRAND,
      " orienta a organização contábil e o fluxo de caixa; a escolha de aplicação financeira, quando couber, deve ser feita com profissional habilitado.",
    ),

    h2("Como começar, se ainda não existe"),
    ul(
      "Defina um percentual fixo do faturamento ou do lucro de cada mês para a reserva.",
      "Separe o valor assim que a receita entrar — não espere “sobrar” no fim do mês.",
      "Acompanhe a meta até atingir o número calculado.",
      "Revise a meta quando custos fixos mudarem.",
    ),
    p(
      "Quem também quer organizar o lado pessoal pode ler ",
      link(
        "/blog/organizar-financas-pessoais-no-dia-a-dia",
        "como organizar as finanças pessoais no dia a dia",
      ),
      ". Para o próximo passo de organização entre PJ e PF, veja ",
      link(
        "/blog/investimentos-basicos-por-onde-comecar-com-cnpj",
        "por onde começar quando se tem CNPJ",
      ),
      ".",
    ),

    h2("Próximo passo"),
    p(
      "Se quiser estruturar caixa, pró-labore e rotina financeira com apoio consultivo, conheça os ",
      link("/servicos", "serviços da AD Contábil"),
      " ou solicite uma análise. Organização de reserva é decisão de gestão — e ganha força com números claros.",
    ),
  ],
};
