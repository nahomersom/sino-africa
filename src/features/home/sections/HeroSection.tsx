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
  useGetHomeHeroQuery,
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

function getSlideAnimationType(slideIndex: number): "up" | "down" | "none" {
  if (slideIndex === 1) return "down";
  if (slideIndex === 2) return "none";
  return "up";
}

export function HeroSection() {
  const { data: verticals = [] } = useGetVerticalsQuery();
  const { data: homeHero } = useGetHomeHeroQuery();

  const fallbackSlides = HERO_SLIDES.slice(1, 4);
  const firstSlideTemplate = HERO_SLIDES[0];

  const dynamicFirstSlide: HeroSlide = homeHero
    ? {
      imageSrc: getStrapiMediaUrl(homeHero.heroImage?.url) || firstSlideTemplate.imageSrc,
      title: homeHero.title || firstSlideTemplate.title,
      verticalName: firstSlideTemplate.verticalName,
      description: homeHero.description || firstSlideTemplate.description,
      focusAreas: homeHero.tag?.map((t) => t.text).filter(Boolean) || firstSlideTemplate.focusAreas,
      primaryCta: firstSlideTemplate.primaryCta,
      secondaryCta: firstSlideTemplate.secondaryCta,
    }
    : firstSlideTemplate;

  const verticalSlides: HeroSlide[] = fallbackSlides.map((fallbackSlide, index) => {
    const vertical = verticals[index];
    if (!vertical) return fallbackSlide;
    const tags = extractVerticalTags(vertical);
    const verticalName = vertical.title ?? vertical.name ?? fallbackSlide.verticalName;

    return {
      imageSrc: getStrapiMediaUrl(vertical.homeHeroImage?.url) || fallbackSlide.imageSrc,
      title: vertical.title ?? vertical.name ?? fallbackSlide.title,
      verticalName,
      description:
        vertical.summary ??
        vertical.focusAreasDescription ??
        vertical.description ??
        fallbackSlide.description,
      focusAreas: tags.length > 0 ? tags : fallbackSlide.focusAreas,
      primaryCta: {
        label: verticalName ? `Read more about ${verticalName}` : fallbackSlide.primaryCta.label,
        href: vertical.slug ? `/our-verticals/${vertical.slug}` : fallbackSlide.primaryCta.href,
      },
      secondaryCta: fallbackSlide.secondaryCta,
    };
  });

  const slides: readonly HeroSlide[] = [dynamicFirstSlide, ...verticalSlides];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [activeSlide, slides.length]);

  const currentSlide = slides[activeSlide];
  const slideAnimationType = getSlideAnimationType(activeSlide);
  const textInitial =
    slideAnimationType === "up"
      ? { opacity: 0, y: 18 }
      : slideAnimationType === "down"
        ? { opacity: 0, y: -18 }
        : { opacity: 1, y: 0 };
  const textAnimate = { opacity: 1, y: 0 };
  const textExit =
    slideAnimationType === "up"
      ? { opacity: 0, y: -8 }
      : slideAnimationType === "down"
        ? { opacity: 0, y: 8 }
        : { opacity: 1, y: 0 };
  const textTransition =
    slideAnimationType === "none"
      ? { duration: 0 }
      : { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative flex h-[971px] w-full flex-col justify-center overflow-hidden bg-black/50 md:min-h-screen">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={`${index}-${slide.imageSrc}`}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === activeSlide ? 1 : 0,
              scale: index === activeSlide ? 1 : 1.01,
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.imageSrc}
              alt="Sino Africa hero background"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 92%, rgba(255,255,255,1) 98%)" }}
      />

      <motion.div
        className="z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col justify-end gap-4 px-6 pt-[118px] pb-24 md:px-10 md:justify-end lg:gap-4 lg:px-44 lg:pt-[88px] lg:pb-[100px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-content-${activeSlide}`}
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[13px] leading-[1.26] tracking-[0.125em] text-[#68D585]">
              {currentSlide.verticalName ?? "SINO AFRICA"}
            </span>
            <AnimatePresence mode="wait">
              <motion.h1
                key={`hero-title-${activeSlide}`}
                initial={textInitial}
                animate={textAnimate}
                exit={textExit}
                transition={textTransition}
                className="w-full max-w-[658px] font-outfit text-left text-[36px] font-normal leading-[100%] tracking-[-0.02em] text-white md:text-[52px] md:leading-[1.02] lg:text-[60px] lg:leading-[60px] lg:tracking-[-0.0333em]"
              >
                {currentSlide.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`hero-description-${activeSlide}`}
                initial={textInitial}
                animate={textAnimate}
                exit={textExit}
                transition={textTransition}
                className="w-full max-w-[599px] text-left text-[16px] font-normal leading-[150%] tracking-[-0.03em] text-white md:text-[20px] lg:text-[24px]"
              >
                {currentSlide.description}
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-col gap-[8px] md:flex-row md:flex-wrap md:items-center md:gap-4">
              <Link
                href={currentSlide.primaryCta.href}
                className="inline-flex h-[69px] w-full max-w-[390px] items-center justify-center rounded-[23px] bg-[#64C294] px-6 text-center text-sm font-medium leading-6 text-white md:w-auto"
              >
                {currentSlide.primaryCta.label}
              </Link>
              <Link
                href={currentSlide.secondaryCta.href}
                className="inline-flex h-[69px] w-full max-w-[390px] items-center justify-center rounded-[23px] bg-[#F6F7FB] px-6 text-center text-sm font-medium leading-6 text-[#161C2D] md:min-w-[187px] md:w-auto"
              >
                {currentSlide.secondaryCta.label}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-[8px] md:flex md:flex-row md:flex-wrap md:items-center md:gap-4">
              {(currentSlide.focusAreas.length > 0 ? currentSlide.focusAreas : slides[0].focusAreas)
                .slice(0, 3)
                .map((item, index) => (
                  <motion.span
                    key={`${activeSlide}-${index}-${item}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.16 * index,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-[32px] bg-white/20 px-6 py-4 text-center text-[12px] font-medium leading-[1.26] tracking-[0.0525em] text-white backdrop-blur-[52px]"
                  >
                    {item}
                  </motion.span>
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
