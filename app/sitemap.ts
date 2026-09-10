import type { MetadataRoute } from "next";
import { SITE_URL, SPECIALTIES, SOLUTIONS } from "@/lib/site";
import {
  BLOG_PAGE_SIZE,
  BLOG_POSTS,
  getBlogTotalPages,
  type BlogPost,
} from "@/lib/blog";

const APEX = "https://adcontabil.net.br";

function assertCanonicalSiteUrl(url: string): string {
  if (url !== APEX) {
    console.warn(
      `[sitemap] SITE_URL mismatch: expected ${APEX}, got ${url}. Using ${APEX}.`,
    );
    return APEX;
  }
  return url;
}

function parseSafeDate(value: string | undefined, fallback: Date): Date {
  if (!value || typeof value !== "string") return fallback;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? fallback : d;
}

function isIndexableBlogPost(post: BlogPost): boolean {
  return Boolean(
    post &&
      typeof post.slug === "string" &&
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) &&
      typeof post.publishedAt === "string" &&
      !Number.isNaN(new Date(post.publishedAt).getTime()),
  );
}

function absolutePath(base: string, path: string): string {
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Public indexable URLs only — no query filters, no /api, no /blog/paginas.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = assertCanonicalSiteUrl(SITE_URL);
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  try {
    const staticRoutes: {
      path: string;
      priority: number;
      changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    }[] = [
      { path: "/", priority: 1, changeFrequency: "weekly" },
      {
        path: "/contabilidade-para-medicos-em-santa-cruz-do-sul",
        priority: 0.95,
        changeFrequency: "monthly",
      },
      { path: "/quem-somos", priority: 0.8, changeFrequency: "monthly" },
      { path: "/contato", priority: 0.8, changeFrequency: "monthly" },
      { path: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
      { path: "/politica-de-cookies", priority: 0.3, changeFrequency: "yearly" },
      { path: "/termos-de-uso", priority: 0.3, changeFrequency: "yearly" },
      { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    ];

    for (const route of staticRoutes) {
      entries.push({
        url: absolutePath(base, route.path),
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }

    for (const s of SPECIALTIES) {
      if (!s?.slug) continue;
      entries.push({
        url: absolutePath(base, `/contabilidade-para/${s.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }

    for (const s of SOLUTIONS) {
      if (!s?.slug) continue;
      entries.push({
        url: absolutePath(base, `/solucoes/${s.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }

    const posts = (BLOG_POSTS ?? []).filter(isIndexableBlogPost);
    for (const p of posts) {
      entries.push({
        url: absolutePath(base, `/blog/${p.slug}`),
        lastModified: parseSafeDate(p.updatedAt ?? p.publishedAt, now),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }

    const totalPages = getBlogTotalPages(posts.length, BLOG_PAGE_SIZE);
    if (totalPages > 1) {
      for (let page = 2; page <= totalPages; page += 1) {
        entries.push({
          url: absolutePath(base, `/blog/page/${page}`),
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.65,
        });
      }
    }
  } catch (error) {
    console.error("[sitemap] Failed to build full sitemap:", error);
    // Never return empty crash — keep at least the homepage for crawlers.
    if (entries.length === 0) {
      return [
        {
          url: base,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 1,
        },
      ];
    }
  }

  return entries;
}
