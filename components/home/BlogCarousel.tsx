"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  formatBlogDate,
  getBlogCategory,
  type BlogPost,
} from "@/lib/blog";

const AUTOPLAY_MS = 7000;
/** Only treat as drag after this distance — keeps clicks reliable. */
const DRAG_START = 12;

export function BlogCarousel({
  posts,
  label = "Últimos artigos do blog",
}: {
  posts: BlogPost[];
  label?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const dragRef = useRef<{
    pointerId: number | null;
    startX: number;
    scrollLeft: number;
    dragging: boolean;
    suppressClick: boolean;
  }>({
    pointerId: null,
    startX: 0,
    scrollLeft: 0,
    dragging: false,
    suppressClick: false,
  });

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max - 8);
  }, []);

  const scrollByCard = useCallback(
    (direction: 1 | -1, options?: { pause?: boolean }) => {
      const el = scrollerRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>("[data-blog-thumb]");
      const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
      el.scrollBy({
        left: direction * amount,
        behavior: reducedMotion ? "auto" : "smooth",
      });
      if (options?.pause !== false) setPaused(true);
    },
    [reducedMotion],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, posts.length]);

  useEffect(() => {
    if (reducedMotion || paused || posts.length < 2) return;

    const timer = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 8) {
        el.scrollTo({
          left: 0,
          behavior: reducedMotion ? "auto" : "smooth",
        });
      } else {
        scrollByCard(1, { pause: false });
      }
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, posts.length, scrollByCard]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    }
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    // Ignore presses on interactive controls outside the track (arrows are siblings).
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
      dragging: false,
      suppressClick: false,
    };
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const el = scrollerRef.current;
    if (drag.pointerId !== event.pointerId || !el) return;

    const delta = event.clientX - drag.startX;

    if (!drag.dragging) {
      if (Math.abs(delta) < DRAG_START) return;
      drag.dragging = true;
      drag.suppressClick = true;
      setPaused(true);
      el.setPointerCapture(event.pointerId);
    }

    el.scrollLeft = drag.scrollLeft - delta;
  }

  function endPointer(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const el = scrollerRef.current;
    if (drag.pointerId !== event.pointerId) return;

    if (drag.dragging && el) {
      try {
        el.releasePointerCapture(event.pointerId);
      } catch {
        /* already released */
      }
    }

    drag.pointerId = null;
    drag.dragging = false;

    // Allow the next click shortly after a drag ends.
    if (drag.suppressClick) {
      window.setTimeout(() => {
        drag.suppressClick = false;
      }, 0);
    }
  }

  if (posts.length === 0) return null;

  const arrowClass =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-surface/95 text-foreground shadow-sm transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30 md:h-11 md:w-11";

  return (
    <div
      className="relative mt-8 px-2 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <button
        type="button"
        aria-label="Post anterior"
        onClick={() => scrollByCard(-1)}
        disabled={!canPrev}
        className={`${arrowClass} left-0`}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>

      <button
        type="button"
        aria-label="Próximo post"
        onClick={() => scrollByCard(1)}
        disabled={!canNext}
        className={`${arrowClass} right-0`}
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>

      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-y cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => {
          const category = getBlogCategory(post.category);
          return (
            <article
              key={post.slug}
              data-blog-thumb
              className="group w-[78%] sm:w-[46%] lg:w-[31%] shrink-0 snap-start"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="soft-card soft-card-hover block overflow-hidden"
                draggable={false}
                onClick={(e) => {
                  if (dragRef.current.suppressClick) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] pointer-events-none"
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 46vw, 31vw"
                    draggable={false}
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
                    {category && (
                      <span className="font-semibold uppercase tracking-wider text-primary">
                        {category.label}
                      </span>
                    )}
                    <span aria-hidden>·</span>
                    <time dateTime={post.publishedAt}>
                      {formatBlogDate(post.publishedAt)}
                    </time>
                  </div>
                  <h3 className="mt-2 font-display text-base md:text-lg font-semibold text-foreground text-balance line-clamp-2 group-hover:text-primary transition">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
