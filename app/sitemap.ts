import { MetadataRoute } from "next";
import { SITE_URL, SPECIALTIES, SOLUTIONS } from "@/lib/site";
import { BLOG_PAGE_SIZE, BLOG_POSTS, getBlogTotalPages } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/quem-somos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const specialtyRoutes: MetadataRoute.Sitemap = SPECIALTIES.map((s) => ({
    url: `${SITE_URL}/contabilidade-para/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${SITE_URL}/solucoes/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogTotalPages = getBlogTotalPages(BLOG_POSTS.length, BLOG_PAGE_SIZE);
  const blogPaginationRoutes: MetadataRoute.Sitemap =
    blogTotalPages > 1
      ? Array.from({ length: blogTotalPages - 1 }, (_, i) => ({
          url: `${SITE_URL}/blog/page/${i + 2}`,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.65,
        }))
      : [];

  return [
    ...routes,
    ...specialtyRoutes,
    ...solutionRoutes,
    ...blogRoutes,
    ...blogPaginationRoutes,
  ];
}
