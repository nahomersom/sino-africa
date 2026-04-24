import Image from "next/image";

import type { PartnerCard } from "../types";

type Props = {
  title: string;
  subtitle: string;
  partners: [PartnerCard, PartnerCard, PartnerCard];
};

export function PartnerCardsSection({ title, subtitle, partners }: Props) {
  return (
    <section className="relative mx-auto w-full max-w-[1728px] overflow-hidden px-6 py-20 md:px-12 lg:px-20 lg:pb-[64px] lg:pt-[104px] xl:px-[237px]">
      {/* Background noise image */}
      <Image
        src="/images/our-verticals/vertical-partner-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full flex-col gap-[54px]">
        <div className="mx-auto flex max-w-[552px] flex-col gap-4 text-center">
          {title ? (
            <h2 className="font-heading text-4xl font-semibold leading-[1.33] tracking-[-0.033em] text-text-100">
              {title}
            </h2>
          ) : (
            <div className="mx-auto h-10 w-[260px] max-w-full animate-pulse rounded-md bg-border-light" />
          )}
          {subtitle ? (
            <p className="text-lg font-normal leading-normal tracking-[-0.011em] text-muted/70">{subtitle}</p>
          ) : (
            <div className="mx-auto h-5 w-[300px] max-w-full animate-pulse rounded-md bg-border-light/80" />
          )}
        </div>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {partners.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="group flex min-h-[315px] w-full flex-col gap-[40px] rounded-[16px] border border-[#e7e9ed] bg-[#64C294] p-[32px] text-left"
            >
              {card.iconSrc ? (
                <div className="relative flex size-[80px] shrink-0 items-center justify-center rounded-[8px] bg-[#ffffff] p-[8px]">
                  <div
                    className="h-full w-full bg-[#64C294]"
                    style={{
                      maskImage: `url(${card.iconSrc})`,
                      WebkitMaskImage: `url(${card.iconSrc})`,
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      maskSize: "contain",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="size-[80px] shrink-0 animate-pulse rounded-[8px] bg-white/30"
                  aria-hidden
                />
              )}
              <div className="flex w-full flex-col gap-[15px]">
                {card.title ? (
                  <h3 className="text-[24px] font-semibold leading-normal tracking-[-0.021em] text-white">
                    {card.title}
                  </h3>
                ) : (
                  <div className="h-8 w-full max-w-[240px] animate-pulse rounded-md bg-border-light" />
                )}
                {card.body ? (
                  <p className="text-[16px] font-light leading-normal tracking-[-0.0125em] text-white/90">{card.body}</p>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="h-4 w-full animate-pulse rounded-md bg-border-light/75" />
                    <div className="h-4 w-full max-w-[92%] animate-pulse rounded-md bg-border-light/65" />
                    <div className="h-4 w-full max-w-[75%] animate-pulse rounded-md bg-border-light/55" />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
