import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { ProfessionalCredentials } from "@/components/site/ProfessionalCredentials";
import { BRAND, SPECIALTIES, SOLUTIONS, ADDRESS, CITY, EMAIL, PHONE_DISPLAY, PHONE_HREF, LOGO_PATH, SOCIAL, WHATSAPP_URL } from "@/lib/site";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-hero-dark text-white/85">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-4 text-center md:text-left">
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src={LOGO_PATH}
              alt="AD Contábil — Contabilidade para profissionais da saúde"
              width={160}
              height={48}
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs md:max-w-none">
            Contabilidade consultiva especializada no setor da saúde. Atendimento digital para todo o Brasil.
          </p>
          <div className="mt-5 flex gap-4 justify-center md:justify-start">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition-colors" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition-colors" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition-colors" aria-label="WhatsApp">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Especialidades */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-sm font-semibold text-white">Especialidades</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SPECIALTIES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/contabilidade-para/${s.slug}`}
                  className="hover:text-secondary transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Soluções */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-sm font-semibold text-white">Soluções</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {SOLUTIONS.map((s) => (
              <li key={s.slug}>
                <Link href={`/solucoes/${s.slug}`} className="hover:text-secondary transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="hover:text-secondary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#planos" className="hover:text-secondary transition-colors">
                Planos
              </Link>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-sm font-semibold text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3 justify-center md:justify-start text-left">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span>
                {ADDRESS}<br />
                {CITY}
              </span>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <a href={PHONE_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 pb-4">
        <ProfessionalCredentials
          variant="dark"
          heading="Registros profissionais"
          className="max-w-3xl"
        />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="md:w-1/3 text-center md:text-left">
            <p>© {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.</p>
          </div>
          <div className="md:w-1/3 text-center text-white/70">
            <span>Contabilidade consultiva para profissionais da saúde</span>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <a href="https://www.magicpage.com.br" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-wider opacity-60 hover:opacity-100 hover:text-accent transition-all">
              Desenvolvido por MagicPage Websites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
