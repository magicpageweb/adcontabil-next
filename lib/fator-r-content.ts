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
  // REVISAR: conferir com a contadora — alíquotas nominais da 1ª faixa
  caption: "Comparativo ilustrativo — 1ª faixa (alíquota nominal)",
  rows: [
    { anexo: "Anexo III", aliquota: "6%", contexto: "Quando o Fator R atinge o limiar legal" },
    { anexo: "Anexo V", aliquota: "15,5%", contexto: "Enquadramento típico sem Fator R suficiente" },
  ],
} as const;

export const FATOR_R_EXAMPLE = {
  // REVISAR: conferir com a contadora — números do exemplo
  title: "Exemplo numérico ilustrativo (não substitui análise)",
  body: "Suponha receita bruta de R$ 600.000 nos últimos 12 meses e folha (pró-labore + encargos) de R$ 180.000 no mesmo período. O Fator R seria 180.000 ÷ 600.000 = 30%. Nesse exemplo hipotético, o resultado ficaria acima de 28%. O enquadramento real depende de regras vigentes, atividade, CNAE e da apuração correta da folha e da receita — por isso a AD Contábil trata o cálculo como análise técnica, sem prometer alíquota.",
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
