"use client";

import { motion } from "framer-motion";

export function CareersHeader() {
  return (
    <section className="w-full bg-white pt-[131px] pb-16 md:pt-[102px] lg:pt-[189px] lg:pb-[82px]">
      <div className="mx-auto flex w-full flex-col items-center px-8 text-center md:max-w-[837px] md:gap-2 md:px-0 md:pb-10 lg:max-w-[1254px] lg:items-start lg:gap-2 lg:pb-0 lg:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-normal tracking-wider text-[#64C294]"
        >
          CAREERS
        </motion.span>

        <div className="flex w-full flex-col items-center gap-2 md:gap-2 lg:items-start lg:gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[24px] font-semibold text-[#161C2D] md:w-[520px] md:text-[36px] md:leading-[48px] lg:h-[96px] lg:w-[515px]"
          >
            You think you have what it takes? Join us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[14px] font-normal leading-[1.5] text-[#161C2D] md:w-[382px] md:text-[18px] lg:h-[54px] lg:w-[382px]"
          >
            Explore through our job openings and join a team of experts.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
