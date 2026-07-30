import type { Metadata } from "next";
import { buildBlogListPath } from "@/lib/blog";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

export const BLOG_DESCRIPTION =
  "Artigos e guias sobre contabilidade para a saúde: Fator R, PF x PJ, CNAE, especialidades e orientação consultiva da AD Contábil.";

export const BLOG_KEYWORDS = [
  "blog contabilidade saúde",
  "fator r",
  "pf ou pj",
  "cnae saúde",
  "contabilidade para fonoaudiólogos",
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
