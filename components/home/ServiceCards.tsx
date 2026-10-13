import Link from "next/link";
import {
  Activity,
  Apple,
  ArrowRight,
  Brain,
  Briefcase,
  Ear,
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
  ear: Ear,
  apple: Apple,
};

export function ServiceCards() {
  const medicos = SPECIALTIES.find((s) => s.slug === "medicos");
  const otherSpecialties = SPECIALTIES.filter((s) => s.slug !== "medicos");
  if (!medicos) {
    throw new Error('ServiceCards: specialty with slug "medicos" is required');
  }
  const MedicosIcon = specialtyIcons[medicos.icon];

  return (
    <section id="especialidades" className="scroll-mt-24 mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-24">
      <div className="max-w-2xl reveal-up">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Quem atendemos
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
          Contabilidade sob medida para a sua especialidade
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Médicos, dentistas, psicólogos, fisioterapeutas, fonoaudiólogos e nutricionistas —
          cada área com particularidades fiscais que exigem orientação clara.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Link
          href={`/contabilidade-para/${medicos.slug}`}
          className="group soft-card md:col-span-2 md:flex-row md:items-center md:gap-10 p-7 flex flex-col reveal-up bg-primary/[0.04] border-primary/15 motion-safe:transition-[background-color,box-shadow] motion-safe:duration-200 hover:bg-primary/[0.07] hover:shadow-[0_16px_44px_-28px_rgba(75,47,14,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
            <MedicosIcon className="h-6 w-6" />
          </div>
          <div className="mt-5 md:mt-0 md:flex-1">
            <h3 className="font-display text-xl font-semibold text-foreground">
              {medicos.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{medicos.desc}</p>
          </div>
          <span className="mt-5 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 motion-safe:transition-all">
            Ver soluções <ArrowRight className="h-4 w-4" />
          </span>
        </Link>

        {otherSpecialties.map((s, i) => {
          const Icon = specialtyIcons[s.icon];
          return (
            <Link
              key={s.slug}
              href={`/contabilidade-para/${s.slug}`}
              className="group soft-card soft-card-hover p-7 flex flex-col reveal-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              style={{ animationDelay: `${(i + 1) * 60}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Ver soluções <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}

        <Link
          href="/servicos"
          className="group soft-card soft-card-hover p-7 flex flex-col reveal-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{ animationDelay: `${(otherSpecialties.length + 1) * 60}ms` }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
            <Briefcase className="h-6 w-6" />
          </div>
          <div className="mt-5 flex-1">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Contabilidade para empresas e profissionais
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Organização contábil, orientação tributária e apoio para empresas, MEIs,
              prestadores de serviços e profissionais liberais.
            </p>
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
            Conheça nossos serviços <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}
