import Link from "next/link";
import { Button } from "@/src/components/ui/app-button";

type CtaSectionProps = {
  heading: string;
  text: string;
  buttonLabel: string;
};

export function CtaSection({ heading, text, buttonLabel }: CtaSectionProps) {
  return (
    <section className="w-full bg-surface px-6 pb-16 md:px-20 md:pb-20 lg:px-[279px] lg:pb-[76px]">
      <div className="w-full max-w-[962px] border-t border-[#E7E9ED] pt-10 lg:pt-12">
        <div className="flex flex-col items-start gap-8 md:items-center md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex w-full max-w-[589px] flex-col md:items-center lg:items-start">
            <h2 className="text-2xl font-medium tracking-tight text-text-100 md:text-[32px] md:leading-[48px] md:tracking-[-0.03125em] md:text-center lg:text-left">
              {heading}
            </h2>
            <p className="text-base font-light leading-6 text-muted md:text-center lg:text-left">{text}</p>
          </div>
          <Button
            asChild
            variant="primary"
            className="shrink-0 rounded-[23px] p-6 text-base font-bold"
          >
            <Link href="/#contact" className="font-(family-name:--font-nata-sans) font-bold ">
              {buttonLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
