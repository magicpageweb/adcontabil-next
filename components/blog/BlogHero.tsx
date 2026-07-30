import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function BlogHero() {
  return (
    <section className="bg-hero-dark text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">Blog</p>
        <h1 className="mt-3 font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold max-w-3xl text-balance leading-[1.15]">
          Conteúdo contábil para profissionais da saúde
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80 text-pretty">
          Guias e orientações para decisões com mais clareza — Fator R, PF x PJ, CNAE e rotina
          fiscal por especialidade.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:opacity-90 h-11 px-6">
            <a href="#artigos">Explorar artigos</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 px-6 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Falar com a AD Contábil
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
