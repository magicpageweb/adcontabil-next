"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroPositionSlide = {
  id: string;
  eyebrow: string;
  title: string;
  support: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

const SLIDES: HeroPositionSlide[] = [
  {
    id: "saude",
    eyebrow: "Santa Cruz do Sul/RS · Contabilidade consultiva",
    title: "Contabilidade especializada para profissionais da saúde",
    support: "Estratégia tributária para crescer com segurança",
    description:
      "Planejamento claro para consultórios, clínicas e profissionais da saúde.",
    primaryCta: { label: "Fale conosco", href: "/contato" },
    secondaryCta: { label: "Ver especialidades", href: "/#especialidades" },
  },
  {
    id: "empresas",
    eyebrow: "Santa Cruz do Sul/RS · Soluções para negócios",
    title: "Contabilidade para empresas e profissionais",
    support: "Organização contábil para decisões mais seguras",
    description:
      "Abertura de empresas, rotina fiscal e orientação para MEIs, prestadores de serviços e profissionais liberais.",
    primaryCta: { label: "Fale conosco", href: "/contato" },
    secondaryCta: { label: "Conheça nossos serviços", href: "/servicos" },
  },
  {
    id: "consultiva",
    eyebrow: "Santa Cruz do Sul/RS · Atendimento em todo o Brasil",
    title: "Contabilidade consultiva para decisões mais seguras",
    support: "Tecnologia, clareza e atendimento humano",
    description:
      "Acompanhamento contábil, fiscal e financeiro para empresas e profissionais que querem mais organização para decidir.",
    primaryCta: { label: "Fale conosco", href: "/contato" },
    secondaryCta: { label: "Solicitar orientação", href: "/contato" },
  },
];

const AUTOPLAY_MS = 6000;

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const goTo = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  return (
    <div
      className="reveal-up outline-none"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Posicionamentos da AD Contábil"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid" aria-live="polite">
        {SLIDES.map((slide, i) => {
          const isActive = i === index;
          const TitleTag = i === 0 ? "h1" : "p";

          return (
            <div
              key={slide.id}
              className={`col-start-1 row-start-1 ${
                isActive
                  ? "relative z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              } ${
                isActive && !reduceMotion ? "hero-slide-in" : ""
              }`}
              aria-hidden={!isActive}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                {slide.eyebrow}
              </p>

              <TitleTag className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.35rem] font-semibold leading-[1.08] text-foreground text-balance">
                {slide.title}
              </TitleTag>

              <p className="mt-5 font-display text-lg md:text-xl font-semibold text-primary text-pretty">
                {slide.support}
              </p>

              <p className="mt-2 text-base md:text-lg text-muted-foreground max-w-xl text-pretty">
                {slide.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cta text-cta-foreground hover:opacity-90 h-12 px-7"
                >
                  <Link href={slide.primaryCta.href}>{slide.primaryCta.label}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 border-border"
                >
                  <Link href={slide.secondaryCta.href}>{slide.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex gap-1.5" role="tablist" aria-label="Slides do hero">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}: ${slide.title}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              i === index ? "w-8 bg-cta" : "w-1.5 bg-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
