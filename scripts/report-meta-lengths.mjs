/**
 * Static meta length checklist (manual sync with pages).
 * Run: node scripts/report-meta-lengths.mjs
 */
const BRAND = "AD Contábil";
const rows = [
  ["/", `${BRAND} — Contabilidade para Saúde e Empresas`, "Contabilidade consultiva com especialização em saúde e atendimento a empresas, MEIs e profissionais. Santa Cruz do Sul/RS e todo o Brasil."],
  ["/contabilidade-para-medicos-em-santa-cruz-do-sul", "Contabilidade para Médicos em Santa Cruz do Sul", "Contabilidade para médicos em Santa Cruz do Sul/RS: CNPJ, Fator R, Simples e PF x PJ para consultórios e clínicas. Atendimento local e remoto."],
  ["/solucoes/fator-r", "Fator R e Planejamento Tributário", "Entenda o Fator R no Simples Nacional e como a AD Contábil analisa folha e faturamento para orientar o enquadramento — sem prometer alíquota."],
  ["/solucoes/carne-leao-pj", "Carnê-Leão e Migração PF para PJ", "Compare Carnê-Leão (PF) e PJ com orientação da AD Contábil. Análise caso a caso, sem garantia de economia ou isenção automática."],
  ["/blog/contabilidade-em-santa-cruz-do-sul", "Contabilidade em Santa Cruz do Sul", "Como escolher contabilidade em Santa Cruz do Sul: abertura de empresa, tributação e BPO — com a AD Contábil."],
];

console.log("path | titleLen | fullTitleLen | descLen | title");
for (const [path, title, desc] of rows) {
  const full = title.includes(BRAND) ? title : `${title} — ${BRAND}`;
  console.log(`${path} | ${title.length} | ${full.length} | ${desc.length} | ${title}`);
}
