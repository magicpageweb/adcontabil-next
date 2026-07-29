import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Stethoscope,
  Smile,
  Brain,
  Activity,
  Apple,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  SPECIALTIES,
  WHATSAPP_URL,
  getSpecialty,
  type SpecialtyIconKey,
} from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata, serviceSchema } from "@/lib/seo";

const specialtyIcons: Record<SpecialtyIconKey, LucideIcon> = {
  stethoscope: Stethoscope,
  smile: Smile,
  brain: Brain,
  activity: Activity,
  apple: Apple,
};

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ specialty: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialty: string }>;
}): Promise<Metadata> {
  const { specialty } = await params;
  const spec = getSpecialty(specialty);
  if (!spec) return {};

  return buildPageMetadata({
    title: spec.title,
    description: spec.subtitle,
    path: `/contabilidade-para/${spec.slug}`,
    keywords: [
      spec.title.toLowerCase(),
      `contabilidade ${spec.label.toLowerCase()}`,
      "fator r",
      "abertura de cnpj",
      "simples nacional saúde",
    ],
  });
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ specialty: string }>;
}) {
  const { specialty } = await params;
  const spec = getSpecialty(specialty);
  if (!spec) notFound();

  const Icon = specialtyIcons[spec.icon];
  const path = `/contabilidade-para/${spec.slug}`;

  const schemas = [
    serviceSchema({
      name: spec.title,
      description: spec.subtitle,
      path,
      serviceType: `Contabilidade para ${spec.label}`,
    }),
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Especialidades", path: "/" },
      { name: spec.title, path },
    ]),
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <section className="bg-hero-dark text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">{spec.title}</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-accent">
            <Icon className="h-3.5 w-3.5" /> Especialidade
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold max-w-3xl">
            {spec.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{spec.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:opacity-90 h-12 px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Solicitar avaliação fiscal
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <p className="max-w-3xl text-lg text-muted-foreground">{spec.intro}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {spec.solutions.map((s) => (
            <div key={s.title} className="card-elevated card-elevated-hover p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
            Quer uma análise do enquadramento do seu consultório?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Envie seu faturamento médio pelo WhatsApp e receba um diagnóstico fiscal personalizado, sem compromisso.
          </p>
          <Button asChild size="lg" className="mt-8 bg-whatsapp text-white hover:opacity-90 h-12 px-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Solicitar Diagnóstico Personalizado
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-primary">Outras especialidades atendidas</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {SPECIALTIES.filter((s) => s.slug !== spec.slug).map((s) => (
            <Link
              key={s.slug}
              href={`/contabilidade-para/${s.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:border-secondary hover:text-secondary transition"
            >
              {s.title} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
