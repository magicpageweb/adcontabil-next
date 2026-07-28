import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/home/HeroSlider";
import { PHOTOS, RESPONSIBLE, WHATSAPP_URL } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          background:
            "radial-gradient(900px 420px at 90% 10%, color-mix(in srgb, var(--color-cta-brand) 18%, transparent), transparent 55%), radial-gradient(700px 380px at 0% 80%, color-mix(in srgb, var(--color-primary-brand) 14%, transparent), transparent 50%), linear-gradient(180deg, #FFFCF8 0%, var(--color-bg-light) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-10 pb-12 md:pt-14 md:pb-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <div className="reveal-up">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Contabilidade para profissionais da saúde
          </p>

          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.35rem] font-semibold leading-[1.08] text-foreground text-balance">
            Contabilidade especializada para profissionais da saúde
          </h1>

          <HeroSlider />

          <p className="mt-5 text-lg text-muted-foreground max-w-xl text-pretty">
            Estratégia tributária, clareza financeira e proximidade humana para médicos,
            dentistas, psicólogos, fisioterapeutas e nutricionistas — com atendimento digital
            em todo o Brasil.
          </p>

          <div className="mt-8">
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:opacity-90 h-12 px-7">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Fale conosco
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            +10 anos de experiência · Atendimento 100% digital · Contabilidade para
            profissionais da saúde
          </p>
        </div>

        <div className="relative mx-auto flex flex-col items-center reveal-up reveal-delay-1">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl -z-10" />
          <div className="hero-float">
            <Image
              src={PHOTOS.hero}
              alt={`${RESPONSIBLE}, contadora responsável técnica da AD Contábil`}
              width={337}
              height={500}
              priority
              unoptimized
              sizes="337px"
              className="block h-[min(500px,70vw)] w-auto max-w-none"
              style={{ height: "min(500px, 70vw)", width: "auto" }}
            />
          </div>
          <div className="mt-3 text-center">
            <p className="font-display text-sm font-semibold text-foreground">{RESPONSIBLE}</p>
            <p className="text-xs text-muted-foreground">Contadora responsável técnica · CRC/RS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
