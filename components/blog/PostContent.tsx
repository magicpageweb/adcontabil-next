import Link from "next/link";
import type { BlogBlock, BlogRichPart } from "@/lib/blog";
import { BRAND } from "@/lib/site";
import { headingIdByBlockIndex } from "@/lib/blog-content";

function RichParts({ parts }: { parts: BlogRichPart[] }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <Link
            key={i}
            href={part.href}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {part.label}
          </Link>
        ),
      )}
    </>
  );
}

const CALLOUT_TITLE: Record<"resumo" | "importante" | "dica", string> = {
  resumo: "Em resumo",
  importante: "Importante",
  dica: `Dica da ${BRAND}`,
};

export function PostContent({ blocks }: { blocks: BlogBlock[] }) {
  const headingIds = headingIdByBlockIndex(blocks, { includeH3: true });

  return (
    <div className="prose-blog space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              id={headingIds.get(i)}
              className="scroll-mt-28 font-display text-2xl md:text-[1.65rem] font-semibold text-primary pt-4"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              id={headingIds.get(i)}
              className="scroll-mt-28 font-display text-xl md:text-[1.25rem] font-semibold text-foreground pt-2"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2.5 pl-1">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[1.05rem] leading-relaxed text-foreground/85"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "callout") {
          const title = block.title ?? CALLOUT_TITLE[block.variant];
          return (
            <aside
              key={i}
              className={`mp-callout mp-callout--${block.variant}`}
              aria-label={title}
            >
              <p className="mp-callout__title">{title}</p>
              <p className="mp-callout__body">
                <RichParts parts={block.parts} />
              </p>
            </aside>
          );
        }
        return (
          <p
            key={i}
            className="text-[1.05rem] leading-[1.75] text-foreground/85 text-pretty"
          >
            <RichParts parts={block.parts} />
          </p>
        );
      })}
    </div>
  );
}
