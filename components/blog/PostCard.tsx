import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  formatBlogDate,
  getBlogCategory,
  type BlogPost,
} from "@/lib/blog";

export function PostCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const category = getBlogCategory(post.category);

  return (
    <article
      className={`group soft-card soft-card-hover overflow-hidden flex flex-col h-full ${
        featured ? "md:flex-row md:items-stretch" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden bg-surface ${
          featured ? "md:w-[48%] md:min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          width={1600}
          height={900}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={featured ? "(max-width: 768px) 100vw, 48vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </Link>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-8 md:justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {category && (
            <Link
              href={`/blog?categoria=${category.slug}`}
              className="font-semibold uppercase tracking-wider text-primary hover:text-cta transition"
            >
              {category.label}
            </Link>
          )}
          <span aria-hidden>·</span>
          <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min de leitura</span>
        </div>

        <h3
          className={`mt-3 font-display font-semibold text-foreground text-balance ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-muted-foreground text-pretty flex-1">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
        >
          Ler artigo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
