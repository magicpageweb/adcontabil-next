/**
 * Valida destinations dos redirects em next.config.ts.
 * Run: node scripts/check-redirects.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const STATIC_ROUTES = new Set([
  "/",
  "/servicos",
  "/quem-somos",
  "/contato",
  "/blog",
  "/contabilidade-para-medicos-em-santa-cruz-do-sul",
  "/politica-de-privacidade",
  "/politica-de-cookies",
  "/termos-de-uso",
  "/sitemap.xml",
  "/llms.txt",
]);

const SPECIALTY_SLUGS = [
  "medicos",
  "dentistas",
  "psicologos",
  "fisioterapeutas",
  "nutricionistas",
  "fonoaudiologos",
];

const SOLUTION_SLUGS = [
  "fator-r",
  "sociedade-uniprofissional",
  "carne-leao-pj",
  "abertura-cnpj",
];

function collectPosts() {
  const posts = [];
  const postsDir = path.join(root, "lib", "blog", "posts");
  for (const file of fs.readdirSync(postsDir).filter((f) => f.endsWith(".ts"))) {
    const src = fs.readFileSync(path.join(postsDir, file), "utf8");
    const slug = src.match(/slug:\s*"([^"]+)"/)?.[1];
    const publishedAt = src.match(/publishedAt:\s*"([^"]+)"/)?.[1];
    if (slug && publishedAt) posts.push({ slug, publishedAt, file });
  }
  const blogTs = fs.readFileSync(path.join(root, "lib", "blog.ts"), "utf8");
  const re = /slug:\s*"([^"]+)"[\s\S]*?publishedAt:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(blogTs))) {
    if (!posts.some((p) => p.slug === m[1])) {
      posts.push({ slug: m[1], publishedAt: m[2], file: "lib/blog.ts" });
    }
  }
  return posts;
}

function isPostLive(publishedAt, now = new Date()) {
  const published = new Date(`${publishedAt}T00:00:00-03:00`);
  return !Number.isNaN(published.getTime()) && published.getTime() <= now.getTime();
}

/** Pair each destination with the nearest preceding source in redirects(). */
function parseRedirects(configSrc) {
  const fnStart = configSrc.indexOf("async redirects()");
  const fnBody = configSrc.slice(fnStart);
  const returnStart = fnBody.indexOf("return [");
  // Stop before rewrites() / headers()
  const endMarkers = ["async rewrites()", "async headers()"];
  let end = fnBody.length;
  for (const marker of endMarkers) {
    const i = fnBody.indexOf(marker);
    if (i !== -1 && i < end) end = i;
  }
  let slice = fnBody.slice(returnStart, end);
  // Drop spread of legacy sitemap map (sources are dynamic)
  slice = slice.replace(
    /\.\.\.legacyWordpressSitemaps\.map\([\s\S]*?\),?/m,
    "",
  );

  const sources = [...slice.matchAll(/source:\s*\n?\s*"([^"]+)"/g)].map(
    (m) => ({ index: m.index, value: m[1] }),
  );
  const destinations = [
    ...slice.matchAll(/destination:\s*\n?\s*"([^"]+)"/g),
  ].map((m) => ({ index: m.index, value: m[1] }));

  const redirects = [];
  for (const dest of destinations) {
    let source = null;
    for (const s of sources) {
      if (s.index < dest.index) source = s.value;
      else break;
    }
    if (source) redirects.push({ source, destination: dest.value });
  }

  // Explicitly validate legacy sitemap targets
  for (const source of [
    "/post_tag-sitemap.xml",
    "/page-sitemap.xml",
    "/post-sitemap.xml",
    "/category-sitemap.xml",
    "/sitemap_index.xml",
    "/wp-sitemap.xml",
    "/wp-sitemap-index.xml",
  ]) {
    redirects.push({ source, destination: "/sitemap.xml" });
  }
  return redirects;
}

function knownInternalRoute(destPath, posts) {
  if (STATIC_ROUTES.has(destPath)) return { ok: true, reason: "static" };
  if (SPECIALTY_SLUGS.some((s) => destPath === `/contabilidade-para/${s}`)) {
    return { ok: true, reason: "specialty" };
  }
  if (SOLUTION_SLUGS.some((s) => destPath === `/solucoes/${s}`)) {
    return { ok: true, reason: "solution" };
  }
  const blogMatch = destPath.match(/^\/blog\/([^/#?]+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const post = posts.find((p) => p.slug === slug);
    if (!post) return { ok: false, reason: `blog slug não encontrado: ${slug}` };
    if (!isPostLive(post.publishedAt)) {
      return {
        ok: false,
        reason: `post não live (publishedAt ${post.publishedAt})`,
      };
    }
    return { ok: true, reason: `blog live (${post.publishedAt})` };
  }
  if (destPath.startsWith("/blog/paginas/")) {
    return { ok: true, reason: "blog pagination" };
  }
  return { ok: false, reason: "rota desconhecida" };
}

const configSrc = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
const redirects = parseRedirects(configSrc);
const posts = collectPosts();

let failed = 0;
console.log("source → destination | status");
for (const r of redirects) {
  if (
    r.source.includes(":path") ||
    r.source.includes(":page") ||
    r.destination.startsWith("https://")
  ) {
    console.log(`${r.source} → ${r.destination} | OK (skip dinâmico/externo)`);
    continue;
  }

  const dest = r.destination.split("#")[0] || "/";
  const check = knownInternalRoute(dest, posts);
  if (check.ok) {
    console.log(`${r.source} → ${r.destination} | OK (${check.reason})`);
  } else {
    failed += 1;
    console.log(`${r.source} → ${r.destination} | FALHA (${check.reason})`);
  }
}

console.log(`\nTotal: ${redirects.length} | Falhas: ${failed}`);
process.exit(failed > 0 ? 1 : 0);
