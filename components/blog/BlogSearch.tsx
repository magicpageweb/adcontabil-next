"use client";

import { FormEvent } from "react";
import { Search } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { GA_EVENTS, isGaEnabled } from "@/lib/analytics";

export function BlogSearch({
  defaultQuery = "",
  categoria,
}: {
  defaultQuery?: string;
  categoria?: string | null;
}) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!isGaEnabled()) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const q = String(data.get("q") ?? "").trim();
    try {
      sendGAEvent("event", GA_EVENTS.blogSearch, {
        search_term: q.slice(0, 100),
        has_category: Boolean(categoria),
      });
    } catch {
      /* no-op */
    }
  }

  return (
    <form
      action="/blog"
      method="get"
      role="search"
      onSubmit={onSubmit}
      className="relative w-full max-w-xl"
    >
      {categoria ? <input type="hidden" name="categoria" value={categoria} /> : null}
      <label htmlFor="blog-search" className="sr-only">
        Buscar artigos do blog
      </label>
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <input
        id="blog-search"
        type="search"
        name="q"
        defaultValue={defaultQuery}
        placeholder="Buscar por título, categoria ou palavra-chave"
        className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-28 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Buscar
      </button>
    </form>
  );
}
