import Link from "next/link";
import type { BlogCategorySlug } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/blog";

export function CategoryChips({
  active,
}: {
  active?: BlogCategorySlug | null;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
          !active
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary"
        }`}
      >
        Todas
      </Link>
      {BLOG_CATEGORIES.map((c) => (
        <Link
          key={c.slug}
          href={`/blog?categoria=${c.slug}`}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
            active === c.slug
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary"
          }`}
        >
          {c.label}
        </Link>
      ))}
    </div>
  );
}
