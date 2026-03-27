"use client";

import { useState } from "react";
import Image from "next/image";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";

type VerticalItem = {
  name: string;
  subtitle: string;
};

type VerticalsSectionProps = {
  label: string;
  description: string;
  items: readonly VerticalItem[];
};

const GRADIENTS = [
  "linear-gradient(180deg, rgba(47, 92, 70, 1) 1%, rgba(63, 175, 126, 1) 100%)",
  "linear-gradient(180deg, rgba(45, 55, 72, 1) 1%, rgba(74, 85, 104, 1) 100%)",
  "linear-gradient(180deg, rgba(30, 77, 183, 1) 1%, rgba(47, 111, 237, 1) 100%)",
];

export function VerticalsSection({
  label,
  description,
  items,
}: VerticalsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative flex min-h-[1009px] w-full flex-col gap-4 overflow-hidden px-6 py-16 transition-all duration-500 md:px-16 lg:px-[286px] lg:pb-16 lg:pt-[160px]"
      style={{ background: GRADIENTS[activeIndex] }}
    >
      {/* Pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url(/images/sino-symbol-tile.svg)",
          backgroundSize: "28px 28px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Leading */}
      <div className="relative flex flex-1 flex-col items-center justify-center gap-6">
        <span className="rounded-[40px] bg-white px-4 py-2 text-base leading-[1.5] text-text-100">
          {label}
        </span>

        <div className="flex size-[95px] items-center justify-center">
          <Image
            src="/images/home/verticals-brand-icon.png"
            alt=""
            width={95}
            height={45}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-center text-4xl font-black leading-[1.4] text-white lg:text-[56px]">
            {items[activeIndex]?.name}
          </span>

          <p className="max-w-[444px] text-center text-base leading-[1.5] text-white">
            {description}
          </p>
        </div>
      </div>

      {/* Cards row */}
      <StaggerContainer className="relative flex w-full flex-col gap-2 md:flex-row" stagger={0.15}>
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <StaggerItem key={item.name} className="flex-1">
              <div
                onMouseEnter={() => setActiveIndex(i)}
                className={`flex cursor-pointer items-center gap-4 p-4 backdrop-blur-[20px] transition-all duration-300 ${
                  isActive
                    ? "rounded-[32px] bg-white/[0.22]"
                    : "rounded-2xl bg-accent-60"
                }`}
              >
                {/* Card icon */}
                <div
                  className={`flex size-[77px] shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                    isActive ? "bg-white/20" : ""
                  }`}
                >
                  <Image
                    src="/images/home/verticals-brand-icon.png"
                    alt=""
                    width={77}
                    height={37}
                    className={`h-auto w-full object-contain transition-all duration-300 ${
                      isActive ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col gap-1.5">
                  <h3
                    className={`text-2xl font-medium leading-[1.2] transition-colors duration-300 ${
                      isActive ? "text-white" : "text-text-100"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <div className="py-2">
                    <span
                      className={`text-xs font-light leading-[1.5] transition-colors duration-300 ${
                        isActive ? "text-white" : "text-text-100"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Arrow button */}
                <div
                  className={`flex shrink-0 items-center justify-center rounded-full p-4 transition-colors duration-300 ${
                    isActive ? "bg-white/20" : "bg-[#F2F2F2]"
                  }`}
                >
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6H13M13 6L8 1M13 6L8 11"
                      className={`transition-all duration-300 ${
                        isActive ? "stroke-white" : "stroke-[#1A1919]"
                      }`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
