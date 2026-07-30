import Link from "next/link";
import type { BlogBlock, BlogRichPart } from "@/lib/blog";

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

export function PostContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-blog space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="font-display text-2xl md:text-[1.65rem] font-semibold text-primary pt-4"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2.5 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-[1.05rem] leading-relaxed text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[1.05rem] leading-[1.75] text-foreground/85 text-pretty">
            <RichParts parts={block.parts} />
          </p>
        );
      })}
    </div>
  );
}
