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
  Ear,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  BRAND,
  SPECIALTIES,
  WHATSAPP_URL,
  getSpecialty,
  type SpecialtyIconKey,
} from "@/lib/site";
import { getPostsForSpecialty } from "@/lib/blog";
import { breadcrumbSchema, buildPageMetadata, serviceSchema } from "@/lib/seo";

const specialtyIcons: Record<SpecialtyIconKey, LucideIcon> = {
  stethoscope: Stethoscope,
  smile: Smile,
  brain: Brain,
  activity: Activity,
  ear: Ear,
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
  const relatedPosts = getPostsForSpecialty(spec.slug, 2);
  const primaryCta = spec.primaryCta ?? "Fale com a AD Contábil";
  const secondaryCta = spec.secondaryCta ?? "Solicitar diagnóstico";
  const ctaTitle =
    spec.ctaTitle ?? "Quer uma análise do enquadramento do seu consultório?";
  const ctaText =
    spec.ctaText ??
    "Envie seu faturamento médio pelo WhatsApp e receba um diagnóstico fiscal personalizado, sem compromisso.";

  const schemas = [
    serviceSchema({
      name: spec.title,
      description: spec.subtitle,
      path,
      serviceType: `Contabilidade para ${spec.label}`,
    }),
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Especialidades", path: "/#especialidades" },
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
              <li>
                <Link href="/#especialidades" className="hover:text-white transition">
                  Especialidades
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
                {primaryCta}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> {secondaryCta}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <p className="max-w-3xl text-lg text-muted-foreground">{spec.intro}</p>
        {spec.introSecondary && (
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{spec.introSecondary}</p>
        )}

        {spec.audience && (
          <div className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Para quem é
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {spec.audience.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start rounded-xl border border-border/70 bg-card px-4 py-3 text-sm text-foreground/85"
                >
                  <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {spec.analysis && (
          <div className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              O que analisamos
            </h2>
            <ul className="mt-6 space-y-3 max-w-3xl">
              {spec.analysis.map((item) => (
                <li key={item} className="flex gap-3 items-start text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Soluções para {spec.label.toLowerCase()}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        </div>

        {spec.differentials && (
          <div className="mt-14 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Diferenciais da área
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{spec.differentials}</p>
          </div>
        )}

        {spec.process && (
          <div className="mt-14">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Processo de trabalho
            </h2>
            <ol className="mt-6 space-y-3 max-w-3xl">
              {spec.process.map((step, i) => (
                <li key={step} className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-foreground/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {spec.faqs && spec.faqs.length > 0 && (
          <div className="mt-14 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="mt-6">
              {spec.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
          {spec.ctaBadge && (
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary">
              {spec.ctaBadge}
            </div>
          )}
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary">
            {ctaTitle}
          </h2>
          <p className="mt-4 text-muted-foreground">{ctaText}</p>
          <Button asChild size="lg" className="mt-8 bg-whatsapp text-white hover:opacity-90 h-12 px-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> {primaryCta}
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
        <p className="mt-8 text-sm text-muted-foreground">
          Também analise soluções técnicas como{" "}
          <Link href="/solucoes/fator-r" className="font-medium text-primary hover:underline">
            Fator R
          </Link>
          ,{" "}
          <Link href="/solucoes/carne-leao-pj" className="font-medium text-primary hover:underline">
            Carnê-Leão e migração PF → PJ
          </Link>{" "}
          e{" "}
          <Link
            href="/solucoes/sociedade-uniprofissional"
            className="font-medium text-primary hover:underline"
          >
            Sociedade Uniprofissional
          </Link>
          — com a orientação consultiva da {BRAND}.
        </p>

        {relatedPosts.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold text-primary">Do blog</h3>
            <ul className="mt-4 space-y-3">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition"
                  >
                    {post.title} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Ver todos os artigos
            </Link>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
