"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";
import {
  VERTICALS_ELLIPSE_TOP_PX_BY_GRADIENT,
  VERTICALS_REFERENCE_ELLIPSES,
} from "@/src/lib/verticals-reference-ellipses";


type VerticalItem = {
  title: string;
  description: string;
  subtitle: string;
  /** Route: `/our-verticals/${slug}` */
  slug?: string;
  logoSrc?: string;
  gradient?: string;
};

type VerticalsSectionProps = {
  label: string;
  description: string;
  items: readonly VerticalItem[];
};

const GRADIENTS = [
  "linear-gradient(180deg, rgba(47, 92, 70, 1) 1%, rgba(63, 175, 126, 1) 100%)",
  "linear-gradient(180deg, rgba(45, 55, 72, 1) 1%, rgba(74, 85, 104, 1) 100%)",
  "linear-gradient(180deg, rgba(30, 77, 183, 1) 1%, rgba(47, 111, 237, 1) 100%)",
];

/** Per-layer motion when gradient changes — duration, delay, easing differ by ellipse */
const VERTICALS_ELLIPSE_TRANSITIONS: readonly Transition[] = [
  { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  { duration: 0.65, delay: 0.06, ease: "easeOut" },
  { duration: 0.55, delay: 0.14, ease: [0.33, 1, 0.68, 1] },
];

/** Title entrance per vertical (Figma): x & z from top→bottom, y from bottom→top */
const VERTICALS_TITLE_ENTRANCE = [
  { initial: { opacity: 0, y: -100 }, animate: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, y: -100 }, animate: { opacity: 1, y: 0 } },
] as const;

const VERTICALS_TITLE_TRANSITIONS: readonly Transition[] = [
  { duration: 0.5, ease: "easeOut" },
  { duration: 0.5, ease: "easeOut" },
  { duration: 0.5, ease: "easeOut" },
];

