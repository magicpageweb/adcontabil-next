"use client";

import { useEffect, useState } from "react";
import { Check, Copy, MessageCircle, Share2 } from "lucide-react";
import { BRAND, SOCIAL } from "@/lib/site";

type ArticleActionsProps = {
  title: string;
  url: string;
  description: string;
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.81c0-2.37 1.4-3.69 3.56-3.69 1.03 0 2.11.19 2.11.19v2.32h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.91h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const actionClass =
  "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl border border-border/80 bg-surface px-3.5 text-sm font-medium text-foreground/85 shadow-sm transition duration-200 hover:scale-[1.02] hover:border-primary/35 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function ArticleActions({ title, url, description }: ArticleActionsProps) {
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCanNativeShare(
      typeof navigator !== "undefined" && typeof navigator.share === "function",
    );
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const whatsappText = encodeURIComponent(`${title}\n\n${description}\n\n${url}`);

  const shareLinks = [
    {
      label: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${whatsappText}`,
      icon: MessageCircle,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FacebookIcon,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: LinkedInIcon,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XIcon,
    },
  ] as const;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
    }
  }

  async function handleNativeShare() {
    try {
      await navigator.share({ title, text: description, url });
    } catch {
      /* user cancelled */
    }
  }

  return (
    <section
      aria-labelledby="article-share-title"
      className="relative rounded-2xl border border-border/70 bg-[#FFFCF8] p-6 md:p-8"
    >
      <h2
        id="article-share-title"
        className="font-display text-xl md:text-2xl font-semibold text-foreground"
      >
        Gostou deste conteúdo?
      </h2>
      <p className="mt-2 text-sm md:text-base text-muted-foreground text-pretty max-w-2xl">
        Compartilhe este artigo com outros profissionais da saúde e ajude mais
        consultórios e clínicas a organizarem a contabilidade com clareza.
      </p>
      <p className="mt-3 text-sm text-foreground/70">
        Ajude outros profissionais da saúde a fortalecerem a gestão contábil do
        consultório.
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            className={actionClass}
            aria-label="Compartilhar artigo"
            title="Compartilhar"
          >
            <Share2 className="h-4 w-4" aria-hidden />
            Compartilhar
          </button>
        )}

        {shareLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
            aria-label={`Compartilhar no ${label}`}
            title={`Compartilhar no ${label}`}
          >
            <Icon className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{label}</span>
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopy}
          className={actionClass}
          aria-label="Copiar link do artigo"
          title="Copiar link"
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" aria-hidden />
          ) : (
            <Copy className="h-4 w-4" aria-hidden />
          )}
          Copiar link
        </button>

        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={actionClass}
          aria-label={`Siga a ${BRAND} no Instagram`}
          title={`Siga a ${BRAND} no Instagram`}
        >
          Veja mais conteúdos
        </a>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute bottom-4 right-4 max-w-[16rem] rounded-xl bg-foreground px-3.5 py-2.5 text-xs text-background shadow-lg transition duration-300 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <p className="font-semibold">✓ Link copiado.</p>
        <p className="mt-0.5 text-background/80">
          Agora compartilhe este conteúdo com quem também pode se beneficiar.
        </p>
      </div>
    </section>
  );
}
