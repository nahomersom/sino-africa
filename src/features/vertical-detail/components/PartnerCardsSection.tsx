import Image from "next/image";

import type { PartnerCard } from "../types";

type Props = {
  title: string;
  subtitle: string;
  partners: [PartnerCard, PartnerCard, PartnerCard];
};

export function PartnerCardsSection({ title, subtitle, partners }: Props) {
  return (
    <section className="w-full bg-white px-6 py-20 lg:px-[min(15rem,12vw)] lg:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-14">
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

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
          {partners.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="flex min-h-0 w-full min-w-0 flex-col items-center gap-8 rounded-[16px] border border-border-card p-8 text-center lg:h-[552px] lg:items-stretch lg:justify-between lg:gap-0 lg:text-left"
            >
              {card.iconSrc ? (
                <div className="relative size-[88px] shrink-0 self-center lg:self-start">
                  <Image src={card.iconSrc} alt="" fill className="object-contain object-left-top" sizes="88px" />
                </div>
              ) : (
                <div
                  className="size-[88px] shrink-0 animate-pulse rounded-2xl bg-border-light self-center lg:self-start"
                  aria-hidden
                />
              )}
              <div className="flex w-full min-w-0 flex-col gap-[15px]">
                {card.title ? (
                  <h3 className="text-2xl font-semibold leading-normal tracking-[-0.021em] text-text-100">
                    {card.title}
                  </h3>
                ) : (
                  <div className="h-8 w-full max-w-[240px] animate-pulse rounded-md bg-border-light" />
                )}
                {card.body ? (
                  <p className="text-base font-light leading-normal tracking-[-0.0125em] text-muted">{card.body}</p>
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