function VerticalCardInner({ item }: { item: VerticalItem }) {
  return (
    <>
      <div className="flex size-[77px] shrink-0 items-center justify-center rounded-lg transition-colors duration-300">
        <Image
          src={item.logoSrc ?? "/images/home/verticals-brand-icon.png"}
          alt={item.title}
          width={77}
          height={37}
          className="h-auto w-full object-contain transition-all duration-300"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h3 className="text-2xl max-w-full truncate font-medium leading-[1.2] text-text-100 transition-colors duration-300">
          {item.title}
        </h3>
        <div className="min-w-0 py-2">
          <span
            className="block max-w-full truncate text-xs font-light leading-[1.5] text-text-100 transition-colors duration-300"
            title={item.subtitle}
          >
            {item.subtitle}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-center rounded-full bg-[#F2F2F2] p-4 transition-colors duration-300">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6H13M13 6L8 1M13 6L8 11"
            className="stroke-[#1A1919] transition-all duration-300"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

export function VerticalsSection({
  label,
  description,
  items,
}: VerticalsSectionProps) {
  const MAX_VISIBLE_CARDS = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardStart, setCardStart] = useState(0);
  const hasOverflowCards = items.length > MAX_VISIBLE_CARDS;
  const activeGradient = items[activeIndex]?.gradient ?? GRADIENTS[0];
  const activeEllipseTopRow =
    VERTICALS_ELLIPSE_TOP_PX_BY_GRADIENT[activeIndex] ??
    VERTICALS_ELLIPSE_TOP_PX_BY_GRADIENT[0];
  const titleEntrance =
    VERTICALS_TITLE_ENTRANCE[activeIndex] ?? VERTICALS_TITLE_ENTRANCE[0];
  const titleTransition =
    VERTICALS_TITLE_TRANSITIONS[activeIndex] ?? VERTICALS_TITLE_TRANSITIONS[0];
  const totalPages = Math.ceil(items.length / MAX_VISIBLE_CARDS);
  const currentPage = Math.floor(cardStart / MAX_VISIBLE_CARDS);
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;
  const visibleCards = hasOverflowCards
    ? items
        .slice(cardStart, cardStart + MAX_VISIBLE_CARDS)
        .map((item, offset) => ({ item, index: cardStart + offset }))
    : items.map((item, index) => ({ item, index }));

  const shiftCards = (direction: -1 | 1) => {
    if (!hasOverflowCards) return;
    setCardStart((prev) => {
      if (direction < 0) return Math.max(0, prev - MAX_VISIBLE_CARDS);
      return Math.min((totalPages - 1) * MAX_VISIBLE_CARDS, prev + MAX_VISIBLE_CARDS);
    });
  };

  return (
    <section
      id="platforms"
      className="relative flex h-auto min-h-screen max-w-screen w-full flex-col gap-4  px-8 py-20 md:px-20 md:py-20 lg:px-[286px] lg:pb-16 lg:pt-[160px] overflow-hidden   "
      style={{ background: GRADIENTS[0] }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: activeGradient }}
          aria-hidden
        />
      </AnimatePresence>

      {VERTICALS_REFERENCE_ELLIPSES.map((ellipse, i) => {
        const topPx = activeEllipseTopRow[i] ?? VERTICALS_ELLIPSE_TOP_PX_BY_GRADIENT[0][i];
        const fill = `rgba(255, 255, 255, ${ellipse.opacity / 100})`;
        return (
          <motion.div
            key={i}
            initial={false}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full max-w-[100vw] overflow-x-hidden md:max-w-none md:overflow-x-visible"
            animate={{ top: topPx, width: ellipse.w, height: ellipse.h, backgroundColor: fill }}
            transition={VERTICALS_ELLIPSE_TRANSITIONS[i]}
            aria-hidden
          />
        );
      })}

      {/* Pattern overlay — subtle so 6:2077 circles read clearly */}


      {/* Leading */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6">
        <span className="rounded-[40px] bg-white px-4 py-2 text-base leading-[1.5] text-text-100">
          {label}
        </span>

        <div className="flex size-[95px] items-center justify-center">
          <Image
            src="/images/home/verticals-brand-icon.png"
            alt=""
            width={95}
            height={45}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            key={activeIndex}
            initial={titleEntrance.initial}
            animate={titleEntrance.animate}
            transition={titleTransition}
            className="text-center text-4xl font-black leading-[1.4] text-white md:text-[56px] lg:text-[56px]"
          >
            {items[activeIndex]?.title}
          </motion.div>

          <p className="max-w-[444px] text-center text-base leading-[1.5] text-white">
            {items[activeIndex]?.description ?? description}
          </p>
        </div>
      </div>

      {/* Cards row */}
      <div className="relative z-10 flex w-full flex-col gap-3">
        {hasOverflowCards ? (
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => shiftCards(-1)}
              disabled={!canGoPrev}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-45"
              aria-label="Show previous verticals"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 18L9 12L15 6"
                  className="stroke-current transition-transform group-hover:-translate-x-0.5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => shiftCards(1)}
              disabled={!canGoNext}
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-45"
              aria-label="Show next verticals"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 6L15 12L9 18"
                  className="stroke-current transition-transform group-hover:translate-x-0.5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ) : null}

        <motion.div
          key={cardStart}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <StaggerContainer
            className={`relative flex w-full flex-col gap-2 lg:flex-row ${
              hasOverflowCards && visibleCards.length < MAX_VISIBLE_CARDS ? "items-center lg:justify-center" : ""
            }`}
            stagger={0.12}
          >
            {visibleCards.map(({ item, index }) => {
              const href = item.slug ? `/our-verticals/${item.slug}` : undefined;
              const cardClassName =
                "flex min-w-0 cursor-pointer items-center gap-4 rounded-2xl bg-accent-60 p-4 backdrop-blur-[20px] transition-all duration-300";

              return (
                <StaggerItem
                  key={`${item.title}-${index}`}
                  className={`min-w-0 ${
                    hasOverflowCards && visibleCards.length < MAX_VISIBLE_CARDS
                      ? "w-full lg:max-w-[420px]"
                      : "flex-1"
                  }`}
                >
                  {href ? (
                    <Link
                      href={href}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={cardClassName}
                    >
                      <VerticalCardInner item={item} />
                    </Link>
                  ) : (
                    <div onMouseEnter={() => setActiveIndex(index)} className={cardClassName}>
                      <VerticalCardInner item={item} />
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  );
}
