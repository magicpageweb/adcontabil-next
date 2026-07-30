import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { getRecentPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getRecentPosts(3);

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4 reveal-up">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Blog</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
            Conteúdo para decidir com mais clareza
          </h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Guias e orientações sobre tributação, especialidades e rotina contábil na saúde.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        >
          Ver todos os artigos <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
