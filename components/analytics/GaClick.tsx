"use client";

import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { isGaEnabled, type GaEventName } from "@/lib/analytics";

type GaClickProps = {
  event: GaEventName;
  params?: Record<string, string | number | boolean>;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

/** Anchor with GA4 click tracking via @next/third-parties (no duplicate gtag). */
export function GaClick({
  event,
  params,
  children,
  onClick,
  ...props
}: GaClickProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (isGaEnabled()) {
      try {
        sendGAEvent("event", event, params ?? {});
      } catch {
        // Never block navigation if analytics fails.
      }
    }
    onClick?.(e);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
