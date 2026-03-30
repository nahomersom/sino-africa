"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export type AboutHeroImages = {
  center: string;
  left: string;
  right: string;
};

type AboutHeroSectionProps = {
  label: string;
  heading: string;
  description: string;
  images: AboutHeroImages;
};

/** Figma export artboard — positions as % of width / height */
const SLOT = {
  left: "left-0 lg:top-[31.424%] h-[429px] w-[318.5px] lg:h-[429px] lg:w-[495.51px]",
  center: "left-[48.647%] top-[11.948%] h-[51.064%] w-[28.665%]",
  right: "left-[85.587%] top-[28.806%] h-[25.695%] w-[14.414%]",
} as const;

/**
 * Collage uses one shared layout across all breakpoints.
 */
function HeroCollage({
  images,
  description,
}: {
  images: AboutHeroImages;
  description: string;
}) {
  const frame =
    "relative overflow-hidden rounded-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]";

  return (
    <div className="relative mt-10 w-full shrink-0 lg:mt-2 lg:w-full lg:max-w-[1236px]">
      <div className="relative w-full aspect-[1236/611]">
        {/* Static dot grid — separated from photos for maintainability */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/about/hero-dots.svg"
            alt=""
            fill
            className="object-fill"
            priority
            aria-hidden
          />
        </div>

        <div
          className={cn(
            "absolute inset-0 z-10 block",
          )}
        >
          <div
            className={cn(
              frame,
              "absolute aspect-auto",
              SLOT.left,
            )}
          >
            <Image
              src={images.left}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 45vw, 40vw"
            />
          </div>

          <div
            className={cn(
              frame,
              "absolute aspect-auto",
              SLOT.right,
            )}
          >
            <Image
              src={images.right}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 45vw, 15vw"
            />
          </div>

          <div
            className={cn(
              frame,
              "absolute aspect-auto",
              SLOT.center,
            )}
          >
            <Image
              src={images.center}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 29vw"
            />
          </div>

          <p className="absolute bottom-[43px] left-[49%] z-20 w-[36%] text-left text-base font-light leading-6 tracking-[-0.0125em] text-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutHeroSection({ label, heading, description, images }: AboutHeroSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-stretch justify-end overflow-hidden bg-white px-8 lg:pb-10 pt-[120px] md:items-center md:px-20 md:pt-[113px] min-h-screen lg:px-[237px] lg:pt-[152px]">
      {/* Green glow — concentric ellipses behind the content */}
      <motion.div
        className="pointer-events-none absolute -left-[155px] top-[49px] block w-[404px] select-none md:-left-[435px] md:top-[120px] md:w-[860.84px] lg:-left-[471px] lg:-top-[150px] lg:w-[1074px]"
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
          className="h-auto w-full md:h-[840px] md:w-[860.84px] lg:h-auto lg:w-full"
          priority
        />
      </motion.div>

      {/* Title block — label + heading */}
      <motion.div
        className="relative z-10 flex w-full flex-col items-start gap-2 md:items-center md:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <span className="text-left text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary md:text-center">
          {label}
        </span>
        <h1 className="max-w-none font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-text-100 text-left md:max-w-[677px] lg:max-w-[515px] md:text-[36px] md:leading-[1.33] md:tracking-[-0.033em] md:text-center lg:text-[36px]">
          {heading}
        </h1>
      </motion.div>

      <motion.div
        className="relative w-full shrink-0 md:w-full lg:w-[1236px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <HeroCollage images={images} description={description} />
      </motion.div>
    </section>
  );
}
