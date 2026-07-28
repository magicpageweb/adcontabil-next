import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQS } from "@/lib/site";

export function FAQPreview() {
  return (
    <section className="mx-auto max-w-3xl px-4 md:px-6 py-20 md:py-24">
      <div className="text-center reveal-up">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Perguntas frequentes
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
          Ainda em dúvida? Nós respondemos
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-10 reveal-up">
        {HOME_FAQS.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/80">
            <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
