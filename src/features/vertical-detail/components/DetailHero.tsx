import Image from "next/image";
import Link from "next/link";

import type { VerticalDetailContent } from "../types";
import { HeroWave } from "./HeroWave";

const HERO_BG_SRC = "/images/our-verticals/BG.png";
const HERO_RIGHT_SRC = "/images/our-verticals/detail-1-hero.png";
const DOWN_ARROW_SRC = "/icons/down-arrow.svg";

type Props = Pick<VerticalDetailContent, "name" | "heroDescription" | "heroImageAlt">;

export function DetailHero({ name, heroDescription, heroImageAlt }: Props) {
  return (
    <section className="relative isolate flex w-full flex-col overflow-x-clip">
      <div className="relative order-0 z-0 mx-auto flex w-full flex-none shrink-0 grow-0 flex-col pb-10 pt-0 lg:mb-[-230px] lg:min-h-[953px] lg:pb-16">
        <Image
          src={HERO_BG_SRC}
          alt=""
          fill
          priority
          className="pointer-events-none object-cover object-left object-top"
          sizes="100vw"
          aria-hidden
        />

        <div className="relative z-[1] mx-auto flex min-h-0 w-full max-w-[1552px] flex-1 flex-col px-6 pt-[112px] lg:pt-[128px] lg:px-[min(8rem,6vw)]">
          <div className="flex min-h-0 w-full flex-1 flex-col justify-end gap-10 lg:flex-row lg:items-stretch lg:justify-start lg:gap-12">
            <div className="flex min-w-0 w-full max-w-[596px] flex-1 flex-col justify-center gap-3 p-2 opacity-100 lg:min-h-[653px] ml-10">
              <Link
                href="/our-verticals"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/85 transition hover:text-white"
              >
                <span aria-hidden className="text-lg leading-none">
                  ←
                </span>
                Back to Our Verticals
              </Link>

              <div className="flex flex-col gap-4 text-white lg:gap-4">
                <Image
                  src="/icons/vertical-cards-Icon.png"
                  alt=""
                  width={142}
                  height={142}
                  className="size-[142px]"
                />
                <h1 className="font-heading text-4xl font-bold leading-none tracking-[-0.033em] lg:text-[60px]">
                  {name}
                </h1>
                <p className="max-w-xl text-lg font-normal leading-normal tracking-[-0.011em] text-white/65">
                  {heroDescription}
                </p>
              </div>
            </div>

            <div className="z-[2] mt-15 aspect-square w-full overflow-hidden rounded-[10px] lg:max-w-[685px] lg:translate-y-[clamp(2.25rem,1rem,1rem)]">
              <Image
                src={HERO_RIGHT_SRC}
                alt={heroImageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <HeroWave className="order-1" />

      <div className="order-2 flex justify-center pb-2 -mt-[30px] z-[100]">
        <span aria-hidden>
          <Image
            src={DOWN_ARROW_SRC}
            alt=""
            width={42}
            height={42}
            className="size-10"
          />
        </span>
      </div>
    </section>
  );
}
