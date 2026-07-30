import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function BlogHero() {
  return (
    <section className="bg-hero-dark text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">Blog</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.25rem] font-semibold max-w-3xl text-balance leading-[1.1]">
          Conteúdo contábil para profissionais da saúde
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80 text-pretty">
          Artigos, guias e orientações para ajudar médicos, dentistas, psicólogos, fisioterapeutas,
          nutricionistas e fonoaudiólogos a tomar decisões com mais clareza.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:opacity-90 h-12 px-7">
            <a href="#artigos">Explorar artigos</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 px-7 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Falar com a AD Contábil
            </a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/55">
          Também veja{" "}
          <Link href="/#especialidades" className="text-accent hover:underline">
            especialidades
          </Link>{" "}
          e{" "}
          <Link href="/contato" className="text-accent hover:underline">
            contato
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
