import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/src/components/ui/scroll-reveal";

type OurVisionSectionProps = {
  heading: string;
  description: string;
};

export function OurVisionSection({
  heading,
  description,
}: OurVisionSectionProps) {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-white px-8 py-20 md:px-20 md:py-24 lg:px-[120px] lg:py-[120px] xl:px-[240px]">
      {/* Face-icon background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "20px",
          backgroundRepeat: "repeat",
        }}
      />


            {/* Gradient glows — match ContactSection treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[88px] hidden h-[489px] w-[489px] rounded-full bg-[#64C294]/20 blur-[252px] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[605px] w-[605px] -translate-y-1/2 rounded-full bg-[#64C294]/20 blur-[252px] lg:block"
      />

      <div className="relative z-10 flex w-full max-w-[1240px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Image with decorative accents */}
        <StaggerItem className="w-full lg:w-[498px] lg:shrink-0">
          <div className="relative mx-auto w-full max-w-[498px]">
            {/* Dots accent — top left, behind image */}
            <Image
              src="/images/dots-circle.svg"
              alt=""
              aria-hidden="true"
              width={140}
              height={140}
              className="pointer-events-none absolute -left-8 -top-8 z-0 h-auto w-[140px] select-none"
            />

            {/* Coral circle accent — bottom left, behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 z-0 rounded-full bg-[#F64B4B]/57"
              style={{ width: 221.14999389648438, height: 221.14999389648438 }}
            />

            <div className="relative z-10 h-[360px] w-full overflow-hidden rounded-[16px] shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:h-[480px] lg:h-[560px]">
              <Image
                src="/images/hands-on-tree.jpg"
                alt="Hands stacked together on a tree branch"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 498px, 100vw"
              />
            </div>
          </div>
        </StaggerItem>

        {/* Content */}
        <StaggerContainer className="flex w-full flex-col gap-6 lg:flex-1">
          <StaggerItem>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 24C2 24 10 10 24 10C38 10 46 24 46 24C46 24 38 38 24 38C10 38 2 24 2 24Z"
                stroke="#161C2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="24" r="5" fill="#3FAF7E" />
            </svg>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-[32px] font-medium leading-tight text-text-100 md:text-[40px]">
              {heading}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-[492px] text-base leading-7 text-text-100/80 md:text-lg md:leading-8">
              {description}
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
