type SummaryItem = {
  text: string;
  href?: string;
};

export function ArticleSummary({ items }: { items: SummaryItem[] }) {
  if (!items.length) return null;

  return (
    <section
      aria-labelledby="article-summary-title"
      className="mb-10 rounded-2xl border border-border/70 bg-surface p-5 md:p-6"
    >
      <h2
        id="article-summary-title"
        className="font-display text-lg md:text-xl font-semibold text-foreground"
      >
        Neste artigo você vai aprender
      </h2>
      <ol className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.text} className="flex gap-3 text-[1.02rem] leading-relaxed text-foreground/85">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden
            />
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-primary underline-offset-4 hover:underline transition"
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
