"use client";

import { Button } from "@/src/components/ui/app-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[971px] w-full flex-col justify-center overflow-hidden bg-black/40 md:min-h-screen">
      <Image
        src="/images/hero-background.jpg"
        alt="Sino Africa hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 88%, rgba(255,255,255,1) 98%)" }}
      />

      <motion.div
        className="z-10 mx-auto flex w-full max-w-[574px] flex-col items-center justify-center gap-4 px-8 py-12 md:px-10 lg:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="text-[13px] font-normal leading-[1.26] tracking-[0.125em] text-[#68D585] md:text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          SINO AFRICA
        </motion.span>
        <motion.h1
          className="text-center text-[64px] font-normal leading-none tracking-[-0.03125em] text-white md:text-[60px] md:leading-[100px] md:tracking-[-2px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          A Bridge Between
          <br />
          Markets, Technology, and Institutional Infrastructure
        </motion.h1>
        <motion.p
          className="text-center text-base font-normal leading-6 tracking-[-0.0625em] text-white md:text-2xl md:leading-[150%] md:tracking-[-1px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.
        </motion.p>
        <motion.div
          className="flex flex-col items-center gap-2 text-center text-[13px] font-normal uppercase tracking-[0.048em] text-[#68D585]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-wrap justify-center gap-2 md:w-[460px] md:flex-nowrap md:gap-4">
            <p className="min-w-0 flex-1">Platform Infrastructure</p>
            <p className="min-w-0 flex-1">Institutional Partnerships</p>
          </div>
          <p>Technology Deployment</p>
        </motion.div>
        <motion.div
          className="flex flex-row flex-wrap justify-center gap-2 md:inline-flex md:flex-nowrap md:justify-center md:gap-0 md:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          <Button
            asChild
            variant="primary"
            className="min-w-0 px-6 py-4 text-sm font-normal md:min-w-[187px] md:p-6 md:font-medium"
          >
            <Link href="/#contact">Explore Our Platforms</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="min-w-0 px-6 py-4 text-sm font-normal md:min-w-[187px] md:p-6 md:font-medium"
          >
            <Link href="/#contact">Contact us</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.button
        type="button"
        onClick={handleScrollDown}
        aria-label="Scroll down"
        className="hidden md:block absolute bottom-[7px] left-1/2 z-10 size-10 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.4, ease: "easeOut" },
          y: { delay: 1.2, duration: 1.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      >
        <Image
          src="/icons/down-arrow.svg"
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="size-10"
        />
      </motion.button>
    </section>
  );
}
