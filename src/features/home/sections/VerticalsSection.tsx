"use client";

import { motion, type Transition } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
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

export function VerticalsSection({
  label,
  description,
  items,
}: VerticalsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleEntrance =
    VERTICALS_TITLE_ENTRANCE[activeIndex] ?? VERTICALS_TITLE_ENTRANCE[0];
  const titleTransition =
    VERTICALS_TITLE_TRANSITIONS[activeIndex] ?? VERTICALS_TITLE_TRANSITIONS[0];

  return (
    <section
      id="platforms"
      className="relative flex h-screen max-w-screen w-full flex-col gap-4 overflow-hidden px-8 py-20 transition-all duration-500 md:px-20 md:py-20 lg:px-[286px] lg:pb-16 lg:pt-[160px]"
      style={{ background: GRADIENTS[activeIndex] }}
    >
{VERTICALS_REFERENCE_ELLIPSES.map((ellipse, i) => {
        const topPx = VERTICALS_ELLIPSE_TOP_PX_BY_GRADIENT[activeIndex][i];
        const fill = `rgba(255, 255, 255, ${ellipse.opacity / 100})`;
        return (
          <motion.div
            key={i}
            initial={false}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
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
      <StaggerContainer className="relative z-10 flex w-full flex-col gap-2 lg:flex-row" stagger={0.15}>
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <StaggerItem key={item.title} className="min-w-0 flex-1">
              <div
                onMouseEnter={() => setActiveIndex(i)}
                className={`flex min-w-0 cursor-pointer items-center gap-4 p-4 backdrop-blur-[20px] transition-all duration-300 ${
                   "rounded-2xl bg-accent-60"
                }`}
              >
                {/* Card icon */}
                <div
                  className={`flex size-[77px] shrink-0 items-center justify-center rounded-lg transition-colors duration-300`}
                >
                  <Image
                    src="/images/home/verticals-brand-icon.png"
                    alt=""
                    width={77}
                    height={37}
                    className={`h-auto w-full object-contain transition-all duration-300 `}
                  />
                </div>

                {/* Card content */}
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <h3
                    className={`text-2xl font-medium leading-[1.2] transition-colors duration-300 ${
                      "text-text-100"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div className="min-w-0 py-2">
                    <span
                      className={`block max-w-full truncate text-xs font-light leading-[1.5] transition-colors duration-300 ${
                        "text-text-100"
                      }`}
                      title={item.subtitle}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Arrow button */}
                <div
                  className={`flex shrink-0 items-center justify-center rounded-full p-4 transition-colors duration-300 ${
                    "bg-[#F2F2F2]"
                  }`}
                >
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6H13M13 6L8 1M13 6L8 11"
                      className={`transition-all duration-300 ${
                         "stroke-[#1A1919]"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
