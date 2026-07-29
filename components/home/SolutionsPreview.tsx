import Link from "next/link";
import { ArrowRight, Landmark, Sparkles, TrendingDown } from "lucide-react";
import { SOLUTIONS } from "@/lib/site";

const icons = {
  "fator-r": TrendingDown,
  "sociedade-uniprofissional": Landmark,
  "carne-leao-pj": Sparkles,
} as const;

const featured = ["fator-r", "sociedade-uniprofissional", "carne-leao-pj"] as const;

export function SolutionsPreview() {
  return (
    <section id="economia" className="bg-surface border-y border-border/70">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-24">
        <div className="max-w-2xl reveal-up">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Soluções técnicas
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
            Estratégias tributárias com análise técnica
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fator R, Sociedade Uniprofissional e migração PF → PJ — avaliamos viabilidade e
            enquadramento com clareza e segurança jurídica.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {featured.map((slug, i) => {
            const sol = SOLUTIONS.find((s) => s.slug === slug)!;
            const Icon = icons[slug];
            return (
              <div
                key={slug}
                className={`soft-card soft-card-hover p-6 md:p-8 grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center reveal-up ${
                  i % 2 === 1 ? "md:bg-[#FFFCF8]" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{sol.subtitle}</p>
                </div>
                <Link
                  href={`/solucoes/${sol.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-cta transition-colors"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
