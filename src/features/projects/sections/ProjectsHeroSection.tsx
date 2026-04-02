"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS_HERO_BG_IMAGE = "/images/projects/projects-hero.png";
const PROJECTS_HERO_IMAGE = "/images/projects/project-hero.svg";
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
        "px-8 pb-12 pt-[120px] md:px-10 md:pb-16 md:pt-[152px] lg:px-[120px]",
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-10 px-3 py-5 md:flex-row md:items-start md:justify-between md:gap-8 md:px-4 md:py-12 lg:max-w-[1320px] lg:items-center">
        <div className="flex flex-col items-center gap-2 text-center md:w-[48%] md:items-start md:text-left md:min-h-[264px] lg:w-[507px]">
          <motion.div
            className="flex flex-col items-center gap-2 md:items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary">
              {label}
            </span>
            <h1 className="text-center font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-text-100 md:text-left md:text-[36px] md:leading-[1.33] md:tracking-[-0.033em]">
              {heading}
            </h1>
          </motion.div>

          <motion.p
            className="text-center text-base font-light leading-[1.65] tracking-[-0.0125em] text-muted md:text-left md:text-lg md:leading-[1.65] md:tracking-[-0.011em]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px] md:mx-0 md:mt-8 md:w-[45%] md:max-w-none lg:mt-0 lg:h-[456px] lg:w-[440px]"
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
            sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 440px"
          />
        </motion.div>
      </div>
    </section>
  );
}
