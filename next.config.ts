import type { NextConfig } from "next";

/** Yoast / WP legacy sitemaps → único sitemap do Next.js */
const legacyWordpressSitemaps = [
  "/post_tag-sitemap.xml",
  "/page-sitemap.xml",
  "/post-sitemap.xml",
  "/category-sitemap.xml",
  "/sitemap_index.xml",
  "/wp-sitemap.xml",
  "/wp-sitemap-index.xml",
] as const;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        // Apex canônico — não altera DNS; só responde no host www se apontar para o app.
        source: "/:path*",
        has: [{ type: "host", value: "www.adcontabil.net.br" }],
        destination: "https://adcontabil.net.br/:path*",
        permanent: true,
      },
      {
        // Remove trailing slash (exceto raiz) sem loop.
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/blog/paginas/:page",
        destination: "/blog/page/:page",
        permanent: true,
      },
      // WordPress / legacy URLs (no trailing slash — trailingSlash redirect runs first)
      { source: "/sobre-nos", destination: "/quem-somos", permanent: true },
      { source: "/sevicos", destination: "/servicos", permanent: true },
      { source: "/principal", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/contabil", destination: "/blog", permanent: true },
      // Plans section lives on the home page (#planos)
      { source: "/planos", destination: "/#planos", permanent: true },
      {
        source:
          "/como-a-contabilidade-estrategica-pode-transformar-o-seu-negocio",
        // TODO após 2026-11-08: voltar para /blog/o-que-e-contabilidade-consultiva
        destination: "/servicos",
        permanent: true,
      },
      {
        source:
          "/cpf-ou-cnpj-para-profissionais-de-saude-como-decidir-com-seguranca",
        destination: "/solucoes/carne-leao-pj",
        permanent: true,
      },
      {
        source: "/por-que-muitos-profissionais-continuam-no-cpf-mesmo-pagando-mais",
        destination: "/solucoes/carne-leao-pj",
        permanent: true,
      },
      {
        source:
          "/dentista-por-que-contratar-um-escritorio-contabil-especializado-em-saude",
        destination: "/contabilidade-para/dentistas",
        permanent: true,
      },
      {
        source:
          "/escritorio-de-contabilidade-gestao-estrategica-sem-fronteiras-para-sua-empresa",
        destination: "/blog/escritorio-de-contabilidade-gestao-estrategica",
        permanent: true,
      },
      {
        source:
          "/licitacoes-publicas-como-participar-e-vender-para-o-governo-com-seguranca",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/mei-simples-nacional-e-lucro-presumido-qual-regime-e-melhor-para-sua-empresa",
        // TODO após 2026-11-11: voltar para /blog/mei-simples-nacional-ou-outro-regime-qual-escolher
        destination: "/blog/simples-nacional-para-profissionais-da-saude",
        permanent: true,
      },
      ...legacyWordpressSitemaps.map((source) => ({
        source,
        destination: "/sitemap.xml",
        permanent: true,
      })),
    ];
  },
  async rewrites() {
    return [
      {
        // App Router cannot nest /blog/page/[n] beside /blog/page.tsx.
        // Public crawlable URLs stay /blog/page/:page via rewrite.
        source: "/blog/page/:page",
        destination: "/blog/paginas/:page",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
