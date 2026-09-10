import type {
  LeadClassification,
  LeadInterest,
  LeadMoment,
  LeadProfile,
  LeadScoreResult,
} from "@/lib/leads/types";

/** Pontuação centralizada — ajustar aqui quando a regra comercial mudar. */
export const PROFILE_SCORES: Record<LeadProfile, number> = {
  Empresa: 20,
  MEI: 15,
  "Profissional da saúde": 20,
  "Estou começando um negócio": 15,
  "Pessoa física": 5,
  Outro: 5,
};

export const INTEREST_SCORES: Record<LeadInterest, number> = {
  Contabilidade: 20,
  "Abertura de empresa": 20,
  "Gestão tributária": 20,
  "BPO Financeiro": 20,
  "Departamento Pessoal": 15,
  "Licitações públicas": 20,
  "Contabilidade para profissionais da saúde": 20,
  "Imposto de Renda": 10,
  Outro: 5,
};

export const MOMENT_SCORES: Record<LeadMoment, number> = {
  "Quero contratar um serviço": 30,
  "Já tenho contador e estou avaliando uma mudança": 30,
  "Estou pesquisando opções": 15,
  "Preciso entender melhor o assunto": 10,
  Outro: 5,
};

export function classifyLeadScore(score: number): LeadClassification {
  if (score >= 60) return "QUENTE";
  if (score >= 30) return "MORNO";
  return "FRIO";
}

export function scoreLead(input: {
  profile: LeadProfile;
  interest: LeadInterest;
  moment: LeadMoment;
}): LeadScoreResult {
  const score =
    PROFILE_SCORES[input.profile] +
    INTEREST_SCORES[input.interest] +
    MOMENT_SCORES[input.moment];

  return {
    score,
    classification: classifyLeadScore(score),
  };
}
