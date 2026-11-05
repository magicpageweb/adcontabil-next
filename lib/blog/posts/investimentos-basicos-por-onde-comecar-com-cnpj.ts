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

export const INVESTIMENTOS_BASICOS_POR_ONDE_COMECAR_COM_CNPJ_POST: BlogPost = {
  slug: "investimentos-basicos-por-onde-comecar-com-cnpj",
  title: "Investimentos básicos: por onde começar quando se tem CNPJ",
  seoTitle: "Investimentos básicos para quem tem CNPJ",
  seoDescription:
    "Separe caixa da empresa e finanças pessoais antes de investir — e veja por onde começar com organização.",
  excerpt:
    "Antes de investir, separe PJ e PF, forme reserva pessoal e entenda perfil e impacto tributário. Conteúdo de organização — não de indicação de produtos.",
  keywords: [
    "investimentos para quem tem CNPJ",
    "pró-labore",
    "reserva pessoal",
    "separar PJ e PF",
    "organização financeira sócio",
  ],
  tags: ["organização", "CNPJ", "finanças", "IR"],
  summaryBullets: [
    "Primeiro: separar dinheiro da empresa do pessoal.",
    "Reserva de emergência pessoal antes de maior risco.",
    "Perfil e objetivo definem liquidez necessária.",
    "AD Contábil não indica produtos financeiros.",
  ],
  category: "gestao-contabil",
  publishedAt: "2026-11-05",
  readingMinutes: 7,
  featured: false,
  coverImage: "/blog/investimentos-basicos-por-onde-comecar-com-cnpj.webp",
  coverAlt: "Composição abstrata de planejamento financeiro e crescimento organizado",
  relatedSlugs: [
    "reserva-de-emergencia-da-empresa-quanto-guardar",
    "organizar-financas-pessoais-no-dia-a-dia",
    "como-declarar-investimentos-no-imposto-de-renda",
  ],
  faq: [
    {
      q: "A AD Contábil recomenda onde investir?",
      a: "Não. Orientamos organização contábil, pró-labore, caixa e declaração. Produtos financeiros devem ser avaliados com profissional habilitado.",
    },
  ],
  content: [
    p(
      "Quem tem uma empresa muitas vezes concentra toda a atenção financeira no negócio e deixa a organização pessoal em segundo plano — mesmo tendo, muitas vezes, mais capacidade de poupança do que imagina.",
    ),
    p(
      "Na ",
      BRAND_LEGAL,
      " (",
      BRAND,
      "), este tema é tratado como organização e tributação — não como recomendação de investimento ou de produto financeiro.",
    ),
    callout(
      "importante",
      "Este artigo não é assessoria de investimentos. Não indica aplicações, rentabilidades nem carteiras. Para escolha de produtos, busque profissional habilitado.",
    ),

    h2("Primeiro: separar o que é da empresa do que é pessoal"),
    p(
      "Antes de pensar em investir, é essencial que o pró-labore ou a distribuição de lucros estejam claramente definidos e separados do caixa da empresa. Investir com dinheiro que ainda pertence à operação do negócio é um risco.",
    ),
    p(
      "Relacione com a ",
      link(
        "/blog/reserva-de-emergencia-da-empresa-quanto-guardar",
        "reserva de emergência da empresa",
      ),
      " e com ",
      link(
        "/blog/organizar-financas-pessoais-no-dia-a-dia",
        "finanças pessoais no dia a dia",
      ),
      ".",
    ),

    h2("Reserva de emergência pessoal primeiro"),
    p(
      "Da mesma forma que a empresa precisa de uma reserva, a pessoa física também precisa — cobrindo alguns meses de despesas pessoais, em aplicação de alta liquidez, antes de buscar qualquer alternativa de maior risco ou prazo mais longo.",
    ),

    h2("Entender o próprio perfil e objetivo"),
    ul(
      "Curto prazo (reserva, meta próxima): priorize liquidez e segurança.",
      "Longo prazo (aposentadoria, patrimônio): a complexidade pode aumentar conforme conhecimento e tolerância a oscilação.",
    ),
    p(
      "A definição de produtos específicos fica a cargo de profissional de investimentos — não da contabilidade.",
    ),

    h2("Diversificar com organização, não com pressa"),
    p(
      "Não é preciso grande capital para começar a organizar categorias diferentes ao longo do tempo. O importante é começar com o que cabe no orçamento e aumentar a complexidade conforme conhecimento e capital crescem — sempre com orientação adequada.",
    ),

    h2("Pensar no impacto tributário desde o início"),
    p(
      "Diferentes investimentos têm regras diferentes de tributação e de declaração no Imposto de Renda. Vale entender isso antes — e complementar com ",
      link(
        "/blog/como-declarar-investimentos-no-imposto-de-renda",
        "como declarar investimentos no IR",
      ),
      ".",
    ),

    h2("Próximo passo"),
    p(
      "Se o gargalo é pró-labore, caixa ou declaração, a ",
      BRAND,
      " pode ajudar pelos ",
      link("/servicos", "serviços"),
      ". Para escolher onde aplicar, busque assessoria de investimentos habilitada — são papéis diferentes.",
    ),
  ],
};
