import Image from "next/image";
import Link from "next/link";
import { verticalItems } from "../constants";

const slugId: Record<string, string> = {
  "ACT IT": "act-it",
  "SINO SEC": "sino-sec",
  MOBILITEX: "mobilitex",
};

export function VerticalsSection() {
  return (
    <section
      className="relative w-full overflow-x-hidden bg-white"
      style={{
        backgroundImage: "url(/images/sino-symbol-tile.svg)",
        backgroundSize: "28px",
        backgroundPosition: "left top",
        backgroundRepeat: "repeat",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-white/90"
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

      <div className="relative z-[2] mx-auto flex w-full max-w-[1728px] flex-col items-center gap-[45px] px-6 pb-[88px] pt-24 lg:px-[237px] lg:pt-[152px]">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-4 text-center">
          <h2
            className="w-full max-w-[560px] text-[36px] font-normal text-text-100"
            style={{ letterSpacing: "-0.03333333465788099em", lineHeight: "1.5em" }}
          >
            Our Verticals
          </h2>
          <p
            className="max-w-[540px] text-[18px] font-normal leading-[1.5em] text-muted"
            style={{ letterSpacing: "-0.011111111276679568em" }}
          >
            Three focused businesses—each delivering depth, compliance, and outcomes where it matters most.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[1254px]">
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3 md:auto-rows-[1fr] lg:auto-rows-[552px] lg:grid-cols-3">
            {verticalItems.map((item) => (
              <Link
                key={item.title}
                id={slugId[item.title] ?? undefined}
                href={`/our-verticals/${slugId[item.title] ?? "#"}`}
                aria-label={`${item.title}: read more`}
                className={`${item.colorClass} flex w-full flex-col items-center justify-between rounded-[8px] px-8 py-10 transition hover:brightness-105 md:px-6 lg:h-full lg:min-h-0 lg:px-16`}
              >
                <div className="flex w-full shrink-0 flex-col items-center">
                  <div className="flex h-[142px] w-[142px] flex-col items-center justify-center">
                    <div className="relative mx-auto h-[142px] w-full max-w-[142px]">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        fill
                        className=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-full min-h-0 flex-col gap-[15px] text-center">
                  <h3
                    className="text-[24px] font-semibold text-white"
                    style={{ letterSpacing: "-0.020833333333333332em", lineHeight: "1.5em" }}
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
                    style={{ letterSpacing: "-0.03529411904952105em", lineHeight: "1.8823529411764706em" }}
                  >
                    READ MORE
                  </span>
                  <span className="relative h-[10.4px] w-3 shrink-0">
                    <Image src={item.arrowSrc} alt="" fill sizes="12px" unoptimized />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
