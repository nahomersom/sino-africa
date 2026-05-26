"use client";

import Image from "next/image";
import Link from "next/link";

import {
  getStrapiMediaUrl,
  useGetVerticalsQuery,
} from "@/src/store/strapiApi";
import { sortByVerticalOrder } from "@/src/lib/vertical-order";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

import { verticalItems } from "../constants";

const ARROW_BY_INDEX = [
  "/images/our-verticals/vertical-card-arrow-1.svg",
  "/images/our-verticals/vertical-card-arrow-3.svg",
  "/images/our-verticals/vertical-card-arrow-2.svg",
] as const;

const FALLBACK_GRADIENT = "#94a3b8";

const STATIC_CARD_HEX = ["#3FAF7E", "#4A5568", "#2F6FED"] as const;


function VerticalCardSkeleton() {
  return (
    <div
      className="flex w-full animate-pulse flex-col items-center justify-between rounded-[8px] px-8 py-10 md:px-6 lg:h-full lg:min-h-0 lg:px-16"
      style={{ backgroundColor: FALLBACK_GRADIENT }}
      aria-hidden
    >
      <div className="flex h-[142px] w-[142px] shrink-0 rounded-lg bg-white/25" />
      <div className="flex w-full flex-col items-center gap-[15px]">
        <div className="h-7 w-[180px] max-w-full rounded-md bg-white/30" />
        <div className="h-4 w-full max-w-[260px] rounded-md bg-white/25" />
        <div className="h-4 w-full max-w-[220px] rounded-md bg-white/20" />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-5 w-24 rounded-md bg-white/25" />
        <div className="size-3 rounded-sm bg-white/25" />
      </div>
    </div>
  );
}

