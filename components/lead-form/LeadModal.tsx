"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { LeadForm } from "@/components/lead-form/LeadForm";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
  analyticsLocation?: string;
};

export function LeadModal({ open, onClose, analyticsLocation }: LeadModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const focusTimer = window.requestAnimationFrame(() => {
      const nameInput = panelRef.current?.querySelector<HTMLElement>(
        'input[name="name"], input[type="text"]:not([tabindex="-1"])',
      );
      (nameInput ?? closeRef.current)?.focus();
    });

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center p-0 sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Fechar formulário"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[81] w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-background shadow-xl border border-border"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-border bg-background/95 backdrop-blur px-5 py-4">
          <div>
            <h2 id={titleId} className="font-display text-xl font-semibold text-foreground">
              Vamos entender o seu momento
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Conte rapidamente o que você precisa. Assim podemos direcionar melhor o seu
              atendimento.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-5 py-5">
          <LeadForm
            variant="modal"
            analyticsLocation={analyticsLocation}
            onSuccessClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
