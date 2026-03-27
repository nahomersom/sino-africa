"use client";

import { Button } from "@/src/components/ui/app-button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black/40 flex items-between justify-center">
      <Image
        src="/images/hero-background.jpg"
        alt="Sino Africa hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 88%, rgba(255,255,255,1) 98%)" }}
      />

      <motion.div
        className="z-10 flex flex-col items-center justify-center gap-4 max-w-[574px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="text-[13px] text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          SINO AFRICA
        </motion.span>
        <motion.h1
          className="text-[100px] leading-[100px] text-white tracking-[-2px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          Sino Africa
        </motion.h1>
        <motion.p
          className="text-center text-2xl font-normal leading-[150%] tracking-[-1px] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          <Button asChild variant="primary" className="min-w-[187px]">
            <Link href="/#contact">Explore Our Platforms</Link>
          </Button>
          <Button asChild variant="secondary" className="min-w-[187px]">
            <Link href="/#contact">Contact us</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-[7px] left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      >
        <Image
          src="/icons/down-arrow.svg"
          alt="Scroll down"
          width={24}
          height={24}
          className="size-10"
        />
      </motion.div>
    </section>
  );
}
