import Image from "next/image";

type AboutHeroSectionProps = {
  label: string;
  heading: string;
};

export function AboutHeroSection({ label, heading }: AboutHeroSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden bg-white px-6 pb-10 pt-[120px] md:px-16 lg:h-[988px] lg:px-[237px] lg:pt-[152px]">
      {/* Green glow — concentric ellipses behind the content */}
      <div className="pointer-events-none absolute -left-[471px] -top-[150px] hidden select-none lg:block">
        <Image
          src="/images/about/hero-pattern.svg"
          alt=""
          aria-hidden="true"
          width={1074}
          height={1048}
          priority
        />
      </div>

      {/* Title block — label + heading */}
      <div className="relative z-10 flex w-full flex-col gap-2">
        <span className="text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary">
          {label}
        </span>
        <h1 className="max-w-[515px] font-(family-name:--font-nata-sans) text-3xl font-semibold leading-[1.33] tracking-[-0.033em] text-text-100 lg:text-[36px]">
          {heading}
        </h1>
      </div>

      {/* Illustration — images + dot grid, below the title */}
      <div className="relative mt-2 hidden w-[1236px] shrink-0 lg:block">
        <Image
          src="/images/about/hero-illustration.svg"
          alt=""
          aria-hidden="true"
          width={1236}
          height={611}
        />
      </div>
    </section>
  );
}
