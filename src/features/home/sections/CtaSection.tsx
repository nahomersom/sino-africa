import Link from "next/link";
import { Button } from "@/src/components/ui/app-button";

type CtaSectionProps = {
  heading: string;
  text: string;
  buttonLabel: string;
};

export function CtaSection({ heading, text, buttonLabel }: CtaSectionProps) {
  return (
    <section className="w-full bg-surface px-8 pb-10 md:px-20 md:pb-20 lg:px-[279px] lg:pb-[76px]">
      <div className="w-full max-w-[962px] border-t border-[#E7E9ED] pt-10 lg:pt-12">
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex w-full max-w-[589px] flex-col items-center text-center md:items-center lg:items-start lg:text-left">
            <h2 className="text-2xl font-medium leading-[1.5] tracking-[-0.04167em] text-text-100 md:text-[32px] md:leading-[48px] md:tracking-[-0.03125em] lg:text-left">
              {heading}
            </h2>
            <p className="max-w-[314px] text-sm font-light leading-6 text-muted md:max-w-none md:text-base md:text-center lg:text-left">
              {text}
            </p>
          </div>
          <Button
            asChild
            variant="primary"
            className="w-full shrink-0 rounded-[23px] p-6 text-sm font-normal md:w-auto md:text-base md:font-bold"
          >
            <Link href="/contact" className="font-(family-name:--font-nata-sans) font-normal md:font-bold">
              {buttonLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
