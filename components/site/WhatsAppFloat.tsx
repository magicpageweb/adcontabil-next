"use client";

import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { LeadContactPanel } from "@/components/lead-form/LeadContactPanel";
import { useLeadForm } from "@/components/lead-form/LeadFormProvider";
import { GA_EVENTS, isGaEnabled, type GaEventName } from "@/lib/analytics";
import { BRAND, WHATSAPP_URL } from "@/lib/site";

function track(event: GaEventName, params?: Record<string, string>) {
  if (!isGaEnabled()) return;
  try {
    sendGAEvent("event", event, params ?? {});
  } catch {
    /* no-op */
  }
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const primaryRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const titleId = useId();
  const { openLeadForm } = useLeadForm();

  useEffect(() => {
    if (!open) return;

    primaryRef.current?.focus();
    track(GA_EVENTS.atendimentoFloatOpen, { location: "float" });

    const focusTimer = window.requestAnimationFrame(() => {
      primaryRef.current?.focus();
    });

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      }
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
      window.cancelAnimationFrame(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  function closePanel(returnFocus = true) {
    setOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }

  function handleFillForm() {
    closePanel(false);
    openLeadForm("float");
  }

  function handleWhatsAppDirect() {
    track(GA_EVENTS.whatsappDirectClick, { location: "float" });
    closePanel(false);
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <div ref={rootRef} className="relative">
      <div
        id={panelId}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        aria-hidden={!open}
        hidden={!open}
        className={`absolute bottom-[calc(100%+0.75rem)] right-0 z-10 origin-bottom-right transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 translate-y-2"
        }`}
      >
        {open ? (
          <LeadContactPanel
            titleId={titleId}
            primaryButtonRef={primaryRef}
            onFillForm={handleFillForm}
            onWhatsApp={handleWhatsAppDirect}
            onClose={() => closePanel(true)}
          />
        ) : null}
      </div>

      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setOpen((v) => {
            const next = !v;
            if (!next) {
              requestAnimationFrame(() => triggerRef.current?.focus());
            }
            return next;
          });
        }}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        aria-label={open ? "Fechar opções de atendimento" : `Como podemos ajudar? Fale com a ${BRAND}`}
        className="group flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full bg-whatsapp pl-3.5 pr-4 h-12 min-h-11 text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
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
