import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListingView } from "@/components/blog/BlogListingView";
import {
  BLOG_PAGE_SIZE,
  buildBlogListPath,
  getBlogListing,
  getBlogTotalPages,
  getRecentPosts,
} from "@/lib/blog";
import {
  blogListingMetadata,
  blogPaginationLinkTags,
} from "@/lib/blog-seo";
import { breadcrumbSchema } from "@/lib/seo";

type PageParams = Promise<{ page: string }>;
type BlogSearchParams = Promise<{ categoria?: string; q?: string }>;

export function generateStaticParams() {
  const totalPages = getBlogTotalPages(getRecentPosts().length, BLOG_PAGE_SIZE);
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams: BlogSearchParams;
}): Promise<Metadata> {
  const { page: pageParam } = await params;
  const { categoria, q } = await searchParams;
  const page = Number(pageParam);

  if (!Number.isInteger(page) || page < 2) {
    return blogListingMetadata({ page: 1, hasFilter: false });
  }

  return blogListingMetadata({
    page,
    hasFilter: Boolean(categoria || q?.trim()),
  });
}

export default async function BlogPagedPage({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams: BlogSearchParams;
}) {
  const { page: pageParam } = await params;
  const { categoria, q } = await searchParams;
  const page = Number(pageParam);

  if (!Number.isInteger(page) || page < 1) notFound();
  if (page === 1) {
    redirect(buildBlogListPath({ page: 1, categoria, q }));
  }

  const listing = getBlogListing({ page, categoria, q });

  if (page > listing.totalPages) notFound();
  if (listing.page !== page) {
    redirect(
      buildBlogListPath({
        page: listing.page,
        categoria: listing.category,
        q: listing.query,
      }),
    );
  }

  const links = blogPaginationLinkTags({
    page: listing.page,
    totalPages: listing.totalPages,
    hasFilter: listing.hasFilter,
  });

  const schemas = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Blog", path: "/blog" },
      {
        name: `Página ${listing.page}`,
        path: buildBlogListPath({ page: listing.page }),
      },
    ]),
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      {links?.prev ? <link rel="prev" href={links.prev} /> : null}
      {links?.next ? <link rel="next" href={links.next} /> : null}
      <BlogHero />
      <BlogListingView listing={listing} showFeatured={false} />
    </SiteLayout>
  );
}
