import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";

/**
 * Sem canonical (evita herdar a home).
 * Não definir `robots` aqui: o Next 16 injeta sozinho
 * `<meta name="robots" content="noindex">` em respostas 404; redefinir
 * geraria duas tags (issue vercel/next.js#79529). Follow permanece o padrão.
 */
export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página solicitada não existe ou não está disponível. Volte à página inicial da AD Contábil.",
  alternates: {
    canonical: null,
  },
};

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">
          Página não encontrada
        </h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          A página que você está procurando não existe, foi removida, teve seu nome
          alterado ou está temporariamente indisponível.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
