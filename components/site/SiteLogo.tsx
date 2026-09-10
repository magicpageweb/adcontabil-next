"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND, LOGO_PATH } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

function scrollHomeTop() {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: reduceMotion ? "auto" : "smooth",
  });
}

export function SiteLogo({
  className,
  imageClassName,
  priority = false,
}: SiteLogoProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link
      href="/"
      aria-label={`${BRAND} — ir para a página inicial`}
      className={cn("inline-flex items-center", className)}
      onClick={(event) => {
        if (isHome) {
          event.preventDefault();
          scrollHomeTop();
          return;
        }
        // Soft guarantee: after client navigation to `/`, land at the top.
        window.setTimeout(scrollHomeTop, 0);
      }}
    >
      <Image
        src={LOGO_PATH}
        alt={`${BRAND} — Contabilidade para profissionais da saúde`}
        width={160}
        height={48}
        className={cn("h-10 w-auto", imageClassName)}
        sizes="160px"
        priority={priority}
      />
    </Link>
  );
}
