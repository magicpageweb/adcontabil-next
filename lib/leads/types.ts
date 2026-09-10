export const LEAD_PROFILES = [
  "Empresa",
  "MEI",
  "Profissional da saúde",
  "Pessoa física",
  "Estou começando um negócio",
  "Outro",
] as const;

export const LEAD_INTERESTS = [
  "Contabilidade",
  "Abertura de empresa",
  "Gestão tributária",
  "Imposto de Renda",
  "BPO Financeiro",
  "Departamento Pessoal",
  "Licitações públicas",
  "Contabilidade para profissionais da saúde",
  "Outro",
] as const;

export const LEAD_MOMENTS = [
  "Quero contratar um serviço",
  "Estou pesquisando opções",
  "Preciso entender melhor o assunto",
  "Já tenho contador e estou avaliando uma mudança",
  "Outro",
] as const;

export type LeadProfile = (typeof LEAD_PROFILES)[number];
export type LeadInterest = (typeof LEAD_INTERESTS)[number];
export type LeadMoment = (typeof LEAD_MOMENTS)[number];
export type LeadClassification = "FRIO" | "MORNO" | "QUENTE";
export type LeadStatus = "Novo";

export type LeadFormFields = {
  name: string;
  whatsapp: string;
  profile: LeadProfile | "";
  interest: LeadInterest | "";
  moment: LeadMoment | "";
  consent: boolean;
};

export type LeadOrigin = {
  pageUrl: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

export type LeadSubmitPayload = {
  name: string;
  whatsapp: string;
  profile: LeadProfile;
  interest: LeadInterest;
  moment: LeadMoment;
  consent: boolean;
  /** Honeypot — must be empty */
  website?: string;
  formOpenedAt: number;
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export type LeadScoreResult = {
  score: number;
  classification: LeadClassification;
};

export type LeadRecord = {
  name: string;
  whatsapp: string;
  profile: LeadProfile;
  interest: LeadInterest;
  moment: LeadMoment;
  score: number;
  classification: LeadClassification;
  pageUrl: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  status: LeadStatus;
};

export type LeadApiSuccess = {
  ok: true;
  recorded: boolean;
  whatsappUrl: string;
};

export type LeadApiError = {
  ok: false;
  error: string;
  fieldErrors?: Partial<Record<keyof LeadFormFields, string>>;
  whatsappUrl?: string;
};

export type LeadApiResponse = LeadApiSuccess | LeadApiError;
