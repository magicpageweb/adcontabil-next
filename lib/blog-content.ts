import type { BlogBlock, BlogPost, BlogRichPart } from "@/lib/blog";

export const WORDS_PER_MINUTE = 220;

export type TocMode = "none" | "optional" | "auto";

export type BlogHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type BlogCalloutVariant = "resumo" | "importante" | "dica";

function richPartsToText(parts: BlogRichPart[]): string {
  return parts
    .map((part) => (typeof part === "string" ? part : part.label))
    .join("");
}

/** Flatten structured blocks to plain text (no HTML in this project). */
export function flattenBlogText(blocks: BlogBlock[]): string {
  return blocks
    .map((block) => {
      if (block.type === "p" || block.type === "callout") {
        return richPartsToText(block.parts);
      }
      if (block.type === "h2" || block.type === "h3") {
        return block.text;
      }
      if (block.type === "ul") {
        return block.items.join(" ");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ");
}

export function countWords(text: string): number {
  const normalized = text
    .replace(/<[^>]*>/g, " ")
    .replace(/[^\p{L}\p{N}\s'-]/gu, " ")
    .trim();
  if (!normalized) return 0;
  return normalized.split(/\s+/).filter(Boolean).length;
}

export function countPostWords(post: Pick<BlogPost, "content">): number {
  return countWords(flattenBlogText(post.content));
}

export function readingMinutesFromWords(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

export function getPostReadingMinutes(post: Pick<BlogPost, "content">): number {
  return readingMinutesFromWords(countPostWords(post));
}

export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function uniqueId(base: string, used: Set<string>): string {
  let id = base || "secao";
  let n = 2;
  while (used.has(id)) {
    id = `${base}-${n}`;
    n += 1;
  }
  used.add(id);
  return id;
}

/** Extract H2/H3 with stable unique ids for anchors and TOC. */
export function extractHeadings(
  blocks: BlogBlock[],
  { includeH3 = false }: { includeH3?: boolean } = {},
): BlogHeading[] {
  const used = new Set<string>();
  const headings: BlogHeading[] = [];

  for (const block of blocks) {
    if (block.type === "h2" || (includeH3 && block.type === "h3")) {
      const level = block.type === "h2" ? 2 : 3;
      const id = uniqueId(slugifyHeading(block.text), used);
      headings.push({ id, text: block.text, level });
    }
  }

  return headings;
}

/** Map block index → heading id for H2 (and optional H3). */
export function headingIdByBlockIndex(
  blocks: BlogBlock[],
  { includeH3 = false }: { includeH3?: boolean } = {},
): Map<number, string> {
  const used = new Set<string>();
  const map = new Map<number, string>();

  blocks.forEach((block, index) => {
    if (block.type === "h2" || (includeH3 && block.type === "h3")) {
      map.set(index, uniqueId(slugifyHeading(block.text), used));
    }
  });

  return map;
}

export function getTocMode(wordCount: number, h2Count: number): TocMode {
  if (wordCount <= 1500) return "none";
  if (wordCount <= 2500) {
    return h2Count >= 3 ? "optional" : "none";
  }
  return "auto";
}

export function tokenizeForOverlap(text: string): Set<string> {
  return new Set(
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter((t) => t.length > 2),
  );
}

/** Simple token overlap score (0–1) for related-post ranking. */
export function keywordOverlapScore(a: string, b: string): number {
  const setA = tokenizeForOverlap(a);
  const setB = tokenizeForOverlap(b);
  if (!setA.size || !setB.size) return 0;

  let overlap = 0;
  for (const token of setA) {
    if (setB.has(token)) overlap += 1;
  }
  return overlap / Math.max(setA.size, setB.size);
}

export function buildPostSearchBlob(post: BlogPost): string {
  return [
    post.title,
    post.excerpt,
    post.seoTitle,
    post.seoDescription,
    ...(post.keywords ?? []),
    ...(post.tags ?? []),
  ]
    .filter(Boolean)
    .join(" ");
}

export function summaryItemsFromPost(
  post: BlogPost,
  headings: BlogHeading[],
): { text: string; href?: string }[] {
  if (post.summaryBullets?.length) {
    const h2 = headings.filter((h) => h.level === 2);
    return post.summaryBullets.map((text, i) => ({
      text,
      href: h2[i] ? `#${h2[i].id}` : undefined,
    }));
  }

  return headings
    .filter((h) => h.level === 2)
    .map((h) => ({ text: h.text, href: `#${h.id}` }));
}
