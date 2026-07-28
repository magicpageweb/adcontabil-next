"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ChevronDown, Stethoscope, Calculator } from "lucide-react";
import { WHATSAPP_URL, SPECIALTIES, SOLUTIONS, LOGO_PATH } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src={LOGO_PATH}
            alt="AD Contábil — Contabilidade para profissionais da saúde"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <Link href="/" className="px-3 py-2 text-foreground/80 hover:text-primary transition">
            Início
          </Link>

          {/* Especialidades dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDrop("esp")}
            onMouseLeave={() => setDrop(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-foreground/80 hover:text-primary transition cursor-pointer">
              <Stethoscope className="h-4 w-4" /> Especialidades{" "}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {drop === "esp" && (
              <div className="absolute left-0 top-full w-72 rounded-xl border border-border bg-popover p-2 shadow-xl">
                {SPECIALTIES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/contabilidade-para/${s.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-accent transition"
                    onClick={() => setDrop(null)}
                  >
                    Contabilidade para {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Soluções dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDrop("sol")}
            onMouseLeave={() => setDrop(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-foreground/80 hover:text-primary transition cursor-pointer">
              <Calculator className="h-4 w-4" /> Soluções <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {drop === "sol" && (
              <div className="absolute left-0 top-full w-80 rounded-xl border border-border bg-popover p-2 shadow-xl">
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solucoes/${s.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-accent transition"
                    onClick={() => setDrop(null)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/quem-somos" className="px-3 py-2 text-foreground/80 hover:text-primary transition">
            Sobre Nós
          </Link>
          <Link href="/#planos" className="px-3 py-2 text-foreground/80 hover:text-primary transition">
            Planos
          </Link>
          <Link href="/contato" className="px-3 py-2 text-foreground/80 hover:text-primary transition">
            Contato
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-whatsapp text-white hover:opacity-90">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Falar com Especialista
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">
              Início
            </Link>
            <div className="pt-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Especialidades
            </div>
            {SPECIALTIES.map((s) => (
              <Link
                key={s.slug}
                href={`/contabilidade-para/${s.slug}`}
                onClick={() => setOpen(false)}
                className="block py-1.5 pl-3 text-sm text-foreground/80"
              >
                {s.label}
              </Link>
            ))}
            <div className="pt-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Soluções
            </div>
            {SOLUTIONS.map((s) => (
              <Link
                key={s.slug}
                href={`/solucoes/${s.slug}`}
                onClick={() => setOpen(false)}
                className="block py-1.5 pl-3 text-sm text-foreground/80"
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/quem-somos"
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium"
            >
              Sobre Nós
            </Link>
            <Link
              href="/#planos"
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium"
            >
              Planos
            </Link>
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium"
            >
              Contato
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-white font-medium text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
