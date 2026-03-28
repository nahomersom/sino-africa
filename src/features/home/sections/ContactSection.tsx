"use client";

import type { CSSProperties } from "react";

import { Button } from "@/src/components/ui/app-button";
import { ContactSectionSideBackgrounds } from "@/src/components/ui/contact-section-side-bg";
import { cn } from "@/src/lib/utils";

const DEFAULT_CONTACT_ACCENT = "#64c294";

function ContactMailIcon({ fill }: { fill: string }) {
  return (
    <svg
      width={78}
      height={78}
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 shrink-0"
      aria-hidden
    >
      <circle cx="39" cy="39" r="39" fill={fill} />
      <path
        d="M49.9565 28H28.0435C26.3626 28 25 29.3228 25 30.9545V33.3181C25 33.5344 25.1216 33.7334 25.3171 33.837L38.7084 40.9278C38.8902 41.0241 39.1098 41.0241 39.2916 40.9278L52.6829 33.837C52.8784 33.7334 53 33.5344 53 33.3181V30.9545C53 29.3228 51.6374 28 49.9565 28Z"
        fill="white"
      />
      <path
        d="M39.8747 42.1983C39.3301 42.4969 38.6723 42.4969 38.1277 42.1983L25.014 35L25 35.0092V47.9366C25 49.6285 26.3626 51 28.0435 51H49.9565C51.6374 51 53 49.6285 53 47.9366V35.0092L52.986 35.0006L39.8747 42.1983Z"
        fill="white"
      />
    </svg>
  );
}

const fieldClass = (accent?: string) =>
  cn(
    "w-full rounded-2xl border border-border-light bg-white px-4 py-4 text-xs font-light text-text-100 outline-none placeholder:text-muted",
    accent ? "focus:border-[color:var(--contact-accent)]" : "focus:border-primary",
  );

type ContactSectionProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  variant?: "home" | "inner-page";
  /** When set (e.g. vertical detail pages), tints the icon, submit button, and field focus to match the vertical. */
  accentColor?: string;
};

export function ContactSection({
  heading,
  description,
  buttonLabel,
  variant = "home",
  accentColor,
}: ContactSectionProps) {
  const iconFill = accentColor ?? DEFAULT_CONTACT_ACCENT;
  return (
    <section
      id="contact"
      className="relative flex w-full flex-col items-center gap-[49px] overflow-hidden bg-surface px-6 py-20 md:px-20 md:py-[100px] lg:px-[240px] lg:py-[100px]"
      style={
        accentColor
          ? ({ ["--contact-accent" as string]: accentColor } as CSSProperties)
          : undefined
      }
    >
      {variant === "home" && (
        <>
          <div className="pointer-events-none absolute right-[-532px] top-[2px] size-[847px] rounded-full bg-primary/20 blur-[252px]" />
          <div className="pointer-events-none absolute -left-[532px] top-[70px] size-[847px] rounded-full bg-primary/20 blur-[252px]" />
        </>
      )}

      <ContactSectionSideBackgrounds />

      <ContactMailIcon fill={iconFill} />

      <div className="relative z-10 flex max-w-[502px] flex-col items-center gap-4">
        <h2 className="text-center font-(family-name:--font-nata-sans) text-[36px] font-semibold leading-[1.4] tracking-[-0.04em] text-text-100">
          {heading}
        </h2>
        <p className="max-w-[502px] text-center text-lg font-light leading-[1.5] tracking-[-0.011em] text-muted">
          {description}
        </p>
      </div>

      <form
        className="relative z-10 flex w-full max-w-[522px] flex-col items-center gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex w-full flex-col gap-4">
          <input type="text" placeholder="First Name" className={fieldClass(accentColor)} />
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <input type="email" placeholder="Email Address" className={fieldClass(accentColor)} />
            <input type="tel" placeholder="Phone Number" className={fieldClass(accentColor)} />
          </div>
          <textarea placeholder="Message" rows={5} className={cn(fieldClass(accentColor), "resize-none")} />
        </div>
        <Button
          type="submit"
          variant="primary"
          className="w-[142px]"
          style={accentColor ? { backgroundColor: accentColor } : undefined}
        >
          {buttonLabel}
        </Button>
      </form>
    </section>
  );
}
