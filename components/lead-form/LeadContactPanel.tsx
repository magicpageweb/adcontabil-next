"use client";

import type { RefObject } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type LeadContactPanelProps = {
  titleId: string;
  onFillForm: () => void;
  onWhatsApp: () => void;
  onClose: () => void;
  primaryButtonRef?: RefObject<HTMLButtonElement | null>;
};

export function LeadContactPanel({
  titleId,
  onFillForm,
  onWhatsApp,
  onClose,
  primaryButtonRef,
}: LeadContactPanelProps) {
  return (
    <div className="w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl bg-white text-foreground shadow-xl shadow-black/15 ring-1 ring-black/5 overflow-hidden">
      <div className="px-4 pt-4 pb-1">
        <h2 id={titleId} className="font-display text-base font-semibold text-foreground text-balance">
          Como podemos ajudar?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
          Conte-nos brevemente o seu momento para direcionarmos o seu atendimento ao especialista
          certo.
        </p>
      </div>

      <div className="px-4 py-3 space-y-3">
        <Button
          ref={primaryButtonRef}
          type="button"
          size="lg"
          onClick={onFillForm}
          className="h-11 w-full min-h-11 bg-cta text-cta-foreground hover:opacity-90"
        >
          Iniciar atendimento rápido
        </Button>

        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
          Ou, se preferir, fale diretamente com a AD pelo WhatsApp.
        </p>

        <Button
          type="button"
          size="lg"
          onClick={onWhatsApp}
          className="h-11 w-full min-h-11 bg-whatsapp text-white hover:opacity-90"
        >
          <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
          Falar direto pelo WhatsApp
        </Button>

        <button
          type="button"
          onClick={onClose}
          className="flex h-11 min-h-11 w-full items-center justify-center rounded-lg text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
