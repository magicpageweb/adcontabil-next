import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LeadCtaButton } from "@/components/lead-form/LeadCtaButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BRAND, SOLUTIONS, SPECIALTIES, getSolution } from "@/lib/site";
import { formatBlogDate, getPostsForSolution } from "@/lib/blog";
import {
  breadcrumbSchema,
  buildPageMetadata,
  faqSchema,
  jsonLdGraph,
  serviceSchema,
  truncateMeta,
} from "@/lib/seo";
import {
  FATOR_R_DIRECT_ANSWER,
  FATOR_R_EXAMPLE,
  FATOR_R_FAQS,
  FATOR_R_RULE_PARAS,
  FATOR_R_SUPPORT_LINKS,
  FATOR_R_TABLE,
  FATOR_R_UPDATED_AT,
} from "@/lib/fator-r-content";

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
    description: truncateMeta(s.metaDescription),
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

  const relatedPosts = getPostsForSolution(d.slug, 2);
  const path = `/solucoes/${slug}`;
  const isFatorR = slug === "fator-r";
  const schemas = [
    serviceSchema({
      name: d.title,
      description: d.subtitle,
      path,
      serviceType: d.label,
    }),
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Soluções", path: "/#solucoes" },
      { name: d.title, path },
    ]),
    ...(isFatorR ? [faqSchema(FATOR_R_FAQS)] : []),
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph(schemas)) }}
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
              <li>
                <Link href="/#solucoes" className="hover:text-white transition">
                  Soluções
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
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            {isFatorR ? FATOR_R_DIRECT_ANSWER : d.subtitle}
          </p>
          {isFatorR && (
            <p className="mt-3 text-sm text-white/55">
              Atualizado em {formatBlogDate(FATOR_R_UPDATED_AT)}
            </p>
          )}
          <LeadCtaButton
            location={`solution_${slug}_hero`}
            className="mt-8 bg-cta text-cta-foreground hover:opacity-90 h-12 px-6"
          >
            Falar com Especialista
          </LeadCtaButton>
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

      <section className="mx-auto max-w-5xl px-4 md:px-6 pb-10">
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

      {isFatorR && (
        <section className="mx-auto max-w-5xl px-4 md:px-6 pb-12 space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">
              Como o Fator R é calculado
            </h2>
            {FATOR_R_RULE_PARAS.map((p) => (
              <p key={p} className="mt-3 text-foreground/85 text-pretty">
                {p}
              </p>
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">
              {FATOR_R_TABLE.caption}
            </h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Anexo</th>
                    <th className="px-4 py-3 text-left font-semibold">Alíquota nominal</th>
                    <th className="px-4 py-3 text-left font-semibold">Contexto</th>
                  </tr>
                </thead>
                <tbody>
                  {FATOR_R_TABLE.rows.map((row) => (
                    <tr key={row.anexo} className="border-t border-border">
                      <td className="px-4 py-3">{row.anexo}</td>
                      <td className="px-4 py-3">{row.aliquota}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.contexto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-muted-foreground text-pretty">
              {FATOR_R_TABLE.note}
            </p>
          </div>

          <aside className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold text-primary">
              {FATOR_R_EXAMPLE.title}
            </h2>
            {FATOR_R_EXAMPLE.paragraphs.map((para) => (
              <p key={para.slice(0, 48)} className="mt-3 text-foreground/85 text-pretty">
                {para}
              </p>
            ))}
          </aside>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="mt-4">
              {FATOR_R_FAQS.map((faq, i) => (
                <AccordionItem key={faq.q} value={`fr-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary">
              Leituras de apoio
            </h2>
            <ul className="mt-4 space-y-2">
              {FATOR_R_SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-4 md:px-6 pb-20">
        <h2 className="font-display text-2xl font-semibold text-primary">
          Especialidades que se beneficiam desta solução
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          Aplicamos esta análise técnica a profissionais da saúde — incluindo fonoaudiólogos,
          médicos, dentistas e demais especialidades atendidas pela {BRAND}. Para empresas e
          outros segmentos, veja também a página de{" "}
          <Link href="/servicos" className="font-medium text-primary hover:underline">
            serviços
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {SPECIALTIES.map((s) => (
            <Link
              key={s.slug}
              href={`/contabilidade-para/${s.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:border-secondary hover:text-secondary transition"
            >
              {s.label} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold text-primary">Leitura relacionada</h3>
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
              Ir para o blog
            </Link>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
