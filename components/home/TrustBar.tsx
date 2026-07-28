import { CRC, RESPONSIBLE } from "@/lib/site";

const items = [
  { k: "+10 anos", v: "de experiência contábil e gestão estratégica" },
  { k: "CRC/RS ativo", v: `${RESPONSIBLE} · ${CRC.replace("CRC/RS ", "")}` },
  { k: "Foco na saúde", v: "médicos, dentistas, clínicas e consultórios" },
  { k: "Brasil todo", v: "atendimento digital ágil e humano" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.k} className="reveal-up">
            <p className="font-display text-lg font-semibold text-primary">{i.k}</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{i.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