export function VerticalsSection() {
  const hasStrapi = Boolean(process.env.NEXT_PUBLIC_STRAPI_URL) || "https://sino-cms.abalaz.et";
  const { data: verticals = [], isLoading, isFetching } = useGetVerticalsQuery(
    undefined,
    { skip: !hasStrapi }
  );

  const showSkeleton = hasStrapi && (isLoading || isFetching);
  const useApi = hasStrapi && verticals.length > 0 && !showSkeleton;

  const orderedVerticals = sortByVerticalOrder(verticals, (v) => v.slug ?? v.title);

  return (
    <section className="relative w-full overflow-x-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "20px",
          backgroundRepeat: "repeat",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[45px] right-[-30px] z-[1] hidden lg:block"
        style={{
          width: 126.28517150878906,
          height: 225.3955841064453,
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/our-verticals/verticals-section-icons.svg"
            alt=""
            fill
            unoptimized
            className="object-contain object-right-bottom"
            sizes="227px"
          />
        </div>
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-[1252px] flex-col items-center gap-[45px] px-8 pb-[88px] pt-24 lg:px-4 lg:pt-[152px]">
        <ScrollReveal amount="some" duration={0.9} distance={32}>
          <div className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
            <h2
              className="w-full max-w-[560px] text-[36px] font-normal text-text-100"
              style={{ letterSpacing: "-0.03333333465788099em", lineHeight: "1.5em" }}
            >
              Key Infrastructure Domains
            </h2>
            <p
              className="max-w-[552px] text-[18px] font-normal leading-[1.5em] text-muted"
              style={{ letterSpacing: "-0.011111111276679568em" }}
            >
              Our verticals operate with specialized focus but shared architecture. They maintain distinct execution mandates while enabling seamless integration. They deliver discrete systems that function as unified infrastructure.
            </p>
          </div>
        </ScrollReveal>


        <div className="relative mx-auto w-full">
          <StaggerContainer
            className="grid w-full grid-cols-1 gap-2 md:grid-cols-3 md:auto-rows-[1fr] lg:auto-rows-[552px] lg:grid-cols-3"
            stagger={0.22}
            delay={0.1}
            amount="some"
          >
            {showSkeleton
              ? [0, 1, 2].map((i) => (
                  <StaggerItem
                    key={i}
                    duration={1}
                    distance={48}
                    scale={0.94}
                    ease={[0.16, 1, 0.3, 1]}
                  >
                    <VerticalCardSkeleton />
                  </StaggerItem>
                ))
              : useApi
                ? orderedVerticals.map((v, index) => {
                  const slug = v.slug?.trim() || "";
                  const href = slug ? `/our-verticals/${slug}` : "#";
                  const title = v.title?.trim() || "";
                  const description = v.description?.trim() || "";
                  const logoSrc = getStrapiMediaUrl(v.logo?.url);
                  const bgColor =
                    v.gradient?.baseColor?.trim() ||
                    STATIC_CARD_HEX[index % STATIC_CARD_HEX.length];
                  const arrowSrc = ARROW_BY_INDEX[index % ARROW_BY_INDEX.length];

                  return (
                    <StaggerItem
                      key={v.documentId ?? v.id}
                      className="h-full"
                      duration={1}
                      distance={48}
                      scale={0.94}
                      ease={[0.16, 1, 0.3, 1]}
                    >
                    <Link
                      id={slug || undefined}
                      href={href}
                      aria-label={title ? `${title}: read more` : "Read more"}
                      className="flex h-full w-full flex-col items-center justify-between rounded-[8px] px-8 py-10 transition hover:brightness-105 md:px-6 lg:h-full lg:min-h-0 lg:px-16 gap-3.5"
                      style={{ backgroundColor: bgColor }}
                    >
                      <div className="flex w-full shrink-0 flex-col items-center">
                        <div className="flex h-[142px] w-[142px] flex-col items-center justify-center">
                          {logoSrc ? (
                            <div className="relative mx-auto h-[142px] w-full max-w-[142px]">
                              <Image
                                src={logoSrc}
                                alt={v.logo?.alternativeText ?? ""}
                                fill
                                className="object-contain brightness-0 invert"
                                sizes="142px"
                              />
                            </div>
                          ) : (
                            <div
                              className="mx-auto size-[142px] animate-pulse rounded-lg bg-white/25"
                              aria-hidden
                            />
                          )}
                        </div>
                      </div>

                      <div className="flex w-full min-h-0 flex-col gap-[15px] text-center">
                        {title ? (
                          <h3
                            className="text-[24px] font-semibold text-white"
                            style={{
                              letterSpacing: "-0.020833333333333332em",
                              lineHeight: "1.5em",
                            }}
                          >
                            {title}
                          </h3>
                        ) : (
                          <div className="mx-auto h-7 w-[200px] max-w-full animate-pulse rounded-md bg-white/30" />
                        )}
                        {description ? (
                          <p
                            className=" overflow-hidden text-base font-light leading-[1.5em] text-white lg:w-71 "
                            style={{ letterSpacing: "-0.012500000186264515em" }}
                          >
                            {description}
                          </p>
                        ) : (
                          <div className="flex flex-col gap-2 px-2">
                            <div className="mx-auto h-4 w-full max-w-[280px] animate-pulse rounded-md bg-white/25" />
                            <div className="mx-auto h-4 w-full max-w-[240px] animate-pulse rounded-md bg-white/20" />
                          </div>
                        )}
                      </div>

                      <div className="flex w-full shrink-0 items-center justify-center gap-4">
                        <span
                          className="text-[17px] font-medium text-white"
                          style={{
                            letterSpacing: "-0.03529411904952105em",
                            lineHeight: "1.8823529411764706em",
                          }}
                        >
                          READ MORE
                        </span>
                        <span className="relative h-[10.4px] w-3 shrink-0">
                          <Image src={arrowSrc} alt="" fill sizes="12px" unoptimized />
                        </span>
                      </div>
                    </Link>
                    </StaggerItem>
                  );
                })
                : verticalItems.map((item) => {
                  const slug =
                    item.title === "ACT IT"
                      ? "act-it"
                      : item.title === "SINO SEC"
                        ? "sino-sec"
                        : item.title === "MOBILITEX"
                          ? "mobilitex"
                          : "";
                  const href = `/our-verticals/${slug}`;
                  return (
                    <StaggerItem
                      key={item.title}
                      className="h-full"
                      duration={1}
                      distance={48}
                      scale={0.94}
                      ease={[0.16, 1, 0.3, 1]}
                    >
                    <Link
                      id={slug || undefined}
                      href={href}
                      aria-label={`${item.title}: read more`}
                      className={`${item.colorClass} flex h-full w-full flex-col items-center justify-between rounded-[8px] px-8 py-10 transition hover:brightness-105 md:px-6 lg:h-full lg:min-h-0 lg:px-16 `}
                    >
                      <div className="flex w-full shrink-0 flex-col items-center">
                        <div className="flex h-[142px] w-[142px] flex-col items-center justify-center">
                          <div className="relative mx-auto h-[142px] w-full max-w-[142px]">
                            <Image src={item.iconSrc} alt="" fill className="" />
                          </div>
                        </div>
                      </div>

                      <div className="flex w-full min-h-0 flex-col gap-[15px] text-center">
                        <h3
                          className="text-[24px] font-semibold text-white"
                          style={{
                            letterSpacing: "-0.020833333333333332em",
                            lineHeight: "1.5em",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-base font-light leading-[1.5em] text-white"
                          style={{ letterSpacing: "-0.012500000186264515em" }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div className="flex w-full shrink-0 items-center justify-center gap-4">
                        <span
                          className="text-[17px] font-medium text-white"
                          style={{
                            letterSpacing: "-0.03529411904952105em",
                            lineHeight: "1.8823529411764706em",
                          }}
                        >
                          READ MORE
                        </span>
                        <span className="relative h-[10.4px] w-3 shrink-0">
                          <Image src={item.arrowSrc} alt="" fill sizes="12px" unoptimized />
                        </span>
                      </div>
                    </Link>
                    </StaggerItem>
                  );
                })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
