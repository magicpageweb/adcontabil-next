import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ADDRESS, BRAND, CITY, whatsappUrl } from "@/lib/site";
import { getPostsForSpecialty } from "@/lib/blog";
import {
  breadcrumbSchema,
  buildPageMetadata,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";

const PATH = "/contabilidade-para-medicos-em-santa-cruz-do-sul";

const TITLE = "Contabilidade para Médicos em Santa Cruz do Sul";
const DESCRIPTION =
  "Contabilidade para médicos em Santa Cruz do Sul/RS: abertura de CNPJ, Fator R, Simples Nacional, PF x PJ e rotina fiscal para consultórios e clínicas médicas. Atendimento local e remoto pela AD Contábil.";

const WHATSAPP_LOCAL = whatsappUrl(
  "Olá! Sou médico(a) em Santa Cruz do Sul e gostaria de uma análise contábil/tributária para meu consultório ou clínica.",
);

const AUDIENCE = [
  "Médicos plantonistas e pejotizados em Santa Cruz do Sul e região",
  "Médicos com consultório próprio ou em clínicas compartilhadas",
  "Clínicas médicas que precisam organizar folha, notas e obrigações",
  "Profissionais avaliando migração de PF (Carnê-Leão) para PJ",
  "Médicos que buscam contabilidade local com atendimento consultivo",
] as const;

const ANALYSIS = [
  "CNAE e natureza jurídica adequados à atividade médica",
  "Regime tributário compatível com o faturamento do consultório ou clínica",
  "Viabilidade do Simples Nacional e acompanhamento do Fator R",
  "Comparativo PF x PJ com base na rotina real de atendimento",
  "ISS e particularidades municipais de Santa Cruz do Sul, quando aplicável",
  "Organização de pró-labore, folha e distribuição de lucros",
] as const;

const BENEFITS = [
  "Proximidade com escritório em Santa Cruz do Sul — Centro",
  "Atendimento local e remoto, sem abrir mão da clareza técnica",
  "Linguagem alinhada à rotina do consultório e da clínica médica",
  "Orientação caso a caso, sem promessas genéricas de alíquota",
  "Suporte contínuo via WhatsApp e acompanhamento mensal",
] as const;

const BLOCKS = [
  {
    title: "Abertura de CNPJ médico",
    desc: "Do CNAE ao alvará: estruturamos a formalização com análise de enquadramento para plantonistas, consultórios e clínicas em Santa Cruz do Sul.",
    href: "/solucoes/abertura-cnpj",
  },
  {
    title: "Fator R e Simples Nacional",
    desc: "Acompanhamos folha, pró-labore e faturamento para avaliar o enquadramento no Simples — com alíquotas que podem variar conforme o perfil da operação.",
    href: "/solucoes/fator-r",
  },
  {
    title: "PF x PJ na medicina",
    desc: "Comparamos Carnê-Leão e cenários de pessoa jurídica com números alinhados à sua agenda clínica, sem atalhos.",
    href: "/solucoes/carne-leao-pj",
  },
  {
    title: "Rotina contábil mensal",
    desc: "Apuração, guias, declarações e organização documental para o médico manter o foco no atendimento.",
    href: "/contato",
  },
] as const;

const FAQS = [
  {
    q: "A AD Contábil atende médicos em Santa Cruz do Sul?",
    a: "Sim. Nosso escritório fica no Centro de Santa Cruz do Sul/RS e atende médicos, consultórios e clínicas médicas com orientação presencial e digital.",
  },
  {
    q: "Médico plantonista precisa de CNPJ?",
    a: "Depende do faturamento, do vínculo com hospitais e da estrutura desejada. Avaliamos PF e PJ com base no seu cenário concreto antes de indicar o caminho.",
  },
  {
    q: "O Fator R reduz imposto automaticamente?",
    a: "Não. O Fator R influencia o enquadramento no Simples Nacional conforme folha e faturamento. A análise é mensal e individualizada.",
  },
  {
    q: "Vocês atendem só presencialmente?",
    a: "Não. Combinamos proximidade local em Santa Cruz do Sul com atendimento remoto para quem prefere rotina digital.",
  },
  {
    q: "Qual a diferença desta página para Contabilidade para Médicos?",
    a: "A página de especialidade cobre o serviço nacionalmente. Esta landing reforça o atendimento local em Santa Cruz do Sul — útil para quem busca contador médico na cidade e região.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "contabilidade para médicos em santa cruz do sul",
    "contador para médicos santa cruz do sul",
    "contabilidade médica santa cruz do sul",
    "abertura de cnpj médico santa cruz do sul",
    "fator r médicos",
    "consultório médico contabilidade",
    "clínica médica santa cruz do sul",
    "AD Contábil",
  ],
});

