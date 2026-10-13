import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OtherAudiencesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
      <div className="soft-card p-8 md:p-10 reveal-up">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-balance max-w-3xl">
          Contabilidade para empresas e profissionais
        </h2>
        <p className="mt-4 text-muted-foreground max-w-3xl text-pretty">
          Também atendemos empresas, MEIs, prestadores de serviços e profissionais liberais que
          buscam organização contábil, orientação tributária e apoio para decisões mais seguras.
        </p>
        <Button asChild size="lg" className="mt-6 h-12 px-7 bg-primary text-primary-foreground">
          <Link href="/servicos">
            Conheça nossos serviços <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
