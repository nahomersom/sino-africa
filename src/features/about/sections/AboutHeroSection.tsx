"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type AboutHeroSectionProps = {
  label: string;
  heading: string;
};

export function AboutHeroSection({ label, heading }: AboutHeroSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden bg-white px-6 pb-10 pt-[120px] md:px-16 lg:h-[988px] lg:px-[237px] lg:pt-[152px]">
      {/* Green glow — concentric ellipses behind the content */}
      <motion.div
        className="pointer-events-none absolute -left-[471px] -top-[150px] hidden select-none lg:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/images/about/hero-pattern.svg"
          alt=""
          aria-hidden="true"
          width={1074}
          height={1048}
          priority
        />
      </motion.div>

      {/* Title block — label + heading */}
      <motion.div
        className="relative z-10 flex w-full flex-col gap-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <span className="text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary">
          {label}
        </span>
        <h1 className="max-w-[515px] font-(family-name:--font-nata-sans) text-3xl font-semibold leading-[1.33] tracking-[-0.033em] text-text-100 lg:text-[36px]">
          {heading}
        </h1>
      </motion.div>

      {/* Illustration — images + dot grid, below the title */}
      <motion.div
        className="relative mt-2 hidden w-[1236px] shrink-0 lg:block"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Image
          src="/images/about/hero-illustration.svg"
          alt=""
          aria-hidden="true"
          width={1236}
          height={611}
        />
      </motion.div>
    </section>
  );
}
