import Image from "next/image";


type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type PartnersSectionProps = {
  heading: string;
  description: string;
  logos: readonly PartnerLogo[];
};

export function PartnersSection({
  heading,
  description,
  logos,
}: PartnersSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-center gap-[90px] overflow-hidden bg-white px-8 py-10 md:gap-10 md:px-20 md:py-20 lg:gap-20 lg:px-60 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "28px",
          backgroundRepeat: "repeat",
        }}
      />
      <Image
        src="/images/partners/partner-dot-pattern.svg"
        alt=""
        aria-hidden="true"
        width={123}
        height={121}
        className="pointer-events-none absolute bottom-4 -right-10 hidden select-none lg:block"
      />
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.4] tracking-[-0.04em] text-text-100 md:text-4xl md:tracking-tight">
          {heading}
        </h2>
        <p className="max-w-2xl text-center text-base font-light leading-7 text-muted md:text-lg">
          {description}
        </p>
      </div>

      <div className="group pause-on-hover relative w-full overflow-hidden">
        <div className="animate-marquee flex w-max items-center py-4">
          {/* First track */}
          <div className="flex shrink-0 items-center gap-16 pr-16">
            {logos.map((logo, idx) => (
              <div
                key={`${logo.alt}-${idx}`}
                className="flex shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain md:h-12"
                />
              </div>
            ))}
          </div>
          {/* Duplicate track for seamless loop */}
          <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
            {logos.map((logo, idx) => (
              <div
                key={`${logo.alt}-dup-${idx}`}
                className="flex shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain md:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
