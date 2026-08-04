import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site";

const DEFAULT_PRIMARY = whatsappUrl(
  "Olá! Gostaria de solicitar um diagnóstico tributário para minha atuação na área da saúde.",
);
const DEFAULT_SECONDARY = whatsappUrl(
  "Olá! Quero falar com um especialista da AD Contábil sobre a contabilidade do meu consultório.",
);

export function BlogCTA({
  badge = "Diagnóstico contábil",
  title = "Sua contabilidade está preparada para orientar o consultório?",
  text = "Solicite uma análise técnica da AD Contábil: enquadramento, Fator R, rotina fiscal e organização financeira alinhados à sua especialidade em Santa Cruz do Sul/RS.",
  primaryLabel = "Solicitar Diagnóstico",
  secondaryLabel = "Falar com um Especialista",
  primaryHref = DEFAULT_PRIMARY,
  secondaryHref = DEFAULT_SECONDARY,
  secondaryIsInternal = false,
}: {
  badge?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  secondaryIsInternal?: boolean;
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
        <Button
          asChild
          size="lg"
          className="bg-whatsapp text-white hover:opacity-90 h-12 px-7"
        >
          <a href={primaryHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> {primaryLabel}
          </a>
        </Button>
        {secondaryIsInternal ? (
          <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        ) : (
          <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
            <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
              {secondaryLabel}
            </a>
          </Button>
        )}
      </div>
    </section>
  );
}
