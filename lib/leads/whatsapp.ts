import { whatsappUrl } from "@/lib/site";
import type { LeadInterest, LeadProfile } from "@/lib/leads/types";

export function buildLeadWhatsAppMessage(input: {
  name: string;
  profile: LeadProfile;
  interest: LeadInterest;
}): string {
  const name = input.name.trim();

  if (input.profile === "Profissional da saúde") {
    const about =
      input.interest === "Contabilidade para profissionais da saúde" ||
      input.interest === "Contabilidade"
        ? "contabilidade para profissionais da saúde"
        : input.interest.toLowerCase();
    return `Olá! Sou ${name}, atuo como profissional da saúde. Acabei de preencher o formulário no site da AD Contábil e gostaria de saber mais sobre ${about}.`;
  }

  return `Olá! Sou ${name}. Acabei de preencher o formulário no site da AD Contábil e gostaria de saber mais sobre ${input.interest}.`;
}

export function buildLeadWhatsAppUrl(input: {
  name: string;
  profile: LeadProfile;
  interest: LeadInterest;
}): string {
  return whatsappUrl(buildLeadWhatsAppMessage(input));
}
