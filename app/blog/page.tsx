import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListingView } from "@/components/blog/BlogListingView";
import { buildBlogListPath, getBlogListing } from "@/lib/blog";
import {
  blogListingMetadata,
  blogPaginationLinkTags,
} from "@/lib/blog-seo";
import { breadcrumbSchema, jsonLdGraph } from "@/lib/seo";

/** Revalidate hourly so scheduled posts appear in listings without redeploy. */
export const revalidate = 3600;

type BlogSearchParams = Promise<{ categoria?: string; q?: string }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: BlogSearchParams;
}): Promise<Metadata> {
  const { categoria, q } = await searchParams;
  return blogListingMetadata({
    page: 1,
    hasFilter: Boolean(categoria || q?.trim()),
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: BlogSearchParams;
}) {
  const { categoria, q } = await searchParams;
  const listing = getBlogListing({ page: 1, categoria, q });

  if (listing.page !== 1) {
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
    ]),
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph(schemas)) }}
      />
      {links?.next ? <link rel="next" href={links.next} /> : null}
      <BlogHero />
      <BlogListingView listing={listing} showFeatured />
    </SiteLayout>
  );
}
