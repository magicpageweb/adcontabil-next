/**
 * Meta length checklist for static routes + all blog posts (incl. scheduled).
 * Exit 1 if any full title > 60 or description > 155.
 * Run: node scripts/report-meta-lengths.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const BRAND = "AD Contábil";
const SUFFIX = ` — ${BRAND}`;
const TITLE_MAX = 60;
const DESC_MAX = 155;

const staticRows = [
  [
    "/",
    `${BRAND} — Contabilidade para Saúde e Empresas`,
    "Contabilidade consultiva com especialização em saúde e atendimento a empresas, MEIs e profissionais. Santa Cruz do Sul/RS e todo o Brasil.",
  ],
  [
    "/contabilidade-para-medicos-em-santa-cruz-do-sul",
    "Contabilidade para médicos em Santa Cruz",
    "Contabilidade para médicos em Santa Cruz do Sul/RS: CNPJ, Fator R, Simples e PF x PJ para consultórios e clínicas. Atendimento local e remoto.",
  ],
  [
    "/solucoes/fator-r",
    "Fator R e Planejamento Tributário",
    "Entenda o Fator R no Simples Nacional e como a AD Contábil analisa folha e faturamento para orientar o enquadramento — sem prometer alíquota.",
  ],
  [
    "/solucoes/carne-leao-pj",
    "Carnê-Leão e Migração PF para PJ",
    "Compare Carnê-Leão (PF) e PJ com orientação da AD Contábil. Análise caso a caso, sem garantia de economia ou isenção automática.",
  ],
];

function unquote(s) {
  return s
    .replace(/^["'`]|["'`]$/g, "")
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractField(src, field) {
  // Single-line: field: "..."
  const single = src.match(
    new RegExp(`${field}:\\s*("(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*')`),
  );
  if (single) return unquote(single[1]);

  // Multi-line template or concatenated strings: field:\n    "a"\n    "b",
  const block = src.match(
    new RegExp(
      `${field}:\\s*((?:\\n\\s*"(?:\\\\.|[^"\\\\])*")+)`,
    ),
  );
  if (block) {
    const parts = [...block[1].matchAll(/"(?:\\.|[^"\\])*"/g)].map((m) =>
      unquote(m[0]),
    );
    return parts.join(" ").replace(/\s+/g, " ").trim();
  }
  return null;
}

function parsePostObject(src) {
  const slug = extractField(src, "slug");
  if (!slug) return null;
  const title = extractField(src, "title");
  const seoTitle = extractField(src, "seoTitle");
  const metaDescription = extractField(src, "metaDescription");
  const seoDescription = extractField(src, "seoDescription");
  const excerpt = extractField(src, "excerpt");
  const publishedAt = extractField(src, "publishedAt");
  return {
    slug,
    title: title ?? slug,
    seoTitle,
    description: metaDescription ?? seoDescription ?? excerpt ?? "",
    publishedAt,
  };
}

function collectPosts() {
  const posts = [];
  const postsDir = path.join(root, "lib", "blog", "posts");
  for (const file of fs.readdirSync(postsDir).filter((f) => f.endsWith(".ts"))) {
    const src = fs.readFileSync(path.join(postsDir, file), "utf8");
    // Split roughly by export const ..._POST
    const chunks = src.split(/export const \w+_POST/);
    for (const chunk of chunks.slice(1)) {
      const p = parsePostObject(chunk);
      if (p) posts.push({ ...p, file });
    }
  }

  const blogTs = fs.readFileSync(path.join(root, "lib", "blog.ts"), "utf8");
  // Inline objects inside BLOG_POSTS before the file-based imports end —
  // match each slug block until the next slug or array end.
  const inline = [
    ...blogTs.matchAll(
      /\{\s*\n\s*slug:\s*"([^"]+)"[\s\S]*?publishedAt:\s*"([^"]+)"/g,
    ),
  ];
  for (const m of inline) {
    const block = m[0];
    const p = parsePostObject(block);
    if (p && !posts.some((x) => x.slug === p.slug)) {
      posts.push({ ...p, file: "lib/blog.ts" });
    }
  }
  return posts;
}

function fullTitle(title) {
  return title.includes(BRAND) ? title : `${title}${SUFFIX}`;
}

let failures = 0;
const rows = [];

for (const [pathKey, title, desc] of staticRows) {
  rows.push({ path: pathKey, title, desc, kind: "static" });
}

for (const post of collectPosts()) {
  rows.push({
    path: `/blog/${post.slug}`,
    title: post.seoTitle ?? post.title,
    desc: post.description,
    kind: "blog",
    publishedAt: post.publishedAt,
  });
}

console.log(
  "path | titleLen | fullTitleLen | descLen | status | title",
);
for (const row of rows) {
  const full = fullTitle(row.title);
  const titleOk = full.length <= TITLE_MAX;
  const descOk = row.desc.length <= DESC_MAX;
  const ok = titleOk && descOk;
  if (!ok) failures += 1;
  const status = ok
    ? "OK"
    : [
        !titleOk ? `TITLE>${TITLE_MAX}` : null,
        !descOk ? `DESC>${DESC_MAX}` : null,
      ]
        .filter(Boolean)
        .join(",");
  console.log(
    `${row.path} | ${row.title.length} | ${full.length} | ${row.desc.length} | ${status} | ${row.title}`,
  );
}

console.log(`\nTotal: ${rows.length} | Falhas: ${failures}`);
process.exit(failures > 0 ? 1 : 0);
