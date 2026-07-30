import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import {
  BRAND,
  DEFAULT_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";
import { organizationSchema } from "@/lib/seo";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} — Contabilidade para Profissionais da Saúde`,
    template: `%s — ${BRAND}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "contabilidade para médicos",
    "contabilidade para dentistas",
    "contabilidade para psicólogos",
    "fator r simples nacional",
    "abertura de cnpj médico",
    "sociedade uniprofissional",
    "contabilidade santa cruz do sul",
    "carnê-leão para pj",
    "contabilidade para fisioterapeutas",
    "contabilidade para nutricionistas",
    "contabilidade para fonoaudiólogos",
  ],
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
  applicationName: BRAND,
  category: "business",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: BRAND,
    title: `${BRAND} — Contabilidade para Profissionais da Saúde`,
    description:
      "Estratégia tributária, clareza financeira e segurança jurídica para médicos, dentistas, psicólogos, fisioterapeutas, fonoaudiólogos e nutricionistas.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} — Contabilidade para Profissionais da Saúde`,
    description:
      "Estratégia tributária, clareza financeira e segurança jurídica para profissionais da saúde.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = organizationSchema();

  return (
    <html lang="pt-BR" className={`${sourceSans.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
