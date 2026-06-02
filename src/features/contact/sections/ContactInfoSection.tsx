import Image from "next/image";
import {
  ContactEmailMethodIcon,
  ContactLocationMethodIcon,
  ContactPhoneMethodIcon,
} from "@/src/components/icons/ContactMethodIcons";
import { cn } from "@/src/lib/utils";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

type ContactInfoItem = {
  icon: string;
  title: string;
  lines: readonly string[];
  mapUrl?: string;
};

const LINE_TEXT =
  "text-[13px] font-light leading-relaxed tracking-[-0.03em] text-muted sm:text-sm md:text-[15px] md:leading-[1.5] md:tracking-[-0.0313em] lg:text-base";

type ContactInfoSectionProps = {
  items: readonly ContactInfoItem[];
};

const sectionX =
  "px-4 min-[400px]:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16";

const ICON_BOX =
  "mt-0.5 size-7 shrink-0 min-[400px]:size-8 sm:size-10 md:mt-0 md:size-11 lg:size-[54px]";

function ContactInfoIcon({ icon }: Pick<ContactInfoItem, "icon">) {
  if (icon.endsWith("/email-icon.svg")) {
    return <ContactEmailMethodIcon className={ICON_BOX} />;
  }
  if (icon.endsWith("/phone-icon.svg")) {
    return <ContactPhoneMethodIcon className={ICON_BOX} />;
  }
  if (icon.endsWith("/location-icon.svg")) {
    return <ContactLocationMethodIcon className={ICON_BOX} />;
  }
  return (
    <Image
      src={icon}
      alt=""
      width={54}
      height={54}
      className={ICON_BOX}
    />
  );
}

export function ContactInfoSection({ items }: ContactInfoSectionProps) {
  const lastIndex = items.length - 1;

  return (
    <section
      className={cn(
        "flex w-full flex-col items-center pt-28 pb-8 min-[400px]:pt-32 min-[400px]:pb-10 sm:pt-36 md:pt-40 md:pb-10 lg:pt-48 lg:pb-12 xl:pt-[208px] xl:pb-[52px]",
        sectionX,
      )}
    >

      <StaggerContainer
        className="mx-auto grid w-full min-w-0 max-w-[1252px] grid-cols-2 gap-x-3 gap-y-8 min-[400px]:gap-x-4 min-[400px]:gap-y-9 md:gap-x-8 lg:grid-cols-3 lg:items-start lg:gap-x-10 lg:gap-y-8 xl:gap-x-12"
        stagger={0.15}
        delay={0.2}
      >
        {items.map((item, index) => (
          <StaggerItem
            key={item.title}
            className={cn(
              "min-w-0 w-full",
              index === lastIndex && "col-span-2 lg:col-span-1",
            )}
          >
            <div className="flex w-full min-w-0 items-start gap-3 min-[400px]:gap-4 sm:gap-4 md:gap-5 lg:gap-[21px]">
              <ContactInfoIcon icon={item.icon} />

              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="text-[15px] font-normal leading-snug tracking-[-0.0313em] text-text-100 min-[400px]:text-base sm:text-lg md:text-lg lg:text-2xl lg:leading-[1.5] lg:tracking-[-0.0208em]">
                  {item.title}
                </h3>
                <div className="flex min-w-0 flex-col gap-1 break-words sm:gap-1.5">
                  {item.lines.map((line) =>
                    item.mapUrl ? (
                      <a
                        key={line}
                        href={item.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          LINE_TEXT,
                          "w-fit underline decoration-muted/40 decoration-1 underline-offset-4 transition-colors hover:text-text-100 hover:decoration-text-100",
                        )}
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className={LINE_TEXT}>
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
