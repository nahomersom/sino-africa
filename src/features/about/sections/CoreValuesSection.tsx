import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { StaggerContainer, StaggerItem } from "@/src/components/ui/scroll-reveal";
import { aboutContent } from "../constants";

const STROKE = "#161C2D";

const VALUE_ICONS: readonly ReactNode[] = [
  // 1. Institutional Integrity — compass/navigation
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="11" stroke={STROKE} strokeWidth="1.8" />
    <path
      d="M20.5 11.5L18.2 17.2C18.06 17.55 17.78 17.83 17.43 17.97L11.7 20.3L14.03 14.58C14.17 14.22 14.45 13.94 14.8 13.8L20.5 11.5Z"
      stroke={STROKE}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // 2. Disciplined Execution — rocket
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M16 4C20 6 24 10 24 16C24 19 22 21 20 22V25C20 25.55 19.55 26 19 26H13C12.45 26 12 25.55 12 25V22C10 21 8 19 8 16C8 10 12 6 16 4Z"
      stroke={STROKE}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="14" r="2.2" stroke={STROKE} strokeWidth="1.8" />
    <path d="M13 26L12 29M19 26L20 29M16 26V29" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>,

  // 3. Partnership-Driven Approach — handshake
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M3 14L7 10L12 12L16 16M29 14L25 10L20 12L16 16M16 16L13 19C12.45 19.55 12.45 20.45 13 21V21C13.55 21.55 14.45 21.55 15 21L18 18M18 18L20.5 20.5C21.05 21.05 21.05 21.95 20.5 22.5V22.5C19.95 23.05 19.05 23.05 18.5 22.5L16 20M18 18L21 15"
      stroke={STROKE}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 14V20L7 22M29 14V20L25 22" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>,

  // 4. Regulatory Alignment — scales
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 6V26" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 26H23" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 9H24" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M8 9L4 18H12L8 9ZM8 9L24 9M24 9L20 18H28L24 9"
      stroke={STROKE}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M4 18C4 20.2 5.8 22 8 22C10.2 22 12 20.2 12 18" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 18C20 20.2 21.8 22 24 22C26.2 22 28 20.2 28 18" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>,

  // 5. Operational Excellence — gear
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M28 13L25 12.4C24.8 11.7 24.5 11.1 24.2 10.5L25.8 7.9L24.1 6.2L21.5 7.8C20.9 7.4 20.3 7.2 19.6 7L19 4H13L12.4 7C11.7 7.2 11.1 7.5 10.5 7.8L7.9 6.2L6.2 7.9L7.8 10.5C7.5 11.1 7.2 11.7 7 12.4L4 13V19L7 19.6C7.2 20.3 7.5 20.9 7.8 21.5L6.2 24.1L7.9 25.8L10.5 24.2C11.1 24.5 11.7 24.8 12.4 25L13 28H19L19.6 25C20.3 24.8 20.9 24.5 21.5 24.2L24.1 25.8L25.8 24.1L24.2 21.5C24.5 20.9 24.8 20.3 25 19.6L28 19V13Z"
      stroke={STROKE}
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="16" r="3.5" stroke={STROKE} strokeWidth="1.8" />
  </svg>,

  // 6. Lifecycle Partner — refresh loop
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M6 16C6 10.5 10.5 6 16 6C19.5 6 22.6 7.8 24.4 10.5"
      stroke={STROKE}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M25 6V11H20" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M26 16C26 21.5 21.5 26 16 26C12.5 26 9.4 24.2 7.6 21.5"
      stroke={STROKE}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M7 26V21H12" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function CoreValuesSection() {
  const coreValues = aboutContent.whatDefinesUs.values.items;

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-white px-8 py-20 md:px-20 md:py-24 lg:px-[120px] lg:py-[120px] xl:px-[240px]">
      {/* Face-icon background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "20px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 flex w-full max-w-[1100px] flex-col items-center gap-12">
        {/* Header */}
        <StaggerContainer className="flex flex-col items-center gap-4">
          <StaggerItem>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M28 6L33 11L28 16L23 11L28 6Z"
                stroke="#3FAF7E"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M28 6L26 4M28 6L30 4M28 6V3" stroke="#3FAF7E" strokeWidth="2" strokeLinecap="round" />
              <path
                d="M10 32C10 32 14 28 20 28C24 28 27 30 28 32C29 30 32 28 36 28C42 28 46 32 46 32C46 38 36 50 28 50C20 50 10 38 10 32Z"
                stroke="#3FAF7E"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-center text-[36px] font-medium leading-tight text-text-100">
              Our Core Values
            </h2>
          </StaggerItem>
        </StaggerContainer>

        {/* Values grid */}
        <motion.div
          className="grid w-full grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
          }}
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="flex items-start gap-5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: value.accent }}
              >
                {VALUE_ICONS[index] ?? VALUE_ICONS[0]}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold leading-tight text-text-100">
                  {value.title}
                </h3>
                <p className="text-sm leading-6 text-text-100/70 md:text-base md:leading-7">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
