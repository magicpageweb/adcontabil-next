import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, CRC, PHOTOS, RESPONSIBLE, WHATSAPP_URL } from "@/lib/site";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div className="relative mx-auto w-full max-w-sm reveal-up">
          <div className="absolute -left-3 -bottom-3 h-full w-full rounded-[1.75rem] bg-primary/15" />
          <div className="relative overflow-hidden rounded-[1.75rem] soft-card">
            <Image
              src={PHOTOS.portrait}
              alt={`${RESPONSIBLE}, responsável técnica da ${BRAND}`}
              width={640}
              height={800}
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </div>

        <div className="reveal-up reveal-delay-1">
          <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            Quem conduz
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
            Contabilidade consultiva com rosto e responsabilidade técnica
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            <strong className="text-foreground">{RESPONSIBLE}</strong> lidera a {BRAND} com mais
            de uma década de atuação. Registro profissional ativo:{" "}
            <strong className="text-foreground">{CRC}</strong>. Atendimento próximo para
            profissionais da saúde que querem clareza fiscal sem abrir mão do foco no
            consultório.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-whatsapp text-white hover:opacity-90 h-12 px-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Fale conosco
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-border">
              <Link href="/quem-somos">
                Conhecer a AD Contábil <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
