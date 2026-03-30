"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS_HERO_BG_IMAGE = "/images/projects/projects-hero.png";
const PROJECTS_HERO_IMAGE = "/images/hero-background.jpg";
const PROJECTS_HERO_BG_OPACITY = 1;

type ProjectsHeroSectionProps = {
  label: string;
  heading: string;
  description: string;
};

export function ProjectsHeroSection({ label, heading, description }: ProjectsHeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex w-full overflow-hidden bg-white",
        "px-8 pb-12 pt-[120px] md:px-20 md:pb-14 md:pt-[113px] lg:px-[120px] lg:pb-16 lg:pt-[152px]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${PROJECTS_HERO_BG_IMAGE})`,
          opacity: PROJECTS_HERO_BG_OPACITY,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-stretch gap-10 px-3 py-5 md:px-5 md:py-7 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-12">
        <div className="flex flex-col items-start gap-2 lg:w-[507px] lg:min-h-[264px]">
          <motion.div
            className="flex flex-col items-start gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary">
              {label}
            </span>
            <h1 className="text-left font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-text-100 md:text-[36px] md:leading-[1.33] md:tracking-[-0.033em]">
              {heading}
            </h1>
          </motion.div>

          <motion.p
            className="text-left text-base font-light leading-[1.65] tracking-[-0.0125em] text-muted md:text-lg md:leading-[1.65] md:tracking-[-0.011em]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:h-[382.1636047363281px] lg:w-[368.0322265625px] lg:max-w-none"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
        >
          <Image
            src={PROJECTS_HERO_IMAGE}
            alt=""
            width={3264}
            height={1836}
            className="h-auto w-full rounded-[10px] object-cover lg:h-full"
            priority
            sizes="(max-width: 1023px) 90vw, 368px"
          />
        </motion.div>
      </div>
    </section>
  );
}
