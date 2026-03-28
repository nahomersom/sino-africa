import type { CSSProperties } from "react";

import type { PartnerCard } from "../types";

const PARTNER_ICON_SRC = "/icons/partner-icon.png";

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
          <h2 className="font-heading text-4xl font-semibold leading-[1.33] tracking-[-0.033em] text-text-100">
            {title}
          </h2>
          <p className="text-lg font-normal leading-normal tracking-[-0.011em] text-muted/70">{subtitle}</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
          {partners.map((card) => (
            <article
              key={card.title}
              className="flex min-h-0 w-full min-w-0 flex-col gap-8 rounded-[16px] border border-border-card p-8 lg:h-[552px] lg:justify-between lg:gap-0"
            >
              <div
                className="size-[88px] shrink-0 opacity-100"
                style={
                  {
                    backgroundColor: "#000000",
                    maskImage: `url(${PARTNER_ICON_SRC})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url(${PARTNER_ICON_SRC})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                  } satisfies CSSProperties
                }
              />
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-2xl font-semibold leading-normal tracking-[-0.021em] text-text-100">{card.title}</h3>
                <p className="text-base font-light leading-normal tracking-[-0.0125em] text-muted">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
