import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { CategoryChips } from "@/components/blog/CategoryChips";
import { PostCard } from "@/components/blog/PostCard";
import {
  BLOG_CATEGORIES,
  getBlogCategory,
  getFeaturedPosts,
  getPostsByCategory,
  getRecentPosts,
  type BlogCategorySlug,
} from "@/lib/blog";
import { SPECIALTIES, SOLUTIONS } from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog | Conteúdo contábil para profissionais da saúde",
  description:
    "Artigos e guias sobre contabilidade para a saúde: Fator R, PF x PJ, CNAE, especialidades e orientação consultiva da AD Contábil.",
  path: "/blog",
  keywords: [
    "blog contabilidade saúde",
    "fator r",
    "pf ou pj",
    "cnae saúde",
    "contabilidade para fonoaudiólogos",
  ],
});

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const activeCategory =
    BLOG_CATEGORIES.find((c) => c.slug === categoria)?.slug ?? null;

  const featured = getFeaturedPosts(2);
  const recent = activeCategory
    ? getPostsByCategory(activeCategory as BlogCategorySlug)
    : getRecentPosts();

  const schemas = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  ];

  const categoryLabel = activeCategory
    ? getBlogCategory(activeCategory)?.label
    : null;

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <BlogHero />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-14">
        <h2 className="font-display text-xl font-semibold text-foreground">Categorias</h2>
        <div className="mt-5">
          <CategoryChips active={activeCategory} />
        </div>
      </section>

      {!activeCategory && featured.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 md:px-6 pb-6">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Artigos em destaque
          </h2>
          <div className="mt-8 grid gap-6">
            {featured.map((post) => (
              <PostCard key={post.slug} post={post} featured />
            ))}
          </div>
        </section>
      )}

      <section id="artigos" className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              {categoryLabel ? `Categoria: ${categoryLabel}` : "Posts recentes"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              Conteúdo consultivo para decisões com mais clareza.
            </p>
          </div>
          {activeCategory && (
            <Link href="/blog" className="text-sm font-semibold text-primary hover:underline">
              Ver todos os artigos
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {recent.length === 0 && (
          <p className="mt-10 text-muted-foreground">
            Ainda não há artigos nesta categoria. Explore as demais ou volte à{" "}
            <Link href="/blog" className="text-primary font-medium hover:underline">
              listagem completa
            </Link>
            .
          </p>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
        <BlogCTA />
      </section>

      <section className="bg-surface border-y border-border/70">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Especialidades
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Contabilidade sob medida para cada área da saúde.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SPECIALTIES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/contabilidade-para/${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-primary hover:border-secondary transition"
                >
                  {s.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Soluções</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Análise técnica de enquadramento e rotina fiscal.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solucoes/${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-primary hover:border-secondary transition"
                >
                  {s.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
