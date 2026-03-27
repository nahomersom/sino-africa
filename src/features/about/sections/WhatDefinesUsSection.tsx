import Image from "next/image";

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
      className="relative flex w-full flex-col items-center gap-10 overflow-hidden bg-white px-6 pb-[100px] pt-[100px] md:px-16 lg:px-[464px] lg:pt-[200px]"
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
      <div className="relative z-10 flex w-full flex-col gap-4">
        {/* Top row: Mission + Vision */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Mission card */}
          <div className="flex flex-1 flex-col justify-between gap-2 rounded-3xl bg-primary/20 p-6">
            <Image
              src="/images/about/mission-icon.svg"
              alt=""
              width={65}
              height={65}
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-light uppercase leading-[1.5] tracking-[0.0625em] text-muted">
                {mission.title}
              </h3>
              <p className="text-lg leading-[1.5] text-text-100">
                {mission.description}
              </p>
            </div>
          </div>

          {/* Vision card */}
          <div className="flex flex-1 flex-col justify-between gap-2 rounded-3xl bg-accent-60 p-6">
            <Image
              src="/images/about/vision-icon.svg"
              alt=""
              width={65}
              height={65}
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-light uppercase leading-[1.5] tracking-[0.0625em] text-muted">
                {vision.title}
              </h3>
              <p className="text-lg leading-[1.5] text-text-100">
                {vision.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: Values */}
        <div className="flex flex-col gap-6 rounded-3xl bg-surface p-6 md:flex-row md:gap-2">
          {/* Leading: icon + label */}
          <div className="flex shrink-0 flex-col justify-between pb-2 md:self-stretch">
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

          {/* Trailing: 2x2 grid */}
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-2 sm:flex-row">
              {values.items.slice(0, 2).map((item, i) => (
                <div
                  key={i}
                  className="flex flex-1 flex-col justify-between gap-2 rounded-2xl bg-white p-4"
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
            <div className="flex flex-col gap-2 sm:flex-row">
              {values.items.slice(2, 4).map((item, i) => (
                <div
                  key={i}
                  className="flex flex-1 flex-col justify-between gap-2 rounded-2xl bg-white p-4"
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
      </div>
    </section>
  );
}
