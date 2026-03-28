import Image from "next/image";
import { verticalItems } from "../constants";

const slugId: Record<string, string> = {
  "ACT IT": "act-it",
  "SINO SEC": "sino-sec",
  MOBILITEX: "mobilitex",
};

export function VerticalsSection() {
  return (
    <section
      className="relative w-full overflow-x-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundSize: "20% 20%",
        backgroundPosition: "left top",
        backgroundRepeat: "repeat",
      }}
    >
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
        <div className="flex w-full max-w-[552px] flex-col items-center gap-4 text-center">
          <h2
            className="w-full max-w-[454.85px] text-[36px] font-normal text-[#161C2D]"
            style={{ letterSpacing: "-0.03333333465788099em", lineHeight: "1.5em" }}
          >
            Our Verticals
          </h2>
          <p
            className="max-w-[382px] text-[18px] font-normal leading-[1.5em] text-[#161C2D]/70"
            style={{ letterSpacing: "-0.011111111276679568em" }}
          >
            Lorem ipsum dolor sit amet consectetur. Elit eget mauris sed diam urna.
          </p>
        </div>

        <div className="relative w-full">
          <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-stretch">
            {verticalItems.map((item) => (
              <article
                key={item.title}
                id={slugId[item.title] ?? undefined}
                className={`${item.colorClass} flex flex-1 flex-col items-center justify-center gap-[45px] rounded-lg px-16 py-10`}
              >
                <div className="flex h-[142px] w-[142px] flex-col items-center justify-center">
                  <div className="relative mx-auto h-[68px] w-full max-w-[142px]">
                    <Image src={item.iconSrc} alt="" fill sizes="142px" className="object-contain object-bottom" />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-[15px] text-center">
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

                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-center gap-4"
                  aria-label={`${item.title} - Read more`}
                >
                  <span
                    className="text-[17px] font-medium text-white"
                    style={{ letterSpacing: "-0.03529411904952105em", lineHeight: "1.8823529411764706em" }}
                  >
                    READ MORE
                  </span>
                  <span className="relative h-[10.4px] w-3 shrink-0">
                    <Image src={item.arrowSrc} alt="" fill sizes="12px" unoptimized />
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
