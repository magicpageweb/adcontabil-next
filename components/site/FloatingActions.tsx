import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

/**
 * Fixed footer-corner stack: WhatsApp (primary) + Back to top (secondary).
 * flex-col-reverse keeps WhatsApp closest to the bottom-right corner.
 */
export function FloatingActions() {
  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col-reverse items-end gap-3 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)] md:bottom-6 md:right-6"
      data-floating-actions
    >
      <div className="pointer-events-auto">
        <WhatsAppFloat />
      </div>
      <div className="pointer-events-auto">
        <BackToTop />
      </div>
    </div>
  );
}
