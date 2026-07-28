import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WHATSAPP_URL, BRAND, SOLUTIONS, getSolution } from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};

  return buildPageMetadata({
    title: s.title,
    description: s.subtitle,
    path: `/solucoes/${slug}`,
    keywords: [
      s.title.toLowerCase(),
      "contabilidade saúde",
      "planejamento tributário",
      "simples nacional",
    ],
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getSolution(slug);
  if (!d) notFound();

  const path = `/solucoes/${slug}`;
  const schemas = [
    serviceSchema({
      name: d.title,
      description: d.subtitle,
      path,
      serviceType: d.label,
    }),
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Soluções", path: "/" },
      { name: d.title, path },
    ]),
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <section className="bg-hero-dark text-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">{d.title}</li>
            </ol>
          </nav>
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">
            Solução técnica
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold">{d.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{d.subtitle}</p>
          <Button asChild size="lg" className="mt-8 bg-cta text-cta-foreground hover:opacity-90 h-12 px-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Falar com Especialista
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16 grid md:grid-cols-2 gap-6">
        <div className="card-elevated p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-destructive/80">
            O problema
          </div>
          <p className="mt-2 text-foreground/85">{d.problem}</p>
        </div>
        <div className="card-elevated p-6 border-secondary/40">
          <div className="text-xs font-semibold uppercase tracking-wider text-secondary">
            A solução {BRAND}
          </div>
          <p className="mt-2 text-foreground/85">{d.solution}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 pb-20">
        <h2 className="font-display text-2xl font-semibold text-primary">O que está incluso</h2>
        <ul className="mt-6 space-y-3">
          {d.bullets.map((b) => (
            <li key={b} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-foreground/85">{b}</span>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
