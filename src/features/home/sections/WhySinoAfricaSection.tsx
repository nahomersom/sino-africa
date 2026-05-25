import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

type Step = {
  number: string;
  title: string;
  intro?: string;
  bullets: readonly string[];
};

type WhySinoAfricaSectionProps = {
  heading: string;
  description: string | readonly string[];
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
    <section className="relative flex w-full flex-col items-center gap-24 overflow-hidden bg-white px-8 py-10 md:px-20 md:py-20 lg:px-[200.4px] lg:py-[152px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "20px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="flex w-full max-w-[552px] flex-col items-center gap-4">
        <h2 className="w-full text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.5] tracking-[-0.04em] text-text-100 md:text-4xl md:leading-normal">
          {heading}
        </h2>
        {(Array.isArray(description) ? description : [description]).map((paragraph, index) => (
          <p
            key={index}
            className="w-full text-center text-base font-light leading-6 tracking-[-0.0125em] text-muted md:text-lg md:font-normal md:leading-8 md:tracking-[-0.011em] md:text-text-100/70"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex w-full  flex-col items-center md:items-start gap-16 lg:min-h-[529px] lg:flex-row  lg:gap-[46.93px]">
        <ScrollReveal direction="left" distance={50} className="relative w-full max-w-[382.79px]  shrink-0 lg:h-[529px]">
          <div className="absolute top-[25.48px] left-[54.19px] md:top-[28px] md:left-[55px] lg:top-[57.72px] lg:bottom-0 lg:right-0  h-[208.02px] w-[311.81px]  md:h-[228.51px] md:w-[392.7940673828125px] lg:h-[471.28px] lg:w-[357.57px] rounded-[10px] bg-primary/10" />
          <div className="relative h-[208.02px] w-[311.81px] overflow-hidden rounded-[10px] shadow-[0_31px_34px_rgba(0,0,0,0.09)] md:h-[228.51px] md:w-[392.7940673828125px] lg:h-[491.95px] lg:w-[382.79px]">
            <Image
              src={image}
              alt="Why Sino Africa"
              width={420}
              height={530}
              className="absolute left-0 top-0 h-[217.15px] md:h-[238.54px] lg:h-[603.96px] w-[338.8px]  md:w-[420.62px] max-w-none object-cover  lg:-top-[8.62px]  "
            />
          </div>
        </ScrollReveal>

        <StaggerContainer className="flex w-full max-w-[364.33px] flex-col gap-[43px] md:grid md:max-w-none md:grid-cols-2 md:gap-8 lg:flex-1 lg:max-w-none" stagger={0.2}>
          {steps.map((step, index) => (
            <StaggerItem
              key={step.number}
              direction="right"
              distance={30}
              className={index === steps.length - 1 ? "md:col-span-2" : undefined}
            >
              <div className="flex flex-col lg:flex-row items-center md:items-start gap-4">
                <div className="flex  h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-primary p-2">
                  <span className="text-[17px] font-bold leading-normal tracking-[-0.0117em] text-white">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[21px] font-normal leading-[1.5238] tracking-[-0.0238em] text-text-100 text-center lg:text-left">
                    {step.title}
                  </h3>
                  {step.intro ? (
                    <p className="text-base font-normal leading-6 text-muted/70 text-center lg:text-left">
                      {step.intro}
                    </p>
                  ) : null}
                  <ul className="flex flex-col gap-1.5 text-base font-normal leading-6 text-muted/70 text-left">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden="true">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
