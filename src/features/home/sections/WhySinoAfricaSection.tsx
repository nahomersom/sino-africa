import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

type Step = {
  number: string;
  title: string;
  description: string;
};

type WhySinoAfricaSectionProps = {
  heading: string;
  description: string;
  image: string;
  steps: readonly Step[];
};

export function WhySinoAfricaSection({
  heading,
  description,
  image,
  steps,
}: WhySinoAfricaSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-center gap-24 overflow-hidden bg-white px-8 py-10 md:px-20 md:py-20 lg:px-[143px] lg:py-[152px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "28px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="flex w-full max-w-[552px] flex-col items-center gap-4">
        <h2 className="w-full text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.5] tracking-[-0.04em] text-text-100 md:text-4xl md:leading-normal">
          {heading}
        </h2>
        <p className="w-full text-center text-base font-light leading-6 tracking-[-0.0125em] text-muted md:text-lg md:font-normal md:leading-8 md:tracking-[-0.011em] md:text-text-100/70">
          {description}
        </p>
      </div>

      <div className="flex w-full max-w-[846px] flex-col items-center gap-16 lg:h-[529px] lg:flex-row lg:items-center lg:gap-[62px]">
        <ScrollReveal direction="left" distance={50} className="relative w-full max-w-[419.72px] shrink-0 lg:h-full">
          <div className="absolute bottom-0 right-0 h-[471.28px] w-[357.57px] rounded-[10px] bg-primary/10" />
          <div className="relative h-[238.54px] w-[420.5px] lg:h-[491.95px] lg:w-[382.79px] overflow-hidden rounded-[10px] shadow-[0_31px_34px_rgba(0,0,0,0.09)]">
            <Image
              src={image}
              alt="Why Sino Africa"
              width={420}
              height={530}
              className="absolute -top-[8.62px] left-0 h-[603.96px] w-[420.62px] max-w-none object-cover"
            />
          </div>
        </ScrollReveal>

        <StaggerContainer className="flex w-full max-w-[364.33px] flex-col gap-[43px] md:grid md:max-w-none md:grid-cols-2 md:gap-4 lg:flex lg:w-[364.33px] lg:max-w-[364.33px] lg:flex-col lg:gap-[43px]" stagger={0.2}>
          {steps.map((step) => (
            <StaggerItem key={step.number} direction="right" distance={30}>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="flex  h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-primary p-2">
                  <span className="text-[17px] font-bold leading-normal tracking-[-0.0117em] text-white">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[21px] font-normal leading-[1.5238] tracking-[-0.0238em] text-text-100 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-base font-normal leading-6 text-muted/70 text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
