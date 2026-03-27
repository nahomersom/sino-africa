import Image from "next/image";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

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
    <section className="relative flex w-full flex-col items-center gap-20 overflow-hidden bg-white px-6 py-20 md:px-16 lg:px-60 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
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
        <h2 className="text-center text-4xl font-semibold tracking-tight text-text-100">
          {heading}
        </h2>
        <p className="max-w-2xl text-center text-lg leading-7 text-muted">
          {description}
        </p>
      </div>

      <StaggerContainer className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-16 gap-y-10" stagger={0.1}>
        {logos.map((logo) => (
          <StaggerItem key={logo.alt} direction="none">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
