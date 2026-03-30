"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/app-button";

type ContactSectionProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  variant?: "home" | "inner-page";
  /** Defaults to "First Name" (home). Use "Full Name" on inner pages when matching design. */
  namePlaceholder?: string;
};

export function ContactSection({
  heading,
  description,
  buttonLabel,
  variant = "home",
  namePlaceholder = "First Name",
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-[49px] overflow-hidden bg-white px-8 py-10 md:px-20 md:py-[100px] lg:px-[240px] lg:py-[100px]"
    >
      {variant === "home" && (
        <>
          <div className="pointer-events-none absolute right-[-532px] top-[2px] size-[847px] rounded-full bg-primary/20 blur-[252px] hidden lg:block" />
          <div className="pointer-events-none absolute -left-[532px] top-[70px] size-[847px] rounded-full bg-primary/20 blur-[252px] hidden lg:block" />
        </>
      )}

      <Image
        src="/images/contact-icon.svg"
        alt=""
        width={78}
        height={78}
        className="relative z-10"
      />

      <div className="relative z-10 flex max-w-[502px] flex-col items-center gap-4">
        <h2 className="text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.4] tracking-[-0.04em] text-text-100">
          {heading}
        </h2>
        <p className="max-w-[502px] text-center text-base font-light leading-[1.5] tracking-[-0.0125em] text-muted md:text-lg md:tracking-[-0.011em]">
          {description}
        </p>
      </div>

      <form
        className="relative z-10 flex w-full max-w-[522px] flex-col items-center gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex w-full flex-col gap-4">
          <input
            type="text"
            placeholder={namePlaceholder}
            className="w-full rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
          />
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full resize-none rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted focus:border-primary"
          />
        </div>
        <Button type="submit" variant="primary" className="w-[142px]">
          {buttonLabel}
        </Button>
      </form>
    </section>
  );
}
