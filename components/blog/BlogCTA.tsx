import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

export function BlogCTA({
  badge = "Diagnóstico contábil",
  title = "Quer orientação personalizada para o seu consultório?",
  text = "Fale com a AD Contábil e receba uma análise alinhada ao seu faturamento, especialidade e modelo de atendimento.",
}: {
  badge?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="soft-card p-8 md:p-10 text-center bg-[#FFFCF8]">
      <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{badge}</p>
      <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-foreground text-balance">
        {title}
      </h2>
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty">{text}</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg" className="bg-whatsapp text-white hover:opacity-90 h-12 px-7">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> Falar com a AD Contábil
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
          <Link href="/contato">Ir para contato</Link>
        </Button>
      </div>
    </section>
  );
}
