import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BRAND, EMAIL, SITE_URL } from "@/lib/site";
import { breadcrumbSchema, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Termos de Uso",
  description: `Condições gerais de uso do site institucional da ${BRAND}.`,
  path: "/termos-de-uso",
});

const schemas = [
  breadcrumbSchema([
    { name: "Início", path: "/" },
    { name: "Termos de Uso", path: "/termos-de-uso" },
  ]),
];

export default function TermsOfUsePage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <article className="mx-auto max-w-3xl px-4 md:px-6 py-14 md:py-20">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">Termos de Uso</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: setembro de 2026 · {SITE_URL}
        </p>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">1. Objeto</h2>
            <p className="mt-3 text-muted-foreground">
              Este site apresenta informações institucionais e de conteúdo da {BRAND}. O uso implica
              concordância com estes termos e com a{" "}
              <Link href="/politica-de-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">
              2. Conteúdo informativo
            </h2>
            <p className="mt-3 text-muted-foreground">
              Textos, artigos e materiais do site têm caráter informativo e educacional. Não
              substituem análise individualizada, parecer técnico formal ou orientação jurídica
              específica. Situações fiscais e societárias dependem de cada caso.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">3. Contato</h2>
            <p className="mt-3 text-muted-foreground">
              Formulários e canais de contato destinam-se a solicitação de atendimento. O envio de
              dados deve observar a política de privacidade. Não envie informações sensíveis de
              terceiros ou dados clínicos pelo site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">4. Propriedade</h2>
            <p className="mt-3 text-muted-foreground">
              Marca, layout, textos e demais conteúdos do site pertencem à {BRAND} ou a licenciantes,
              salvo indicação em contrário. É vedada a reprodução comercial não autorizada.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">5. Alterações</h2>
            <p className="mt-3 text-muted-foreground">
              Estes termos podem ser atualizados periodicamente. A versão vigente estará publicada
              nesta página, com a data de atualização.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">6. Contato</h2>
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
