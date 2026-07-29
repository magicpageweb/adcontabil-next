import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CRC, RESPONSIBLE, WHATSAPP_URL, BRAND, CITY, PHOTOS } from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sobre Nós | Inteligência Contábil para a Saúde",
  description: `Conheça a ${BRAND}: escritório consultivo especializado em contabilidade para profissionais da saúde, sediado em ${CITY}.`,
  path: "/quem-somos",
});

const aboutSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Sobre a ${BRAND}`,
    description:
      "Escritório consultivo especializado em contabilidade para profissionais da saúde.",
    mainEntity: {
      "@type": "AccountingService",
      name: BRAND,
      employee: {
        "@type": "Person",
        name: RESPONSIBLE,
        jobTitle: "Contadora Responsável Técnica",
        description: CRC,
      },
    },
  },
  breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Quem somos", path: "/quem-somos" },
  ]),
];

const values = [
  { icon: ShieldCheck, title: "Segurança jurídica", text: "Todas as estratégias respaldadas pela legislação vigente." },
  { icon: Sparkles, title: "Inteligência tributária", text: "Orientação tributária alinhada ao perfil do seu consultório." },
  { icon: HeartHandshake, title: "Proximidade humana", text: "Atendimento consultivo, sem burocracia e sem robôs." },
  { icon: Award, title: "Autoridade técnica", text: "Mais de uma década de atuação com profissionais da saúde." },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchemas) }}
      />
      <section className="bg-hero-dark text-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">Quem somos</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Contabilidade consultiva para profissionais da saúde
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            A {BRAND} nasceu para atender médicos, dentistas, psicólogos, fisioterapeutas e nutricionistas com estratégia tributária real e atendimento próximo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -right-3 -bottom-3 h-full w-full rounded-[1.75rem] bg-primary/15" />
          <div className="relative overflow-hidden rounded-[1.75rem] soft-card">
            <Image
              src={PHOTOS.cover}
              alt={`${RESPONSIBLE}, contadora responsável técnica da ${BRAND}`}
              width={640}
              height={800}
              className="w-full h-auto object-cover aspect-[4/5]"
              priority
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold text-primary">Nossa responsável técnica</h2>
          <p className="mt-4 text-muted-foreground">
            <strong className="text-foreground">{RESPONSIBLE}</strong> lidera a {BRAND} com mais de 10 anos de experiência em contabilidade estratégica e gestão financeira.
            Registro profissional ativo: <strong className="text-foreground">{CRC}</strong>.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nosso escritório é sediado em {CITY} e atende clientes em todo o Brasil por meio de uma plataforma digital completa, com suporte via WhatsApp e reuniões por vídeo.
          </p>
          <Button asChild size="lg" className="mt-8 bg-whatsapp text-white hover:opacity-90 h-12 px-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Fale conosco
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="soft-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-primary">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
