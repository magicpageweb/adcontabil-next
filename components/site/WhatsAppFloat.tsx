"use client";

import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/site";

const WHATSAPP_CTA_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onPointerDown(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <div
        id={panelId}
        role="dialog"
        aria-label={`Fale com a ${BRAND}`}
        aria-hidden={!open}
        className={`absolute bottom-[calc(100%+0.75rem)] right-0 origin-bottom-right transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 translate-y-2"
        }`}
      >
        <div className="w-[min(18.5rem,calc(100vw-2.5rem))] rounded-2xl bg-white text-foreground shadow-xl shadow-black/15 ring-1 ring-black/5 overflow-hidden">
          <div className="flex items-start justify-between gap-3 bg-[#128C7E] px-4 py-3.5 text-white">
            <div className="min-w-0">
              <p className="font-display text-sm font-semibold leading-snug">
                Fale com a {BRAND}
              </p>
              <p className="mt-0.5 text-xs text-white/85">Clique e fale no WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="shrink-0 rounded-full p-1 text-white/90 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-4 py-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Suporte ágil e direto no seu celular
            </p>
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-semibold text-white shadow-md shadow-black/10 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4 fill-white" aria-hidden />
              Atendimento
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar WhatsApp" : `Fale com a ${BRAND}`}
        className="group flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full bg-whatsapp pl-3.5 pr-4 h-12 text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
          <MessageCircle className="h-4 w-4 fill-white" aria-hidden />
        </span>
        <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
          Fale com a {BRAND}
        </span>
      </button>
    </div>
  );
}
