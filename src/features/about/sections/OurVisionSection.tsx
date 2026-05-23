"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type OurVisionSectionProps = {
  heading: string;
  description: string;
};

export function OurVisionSection({
  heading,
  description,
}: OurVisionSectionProps) {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-white px-8 py-20 md:px-20 md:py-24 lg:px-[120px] lg:py-[120px] xl:px-[240px]">
      {/* Face-icon background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "20px",
          backgroundRepeat: "repeat",
        }}
      />


            {/* Gradient glows — match ContactSection treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 hidden h-screen w-[100vh] -translate-x-3/4 rounded-full bg-[#64C294]/20 blur-[252px] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[159px] hidden h-screen w-[100vh] translate-x-3/4 rounded-full bg-[#64C294]/20 blur-[252px] lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* Image with decorative accents */}
        <motion.div
          className="w-full lg:w-[498px] lg:shrink-0"
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto w-full max-w-[498px]">
            {/* Dots accent — top left, behind image */}
            <Image
              src="/images/dots-circle.svg"
              alt=""
              aria-hidden="true"
              width={140}
              height={140}
              className="pointer-events-none absolute -left-6 -top-10 z-0 h-auto w-[80px] select-none md:-left-20 md:-top-20 md:w-[140px]"
            />

            {/* Coral circle accent — bottom left, behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-4 z-0 h-[130px] w-[130px] rounded-full bg-[#F64B4B]/57 md:-bottom-[88px] md:-left-10 md:h-[221px] md:w-[221px]"
            />

            <div className="relative z-10 h-[320px] w-full overflow-hidden rounded-[16px] shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:h-[480px] lg:h-[560px]">
              <Image
                src="/images/hands-on-tree.jpg"
                alt="Hands stacked together on a tree branch"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 498px, 100vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex w-full flex-col items-center gap-[24px] text-center lg:w-auto lg:items-start lg:gap-[30px] lg:text-left"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <svg width="69" height="45" viewBox="0 0 69 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.3483 29.573C38.4314 29.573 41.7415 26.263 41.7415 22.1798C41.7415 18.0967 38.4314 14.7866 34.3483 14.7866C30.2651 14.7866 26.9551 18.0967 26.9551 22.1798C26.9551 26.263 30.2651 29.573 34.3483 29.573Z" stroke="#64C294" stroke-width="6.7" stroke-linejoin="round"/>
            <path d="M34.3485 1.84839C18.4353 1.84839 6.53601 15.0944 2.53836 20.2031C1.61872 21.3782 1.61872 22.9811 2.53836 24.1562C6.53601 29.2649 18.4353 42.5109 34.3485 42.5109C50.2616 42.5109 62.161 29.2649 66.1589 24.1562C67.0786 22.9811 67.0786 21.3782 66.1589 20.2031C62.161 15.0944 50.2616 1.84839 34.3485 1.84839Z" stroke="#1A1919" stroke-width="3.69659" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </motion.div>
          <motion.h2
            className="text-[32px] font-medium leading-tight text-text-100 md:text-[40px]"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.64 }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="max-w-[492px] text-base leading-7 text-text-100/80 md:text-lg md:leading-8"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.78 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
