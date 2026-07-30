import Link from "next/link";
import { PostCard } from "@/components/blog/PostCard";
import type { BlogPost } from "@/lib/blog";

export function BlogPostGrid({
  posts,
  emptyHint = "Nenhum artigo encontrado com esses filtros.",
}: {
  posts: BlogPost[];
  emptyHint?: string;
}) {
  if (posts.length === 0) {
    return (
      <p className="mt-10 text-muted-foreground">
        {emptyHint}{" "}
        <Link href="/blog" className="font-medium text-primary hover:underline">
          Ver todos os artigos
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
