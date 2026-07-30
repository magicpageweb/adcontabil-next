import type { Metadata } from "next";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HomeHero } from "@/components/home/HomeHero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceCards } from "@/components/home/ServiceCards";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PlansPreview } from "@/components/home/PlansPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BRAND, DEFAULT_DESCRIPTION, HOME_FAQS } from "@/lib/site";
import { buildPageMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${BRAND} — Contabilidade para Médicos, Dentistas e Profissionais da Saúde`,
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  title: {
    absolute: `${BRAND} — Contabilidade para Médicos, Dentistas e Profissionais da Saúde`,
  },
};

export default function HomePage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS)) }}
      />
      <HomeHero />
      <TrustBar />
      <ServiceCards />
      <SolutionsPreview />
      <AboutPreview />
      <PlansPreview />
      <BlogPreview />
      <FAQPreview />
      <FinalCTA />
    </SiteLayout>
  );
}
