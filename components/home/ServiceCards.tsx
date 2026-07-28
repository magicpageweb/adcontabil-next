import Link from "next/link";
import {
  Activity,
  Apple,
  ArrowRight,
  Brain,
  Smile,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { SPECIALTIES, type SpecialtyIconKey } from "@/lib/site";

const specialtyIcons: Record<SpecialtyIconKey, LucideIcon> = {
  stethoscope: Stethoscope,
  smile: Smile,
  brain: Brain,
  activity: Activity,
  apple: Apple,
};

export function ServiceCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-24">
      <div className="max-w-2xl reveal-up">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Para quem atendemos
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
          Contabilidade sob medida para a sua especialidade
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Médicos, dentistas, psicólogos, fisioterapeutas e nutricionistas — cada área com
          particularidades fiscais que exigem orientação clara.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SPECIALTIES.map((s, i) => {
          const Icon = specialtyIcons[s.icon];
          const wide = i === 0;
          return (
            <Link
              key={s.slug}
              href={`/contabilidade-para/${s.slug}`}
              className={`group soft-card soft-card-hover p-7 flex flex-col reveal-up ${
                wide ? "md:col-span-2 md:flex-row md:items-center md:gap-10" : ""
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div className={wide ? "md:flex-1" : "mt-5"}>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className={`text-sm text-muted-foreground ${wide ? "mt-2 max-w-2xl" : "mt-2"}`}>
                  {s.desc}
                </p>
              </div>
              <span className="mt-5 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Ver soluções <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
