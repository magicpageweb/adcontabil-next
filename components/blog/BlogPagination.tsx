import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buildBlogListPath } from "@/lib/blog";

function pageWindow(current: number, total: number) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, total, current]);
  for (let i = current - 1; i <= current + 1; i += 1) {
    if (i >= 1 && i <= total) pages.add(i);
  }

  return [...pages].sort((a, b) => a - b);
}

export function BlogPagination({
  page,
  totalPages,
  categoria,
  q,
}: {
  page: number;
  totalPages: number;
  categoria?: string | null;
  q?: string | null;
}) {
  if (totalPages <= 1) return null;

  const prevHref =
    page > 1
      ? buildBlogListPath({ page: page - 1, categoria, q })
      : null;
  const nextHref =
    page < totalPages
      ? buildBlogListPath({ page: page + 1, categoria, q })
      : null;

  const numbers = pageWindow(page, totalPages);

  return (
    <nav
      aria-label="Paginação do blog"
      className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
    >
      <p className="text-sm text-muted-foreground">
        Página <span className="font-semibold text-foreground">{page}</span> de{" "}
        <span className="font-semibold text-foreground">{totalPages}</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {prevHref ? (
          <Link
            href={prevHref}
            rel="prev"
            className="inline-flex h-10 items-center gap-1 rounded-full border border-border bg-card px-3.5 text-sm font-semibold text-foreground/80 transition hover:border-primary/40 hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Anterior
          </Link>
        ) : (
          <span className="inline-flex h-10 items-center gap-1 rounded-full border border-border/60 bg-surface px-3.5 text-sm font-semibold text-muted-foreground/50">
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Anterior
          </span>
        )}

        <ul className="flex flex-wrap items-center gap-1.5">
          {numbers.map((n, index) => {
            const prev = numbers[index - 1];
            const showEllipsis = prev !== undefined && n - prev > 1;
            const href = buildBlogListPath({ page: n, categoria, q });
            const isCurrent = n === page;

            return (
              <li key={n} className="flex items-center gap-1.5">
                {showEllipsis && (
                  <span className="px-1 text-sm text-muted-foreground" aria-hidden>
                    …
                  </span>
                )}
                {isCurrent ? (
                  <span
                    aria-current="page"
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-primary px-3 text-sm font-semibold text-primary-foreground"
                  >
                    {n}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-card px-3 text-sm font-semibold text-foreground/80 transition hover:border-primary/40 hover:text-primary"
                  >
                    {n}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {nextHref ? (
          <Link
            href={nextHref}
            rel="next"
            className="inline-flex h-10 items-center gap-1 rounded-full border border-border bg-card px-3.5 text-sm font-semibold text-foreground/80 transition hover:border-primary/40 hover:text-primary"
          >
            Próxima
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        ) : (
          <span className="inline-flex h-10 items-center gap-1 rounded-full border border-border/60 bg-surface px-3.5 text-sm font-semibold text-muted-foreground/50">
            Próxima
            <ChevronRight className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>
    </nav>
  );
}
