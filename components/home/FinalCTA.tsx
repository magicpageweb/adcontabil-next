import { MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-hero-dark text-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-20 md:py-24 text-center reveal-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-accent font-medium">
          <Shield className="h-3.5 w-3.5" /> Diagnóstico fiscal personalizado
        </div>
        <h2 className="mt-5 font-display text-3xl md:text-4xl font-semibold text-balance">
          Pronto para organizar a contabilidade do seu consultório?
        </h2>
        <p className="mt-4 text-white/75 max-w-xl mx-auto text-pretty">
          Fale conosco pelo WhatsApp e receba orientação clara sobre o plano e a estratégia
          tributária mais adequados ao seu faturamento.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-whatsapp text-white hover:opacity-90 h-12 px-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Fale agora pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
