import type { Metadata } from "next";
import {
  BLOG_AUTHOR,
  buildBlogListPath,
  getBlogCategory,
  type BlogPost,
} from "@/lib/blog";
import {
  countPostWords,
  getPostReadingMinutes,
} from "@/lib/blog-content";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildPageMetadata,
  faqSchema,
} from "@/lib/seo";
import { BRAND, SITE_URL } from "@/lib/site";

export const BLOG_DESCRIPTION =
  "Artigos e guias sobre contabilidade para a saúde: Fator R, PF x PJ, CNAE, especialidades e orientação consultiva da AD Contábil em Santa Cruz do Sul/RS.";

export const BLOG_KEYWORDS = [
  "blog contabilidade saúde",
  "fator r",
  "pf ou pj",
  "cnae saúde",
  "contabilidade para fonoaudiólogos",
  "contabilidade santa cruz do sul",
];

export function blogListingMetadata({
  page,
  hasFilter,
}: {
  page: number;
  hasFilter: boolean;
}): Metadata {
  const path = buildBlogListPath({ page });

  return {
    ...buildPageMetadata({
      title:
        page > 1
          ? `Blog | Página ${page} — conteúdo contábil para a saúde`
          : "Blog | Conteúdo contábil para profissionais da saúde",
      description: BLOG_DESCRIPTION,
      path,
      keywords: BLOG_KEYWORDS,
    }),
    robots: hasFilter
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export function blogPaginationLinkTags({
  page,
  totalPages,
  hasFilter,
}: {
  page: number;
  totalPages: number;
  hasFilter: boolean;
}) {
  if (hasFilter || totalPages <= 1) return null;

  const prev =
    page > 1 ? absoluteUrl(buildBlogListPath({ page: page - 1 })) : null;
  const next =
    page < totalPages
      ? absoluteUrl(buildBlogListPath({ page: page + 1 }))
      : null;

  return { prev, next };
}

export function buildArticleMetadata(post: BlogPost): Metadata {
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;
  const category = getBlogCategory(post.category);
  const fullTitle = title.includes(BRAND) ? title : `${title} — ${BRAND}`;
  const imageUrl = absoluteUrl(post.coverImage);
  const modified = post.updatedAt ?? post.publishedAt;
  const keywords =
    post.keywords ??
    [
      post.title.toLowerCase(),
      category?.label.toLowerCase() ?? "blog",
      "contabilidade saúde",
      "santa cruz do sul",
    ];

  return {
    title,
    description,
    keywords,
    authors: [{ name: BLOG_AUTHOR.name, url: SITE_URL }],
    creator: BLOG_AUTHOR.name,
    publisher: BRAND,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url,
      siteName: BRAND,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: post.coverAlt,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: modified,
      authors: [BLOG_AUTHOR.name],
      section: category?.label,
      tags: post.tags ?? post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function blogPostingSchema(post: BlogPost) {
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const category = getBlogCategory(post.category);
  const wordCount = countPostWords(post);
  const minutes = getPostReadingMinutes(post);
  const modified = post.updatedAt ?? post.publishedAt;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(post.coverImage),
      width: 1600,
      height: 900,
      caption: post.coverAlt,
    },
    datePublished: post.publishedAt,
    dateModified: modified,
    wordCount,
    timeRequired: `PT${minutes}M`,
    articleSection: category?.label,
    keywords: (post.keywords ?? post.tags ?? []).join(", "),
    author: {
      "@type": "Person",
      name: BLOG_AUTHOR.name,
      description: BLOG_AUTHOR.crc,
      jobTitle: BLOG_AUTHOR.role,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND,
      url: SITE_URL,
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };
}

export function relatedItemListSchema(
  related: BlogPost[],
  { name = "Artigos relacionados" }: { name?: string } = {},
) {
  if (!related.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: related.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
    })),
  };
}

export function buildBlogPostSchemas(post: BlogPost, related: BlogPost[]) {
  const path = `/blog/${post.slug}`;
  const schemas: Record<string, unknown>[] = [
    blogPostingSchema(post),
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
  ];

  if (post.faq?.length) {
    schemas.push(faqSchema(post.faq));
  }

  const relatedSchema = relatedItemListSchema(related, {
    name: "Leia também",
  });
  if (relatedSchema) schemas.push(relatedSchema);

  return schemas;
}
