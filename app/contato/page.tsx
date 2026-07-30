import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  WHATSAPP_URL,
  BRAND,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  CITY,
  CITY_LOCALITY,
  CITY_REGION,
  SITE_URL,
  PHOTOS,
  RESPONSIBLE,
} from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contato",
  description: `Fale com a ${BRAND} por WhatsApp, telefone ou e-mail. Atendimento digital em todo o Brasil e presencial em ${CITY}.`,
  path: "/contato",
});

const contactSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contato — ${BRAND}`,
    url: `${SITE_URL}/contato`,
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  },
  breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Contato", path: "/contato" },
  ]),
];

export default function ContactPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemas) }}
      />
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px 360px at 85% 0%, color-mix(in srgb, var(--color-cta-brand) 16%, transparent), transparent 55%), linear-gradient(180deg, #FFFCF8, var(--color-bg-light))",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold">Contato</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-foreground">
              Vamos conversar sobre o seu consultório
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
              Solicite um diagnóstico fiscal personalizado. Respondemos em minutos pelo WhatsApp.
            </p>
            <Button asChild size="lg" className="mt-8 bg-whatsapp text-white hover:opacity-90 h-12 px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Fale conosco
              </a>
            </Button>
          </div>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-[1.5rem] bg-primary/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] soft-card">
              <Image
                src={PHOTOS.portrait}
                alt={`${RESPONSIBLE}, contadora da ${BRAND} disponível para atendimento`}
                width={480}
                height={600}
                className="w-full h-auto object-cover aspect-[4/5]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-12 grid gap-6 md:grid-cols-3">
        {[
          { Icon: MessageCircle, label: "WhatsApp", value: "Clique para conversar", href: WHATSAPP_URL, cta: true },
          { Icon: Phone, label: "Telefone", value: PHONE_DISPLAY, href: PHONE_HREF },
          { Icon: Mail, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.cta ? "_blank" : undefined}
            rel={c.cta ? "noopener noreferrer" : undefined}
            className="soft-card soft-card-hover p-6 block"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <c.Icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              {c.label}
            </div>
            <div className="mt-1 font-display font-semibold text-primary">{c.value}</div>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 pb-20">
        <div className="soft-card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
              <MapPin className="h-4 w-4" /> Onde estamos
            </div>
            <address className="mt-2 text-foreground/85 not-italic">
              <strong>{CITY}</strong>
              <br />
              {ADDRESS}
              <br />
              <span className="text-sm text-muted-foreground">
                {CITY_LOCALITY}/{CITY_REGION}
              </span>
            </address>
          </div>
          <Button asChild size="lg" className="bg-whatsapp text-white hover:opacity-90 h-12 px-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Solicitar diagnóstico
            </a>
          </Button>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Enquanto isso, explore o{" "}
          <Link href="/blog" className="font-semibold text-primary hover:underline">
            blog da AD Contábil
          </Link>{" "}
          com guias sobre Fator R, PF x PJ e especialidades da saúde.
        </p>
      </section>
    </SiteLayout>
  );
}
