import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PLANS, WHATSAPP_URL, planWhatsAppUrl } from "@/lib/site";

export function PlansPreview() {
  return (
    <section id="planos" className="bg-surface border-y border-border/70">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-24">
        <div className="max-w-2xl reveal-up">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Planos
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
            Planos para o seu consultório ou clínica
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Do essencial ao consultivo — valores e enquadramentos dependem da operação de cada
            profissional da saúde.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
          {PLANS.map((plan) => (
            <article
              key={plan.slug}
              className={`soft-card p-7 flex flex-col reveal-up ${
                plan.featured
                  ? "ring-2 ring-cta/70 relative lg:-translate-y-2"
                  : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-cta px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cta-foreground">
                  {plan.badge}
                </span>
              )}
              {!plan.featured && (
                <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {plan.badge}
                </span>
              )}

              <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground flex-none">{plan.description}</p>

              {plan.includesPrevious && (
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-primary">
                  {plan.includesPrevious}
                </p>
              )}

              <ul className={`space-y-2.5 text-sm text-foreground/85 ${plan.includesPrevious ? "mt-3" : "mt-6"}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  asChild
                  size="lg"
                  className={`w-full h-11 ${
                    plan.featured
                      ? "bg-cta text-cta-foreground hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <a
                    href={planWhatsAppUrl(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contratar
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 soft-card p-8 md:p-10 text-center reveal-up">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Não sabe qual plano escolher?
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Fale conosco e receba uma orientação personalizada. Analisamos o perfil do seu
            consultório para indicar o acompanhamento mais adequado.
          </p>
          <Button asChild size="lg" className="mt-6 bg-whatsapp text-white hover:opacity-90 h-12 px-7">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Fale agora pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
