import type { Metadata } from "next";
import {
  ADDRESS,
  BRAND,
  BRAND_LEGAL,
  CITY_LOCALITY,
  CITY_REGION,
  CNPJ,
  CRC,
  DEFAULT_DESCRIPTION,
  EMAIL,
  GOOGLE_BUSINESS_URL,
  LINKEDIN_URL,
  LOGO_PATH,
  OFFICE_CRC,
  PHONE_E164,
  PHOTOS,
  RESPONSIBLE,
  SITE_URL,
  SOCIAL,
  SOLUTIONS,
  SPECIALTIES,
} from "@/lib/site";

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Emit a single JSON-LD document with @graph (no per-node @context). */
export function jsonLdGraph(nodes: Record<string, unknown>[]) {
  const graph = nodes
    .filter(Boolean)
    .map((node) => {
      const { ["@context"]: _ctx, ...rest } = node;
      return rest;
    });

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function truncateMeta(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const cut = normalized.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 40 ? lastSpace : max - 1).trim()}…`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const safeDescription = truncateMeta(description, 155);
  const fullTitle = title.includes(BRAND) ? title : `${title} — ${BRAND}`;

  return {
    title,
    description: safeDescription,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: BRAND,
      title: fullTitle,
      description: safeDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: safeDescription,
    },
  };
}

function filledSameAs(): string[] {
  const urls = [
    SOCIAL.instagram,
    SOCIAL.facebook,
    LINKEDIN_URL,
    GOOGLE_BUSINESS_URL,
  ].filter((u): u is string => Boolean(u && u.trim()));
  return urls;
}

export function personLidianeSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#lidiane`,
    name: RESPONSIBLE,
    jobTitle: "Contadora responsável técnica",
    identifier: CRC,
    image: absoluteUrl(PHOTOS.portrait),
    url: absoluteUrl("/quem-somos"),
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export function organizationSchema() {
  const sameAs = filledSameAs();
  const org: Record<string, unknown> = {
    "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: BRAND,
    legalName: BRAND_LEGAL,
    alternateName: [BRAND, "AD Assis Duarte"],
    identifier: OFFICE_CRC,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(LOGO_PATH),
    telephone: PHONE_E164,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: CITY_LOCALITY,
      addressRegion: CITY_REGION,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -29.7175,
      longitude: -52.4258,
    },
    areaServed: [
      { "@type": "Country", name: "Brasil" },
      { "@type": "State", name: "Rio Grande do Sul" },
      { "@type": "City", name: CITY_LOCALITY },
    ],
    employee: { "@id": `${SITE_URL}/#lidiane` },
    knowsAbout: [
      "Contabilidade para profissionais da saúde",
      "Fator R",
      "Simples Nacional",
      "Sociedade Uniprofissional",
      "Carnê-Leão",
      "Abertura de CNPJ",
      "Planejamento tributário",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços e soluções da AD Contábil",
      itemListElement: [
        ...SPECIALTIES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            url: absoluteUrl(`/contabilidade-para/${s.slug}`),
          },
        })),
        ...SOLUTIONS.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            url: absoluteUrl(`/solucoes/${s.slug}`),
          },
        })),
      ],
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };

  if (sameAs.length) org.sameAs = sameAs;
  if (CNPJ.trim()) org.taxID = CNPJ.trim();
  if (GOOGLE_BUSINESS_URL.trim()) org.hasMap = GOOGLE_BUSINESS_URL.trim();

  return org;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items[items.length - 1]?.path ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?:
    | { "@type": string; name: string }
    | { "@type": string; name: string }[];
}) {
  return {
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType ?? name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed ?? { "@type": "Country", name: "Brasil" },
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
