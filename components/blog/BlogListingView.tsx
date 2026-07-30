import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { CategoryChips } from "@/components/blog/CategoryChips";
import { PostCard } from "@/components/blog/PostCard";
import {
  getBlogCategory,
  getFeaturedPosts,
  type BlogListingResult,
} from "@/lib/blog";
import { SPECIALTIES, SOLUTIONS } from "@/lib/site";

export function BlogListingView({
  listing,
  showFeatured = false,
}: {
  listing: BlogListingResult;
  showFeatured?: boolean;
}) {
  const { posts, page, totalPages, totalItems, category, query, hasFilter } =
    listing;
  const featured = showFeatured && !hasFilter ? getFeaturedPosts(2) : [];
  const categoryLabel = category ? getBlogCategory(category)?.label : null;

  const listTitle = query
    ? `Resultados para “${query}”`
    : categoryLabel
      ? `Categoria: ${categoryLabel}`
      : page > 1
        ? `Posts recentes — página ${page}`
        : "Posts recentes";

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-foreground">
              Categorias
            </h2>
            <div className="mt-4">
              <CategoryChips active={category} query={query || undefined} />
            </div>
          </div>
          <BlogSearch defaultQuery={query} categoria={category} />
        </div>
      </section>

      {featured.length > 0 && (
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
              {listTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {totalItems === 0
                ? "Nenhum artigo correspondente."
                : `${totalItems} ${totalItems === 1 ? "artigo" : "artigos"} · página ${page} de ${totalPages}`}
            </p>
          </div>
          {hasFilter && (
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Limpar filtros
            </Link>
          )}
        </div>

        <BlogPostGrid
          posts={posts}
          emptyHint={
            query
              ? "Nenhum artigo encontrado para essa busca."
              : "Ainda não há artigos nesta categoria."
          }
        />

        <BlogPagination
          page={page}
          totalPages={totalPages}
          categoria={category}
          q={query || null}
        />
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-primary transition hover:border-secondary"
                >
                  {s.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Soluções
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Análise técnica de enquadramento e rotina fiscal.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solucoes/${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-primary transition hover:border-secondary"
                >
                  {s.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
