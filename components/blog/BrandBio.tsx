import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BRAND, CITY, TAGLINE } from "@/lib/site";

export function BrandBio() {
  return (
    <aside
      aria-labelledby="brand-bio-title"
      className="rounded-2xl border border-border/70 bg-surface p-6 md:p-7"
    >
      <p className="text-xs uppercase tracking-[0.16em] text-primary font-semibold">
        {TAGLINE}
      </p>
      <h2
        id="brand-bio-title"
        className="mt-2 font-display text-xl md:text-2xl font-semibold text-foreground"
      >
        Sobre a {BRAND}
      </h2>
      <p className="mt-3 text-sm md:text-base text-muted-foreground text-pretty max-w-2xl">
        Contabilidade consultiva para médicos, dentistas, psicólogos,
        fisioterapeutas, fonoaudiólogos e nutricionistas. Atendimento em{" "}
        {CITY}, com foco em enquadramento tributário, Fator R, organização fiscal
        e clareza para a rotina do consultório e da clínica.
      </p>
      <div className="mt-5">
        <Button asChild variant="outline" className="h-11 px-6 border-border">
          <Link href="/quem-somos">Conheça a {BRAND}</Link>
        </Button>
      </div>
    </aside>
  );
}
