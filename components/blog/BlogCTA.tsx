import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GaClick } from "@/components/analytics/GaClick";
import { LeadCtaButton } from "@/components/lead-form/LeadCtaButton";
import { GA_EVENTS } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/site";

export function BlogCTA({
  badge = "Diagnóstico contábil",
  title = "Sua contabilidade está preparada para orientar o consultório?",
  text = "Solicite uma análise técnica da AD Contábil: enquadramento, Fator R, rotina fiscal e organização financeira alinhados à sua especialidade em Santa Cruz do Sul/RS.",
  primaryLabel = "Solicitar Diagnóstico",
  secondaryLabel = "Falar com um Especialista",
  secondaryHref = WHATSAPP_URL,
  secondaryIsInternal = false,
  location = "blog_cta",
}: {
  badge?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryIsInternal?: boolean;
  location?: string;
}) {
  return (
    <section className="soft-card p-8 md:p-10 text-center bg-[#FFFCF8]">
      <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
        {badge}
      </p>
      <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-foreground text-balance">
        {title}
      </h2>
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty">
        {text}
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <LeadCtaButton
          location={location}
          className="bg-whatsapp text-white hover:opacity-90 h-12 px-7"
        >
          {primaryLabel}
        </LeadCtaButton>
        {secondaryIsInternal ? (
          <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        ) : (
          <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
            <GaClick
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              event={GA_EVENTS.clickWhatsapp}
              params={{ location }}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {secondaryLabel}
            </GaClick>
          </Button>
        )}
      </div>
    </section>
  );
}
