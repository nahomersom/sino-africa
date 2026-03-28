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

export function WhatDefinesUsSection({
  heading,
  description,
  mission,
  vision,
  values,
}: WhatDefinesUsSectionProps) {
  return (
    <section
      className="relative flex w-full flex-col items-center gap-10 overflow-hidden bg-white px-6 pb-[100px] pt-[100px] md:gap-10 md:px-8 md:py-10 lg:px-[464px] lg:pt-[200px] lg:pb-[100px]"
      style={{
        backgroundImage: "url('/images/sino-symbol-tile.svg')",
        backgroundSize: "28px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-white/90" />

      {/* Title block */}
      <div className="relative z-10 flex max-w-[552px] flex-col items-center gap-4">
        <h2 className="max-w-[455px] text-center text-[36px] font-normal leading-[1.5] tracking-[-0.033em] text-text-100">
          {heading}
        </h2>
        <p className="max-w-[382px] text-center text-lg leading-[1.5] tracking-[-0.011em] text-text-100/70">
          {description}
        </p>
      </div>

      {/* Cards */}
      <StaggerContainer className="relative z-10 flex w-full flex-col gap-4" stagger={0.2}>
        {/* Top row: Mission + Vision */}
        <StaggerItem>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-1 flex-col justify-between gap-2 rounded-3xl bg-primary/20 p-6 min-h-[384px] md:min-h-0 md:items-center md:justify-center md:gap-2 lg:min-h-[384px] lg:items-start lg:justify-between">
              <Image
                src="/images/about/mission-icon.svg"
                alt=""
                width={65}
                height={65}
              />
              <div className="flex flex-col gap-1 md:items-center md:text-center lg:items-start lg:text-left">
                <h3 className="text-base font-light uppercase leading-[1.5] tracking-[0.0625em] text-muted">
                  {mission.title}
                </h3>
                <p className="text-lg leading-[1.5] text-text-100">
                  {mission.description}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-2 rounded-3xl bg-accent-60 p-6 min-h-[384px] md:min-h-0 md:items-center md:justify-center md:gap-2 lg:min-h-[384px] lg:items-start lg:justify-between">
              <Image
                src="/images/about/vision-icon.svg"
                alt=""
                width={65}
                height={65}
              />
              <div className="flex flex-col gap-1 md:items-center md:text-center lg:items-start lg:text-left">
                <h3 className="text-base font-light uppercase leading-[1.5] tracking-[0.0625em] text-muted">
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
          <div className="flex flex-col gap-6 rounded-3xl bg-surface p-6 md:gap-4 lg:flex-row lg:gap-2">
            <div className="flex shrink-0 flex-col justify-between pb-2 md:items-center md:gap-4 md:self-auto lg:items-start lg:gap-0 lg:self-stretch">
              <Image
                src="/images/about/values-icon.svg"
                alt=""
                width={65}
                height={65}
              />
              <h3 className="text-2xl font-medium leading-[1.5] text-text-100">
                {values.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-2 md:flex-col lg:flex-row">
                {values.items.slice(0, 2).map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col justify-between gap-2 rounded-2xl bg-white p-4 md:flex-row md:items-center md:justify-start md:gap-2 lg:flex-col lg:items-start lg:justify-between"
                  >
                    <Image
                      src="/images/about/value-check.svg"
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
                {values.items.slice(2, 4).map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col justify-between gap-2 rounded-2xl bg-white p-4 md:flex-row md:items-center md:justify-start md:gap-2 lg:flex-col lg:items-start lg:justify-between"
                  >
                    <Image
                      src="/images/about/value-check.svg"
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
