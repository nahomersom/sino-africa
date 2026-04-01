import Image from "next/image";
import Link from "next/link";

import type { VerticalDetailContent, VerticalDetailTheme } from "../types";
import { DetailHeroGradientBg } from "./DetailHeroGradientBg";
import { HeroWave } from "./HeroWave";

const HERO_DOTS_SRC = "/images/our-verticals/hero-dots.png";
const DOWN_ARROW_SRC = "/icons/down-arrow.svg";

type Props = Pick<VerticalDetailContent, "name" | "heroDescription" | "heroImageAlt"> & {
  theme: VerticalDetailTheme;
  heroLogoSrc?: string;
};

export function DetailHero({
  name,
  heroDescription,
  heroImageAlt,
  heroLogoSrc,
  theme,
}: Props) {
  const { heroGradient, heroImageSrc } = theme;
  const showHeroImage = Boolean(heroImageSrc);

  return (
    <section className="relative isolate flex w-full flex-col overflow-x-clip">
      <div className="relative order-0 z-0 mx-auto flex w-full min-h-[min(70vh,953px)] flex-none shrink-0 grow-0 flex-col pb-10 pt-0 lg:mb-[-230px] lg:min-h-[953px] lg:pb-16">
        <DetailHeroGradientBg
          baseColor={heroGradient.baseColor}
          accentColor={heroGradient.accentColor}
          className="pointer-events-none absolute inset-0"
        />

        {/* Removed md:px-0 and changed to md:max-w-[837px] so tablet view scales correctly maintaining equal spacing */}
        <div className="relative z-[1] mx-auto flex min-h-0 w-full md:w-full md:max-w-[837px] lg:w-full lg:max-w-[1452px] md:mt-15 lg:mt-20 flex-1 flex-col px-6 pt-[112px] lg:pt-[128px] lg:px-[min(8rem,6vw)]">
          <Link
            href="/our-verticals"
            className="flex items-center gap-[8px] text-white text-[14px] font-medium mb-[32px] md:mb-[48px] hover:opacity-70 transition-opacity w-fit ml-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Our Verticals
          </Link>

          {/* Switched tablet to flex justify-between to keep the left and right elements strictly responsive */}
          <div className="flex min-h-0 w-full flex-1 flex-col justify-start gap-10 md:relative md:h-[483px] md:flex-row md:items-start md:justify-between md:gap-4 lg:items-stretch lg:justify-start lg:gap-[56.04px]">

            {/* Left Content Area (Width: 337px, Height: 483px, padding: 8px, gap: 8px) */}
            <div className="order-2 ml-0 flex min-w-0 w-full md:w-[337px] md:h-[483px] md:shrink-0 md:p-2 md:gap-2 flex-1 flex-col items-center md:items-start justify-center gap-3 p-2 opacity-100 md:order-1 md:ml-0 lg:w-full lg:h-auto lg:min-h-[653px]">

              <div className="flex flex-col items-center md:items-start gap-4 text-white lg:gap-4">
                {heroLogoSrc ? (
                  <div className="relative size-[142px] shrink-0 mx-auto md:mx-0">
                    <Image
                      src={heroLogoSrc}
                      alt=""
                      fill
                      className="object-contain object-center md:object-left"
                      sizes="142px"
                    />
                  </div>
                ) : (
                  <div
                    className="size-[142px] shrink-0 animate-pulse rounded-lg bg-white/25 md:bg-white/20 mx-auto md:mx-0"
                    aria-hidden
                  />
                )}
                <h1 className="font-heading text-4xl font-bold leading-none tracking-[-0.033em] text-white text-center md:text-left md:text-[48px] lg:text-[60px]">
                  {name || (
                    <span className="inline-block min-h-[1.1em] min-w-[200px] animate-pulse rounded-md bg-white/25" />
                  )}
                </h1>
                <p className="max-w-xl text-lg font-normal leading-normal tracking-[-0.011em] text-white text-center md:text-left md:w-[321px] md:text-[14px] lg:w-auto lg:text-lg">
                  {heroDescription || (
                    <span className="flex flex-col gap-2">
                      <span className="block h-5 w-full max-w-md animate-pulse rounded-md bg-white/20" />
                      <span className="block h-5 w-full max-w-sm animate-pulse rounded-md bg-white/15" />
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Right Image Area (Width: 332px, Height: 375px, Top offset maintained as relative margin-top 108px) */}
            <div className="relative z-[2] order-1 aspect-square w-full max-md:mt-0 md:relative md:order-2 md:mt-[108px] md:aspect-auto md:h-[375px] md:w-[332px] md:shrink-0 md:translate-y-0 lg:mt-0 lg:left-0 lg:top-0 lg:aspect-square lg:h-auto lg:w-[651.240234375px] lg:translate-y-[clamp(2.25rem,1rem,1rem)]">
              <Image
                src={HERO_DOTS_SRC}
                alt=""
                width={131}
                height={104}
                className="pointer-events-none absolute -right-5 -top-10 z-[1] h-auto w-[min(131px,30%)]"
                aria-hidden
              />
              <div className="relative z-[2] h-full w-full">
                {/* Shadow box sits UNDER the image and can protrude left */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-1/2 z-0 h-[min(451px,78%)] w-[min(332.6400451660156px,78%)] -translate-y-1/2 -translate-x-[4%] rounded-[15px] bg-white/[0.09] shadow-[-56px_0_110px_-22px_rgba(0,0,0,0.6)] md:-translate-x-[5%] lg:-translate-x-[7%]"
                />

                {/* Image stays clipped + rounded (radius 6px strictly on tablet) */}
                <div className="relative z-[1] h-full w-full overflow-hidden rounded-[10px] md:rounded-[6px] lg:rounded-[10px]">
                  {showHeroImage ? (
                    <Image
                      src={heroImageSrc}
                      alt={heroImageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 520px, 651px"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div
                      className="absolute inset-0 animate-pulse bg-neutral-300/40"
                      aria-hidden
                    />
                  )}
                </div>
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