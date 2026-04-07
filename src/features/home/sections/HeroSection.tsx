"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_SLIDES, HERO_SOCIAL_ICONS } from "./HeroSection.constants";

export function HeroSection() {
  const socialIcons = HERO_SOCIAL_ICONS;
  const slides = HERO_SLIDES;
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
              {currentSlide.focusAreas.slice(0, 3).map((item, index) => (
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

      <div className="pointer-events-none absolute right-0 bottom-[128px] z-20 hidden min-h-[228px] w-[68px] flex-col gap-3 rounded-l-[24px] bg-[#F4F7FACC] py-6 px-4 backdrop-blur-[44px] shadow-[-3px_0px_6px_0px_#0000001A,-11px_0px_11px_0px_#00000017,-25px_0px_15px_0px_#0000000D,-45px_0px_18px_0px_#00000003,-71px_0px_20px_0px_#00000000] lg:flex">
        <div className="pointer-events-auto flex flex-col gap-3">
          {socialIcons.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex size-9 items-center justify-center rounded-full bg-white text-white transition-colors "
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
