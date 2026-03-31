import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import type { VerticalDetailContent, VerticalDetailTheme } from "../types";
import { HeroWave } from "./HeroWave";

const VERTICAL_LOGO_MASK_SRC = "/icons/vertical-cards-icon.png";
const HERO_DOTS_SRC = "/images/our-verticals/hero-dots.png";
const DOWN_ARROW_SRC = "/icons/down-arrow.svg";

type Props = Pick<VerticalDetailContent, "name" | "heroDescription" | "heroImageAlt"> & {
  theme: VerticalDetailTheme;
};

export function DetailHero({ name, heroDescription, heroImageAlt, theme }: Props) {
  const { heroBgSrc, heroImageSrc } = theme;

  return (
    <section className="relative isolate flex w-full flex-col overflow-x-clip">
      <div className="relative order-0 z-0 mx-auto flex w-full flex-none shrink-0 grow-0 flex-col pb-10 pt-0 lg:mb-[-230px] lg:min-h-[953px] lg:pb-16">
        <Image
          src={heroBgSrc}
          alt=""
          fill
          priority
          className="pointer-events-none object-cover object-left object-top"
          sizes="100vw"
          aria-hidden
        />

        <div className="relative z-[1] mx-auto flex min-h-0 w-full md:mt-15 lg:mt-20 max-w-[1452px] flex-1 flex-col px-6 pt-[112px] lg:pt-[128px] lg:px-[min(8rem,6vw)]">
          <div className="flex min-h-0 w-full flex-1 flex-col justify-start gap-10 md:flex-row md:items-stretch md:justify-start md:gap-12">
            <div className="order-2 ml-0 flex min-w-0 w-full max-w-[596px] flex-1 flex-col justify-center gap-3 p-2 opacity-100 md:order-1 md:ml-6 lg:ml-10 lg:min-h-[653px]">
              <Link
                href="/our-verticals"
                className="hidden w-fit items-center gap-2 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex"
              >
                <span aria-hidden className="text-lg leading-none">
                  ←
                </span>
                Back to Our Verticals
              </Link>

              <div className="flex flex-col gap-4 text-white lg:gap-4">
                <div
                  className="size-[142px] shrink-0"
                  style={
                    {
                      backgroundColor: "#ffffff",
                      maskImage: `url(${VERTICAL_LOGO_MASK_SRC})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskImage: `url(${VERTICAL_LOGO_MASK_SRC})`,
                      WebkitMaskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                    } satisfies CSSProperties
                  }
                />
                <h1 className="font-heading text-4xl font-bold leading-none tracking-[-0.033em] text-white md:text-[48px] lg:text-[60px]">
                  {name}
                </h1>
                <p className="max-w-xl text-lg font-normal leading-normal tracking-[-0.011em] text-white">
                  {heroDescription}
                </p>
              </div>
            </div>

            <div className="relative z-[2] order-1 aspect-square w-full max-md:mt-0 md:order-2 md:mt-0 md:max-w-[520px] md:translate-y-[clamp(2.25rem,1rem,1rem)] lg:max-w-[685px]">
              <Image
                src={HERO_DOTS_SRC}
                alt=""
                width={131}
                height={104}
                className="pointer-events-none absolute -right-5 -top-10 z-[1] h-auto w-[min(131px,30%)]"
                aria-hidden
              />
              <div className="relative z-[2] h-full w-full overflow-hidden rounded-[10px]">
                <Image
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 md:-mt-[180px] lg:mt-0">
        <HeroWave />
        <div className="pointer-events-none absolute inset-x-0 bottom-10 z-[1000] flex justify-center md:bottom-0">
          <span aria-hidden className="relative drop-shadow-md">
            <Image
              src={DOWN_ARROW_SRC}
              alt=""
              width={42}
              height={42}
              className="size-10"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
