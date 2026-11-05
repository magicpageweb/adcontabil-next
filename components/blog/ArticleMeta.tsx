import Link from "next/link";
import {
  formatBlogDate,
  getBlogCategory,
  type BlogPost,
} from "@/lib/blog";
import { getPostReadingMinutes } from "@/lib/blog-content";
import { CRC, RESPONSIBLE } from "@/lib/site";

export function ArticleMeta({ post }: { post: BlogPost }) {
  const category = getBlogCategory(post.category);
  const readingMinutes = getPostReadingMinutes(post);
  const showUpdated = Boolean(
    post.updatedAt && post.updatedAt !== post.publishedAt,
  );

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-white/70">
      <Link
        href="/quem-somos"
        className="font-medium text-white/90 hover:text-white hover:underline underline-offset-4"
      >
        {RESPONSIBLE} · Contadora {CRC}
      </Link>
      <span aria-hidden className="text-white/30">
        ·
      </span>
      <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
      {showUpdated && (
        <>
          <span aria-hidden className="text-white/30">
            ·
          </span>
          <span>
            Atualizado em{" "}
            <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt!)}</time>
          </span>
        </>
      )}
      <span aria-hidden className="text-white/30">
        ·
      </span>
      <span>{readingMinutes} min de leitura</span>
      {category && (
        <>
          <span aria-hidden className="text-white/30">
            ·
          </span>
          <Link
            href={`/blog?categoria=${category.slug}`}
            className="text-accent hover:underline underline-offset-4"
          >
            {category.label}
          </Link>
        </>
      )}
    </div>
  );
}
