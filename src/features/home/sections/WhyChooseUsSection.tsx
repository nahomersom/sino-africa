import Image from "next/image";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

type KeyStatement = {
  icon: string;
  title: string;
  description: string;
};

type WhyChooseUsSectionProps = {
  label: string;
  heading: string;
  description: string;
  statements: readonly KeyStatement[];
};

export function WhyChooseUsSection({
  label,
  heading,
  description,
  statements,
}: WhyChooseUsSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-center gap-10 overflow-hidden bg-surface px-8 py-10 md:gap-6 md:px-20 md:py-20 lg:px-72 lg:py-20">
      <Image
        src="/images/home/why-choose-dots.svg"
        alt=""
        aria-hidden="true"
        width={123}
        height={121}
        className="pointer-events-none absolute -left-12 top-[58px] hidden select-none md:block"
      />
      <div className="flex flex-col items-center gap-6">
        <div className="flex size-[78px] items-center justify-center rounded-[56px] bg-primary">
          <Image
            src="/images/why-choose-icon.svg"
            alt=""
            width={78}
            height={78}
          />
        </div>
        <span className="text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary">
          {label}
        </span>
        <h2 className="max-w-[454.85px] text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.5] tracking-[-0.04em] text-text-100 md:text-4xl md:leading-snug md:tracking-tight">
          {heading}
        </h2>
        <p className="max-w-[396px] text-center text-base font-light leading-6 tracking-[-0.0125em] text-muted md:text-lg md:leading-8 md:tracking-tight md:text-text-100/70">
          {description}
        </p>
      </div>

      <StaggerContainer
        className="mt-0 grid w-full max-w-5xl grid-cols-1 gap-x-10 gap-y-12 md:mt-12 md:grid-cols-2 md:gap-y-14"
        stagger={0.15}
      >
        {statements.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex flex-col items-center gap-6 md:flex-col md:items-center md:gap-6 lg:flex-row lg:items-start lg:gap-6 lg:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center md:h-auto md:w-auto">
                <Image
                  src={item.icon}
                  alt=""
                  width={79}
                  height={79}
                  className="h-14 w-14 object-contain md:h-[79px] md:w-[79px]"
                />
              </div>
              <div className="flex flex-col gap-2.5 md:items-center md:text-center lg:items-start lg:text-left">
                <h3 className="text-center text-lg font-medium leading-[1.5] text-text-100 md:text-2xl lg:text-left">
                  {item.title}
                </h3>
                <p className="text-center text-base font-light leading-6 text-muted md:text-base md:leading-6 lg:text-left">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
