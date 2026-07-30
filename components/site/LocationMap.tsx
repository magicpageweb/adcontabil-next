import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfessionalCredentials } from "@/components/site/ProfessionalCredentials";
import {
  ADDRESS_LINE,
  BRAND,
  CITY_LOCALITY,
  CITY_REGION,
  MAPS_EMBED_URL,
  MAPS_URL,
  RESPONSIBLE,
} from "@/lib/site";

type LocationMapProps = {
  showCredentials?: boolean;
  className?: string;
};

/** CRC individual curto, conforme uso institucional no bloco de endereço */
const RESPONSIBLE_CRC_SHORT = "RS094939/O-4";

export function LocationMap({
  showCredentials = true,
  className = "",
}: LocationMapProps) {
  return (
    <section
      aria-labelledby="location-heading"
      className={`mx-auto max-w-5xl px-4 md:px-6 ${className}`}
    >
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
          Localização
        </p>
        <h2
          id="location-heading"
          className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground"
        >
          Nossa localização
        </h2>
        <p className="mt-3 text-muted-foreground text-pretty">
          Visite a {BRAND} no endereço abaixo ou clique para abrir no Google Maps.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="space-y-6">
          <div className="soft-card p-6 md:p-7">
            <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
              <MapPin className="h-4 w-4" aria-hidden />
              Endereço
            </div>

            <p className="mt-4 font-display text-lg font-semibold text-foreground leading-snug">
              {RESPONSIBLE}
              <span className="mt-1 block text-sm font-normal text-muted-foreground">
                {RESPONSIBLE_CRC_SHORT}
              </span>
            </p>

            <address className="mt-5 not-italic text-foreground/85 leading-relaxed">
              <span className="block">{ADDRESS_LINE}</span>
              <span className="mt-1 block text-muted-foreground">
                {CITY_LOCALITY} — {CITY_REGION}
              </span>
            </address>

            <Button
              asChild
              size="lg"
              className="mt-6 h-11 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Ver no Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </Button>
          </div>

          {showCredentials && (
            <ProfessionalCredentials heading="Identificação institucional" />
          )}
        </div>

        <div className="soft-card overflow-hidden">
          <div className="border-b border-border px-5 py-3">
            <p className="text-sm font-semibold text-foreground">Mapa do escritório</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Alternativa acessível:{" "}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                abrir no Google Maps
              </a>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full bg-surface sm:aspect-[16/11]">
            <iframe
              title={`Mapa da localização da ${BRAND} em ${CITY_LOCALITY}/${CITY_REGION}`}
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
