import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { PostCard } from "@/components/blog/PostCard";
import { PostContent } from "@/components/blog/PostContent";
import {
  BLOG_AUTHOR,
  BLOG_POSTS,
  formatBlogDate,
  getBlogCategory,
  getBlogPost,
  getRelatedPosts,
} from "@/lib/blog";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords ?? [
      post.title.toLowerCase(),
      getBlogCategory(post.category)?.label.toLowerCase() ?? "blog",
      "contabilidade saúde",
    ],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const category = getBlogCategory(post.category);
  const related = getRelatedPosts(post, 3);
  const path = `/blog/${post.slug}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: BLOG_AUTHOR.name,
        description: BLOG_AUTHOR.crc,
      },
      mainEntityOfPage: path,
    },
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <article>
        <header className="bg-hero-dark text-white">
          <div className="mx-auto max-w-4xl px-4 md:px-6 pt-12 md:pt-16 pb-10">
            <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-5">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Início
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/90 line-clamp-1 max-w-[16rem] md:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            {category && (
              <Link
                href={`/blog?categoria=${category.slug}`}
                className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-accent hover:bg-white/10 transition"
              >
                {category.label}
              </Link>
            )}

            <h1 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.12]">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/70">
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
              <span>{post.readingMinutes} min de leitura</span>
              <span>
                {BLOG_AUTHOR.name} · {BLOG_AUTHOR.crc}
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-4 md:px-6 pb-12 md:pb-16">
            <div className="relative overflow-hidden rounded-2xl soft-card aspect-[16/9]">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-16">
          <PostContent blocks={post.content} />
        </div>

        <div className="mx-auto max-w-3xl px-4 md:px-6 pb-10">
          <BlogCTA
            badge="Próximo passo"
            title="Quer aplicar esse conteúdo à sua operação?"
            text="Fale com a AD Contábil e receba uma análise personalizada — com foco em enquadramento, viabilidade e organização da rotina fiscal."
          />
        </div>

        <div className="mx-auto max-w-3xl px-4 md:px-6 pb-14">
          <AuthorBio />
        </div>
      </article>

      <section className="bg-surface border-y border-border/70">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Artigos relacionados
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Voltar para o{" "}
            <Link href="/blog" className="font-semibold text-primary hover:underline">
              hub do blog
            </Link>
            .
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
