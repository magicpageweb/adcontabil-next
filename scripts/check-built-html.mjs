/**
 * Audita o HTML gerado pelo `next build` (.next/server/app) — o que o Google recebe.
 * Cobre todas as rotas pré-renderizadas, sem lista manual.
 *
 * Regras por página indexável:
 *   - <title> ≤ 60 caracteres
 *   - meta description entre 50 e 155 caracteres
 *   - exatamente 1 <h1>
 *   - canonical presente
 *   - no máximo 1 meta robots
 *   - JSON-LD com @context (objeto, não array solto)
 *   - status 200 no .meta do prerender
 *   - âncoras internas (#id) apontam para ids existentes
 *   - titles não duplicados entre páginas
 *
 * Uso: npm run build && npm run check:html
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", ".next", "server", "app");

const TITLE_MAX = 60;
const DESC_MIN = 50;
const DESC_MAX = 155;
const SKIP = ["_not-found", "_global-error"];

if (!fs.existsSync(appDir)) {
  console.error("Pasta .next/server/app não encontrada. Rode `npm run build` antes.");
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith(".html") ? [full] : [];
  });
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const failures = [];
const titles = new Map();
let pages = 0;

for (const file of walk(appDir).sort()) {
  const rel = path.relative(appDir, file).replace(/\\/g, "/");
  if (SKIP.some((s) => rel.startsWith(s))) continue;

  const html = fs.readFileSync(file, "utf8");
  const route = "/" + rel.replace(/(^|\/)index\.html$/, "").replace(/\.html$/, "");
  const fail = (msg) => failures.push(`${route}: ${msg}`);

  const metaFile = file.replace(/\.html$/, ".meta");
  if (fs.existsSync(metaFile)) {
    const status = JSON.parse(fs.readFileSync(metaFile, "utf8")).status;
    if (status && status !== 200) {
      fail(`status ${status} no prerender`);
      continue;
    }
  }

  const robots = [...html.matchAll(/<meta name="robots" content="([^"]*)"/g)].map((m) => m[1]);
  if (robots.some((r) => r.includes("noindex"))) continue; // não indexável: fora da auditoria
  pages += 1;

  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;

  if (!title) fail("sem <title>");
  else if (title.length > TITLE_MAX) fail(`title com ${title.length} caracteres: "${title}"`);
  if (desc.length < DESC_MIN || desc.length > DESC_MAX) fail(`description com ${desc.length} caracteres`);
  if (h1 !== 1) fail(`${h1} <h1>`);
  if (!/<link rel="canonical"/.test(html)) fail("sem canonical");
  if (robots.length > 1) fail(`${robots.length} meta robots: ${robots.join(" | ")}`);

  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const json = JSON.parse(m[1]);
      if (Array.isArray(json) || !json["@context"]) fail("JSON-LD sem @context (use jsonLdGraph)");
    } catch {
      fail("JSON-LD inválido");
    }
  }

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const missing = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]).filter((id) => !ids.has(id));
  if (missing.length) fail(`âncoras sem destino: ${[...new Set(missing)].join(", ")}`);

  if (title) titles.set(title, [...(titles.get(title) ?? []), route]);
}

for (const [title, routes] of titles) {
  if (routes.length > 1) failures.push(`title duplicado "${title}": ${routes.join(", ")}`);
}

console.log(`Páginas indexáveis auditadas: ${pages}`);
if (failures.length) {
  console.log(`\nFalhas (${failures.length}):`);
  for (const f of failures) console.log(`  - ${f}`);
  process.exit(1);
}
console.log("OK — nenhuma falha.");
