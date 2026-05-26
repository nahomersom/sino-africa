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
  headingDescription:string;
  images: AboutHeroImages;
};

/** Figma export artboard — positions as % of width / height (md+ collage) */
const SLOT = {
  left: "left-0 md:top-0  lg:top-[182px] h-[429px] w-[318.5px] lg:h-[429px] lg:w-[495.5px]",
  center: "left-[53%] lg:left-[600.99px] -top-[11.45px] lg:top-[11.948%] md:h-[238px] lg:h-[285.27px] md:w-[254px] lg:w-[354.10px] h-[51.064%] w-[28.665%]",
  right: "left-[85.587%] lg:left-[1059.49px] top-[16.806%] lg:top-[28.806%] md:h-[84px] lg:h-[143.49px] md:w-[89px] lg:w-[178.16px] h-[25.695%] w-[14.414%]",
} as const;

/**
 * Mobile / tablet (below lg): Figma Hero Frame 1 (3 images + dots). lg+: absolute collage.
 * Split at lg so viewports from 768px up still use this stack until desktop width.
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
  
    const closingSentenceStart = "Sino Africa is the partner chosen";
  const closingSentenceIndex = description.indexOf(closingSentenceStart);
  const descriptionIntro =
    closingSentenceIndex >= 0
      ? description.slice(0, closingSentenceIndex).trim()
      : description;
  const descriptionClosing =
    closingSentenceIndex >= 0 ? description.slice(closingSentenceIndex).trim() : "";
  const descriptionContent = (
    <>
      {descriptionIntro}
      {descriptionClosing ? (
        <span className="mt-[10px] block">{descriptionClosing}</span>
      ) : null}
    </>
  );

  return (
    <div className="relative mt-2 w-full shrink-0 lg:mt-2 lg:w-full lg:max-w-[1236px] lg:left-[103px]">
      {/* Figma mobile stack: visible below lg (md alone is too narrow — tablets saw collage only) */}
      {/* Below lg: mobile stack + Tablet (md) row — Figma Tablet Hero 6:6503 */}
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10 lg:hidden">
        <div className={cn("relative h-[429px] w-full md:min-w-0 md:flex-1", frame)}>
          <Image
            src={images.left}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative flex min-w-0 flex-col items-start gap-6 md:min-w-0 md:flex-1 md:overflow-visible">
          <div className="pointer-events-none absolute left-[calc(201.7/366*100%)] -top-[70px] hidden h-[109px] w-[calc(119.15/366*100%)] overflow-hidden md:left-[201.7px] md:top-[-70px] md:block md:w-[119.15px]">
            <Image
              src="/images/about/hero-dots.svg"
              alt=""
              aria-hidden="true"
              width={1236}
              height={611}
              className="absolute left-[-921px] top-0 h-auto w-[1236px] max-w-none"
            />
          </div>

          <div
            className={cn(
              frame,
              "relative z-0 h-[238px] w-[calc(254/366*100%)] shrink-0 md:w-[254px]",
            )}
          >
            <Image
              src={images.center}
              alt=""
              fill
              className="object-cover"
              sizes="70vw"
            />
          </div>

          <p className="w-full text-left text-base font-light leading-[1.5] tracking-[-0.0125em] text-[rgba(92,96,108,0.7)]">
            {descriptionContent}
          </p>

          <div
            className={cn(
              frame,
              "absolute left-[calc(277/366*100%)] top-[95px] z-10 h-[84px] w-[calc(89/366*100%)] md:left-[230px] md:h-[84px] md:w-[89px]",
            )}
          >
            <Image
              src={images.right}
              alt=""
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </div>

      <div className="relative hidden w-full aspect-1236/611 lg:block lg:h-[429px] lg:aspect-auto">
        {/* Static dot grid — separated from photos for maintainability */}
        <div className="pointer-events-none absolute z-20 hidden overflow-hidden md:-top-[50.45px] md:right-0 md:block md:h-[109px] md:w-[119.15px] lg:hidden">
          <Image
            src="/images/about/hero-dots.svg"
            alt=""
            aria-hidden="true"
            width={1236}
            height={611}
            className="absolute right-0 top-0 h-auto w-[1236px] max-w-none"
          />
        </div>

        <div className="pointer-events-none absolute z-20 hidden bg-[url('/images/about/hero-dots.svg')] bg-[length:100%_100%] bg-no-repeat lg:inset-0 lg:z-0 lg:block lg:h-auto lg:w-auto lg:left-[211px]" />

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
              "absolute overflow-hidden rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]",
              SLOT.right,
            )}
          >
            <Image
              src={images.right}
              alt=""
              fill
              className="object-cover z-10"
              sizes="(max-width: 1023px) 89px, 15vw"
            />
          </div>

          <img
            src={images.center}
            alt=""
            className={cn("absolute rounded-[10px] object-cover shadow-[0px_42px_44px_-10px_#0117301E]", SLOT.center)}
          />

          <p className="absolute bottom-[43px] left-[53%] lg:left-[600.99px] lg:bottom-auto lg:top-[410px] z-20 max-w-[318.5px] lg:max-w-[635px] text-left text-base font-light leading-6 tracking-[-0.0125em] text-muted">
            {descriptionContent}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutHeroSection({ label, heading, headingDescription ,description, images }: AboutHeroSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-stretch  bg-white px-8 lg:pb-[220px] pt-16 md:items-center md:px-20 md:pt-[211px] lg:h-auto lg:px-[237px] lg:pt-[152px] overflow-visible">
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
        className="relative z-10 flex w-full flex-col items-start gap-2 md:items-center md:px-0 lg:items-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <span className="text-left text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary md:text-center lg:text-left">
          {label}
        </span>
        <h1 className="max-w-none font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-text-100 text-left md:max-w-[677px] lg:max-w-[515px] md:text-[36px] md:leading-[1.33] md:tracking-[-0.033em] md:text-center lg:text-left lg:text-[36px] lg:leading-[48px] lg:tracking-[-1.2px]">
          {heading}
        </h1>
        <h1 className="max-w-none font-(family-name:--font-nata-sans) font-sans font-light   text-[#5C606C] text-left md:max-w-[677px] lg:max-w-[515px]  md:text-center lg:text-left ">
          {headingDescription}
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
