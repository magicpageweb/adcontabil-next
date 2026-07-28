import type { Metadata } from "next";
import {
  ADDRESS,
  BRAND,
  CITY_LOCALITY,
  CITY_REGION,
  CRC,
  DEFAULT_DESCRIPTION,
  EMAIL,
  LOGO_PATH,
  PHONE_E164,
  RESPONSIBLE,
  SITE_URL,
  SOCIAL,
} from "@/lib/site";

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
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
  const fullTitle = title.includes(BRAND) ? title : `${title} — ${BRAND}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: BRAND,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: BRAND,
    legalName: BRAND,
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
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    employee: {
      "@type": "Person",
      name: RESPONSIBLE,
      jobTitle: "Contadora Responsável Técnica",
      description: CRC,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType ?? name,
    provider: {
      "@type": "AccountingService",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
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
