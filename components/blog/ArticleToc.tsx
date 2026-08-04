"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { BlogHeading, TocMode } from "@/lib/blog-content";

export function ArticleToc({
  headings,
  mode,
}: {
  headings: BlogHeading[];
  mode: TocMode;
}) {
  const h2 = headings.filter((h) => h.level === 2);
  const sticky = mode === "auto";
  const [open, setOpen] = useState(false);

  if (mode === "none" || h2.length === 0) return null;

  return (
    <nav
      aria-labelledby="article-toc-title"
      className={`mb-10 rounded-2xl border border-border/70 bg-[#FFFCF8] p-4 md:p-5 ${
        sticky ? "lg:mb-0 lg:sticky lg:top-24" : ""
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 text-left lg:cursor-default"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="article-toc-panel"
      >
        <h2
          id="article-toc-title"
          className="font-display text-base md:text-lg font-semibold text-foreground"
        >
          Neste artigo
        </h2>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition lg:hidden ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        id="article-toc-panel"
        className={`${open ? "mt-3 block" : "hidden"} lg:mt-3 lg:block`}
      >
        <ol className="space-y-2">
          {h2.map((heading, index) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="group flex gap-2 rounded-lg px-1 py-1.5 text-sm text-foreground/80 transition hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="tabular-nums text-muted-foreground group-hover:text-primary/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-pretty">{heading.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
