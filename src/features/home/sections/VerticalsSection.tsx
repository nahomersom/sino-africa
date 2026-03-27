import Image from "next/image";

type VerticalItem = {
  name: string;
  subtitle: string;
};

type VerticalsSectionProps = {
  label: string;
  description: string;
  items: readonly VerticalItem[];
};

export function VerticalsSection({
  label,
  description,
  items,
}: VerticalsSectionProps) {
  return (
    <section
      className="relative flex min-h-[1009px] w-full flex-col gap-4 overflow-hidden px-6 py-16 md:px-16 lg:px-[286px] lg:pb-16 lg:pt-[160px]"
      style={{
        background: "linear-gradient(180deg, #2F5C46 1%, #3FAF7E 100%)",
      }}
    >
      {/* Leading — fills remaining vertical space */}
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        {/* Label pill */}
        <span className="rounded-[40px] bg-white px-4 py-2 text-base leading-[1.5] text-text-100">
          {label}
        </span>

        {/* Center brand icon */}
        <div className="flex size-[95px] items-center justify-center">
          <Image
            src="/images/home/verticals-brand-icon.png"
            alt=""
            width={95}
            height={45}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Content: titles + description */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            {items.map((item) => (
              <span
                key={item.name}
                className="text-center text-4xl font-black leading-[1.4] text-white lg:text-[56px]"
              >
                {item.name}
              </span>
            ))}
          </div>

          <p className="max-w-[444px] text-center text-base leading-[1.5] text-white">
            {description}
          </p>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex w-full flex-col gap-2 md:flex-row">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-1 items-center gap-4 rounded-2xl bg-accent-60 p-4 backdrop-blur-[20px]"
          >
            {/* Card icon */}
            <div className="flex size-[77px] shrink-0 items-center justify-center">
              <Image
                src="/images/home/verticals-brand-icon.png"
                alt=""
                width={77}
                height={37}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col gap-1.5">
              <h3 className="text-2xl font-medium leading-[1.2] text-text-100">
                {item.name}
              </h3>
              <div className="py-2">
                <span className="text-xs font-light leading-[1.5] text-text-100">
                  {item.subtitle}
                </span>
              </div>
            </div>

            {/* Arrow button */}
            <div className="flex shrink-0 items-center justify-center rounded-full bg-[#F2F2F2] p-4">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6H13M13 6L8 1M13 6L8 11"
                  stroke="#1A1919"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
