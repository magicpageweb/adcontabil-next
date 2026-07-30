import { Building2, UserRound } from "lucide-react";
import { BRAND, CRC, OFFICE_CRC, RESPONSIBLE } from "@/lib/site";

type ProfessionalCredentialsProps = {
  variant?: "light" | "dark";
  heading?: string;
  className?: string;
};

export function ProfessionalCredentials({
  variant = "light",
  heading,
  className = "",
}: ProfessionalCredentialsProps) {
  const dark = variant === "dark";

  return (
    <section
      aria-label={heading ?? "Registros profissionais e institucionais"}
      className={className}
    >
      {heading && (
        <h2
          className={`font-display text-xl font-semibold ${
            dark ? "text-white" : "text-foreground"
          }`}
        >
          {heading}
        </h2>
      )}

      <dl className={`grid gap-3 sm:grid-cols-2 ${heading ? "mt-5" : ""}`}>
        <div
          className={`rounded-xl border p-4 ${
            dark
              ? "border-white/10 bg-white/[0.04]"
              : "border-border bg-card shadow-sm"
          }`}
        >
          <dt
            className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${
              dark ? "text-accent" : "text-primary"
            }`}
          >
            <UserRound className="h-4 w-4" aria-hidden />
            Responsável técnica
          </dt>
          <dd className={`mt-3 ${dark ? "text-white" : "text-foreground"}`}>
            <strong className="block font-display text-base font-semibold">
              {RESPONSIBLE}
            </strong>
            <span
              className={`mt-1 block text-sm ${
                dark ? "text-white/65" : "text-muted-foreground"
              }`}
            >
              {CRC}
            </span>
          </dd>
        </div>

        <div
          className={`rounded-xl border p-4 ${
            dark
              ? "border-white/10 bg-white/[0.04]"
              : "border-border bg-card shadow-sm"
          }`}
        >
          <dt
            className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${
              dark ? "text-accent" : "text-primary"
            }`}
          >
            <Building2 className="h-4 w-4" aria-hidden />
            Escritório
          </dt>
          <dd className={`mt-3 ${dark ? "text-white" : "text-foreground"}`}>
            <strong className="block font-display text-base font-semibold">{BRAND}</strong>
            <span
              className={`mt-1 block text-sm ${
                dark ? "text-white/65" : "text-muted-foreground"
              }`}
            >
              {OFFICE_CRC}
            </span>
          </dd>
        </div>
      </dl>
    </section>
  );
}
