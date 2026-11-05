import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LeadCtaButton } from "@/components/lead-form/LeadCtaButton";
import { BRAND, BRAND_LEGAL, SPECIALTIES } from "@/lib/site";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildPageMetadata,
  faqSchema,
  jsonLdGraph,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Serviços contábeis para empresas e profissionais",
  description:
    "Abertura de empresas, contabilidade empresarial, MEI, planejamento tributário, departamento pessoal e BPO financeiro em Santa Cruz do Sul e todo o Brasil.",
  path: "/servicos",
  keywords: [
    "serviços contábeis",
    "contabilidade empresarial",
    "abertura de empresas",
    "contabilidade mei",
    "bpo financeiro",
    "departamento pessoal",
    "contabilidade santa cruz do sul",
  ],
});

const SERVICES = [
  {
    title: "Abertura e legalização de empresas",
    desc: "Formalização, natureza jurídica, CNAE e avaliação do enquadramento tributário conforme a atividade.",
    href: "/solucoes/abertura-cnpj",
  },
  {
    title: "Contabilidade empresarial",
    desc: "Escrituração, obrigações fiscais, apuração de impostos, guias e relatórios para a rotina da empresa.",
  },
  {
    title: "MEI e pequenas empresas",
    desc: "Rotina contábil e fiscal, organização documental e orientação conforme o enquadramento.",
  },
  {
    title: "Prestadores de serviços e profissionais liberais",
    desc: "Apoio contábil conforme a atividade e as obrigações aplicáveis ao modelo de atuação.",
  },
  {
    title: "Gestão e planejamento tributário",
    desc: "Análise do regime e das obrigações, com orientação técnica — sem promessa de economia.",
    href: "/solucoes/fator-r",
  },
  {
    title: "Departamento pessoal",
    desc: "Folha, pró-labore, admissões, desligamentos e obrigações trabalhistas, conforme o escopo contratado.",
  },
  {
    title: "BPO financeiro",
    desc: "Contas a pagar e receber, conciliação bancária, fluxo de caixa e relatórios, conforme o escopo contratado.",
  },
  {
    title: "Imposto de Renda Pessoa Física",
    desc: "Apoio na organização das informações, elaboração e retificação da Declaração de Imposto de Renda Pessoa Física, conforme o perfil e as necessidades de cada contribuinte.",
  },
  {
    title: "Apoio contábil para licitações públicas",
    desc: "Orientação para organização de documentos e informações contábeis solicitadas em processos licitatórios, conforme as exigências do edital e o escopo contratado.",
  },
] as const;

const STEPS = [
  {
    title: "Conversa inicial",
    text: "Entendemos a atividade, a estrutura e o momento do negócio.",
  },
  {
    title: "Análise do enquadramento",
    text: "Avaliamos regime, obrigações e particularidades da operação.",
  },
  {
    title: "Proposta",
    text: "Apresentamos o acompanhamento adequado ao perfil identificado.",
  },
  {
    title: "Acompanhamento mensal",
    text: "Rotina contábil, fiscal e orientação contínua, conforme o contrato.",
  },
] as const;

const FAQS = [
  {
    q: "O escritório atende só profissionais da saúde?",
    a: "Não. A saúde é a especialização destacada, mas também atendemos empresas, MEIs, prestadores de serviços e profissionais liberais.",
  },
  {
    q: "Vocês atendem fora de Santa Cruz do Sul?",
    a: "Sim, com atendimento digital para todo o Brasil.",
  },
  {
    q: "Como saber qual serviço ou plano é adequado?",
    a: "Depende de atividade, faturamento e estrutura; fazemos uma análise inicial.",
  },
  {
    q: "Posso trocar de contador?",
    a: "Sim; cuidamos da migração e da continuidade das obrigações, conforme o caso.",
  },
] as const;

export default function ServicosPage() {
  const path = "/servicos";
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Serviços contábeis — ${BRAND}`,
    itemListElement: [
      ...SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: "href" in s && s.href ? absoluteUrl(s.href) : absoluteUrl(path),
      })),
      {
        "@type": "ListItem",
        position: SERVICES.length + 1,
        name: "Contabilidade especializada para profissionais da saúde",
        url: absoluteUrl("/#especialidades"),
      },
    ],
  };

  const schemas = [
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Serviços", path },
    ]),
    faqSchema([...FAQS]),
    serviceSchema({
      name: "Serviços contábeis para empresas e profissionais",
      description:
        "Orientação contábil, fiscal e financeira para empresas, MEIs, prestadores de serviços e profissionais liberais, com especialização destacada na área da saúde.",
      path,
      serviceType: "Contabilidade empresarial e consultiva",
    }),
    itemList,
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph(schemas)) }}
      />

      <section className="bg-hero-dark text-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Início
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">Serviços</li>
            </ol>
          </nav>
          <p className="text-xs uppercase tracking-widest text-accent font-semibold">
            Serviços contábeis
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-balance">
            Contabilidade para empresas e profissionais
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 text-pretty">
            A {BRAND_LEGAL} oferece orientação contábil, fiscal e financeira para empresas, MEIs,
            prestadores de serviços e profissionais liberais em Santa Cruz do Sul e em todo o
            Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LeadCtaButton
              location="servicos_hero"
              className="bg-cta text-cta-foreground hover:opacity-90 h-12 px-6"
            >
              Solicitar orientação contábil
            </LeadCtaButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/#especialidades">Conhecer soluções para saúde</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-foreground text-balance">
          Especialização em saúde. Soluções para diferentes negócios.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty max-w-3xl">
          O escritório possui atuação especializada para profissionais da saúde, mas também
          atende empresas e profissionais de outros segmentos. Cada operação é analisada conforme
          atividade, faturamento, regime tributário, estrutura e objetivos do negócio.
        </p>
      </section>

      <section className="bg-surface border-y border-border/70">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            O que fazemos
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Serviços contábeis e consultivos da {BRAND}, alinhados à realidade de cada cliente.
          </p>

          <article className="mt-10 soft-card p-7 md:p-8 ring-2 ring-cta/50 relative">
            <span className="absolute -top-3 left-6 rounded-full bg-cta px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cta-foreground">
              Especialização destacada
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
              Contabilidade especializada para profissionais da saúde
            </h3>
            <p className="mt-3 text-muted-foreground text-pretty max-w-3xl">
              Atendimento consultivo para médicos, dentistas, psicólogos, fisioterapeutas,
              nutricionistas e fonoaudiólogos — com análise de enquadramento, rotina fiscal e
              organização financeira.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SPECIALTIES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/contabilidade-para/${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium text-primary hover:border-secondary hover:text-secondary transition min-h-11"
                >
                  {s.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </article>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="soft-card p-6 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
                {"href" in s && s.href ? (
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Saiba mais <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl font-semibold text-foreground">Como funciona</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {STEPS.map((step, i) => (
            <li key={step.title} className="soft-card p-6 flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface border-y border-border/70">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold text-foreground text-center">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-b border-border/80">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-balance">
          Vamos entender o que sua empresa ou atividade profissional precisa.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Conte o seu momento em poucos segundos. A {BRAND} orienta com análise técnica e
          atendimento humano.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LeadCtaButton
            location="servicos_bottom"
            className="bg-whatsapp text-white hover:opacity-90 h-12 px-8"
          >
            Solicitar orientação contábil
          </LeadCtaButton>
          <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
            <Link href="/contato">
              Ir para contato <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
