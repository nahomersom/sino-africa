import Image from "next/image";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";
import { ContactBadgeIcon } from "@/src/components/icons/ContactBadgeIcon";

type ContactInfoItem = {
  icon: string;
  title: string;
  lines: readonly string[];
};

type ContactInfoSectionProps = {
  items: readonly ContactInfoItem[];
  emailIconBackgroundColor?: string;
};

const EMAIL_ICON_SRC = "/images/contact/email-icon.svg";

export function ContactInfoSection({
  items,
  emailIconBackgroundColor,
}: ContactInfoSectionProps) {
  return (
    <section className="flex w-full flex-col items-center px-8 pt-32 pb-10 md:px-20 md:pt-44 md:pb-10 lg:px-[237px] lg:pt-[208px] lg:pb-[52px]">
      <StaggerContainer
        className="flex w-full max-w-[1252px] flex-wrap items-start justify-between gap-x-4 gap-y-6 md:flex-nowrap md:items-start md:justify-between md:gap-2 lg:items-end lg:gap-12"
        stagger={0.15}
        delay={0.2}
      >
        {items.map((item) => (
          <StaggerItem key={item.title} className="w-[calc(50%-8px)] min-w-0 md:w-auto md:flex-1">
            <div className="flex items-start gap-2 md:gap-[21px]">
            
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="mt-0.5 shrink-0 md:mt-0 md:size-[54px]"
                />
             
              <div className="flex min-w-0 flex-col gap-0.5 md:gap-0.5">
                <h3 className="text-base leading-[1.5] font-normal tracking-[-0.0313em] text-text-100 md:text-base md:tracking-[-0.0313em] lg:text-2xl lg:tracking-[-0.0208em]">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-0 md:max-w-[178px] lg:max-w-none">
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[10px] leading-[1.5] font-light tracking-[-0.04em] text-muted md:text-xs md:tracking-[-0.0417em] lg:text-base lg:tracking-[-0.0313em]"
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
