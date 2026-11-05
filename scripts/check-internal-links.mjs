/**
 * Valida hrefs /blog/<slug> e rotas internas em posts, site, fator-r e redirects.
 * Run: npm run check:links
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const NOW = new Date();

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
  "/#planos",
]);

const SPECIALTY = [
  "medicos",
  "dentistas",
  "psicologos",
  "fisioterapeutas",
  "nutricionistas",
  "fonoaudiologos",
];
const SOLUTION = [
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
    if (slug && publishedAt) posts.push({ slug, publishedAt, file, src });
  }
  const blogTs = fs.readFileSync(path.join(root, "lib", "blog.ts"), "utf8");
  const section = blogTs.slice(blogTs.indexOf("export const BLOG_POSTS"));
  const slugRe = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = slugRe.exec(section))) {
    const window = section.slice(m.index, m.index + 1500);
    const publishedAt = window.match(/publishedAt:\s*"([^"]+)"/)?.[1];
    if (!publishedAt) continue;
    if (!posts.some((p) => p.slug === m[1])) {
      posts.push({
        slug: m[1],
        publishedAt,
        file: "lib/blog.ts",
        src: window,
      });
    }
  }
  return posts;
}

function isPostLive(publishedAt) {
  const published = new Date(`${publishedAt}T00:00:00-03:00`);
  return !Number.isNaN(published.getTime()) && published.getTime() <= NOW.getTime();
}

function extractHrefs(src) {
  const hrefs = new Set();
  for (const m of src.matchAll(/href:\s*"(\/[^"]*)"/g)) hrefs.add(m[1]);
  for (const m of src.matchAll(/link\(\s*"(\/[^"]*)"/g)) hrefs.add(m[1]);
  for (const m of src.matchAll(/destination:\s*"(\/[^"]*)"/g)) hrefs.add(m[1]);
  return [...hrefs];
}

function routeOk(href, postsBySlug) {
  const pathOnly = (href.split(/[?#]/)[0] || "/");
  const withHash = href.includes("#") ? href : null;
  if (STATIC_ROUTES.has(pathOnly) || (withHash && STATIC_ROUTES.has(href))) {
    return { ok: true };
  }
  if (SPECIALTY.some((s) => pathOnly === `/contabilidade-para/${s}`)) {
    return { ok: true };
  }
  if (SOLUTION.some((s) => pathOnly === `/solucoes/${s}`)) {
    return { ok: true };
  }
  if (pathOnly.startsWith("/blog/paginas/") || pathOnly === "/blog") {
    return { ok: true };
  }
  const blog = pathOnly.match(/^\/blog\/([^/]+)$/);
  if (blog) {
    const post = postsBySlug.get(blog[1]);
    if (!post) return { ok: false, reason: "slug inexistente" };
    if (!isPostLive(post.publishedAt)) {
      return { ok: false, reason: `não live (${post.publishedAt})` };
    }
    return { ok: true };
  }
  if (pathOnly.startsWith("/_next") || pathOnly.startsWith("/api/")) {
    return { ok: true };
  }
  // Ignore image/static assets
  if (/\.(webp|png|jpg|svg|ico)$/i.test(pathOnly)) return { ok: true };
  return { ok: false, reason: "rota desconhecida" };
}

function parseRedirectDestinations(configSrc) {
  const fnStart = configSrc.indexOf("async redirects()");
  const fnBody = configSrc.slice(fnStart);
  const end = Math.min(
    ...["async rewrites()", "async headers()"]
      .map((m) => {
        const i = fnBody.indexOf(m);
        return i === -1 ? fnBody.length : i;
      }),
  );
  let slice = fnBody.slice(fnBody.indexOf("return ["), end);
  slice = slice.replace(
    /\.\.\.legacyWordpressSitemaps\.map\(\(source\)\s*=>\s*\(\{[\s\S]*?\}\)\)\,?/,
    "",
  );
  return [...slice.matchAll(/destination:\s*\n?\s*"([^"]+)"/g)].map((m) => m[1]);
}

const posts = collectPosts();
const postsBySlug = new Map(posts.map((p) => [p.slug, p]));
const failures = [];

function checkFile(label, src) {
  for (const href of extractHrefs(src)) {
    if (!href.startsWith("/")) continue;
    const res = routeOk(href, postsBySlug);
    if (!res.ok) {
      failures.push(`${label}: ${href} — ${res.reason}`);
    }
  }
}

for (const p of posts) {
  const full =
    p.file === "lib/blog.ts"
      ? fs.readFileSync(path.join(root, "lib", "blog.ts"), "utf8")
      : fs.readFileSync(path.join(root, "lib", "blog", "posts", p.file), "utf8");
  // For inline posts, only scan that slug's block roughly via related + content links in whole file once
  if (p.file !== "lib/blog.ts") checkFile(p.file, full);
}
checkFile("lib/blog.ts", fs.readFileSync(path.join(root, "lib", "blog.ts"), "utf8"));
checkFile(
  "lib/site.ts",
  fs.readFileSync(path.join(root, "lib", "site.ts"), "utf8"),
);
checkFile(
  "lib/fator-r-content.ts",
  fs.readFileSync(path.join(root, "lib", "fator-r-content.ts"), "utf8"),
);

const configSrc = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
for (const dest of parseRedirectDestinations(configSrc)) {
  if (dest.startsWith("https://")) continue;
  if (dest.includes(":")) continue;
  const res = routeOk(dest, postsBySlug);
  if (!res.ok) {
    failures.push(`next.config redirect → ${dest} — ${res.reason}`);
  }
}

if (failures.length) {
  console.log("FALHAS:");
  for (const f of failures) console.log(" -", f);
  console.log(`\nTotal falhas: ${failures.length}`);
  process.exit(1);
}

console.log(
  `OK — ${posts.length} posts indexados; todos os hrefs internos /blog e redirects válidos.`,
);
process.exit(0);
