import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND, EMAIL, SITE_URL } from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de Cookies",
  description: `Como a ${BRAND} utiliza cookies e ferramentas de mensuração no site.`,
  path: "/politica-de-cookies",
});

const schemas = [
  breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Política de Cookies", path: "/politica-de-cookies" },
  ]),
];

export default function CookiesPolicyPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <article className="mx-auto max-w-3xl px-4 md:px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">
          Política de Cookies
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: setembro de 2026 · {SITE_URL}
        </p>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">1. O que são cookies</h2>
            <p className="mt-3 text-muted-foreground">
              Cookies e tecnologias semelhantes são pequenos arquivos ou identificadores armazenados
              no seu dispositivo para lembrar preferências, medir audiência ou garantir
              funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              2. Como usamos no site
            </h2>
            <p className="mt-3 text-muted-foreground">
              Utilizamos cookies essenciais ao funcionamento da navegação e cookies/ferramentas de
              mensuração (como Google Analytics 4) para compreender páginas visitadas, origem do
              tráfego e interações relevantes (por exemplo, cliques em contato), de forma agregada
              sempre que possível.
            </p>
            <p className="mt-3 text-muted-foreground">
              Também podemos usar armazenamento local do navegador para lembrar que você viu o aviso
              de cookies (“Entendi”), evitando reexibições desnecessárias.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">3. Gestão</h2>
            <p className="mt-3 text-muted-foreground">
              Você pode bloquear ou apagar cookies nas configurações do navegador. Isso pode afetar
              algumas funções ou a qualidade das métricas. Para dados pessoais relacionados, consulte
              a{" "}
              <Link href="/politica-de-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">4. Contato</h2>
            <p className="mt-3 text-muted-foreground">
              Dúvidas:{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                {EMAIL}
              </a>{" "}
              ou{" "}
              <Link href="/contato" className="text-primary hover:underline">
                Contato
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
}
