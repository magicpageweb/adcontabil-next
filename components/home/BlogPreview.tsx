import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCarousel } from "@/components/home/BlogCarousel";
import { getRecentPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getRecentPosts(8);
  if (posts.length === 0) return null;

  return (
    <section className="border-y border-border/70 bg-surface/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 reveal-up">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              Blog
            </p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-foreground">
              Últimos do blog
            </h2>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              Conteúdo recente da AD Contábil sobre enquadramento, Fator R e
              gestão contábil para profissionais da saúde.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            Ver todos os artigos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <BlogCarousel posts={posts} />
      </div>
    </section>
  );
}
