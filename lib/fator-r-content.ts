/** Conteúdo expandido da página pilar /solucoes/fator-r */

export const FATOR_R_UPDATED_AT = "2026-11-05";

export const FATOR_R_DIRECT_ANSWER =
  "O Fator R é a relação entre a folha de salários (incluindo pró-labore e encargos) e a receita bruta, ambas apuradas nos últimos 12 meses. Para atividades da saúde no Simples Nacional, esse indicador ajuda a avaliar se a operação se enquadra no Anexo III ou no Anexo V — a análise é caso a caso e não garante alíquota nem economia.";

export const FATOR_R_RULE_PARAS = [
  // REVISAR: conferir com a contadora — LC 123/2006, art. 18, §5º-J e §5º-M; Resolução CGSN 140/2018
  "Em linhas gerais, o Fator R corresponde à folha de salários dos últimos 12 meses (incluindo pró-labore e encargos) dividida pela receita bruta dos últimos 12 meses.",
  // REVISAR: conferir com a contadora — limiar de 28% e anexos III/V
  "Quando o resultado é igual ou superior a 28%, a atividade pode ser tributada pelo Anexo III; abaixo disso, pelo Anexo V — conforme a legislação do Simples Nacional aplicável ao perfil da empresa.",
] as const;

export const FATOR_R_TABLE = {
  // REVISAR: conferir com a contadora — alíquotas nominais da 1ª faixa (RBT12 até R$ 180 mil)
  caption:
    "Comparativo ilustrativo — alíquotas NOMINAIS da 1ª faixa (RBT12 até R$ 180 mil)",
  note:
    // REVISAR: conferir com a contadora — texto sobre alíquota efetiva vs nominal
    "Esses percentuais são nominais da 1ª faixa. A alíquota efetiva varia conforme a faixa de receita bruta acumulada em 12 meses (RBT12) e a parcela a deduzir prevista na legislação — não aplique 6% ou 15,5% automaticamente a faturamentos de faixas superiores.",
  rows: [
    {
      anexo: "Anexo III",
      aliquota: "6%",
      contexto: "Quando o Fator R atinge o limiar legal (1ª faixa)",
    },
    {
      anexo: "Anexo V",
      aliquota: "15,5%",
      contexto: "Enquadramento típico sem Fator R suficiente (1ª faixa)",
    },
  ],
} as const;

export const FATOR_R_EXAMPLE = {
  title: "Exemplo numérico ilustrativo (não substitui análise)",
  paragraphs: [
    // REVISAR: conferir com a contadora — números do exemplo (RBT12 e folha)
    "Suponha receita bruta de R$ 600.000 nos últimos 12 meses (3ª faixa do Simples: R$ 360.000,01 a R$ 720.000) e folha (pró-labore + encargos) de R$ 180.000 no mesmo período. O Fator R seria 180.000 ÷ 600.000 = 30%. Nesse exemplo hipotético, o resultado ficaria acima de 28%.",
    // REVISAR: conferir com a contadora — alíquotas/deduções da 3ª faixa Anexos III e V
    "Comparativo ilustrativo na 3ª faixa (não use as alíquotas nominais da 1ª faixa neste cenário): Anexo III com 13,5% nominal e dedução de R$ 17.640 → alíquota efetiva ≈ 10,56%; Anexo V com 19,5% nominal e dedução de R$ 9.900 → alíquota efetiva ≈ 17,85%.",
    // REVISAR: conferir com a contadora — fórmula da alíquota efetiva
    "Fórmula da alíquota efetiva: (RBT12 × alíquota nominal − parcela a deduzir) ÷ RBT12. Ex.: Anexo III → (600.000 × 0,135 − 17.640) ÷ 600.000 ≈ 10,56%.",
    "Trata-se de exemplo ilustrativo — não substitui análise. O enquadramento real depende de regras vigentes, atividade, CNAE e da apuração correta da folha e da receita.",
  ],
} as const;

export const FATOR_R_FAQS = [
  {
    q: "O Fator R garante alíquota de 6%?",
    a: "Não. O indicador influencia o anexo possível, mas o enquadramento depende da legislação, do CNAE, da apuração correta e do perfil da operação. Não há garantia de alíquota ou economia.",
  },
  {
    q: "O que entra na folha para o cálculo?",
    a: "Em regra, consideram-se salários, pró-labore e encargos dos últimos 12 meses, conforme a legislação do Simples. A composição exata deve ser confirmada com a contabilidade.",
  },
  {
    q: "Preciso acompanhar o Fator R todo mês?",
    a: "Sim. Mudanças de faturamento ou de folha podem alterar o indicador ao longo do ano. O acompanhamento preventivo evita surpresas na apuração.",
  },
  {
    q: "Profissionais da saúde sempre estão no Anexo V?",
    a: "Muitas atividades da saúde iniciam no Anexo V, mas o Fator R pode permitir o Anexo III quando os requisitos legais são atendidos. Cada caso precisa de análise.",
  },
  {
    q: "A AD Contábil calcula o Fator R pela gente?",
    a: "Sim. Incluímos o cálculo e o acompanhamento na orientação tributária, com simulações antes de decisões de contratação ou pró-labore — sempre sem promessa de resultado.",
  },
] as const;

export const FATOR_R_SUPPORT_LINKS = [
  {
    href: "/blog/como-funciona-o-fator-r-para-profissionais-da-saude",
    label: "Como funciona o Fator R para profissionais da saúde",
  },
  {
    href: "/blog/simples-nacional-para-profissionais-da-saude",
    label: "Simples Nacional para profissionais da saúde",
  },
  {
    href: "/blog/simples-nacional-faixas-de-faturamento-e-imposto",
    label: "Faixas do Simples Nacional e imposto",
  },
  {
    href: "/blog/planejamento-tributario-para-profissionais-da-saude",
    label: "Planejamento tributário para profissionais da saúde",
  },
] as const;
