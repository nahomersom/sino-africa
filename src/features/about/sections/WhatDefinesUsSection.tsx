import Image from "next/image";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

type WhatDefinesUsSectionProps = {
  heading: string;
  description: string;
  mission: { title: string; description: string };
  vision: { title: string; description: string };
  values: { title: string; items: readonly string[] };
};

const VALUE_ITEM_ICONS = [
  "/icons/what-defined-us/1-settings.svg",
  "/icons/what-defined-us/2-agreement.svg",
  "/icons/what-defined-us/3-balance.svg",
  "/icons/what-defined-us/4-recycle.svg",
  "/icons/what-defined-us/5-navigation.svg",
  "/icons/what-defined-us/6-rocket.svg",
] as const;

export function WhatDefinesUsSection({
  heading,
  description,
  mission,
  vision,
  values,
}: WhatDefinesUsSectionProps) {
  return (
    <section
      className="relative flex w-full flex-col items-center gap-8 overflow-hidden bg-white px-8 py-10 md:gap-10 md:px-8 md:py-10  lg:pt-[200px] lg:pb-[100px] lg:justify-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{ backgroundImage: "url('/images/sino-symbol-tile.svg')", backgroundSize: "20px", backgroundRepeat: "repeat" }}
      />
      <div className="pointer-events-none absolute right-[-532px] bottom-0 hidden size-[847px] rounded-full bg-primary/35 blur-[252px] lg:block" />
      <div className="pointer-events-none absolute -left-[532px] top-0 hidden size-[847px] rounded-full bg-primary/35 blur-[252px] lg:block" />

      {/* Title block */}
      <div className="relative z-10 flex max-w-[552px] flex-col items-center gap-4">
        <h2 className="max-w-[455px] text-center font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-text-100 md:text-[36px] md:font-normal md:leading-[1.5] md:tracking-[-0.033em]">
          {heading}
        </h2>
        <p className="max-w-[366px] md:max-w-[369px] lg:max-w-[498px] text-center text-base font-light leading-6 tracking-[-0.0125em] text-text-100/70 md:text-lg md:font-normal md:leading-[1.5] md:tracking-[-0.011em]">
          {description}
        </p>
      </div>

      {/* Cards */}
      <StaggerContainer className="relative z-10 flex w-full flex-col gap-3 md:gap-4 lg:items-center" stagger={0.2}>
        {/* Top row: Mission + Vision */}
        <StaggerItem>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col justify-start gap-4 rounded-3xl bg-primary/20 p-6 min-h-0 md:min-h-0 md:items-center md:justify-center md:gap-2 lg:min-h-[508px] lg:items-start lg:justify-between lg:max-w-[392px]">
              <Image
                src="/images/about/mission-icon.svg"
                alt=""
                width={65}
                height={65}
              />
              <div className="flex flex-col gap-1 md:items-center md:text-center lg:items-start lg:text-left">
                <h3 className="text-base font-light  leading-[1.5] tracking-[0.0625em] text-muted">
                  {mission.title}
                </h3>
                <p className="text-lg leading-[1.5] text-text-100">
                  {mission.description}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-start gap-4 rounded-3xl bg-accent-60 p-6 min-h-0 md:min-h-0 md:items-center md:justify-center md:gap-2 lg:min-h-[384px] lg:items-start lg:justify-between lg:max-w-[392px]">
              <Image
                src="/images/about/vision-icon.svg"
                alt=""
                width={65}
                height={65}
              />
              <div className="flex flex-col gap-1 md:items-center md:text-center lg:items-start lg:text-left">
                <h3 className="text-base font-light  leading-[1.5] tracking-[0.0625em] text-muted">
                  {vision.title}
                </h3>
                <p className="text-lg leading-[1.5] text-text-100">
                  {vision.description}
                </p>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Bottom row: Values */}
        <StaggerItem>
          <div className="flex flex-col gap-4 rounded-3xl bg-surface p-6 md:gap-4 lg:flex-row lg:gap-2 lg:max-w-[800px]">
            <div className="flex shrink-0 flex-col items-start gap-4 pb-0 md:items-center md:justify-between md:gap-4 md:pb-2 md:self-auto lg:items-start lg:gap-0 lg:self-stretch lg:justify-between lg:max-w-[157px]">
              <Image
                src="/images/about/values-icon.svg"
                alt=""
                width={65}
                height={65}
              />
              <h3 className="text-xl font-medium leading-[1.5] text-text-100 md:text-2xl">
                {values.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-2 md:flex-col lg:flex-row">
                {values.items.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col justify-between gap-2 rounded-2xl bg-white p-4 md:flex-row md:items-center md:justify-start md:gap-2 lg:w-[190.3333282470703px] lg:flex-none lg:flex-col lg:items-start lg:justify-between"
                  >
                    <Image
                      src={VALUE_ITEM_ICONS[i] ?? "/images/about/value-check.svg"}
                      alt=""
                      width={41}
                      height={41}
                    />
                    <span className="text-lg leading-[1.5] text-text-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 md:flex-col lg:flex-row">
                {values.items.slice(3, 6).map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col justify-between gap-2 rounded-2xl bg-white p-4 md:flex-row md:items-center md:justify-start md:gap-2 lg:w-[190.3333282470703px] lg:flex-none lg:flex-col lg:items-start lg:justify-between"
                  >
                    <Image
                      src={VALUE_ITEM_ICONS[i + 3] ?? "/images/about/value-check.svg"}
                      alt=""
                      width={41}
                      height={41}
                    />
                    <span className="text-lg leading-[1.5] text-text-100">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
