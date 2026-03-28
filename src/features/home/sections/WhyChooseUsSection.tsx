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
    <section className="relative flex w-full flex-col items-center gap-6 overflow-hidden bg-surface px-6 py-16 md:px-20 md:py-20 lg:px-72 lg:py-20">
      <Image
        src="/images/home/why-choose-dots.svg"
        alt=""
        aria-hidden="true"
        width={123}
        height={121}
        className="pointer-events-none absolute -left-12 top-[58px] hidden select-none md:block"
      />
      <div className="flex flex-col items-center gap-6">
        <div className="flex size-[78px] items-center justify-center rounded-full bg-primary">
          <Image
            src="/images/why-choose-icon.svg"
            alt=""
            width={78}
            height={78}
          />
        </div>
        <span className="text-[13px] uppercase tracking-widest text-primary">
          {label}
        </span>
        <h2 className="max-w-[454.85px] text-center font-(family-name:--font-nata-sans) text-4xl font-semibold leading-snug tracking-tight text-text-100">
          {heading}
        </h2>
        <p className="max-w-[553px] text-center text-lg leading-8 text-text-100/70 tracking-tight">
          {description}
        </p>
      </div>

      <StaggerContainer
        className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 md:gap-x-10 md:gap-y-14"
        stagger={0.15}
      >
        {statements.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex items-start gap-6 md:flex-col md:items-center md:gap-6 lg:flex-row lg:items-start">
              <div className="shrink-0">
                <Image
                  src={item.icon}
                  alt=""
                  width={79}
                  height={79}
                />
              </div>
              <div className="flex flex-col gap-2.5 md:items-center md:text-center lg:items-start lg:text-left">
                <h3 className="text-2xl text-text-100">{item.title}</h3>
                <p className="text-base leading-6 text-muted">
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