export default function ContabilidadeMedicosSantaCruzPage() {
  const relatedPosts = getPostsForSpecialty("medicos", 2);

  const schemas = [
    serviceSchema({
      name: TITLE,
      description: DESCRIPTION,
      path: PATH,
      serviceType: "Contabilidade para médicos em Santa Cruz do Sul",
    }),
    breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Contabilidade para médicos", path: "/contabilidade-para/medicos" },
      { name: "Santa Cruz do Sul", path: PATH },
    ]),
    faqSchema(FAQS),
  ];

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <section className="bg-hero-dark text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Início
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/contabilidade-para/medicos"
                  className="hover:text-white transition"
                >
                  Médicos
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/90">Santa Cruz do Sul</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-accent">
            <MapPin className="h-3.5 w-3.5" />
            Santa Cruz do Sul/RS · Atendimento local e remoto
          </div>

          <h1 className="mt-5 font-display text-4xl md:text-5xl font-semibold max-w-3xl text-balance">
            Contabilidade para Médicos em Santa Cruz do Sul
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 text-pretty">
            Apoio contábil e tributário para médicos, consultórios e clínicas que
            querem atuar com mais segurança, clareza e organização — com a{" "}
            {BRAND} no Centro de Santa Cruz do Sul.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-cta text-cta-foreground hover:opacity-90 h-12 px-6"
            >
              <a href={WHATSAPP_LOCAL} target="_blank" rel="noopener noreferrer">
                Solicitar diagnóstico
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={WHATSAPP_LOCAL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Falar com especialista
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <p className="max-w-3xl text-lg text-muted-foreground text-pretty">
          A contabilidade para médicos em Santa Cruz do Sul exige mais do que
          emissão de guias. Plantões, consultório, clínica e pejotização pedem
          enquadramento coerente, rotina fiscal previsível e um parceiro que
          entenda a realidade da cidade e da região — com atendimento presencial
          ou remoto.
        </p>

        <div className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Para quem é
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {AUDIENCE.map((item) => (
              <li
                key={item}
                className="flex gap-3 items-start rounded-xl border border-border/70 bg-card px-4 py-3 text-sm text-foreground/85"
              >
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            O que analisamos
          </h2>
          <ul className="mt-6 space-y-3 max-w-3xl">
            {ANALYSIS.map((item) => (
              <li key={item} className="flex gap-3 items-start text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Como apoiamos o consultório e a clínica médica
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {BLOCKS.map((block) => (
              <div key={block.title} className="card-elevated card-elevated-hover p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{block.desc}</p>
                <Link
                  href={block.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Benefícios de uma contabilidade local em Santa Cruz do Sul
          </h2>
          <ul className="mt-6 space-y-3 max-w-3xl">
            {BENEFITS.map((item) => (
              <li key={item} className="flex gap-3 items-start text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-muted-foreground text-pretty">
            Estamos em {ADDRESS}, {CITY}. Médicos da região encontram na {BRAND}{" "}
            uma contabilidade especializada para a saúde, com proximidade humana e
            operação digital.
          </p>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-14 flex flex-wrap gap-4 text-sm">
          <Link
            href="/contabilidade-para/medicos"
            className="font-semibold text-primary hover:underline underline-offset-4"
          >
            Contabilidade para médicos (visão geral)
          </Link>
          <span className="text-border" aria-hidden>
            |
          </span>
          <Link
            href="/blog"
            className="font-semibold text-primary hover:underline underline-offset-4"
          >
            Blog contábil
          </Link>
          <span className="text-border" aria-hidden>
            |
          </span>
          <Link
            href="/contato"
            className="font-semibold text-primary hover:underline underline-offset-4"
          >
            Contato e localização
          </Link>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-surface border-y border-border/70">
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-14">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Leituras para médicos
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary/35"
                  >
                    <p className="font-display font-semibold text-foreground group-hover:text-primary transition text-balance">
                      {post.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-primary font-semibold">
          Diagnóstico para médicos em Santa Cruz do Sul
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-primary text-balance">
          Quer organizar a contabilidade do seu consultório ou clínica?
        </h2>
        <p className="mt-4 text-muted-foreground text-pretty max-w-2xl mx-auto">
          Fale com a {BRAND} e receba uma análise alinhada ao seu faturamento,
          modelo de atendimento e realidade em Santa Cruz do Sul/RS.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-whatsapp text-white hover:opacity-90 h-12 px-8"
          >
            <a href={WHATSAPP_LOCAL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
            <Link href="/contato">Ver endereço e contato</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
