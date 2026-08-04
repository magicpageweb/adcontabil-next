import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArticleActions } from "@/components/blog/ArticleActions";
import { ArticleMeta } from "@/components/blog/ArticleMeta";
import { ArticleSummary } from "@/components/blog/ArticleSummary";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BrandBio } from "@/components/blog/BrandBio";
import { PostContent } from "@/components/blog/PostContent";
import { BlogCarousel } from "@/components/home/BlogCarousel";
import {
  BLOG_POSTS,
  getBlogPost,
  getRecentPosts,
  getRelatedPosts,
} from "@/lib/blog";
import {
  countPostWords,
  extractHeadings,
  getTocMode,
  summaryItemsFromPost,
} from "@/lib/blog-content";
import {
  buildArticleMetadata,
  buildBlogPostSchemas,
} from "@/lib/blog-seo";
import { absoluteUrl } from "@/lib/seo";

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
  return buildArticleMetadata(post);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const latestPosts = getRecentPosts(8).filter((p) => p.slug !== post.slug);
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const wordCount = countPostWords(post);
  const headings = extractHeadings(post.content, { includeH3: true });
  const h2Count = headings.filter((h) => h.level === 2).length;
  const tocMode = getTocMode(wordCount, h2Count);
  const summaryItems = summaryItemsFromPost(post, headings);
  const schemas = buildBlogPostSchemas(post, related);
  const stickyToc = tocMode === "auto";

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
                <li className="text-white/90 line-clamp-1 max-w-[12rem] sm:max-w-[16rem] md:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            <h1 className="font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.12]">
              {post.title}
            </h1>

            <ArticleMeta post={post} />
          </div>

          <div className="mx-auto max-w-5xl px-4 md:px-6 pb-12 md:pb-16">
            <figure className="relative overflow-hidden rounded-2xl soft-card aspect-[16/9]">
              <Image
                src={post.coverImage}
                alt={post.coverAlt}
                title={post.coverAlt}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <figcaption className="sr-only">{post.coverAlt}</figcaption>
            </figure>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <div
            className={
              stickyToc
                ? "lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,48rem)] lg:gap-10 lg:justify-center"
                : "mx-auto max-w-3xl"
            }
          >
            {stickyToc && (
              <div className="min-w-0">
                <ArticleToc headings={headings} mode={tocMode} />
              </div>
            )}

            <div className="min-w-0">
              {!stickyToc && <ArticleToc headings={headings} mode={tocMode} />}
              <ArticleSummary items={summaryItems} />
              <PostContent blocks={post.content} />
            </div>
          </div>
        </div>

        <footer className="mx-auto max-w-3xl px-4 md:px-6 pb-10">
          <ArticleActions
            title={post.title}
            url={url}
            description={post.seoDescription ?? post.excerpt}
          />
        </footer>
      </article>

      <aside
        aria-labelledby="latest-posts-title"
        className="bg-surface border-y border-border/70"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2
                id="latest-posts-title"
                className="font-display text-2xl md:text-3xl font-semibold text-foreground"
              >
                Últimos do blog
              </h2>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                Continue lendo conteúdos da AD Contábil sobre contabilidade para
                profissionais da saúde.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Ver todos os artigos
            </Link>
          </div>
          <BlogCarousel
            posts={latestPosts}
            label="Últimos artigos do blog"
          />
        </div>
      </aside>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-12 space-y-8">
        <AuthorBio />
        <BrandBio />
        <BlogCTA
          badge="Próximo passo"
          title="Sua contabilidade está preparada para orientar o consultório?"
          text="Receba uma análise técnica da AD Contábil sobre enquadramento, Fator R, rotina fiscal e organização financeira — com atendimento consultivo em Santa Cruz do Sul/RS."
        />
      </div>
    </SiteLayout>
  );
}
