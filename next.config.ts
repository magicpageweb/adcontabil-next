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
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/blog/paginas/:page",
        destination: "/blog/page/:page",
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
