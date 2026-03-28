"use client";

import Image from "next/image";

export function ChallengeSection() {
  return (
    <section
      className="flex w-full items-center justify-center bg-white flex-col lg:flex-row h-auto lg:h-[611px] pt-[40px] lg:pt-[152px] pb-[40px] px-[32px] md:px-[80px] lg:px-[237px] gap-[32px]"
    >
      {/* Top/Left side: Challenge heading and description */}
      <div
        className="flex flex-col w-[346px] h-auto lg:h-[290px] gap-[40px] lg:gap-0 items-center lg:items-start shrink-0"
      >
        <h2
          className="font-bold text-[#161C2D] text-[32px] leading-[44px] tracking-[-1.2px] text-center lg:text-left lg:mb-[24px]"
        >
          The Challenge
        </h2>

        <div
          className="flex flex-col gap-6 text-[16px] leading-[150%] tracking-[-0.2px] font-normal text-[#5C606C] text-center lg:text-left"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum at non ut consequat dictum ut libero. Faucibus sapien amet pretium etiam neque est.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum at non ut consequat dictum ut libero. Faucibus sapien amet pretium etiam neque est.
          </p>
        </div>
      </div>

      {/* Center Image */}
      <div
        className="relative overflow-hidden w-[366px] md:w-[677px] lg:w-[308px] h-[419px] rounded-[8px] lg:rounded-[12px] shrink-0"
      >
        <Image
          src="/assets/images/centerimage.png"
          alt="Challenge Illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Bottom/Right side: Challenge points */}
      <div
        className="flex flex-col md:flex-row lg:flex-col w-[314px] md:w-[677px] lg:w-[314px] h-auto lg:min-h-[374px] gap-[24px] lg:gap-[28px] shrink-0"
      >
        {[
          {
            title: "Challenge #1",
            description: "Lorem ipsum dolor sit amet consectetur. Vestibulum sed purus."
          },
          {
            title: "Challenge #1",
            description: "Lorem ipsum dolor sit amet consectetur. Quam massa diam."
          },
          {
            title: "Challenge #1",
            description: "Lorem ipsum dolor sit amet consectetur. Lacus cras metus."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[8px] items-start text-left md:flex-1"
          >
            <h3
              className="font-semibold text-[#161C2D] text-[24px] leading-[150%] tracking-[-1.2px] text-left"
            >
              {item.title}
            </h3>
            <p
              className="font-light text-[#5C606C] text-[18px] leading-[150%] tracking-[-0.2px] text-center md:text-left"
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}