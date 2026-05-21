"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type AboutSectionProps = {
  heading: string;
  bodyOne: string;
  bodyTwo: string;
  bodyThree: string;
  bodyFour: string;
};

export function AboutSection({ heading, bodyOne, bodyTwo, bodyThree, bodyFour }: AboutSectionProps) {
  const bodies = [bodyOne, bodyTwo, bodyThree, bodyFour];

  return (
    <section className="relative flex w-full flex-col items-center gap-6 overflow-hidden bg-white px-8 py-10 md:px-20 md:py-20 lg:px-60 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{ backgroundImage: "url('/images/sino-symbol-tile.svg')", backgroundSize: "20px", backgroundRepeat: "repeat" }}
      />
      <h2 className="text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.33] tracking-[-0.04em] text-text-100 md:text-4xl md:leading-snug md:tracking-tight">
        {heading}
      </h2>
      {bodies.map((body, index) => (
        <motion.p
          key={index}
          className="max-w-[892px] whitespace-pre-line text-center text-sm leading-6 text-[#5c606c]/70 md:text-lg md:leading-8"
          initial={{ opacity: 0, y: 14, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.72,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5 + index * 0.14,
          }}
        >
          {body}
        </motion.p>
      ))}
      <Link
        href="/about"
        className="w-full md:w-fit shadow-[0_0_32px_0_rgba(0,0,0,0.12)] text-center text-sm font-normal leading-[1.5] text-text-100 px-6 bg-accent-60 py-6 flex items-center justify-center z-10 rounded-[55px] max-h-[72px] min-w-[156px] gap-[13px]"
      >
        Read More
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.5 12H5M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
            stroke="#1A1919"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>


      </Link>
    </section>
  );
}
