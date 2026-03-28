import Image from "next/image";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

type ContactInfoItem = {
  icon: string;
  title: string;
  lines: readonly string[];
};

type ContactInfoSectionProps = {
  items: readonly ContactInfoItem[];
};

export function ContactInfoSection({ items }: ContactInfoSectionProps) {
  return (
    <section className="flex w-full flex-col items-center px-6 pt-40 pb-12 md:px-16 lg:px-60">
      <StaggerContainer
        className="flex w-full max-w-5xl flex-col items-start gap-12 md:flex-row md:items-end md:justify-between md:gap-16"
        stagger={0.15}
        delay={0.2}
      >
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex items-start gap-5">
              <Image
                src={item.icon}
                alt=""
                width={54}
                height={54}
                className="shrink-0"
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-normal tracking-tight text-text-100">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-0.5">
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="text-base font-light leading-6 text-muted"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
