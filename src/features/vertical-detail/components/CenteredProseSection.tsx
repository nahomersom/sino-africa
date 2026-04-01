import Image from "next/image";

import type { VerticalDetailSlug } from "../types";

const INSTITUTIONAL_TITLE_DOT_BY_SLUG: Record<VerticalDetailSlug, string> = {
  "act-it": "/images/our-verticals/green-dot.png",
  "sino-sec": "/images/our-verticals/black-dot.png",
  mobilitex: "/images/our-verticals/blue-dot.png",
};

export function resolveInstitutionalTitleDotSrc(
  slug: string,
  override?: string
): string {
  if (override) return override;
  if (slug in INSTITUTIONAL_TITLE_DOT_BY_SLUG) {
    return INSTITUTIONAL_TITLE_DOT_BY_SLUG[slug as VerticalDetailSlug];
  }
  return "/images/our-verticals/green-dot.png";
}

type Props = {
  titleDotSrc: string;
  title: string;
  paragraphs: string[];
};

export function CenteredProseSection({ titleDotSrc, title, paragraphs }: Props) {

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 lg:px-[min(15rem,12vw)] lg:py-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[min(80%,420px)] w-48 -translate-y-1/2 opacity-[0.35] lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-border-light) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      <Image
        src={titleDotSrc}
        alt=""
        width={226}
        height={225}
        className="pointer-events-none absolute z-[1] h-[136px] w-[136px] -translate-y-1/2 translate-x-[22%] opacity-100 top-[calc(27rem+1.35rem)] mt-0 max-md:mt-10 md:h-[225.3955841064453px] md:w-[226.28517150878906px] md:max-lg:mt-24 md:max-lg:top-[calc(5rem+1.35rem+6rem)] lg:top-[calc(100px+12.35rem)] lg:translate-x-[26%] -right-6 lg:-right-[min(3rem,12vw)]"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto flex w-full max-w-full flex-col items-center gap-6 text-center md:max-w-[552px] lg:max-w-[804px] lg:gap-6">
        <h2 className="font-heading text-4xl font-semibold leading-[1.33] tracking-[-0.04em] text-text-100">
          {title}
        </h2>
        <div className="flex w-full max-w-full min-h-[128px] flex-col gap-5 opacity-70">
          {paragraphs.length > 0 ? (
            paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="text-[14px] font-normal leading-[1.78] tracking-[-0.011em] text-text-100"
              >
                {p}
              </p>
            ))
          ) : (
            <>
              <div className="mx-auto h-5 w-full max-w-[520px] animate-pulse rounded-md bg-border-light/80" />
              <div className="mx-auto h-5 w-full max-w-[480px] animate-pulse rounded-md bg-border-light/80" />
              <div className="mx-auto h-5 w-full max-w-[400px] animate-pulse rounded-md bg-border-light/60" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
