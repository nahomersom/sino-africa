"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getStrapiMediaUrl,
  type Vertical,
  type VerticalTag,
  useGetVerticalsQuery,
} from "@/src/store/strapiApi";
import { HERO_SLIDES, type HeroSlide } from "./HeroSection.constants";

function extractVerticalTags(vertical: Vertical): string[] {
  const fromTag = Array.isArray(vertical.tag) ? (vertical.tag as VerticalTag[]) : [];
  const fromTags = Array.isArray(vertical.tags) ? (vertical.tags as VerticalTag[]) : [];
  const source = fromTag.length > 0 ? fromTag : fromTags;

  return source
    .map((item) => item.text ?? item.title ?? item.name)
    .filter((value): value is string => typeof value === "string" && value.trim().length > 0)
    .slice(0, 3);
}

export function HeroSection() {
  const { data: verticals = [] } = useGetVerticalsQuery();
  const fallbackSlides = HERO_SLIDES.slice(1, 4);
  const firstSlide = HERO_SLIDES[0];
  const verticalSlides: HeroSlide[] = fallbackSlides.map((fallbackSlide, index) => {
    const vertical = verticals[index];
    if (!vertical) return fallbackSlide;
    const tags = extractVerticalTags(vertical);

    return {
      imageSrc: getStrapiMediaUrl(vertical.heroImage?.url) || fallbackSlide.imageSrc,
      title: vertical.title ?? vertical.name ?? fallbackSlide.title,
      description:
        vertical.summary ??
        vertical.focusAreasDescription ??
        vertical.description ??
        fallbackSlide.description,
      focusAreas: tags.length > 0 ? tags : fallbackSlide.focusAreas,
      primaryCta: {
        label: fallbackSlide.primaryCta.label,
        href: vertical.slug ? `/our-verticals/${vertical.slug}` : fallbackSlide.primaryCta.href,
      },
      secondaryCta: fallbackSlide.secondaryCta,
    };
  });
  const slides: readonly HeroSlide[] = [firstSlide, ...verticalSlides];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [activeSlide, slides.length]);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-black/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.imageSrc}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={currentSlide.imageSrc}
            alt="Sino Africa hero background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 92%, rgba(255,255,255,1) 98%)" }}
      />

      <motion.div
        className="z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col justify-end gap-4 px-6 py-16 md:px-10  lg:gap-4 lg:px-44 lg:pt-[88px]x lg:pb-[100px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-content-${activeSlide}`}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[13px] leading-[1.26] tracking-[0.125em] text-[#68D585]">
              SINO AFRICA
            </span>
            <h1 className="w-full max-w-[658px] text-left text-[40px] leading-[1.02] tracking-[-0.02em] text-white md:text-[52px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-0.0333em]">
              {currentSlide.title}
            </h1>
            <p className="w-full max-w-[599px] text-left text-[18px] leading-[1.5] tracking-[-0.03em] text-white md:text-[20px] lg:text-[24px]">
              {currentSlide.description}
            </p>
            <div className="flex flex-row flex-wrap items-center gap-4">
              <Link
                href={currentSlide.primaryCta.href}
                className="inline-flex min-h-[68px] items-center justify-center rounded-[23px] bg-[#64C294] px-6 text-center text-sm leading-6 text-white"
              >
                {currentSlide.primaryCta.label}
              </Link>
              <Link
                href={currentSlide.secondaryCta.href}
                className="inline-flex min-h-[68px] min-w-[187px] items-center justify-center rounded-[23px] bg-[#F6F7FB] px-6 text-center text-sm leading-6 text-[#161C2D]"
              >
                {currentSlide.secondaryCta.label}
              </Link>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-4">
              {(currentSlide.focusAreas.length > 0 ? currentSlide.focusAreas : firstSlide.focusAreas)
                .slice(0, 3)
                .map((item, index) => (
                <span
                  key={`${activeSlide}-${index}-${item}`}
                  className="rounded-[32px] bg-white/20 px-6 py-4 text-center text-[12px] font-medium leading-[1.26] tracking-[0.0525em] text-white backdrop-blur-[52px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
       
        <motion.div
          className="mt-2 grid w-full grid-cols-[104px_1fr_104px] items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <span className="w-[104px] text-left text-base leading-6 text-white">
            {activeSlide + 1}/{slides.length}
          </span>
          <div className="flex items-center justify-center gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={
                  index === activeSlide
                    ? "h-3 w-[29px] rounded-full bg-white transition-all"
                    : "h-3 w-3 rounded-full border border-white bg-transparent transition-all"
                }
              />
            ))}
          </div>
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
              }
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 transition-colors hover:bg-white/10 text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="opacity-100"
              >
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 transition-colors hover:bg-white/10 text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="opacity-100"
              >
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
