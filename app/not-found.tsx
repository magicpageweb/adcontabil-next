import Link from "next/link";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
        <h1 className="text-7xl font-display font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-4 max-w-md text-muted-foreground">
          A página que você está procurando não existe, foi removida, teve seu nome alterado ou está temporariamente indisponível.
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
