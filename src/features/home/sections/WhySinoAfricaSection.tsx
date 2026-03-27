import Image from "next/image";

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
    <section className="relative flex w-full flex-col items-center gap-24 overflow-hidden bg-white px-6 py-20 md:px-16 lg:px-[143px] lg:py-[152px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "28px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="flex w-full max-w-[552px] flex-col items-center gap-4">
        <h2 className="w-full text-center font-(family-name:--font-nata-sans) text-4xl font-semibold leading-normal tracking-[-0.04em] text-text-100">
          {heading}
        </h2>
        <p className="w-full text-center text-lg font-normal leading-8 tracking-[-0.011em] text-text-100/70">
          {description}
        </p>
      </div>

      <div className="flex w-full max-w-[846px] flex-col items-center gap-16 lg:h-[529px] lg:flex-row lg:items-center lg:gap-[62px]">
        <div className="relative w-full max-w-[419.72px] shrink-0 lg:h-full">
          <div className="absolute bottom-0 right-0 h-[471.28px] w-[357.57px] rounded-[10px] bg-primary/10" />
          <div className="relative h-[491.95px] w-[382.79px] overflow-hidden rounded-[10px] shadow-[0_31px_34px_rgba(0,0,0,0.09)]">
            <Image
              src={image}
              alt="Why Sino Africa"
              width={420}
              height={530}
              className="absolute -top-[8.62px] left-0 h-[603.96px] w-[420.62px] max-w-none object-cover"
            />
          </div>
        </div>

        <div className="flex w-full max-w-[364.33px] flex-col gap-[43px] lg:w-[364.33px]">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-primary p-2">
                <span className="text-[17px] font-bold leading-normal tracking-[-0.0117em] text-white">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[21px] font-normal leading-[1.5238] tracking-[-0.0238em] text-text-100">
                  {step.title}
                </h3>
                <p className="text-base font-normal leading-6 text-muted/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
