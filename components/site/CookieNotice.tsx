"use client";

import Link from "next/link";
import { useCallback, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "ad_cookie_notice_ok";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getCookieNoticePending(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return false;
}

export function CookieNotice() {
  const pending = useSyncExternalStore(subscribe, getCookieNoticePending, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setDismissed(true);
  }, []);

  if (!pending || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-[70] border-t border-border bg-background/95 backdrop-blur px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <p className="text-xs sm:text-sm text-muted-foreground text-pretty flex-1">
          Usamos cookies e ferramentas de mensuração para entender o uso do site e melhorar a
          experiência. Saiba mais na{" "}
          <Link
            href="/politica-de-cookies"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            Política de Cookies
          </Link>{" "}
          e na{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            Privacidade
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 self-end sm:self-auto rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
