"use client";

import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/lib/site";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const pause = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % HERO_SLIDES.length);
        setVisible(true);
      }, 320);
    }, 6000);

    return () => window.clearInterval(pause);
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <div className="mt-5 min-h-[5.5rem]" aria-live="polite">
      <div
        key={index}
        className={`hero-slide-panel ${visible ? "hero-slide-in" : "hero-slide-out"}`}
      >
        <p className="font-display text-lg md:text-xl font-semibold text-primary">
          {slide.title}
        </p>
        <p className="mt-1 text-base text-muted-foreground text-pretty">
          {slide.subtitle}
        </p>
      </div>
      <div className="mt-4 flex gap-1.5" role="tablist" aria-label="Destaques">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}`}
            onClick={() => {
              setVisible(false);
              window.setTimeout(() => {
                setIndex(i);
                setVisible(true);
              }, 200);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-cta" : "w-1.5 bg-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
