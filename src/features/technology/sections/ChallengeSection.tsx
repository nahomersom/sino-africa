"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import centerImage from "@/public/assets/images/centerimage.png";

const challengeItems = [
  {
    title: "Industry Challenge",
    description: "Technology exists, but disciplined execution is lacking.",
  },
  {
    title: "Fragmented Delivery",
    description:
      "Multiple vendors operate without end-to-end accountability, causing integration failures and compliance gaps.",
  },
  {
    title: "Regulatory Complexity",
    description: "Complex governance frameworks are often mismanaged, creating institutional risk.",
  },
  {
    title: "Lifecycle Neglect",
    description:
      "Deployment is treated as completion; maintenance is reactive, leading to system degradation.",
  },
  {
    title: "Consequence",
    description:
      "Fragmented execution and weak accountability result in failed systems, eroded trust, and reduced access to essential services.",
  },
] as const;

export function ChallengeSection() {
  return (
    <section
      className="relative overflow-hidden flex w-full max-w-[1728px] mx-auto items-center justify-center bg-white flex-col lg:flex-row h-auto lg:h-[996px] pt-[40px] lg:pt-[152px] pb-[40px] px-[32px] md:px-[80px] lg:px-[237px] gap-[32px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] hidden lg:block"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "28px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* <Image
        src="/images/partners/partner-dot-pattern.svg"
        alt=""
        aria-hidden="true"
        width={123}
        height={121}
        className="pointer-events-none absolute bottom-4 -right-10 hidden select-none lg:block"
      /> */}

      {/* Top/Left side: Challenge heading and description */}
      <motion.div
        className="flex flex-col w-full md:max-w-[677px] lg:flex-1 lg:max-w-[346px] h-auto lg:h-[804px] gap-[40px] lg:gap-0 lg:justify-center items-center lg:items-start shrink text-center lg:text-left"
        initial={{ opacity: 0, x: -48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="font-bold text-[#161C2D] text-[32px] leading-[44px] tracking-[-1.2px] lg:mb-[24px]"
        >
          The Challenge
        </h2>

        <div
          className="flex flex-col gap-6 text-[16px] leading-[150%] tracking-[-0.2px] font-normal text-[#5C606C]"
        >
          <p>
            Africa’s infrastructure faces a persistent gap, where technology exists but disciplined execution is lacking.
            Fragmented deployments with weak accountability and reactive maintenance cause integration failures, compliance gaps, and unsustainable systems.
            Dense regulatory environments compound institutional risk, eroding trust and limiting population access to essential services.
          </p>
        </div>
      </motion.div>

      {/* Center Image */}
      <div
        className="relative overflow-hidden w-full max-w-[530px] md:max-w-[677px] lg:max-w-[530px] lg:w-[530px] lg:flex-1 h-[400px] md:h-[419px] lg:h-[804px] rounded-[8px] shrink-0"
      >
        <Image
          src={centerImage}
          alt="Challenge Illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Bottom/Right side: Challenge points */}
      <motion.div
        className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col w-full md:max-w-[677px] lg:max-w-[314px] lg:w-[314px] lg:flex-1 h-auto lg:h-[804px] lg:justify-between gap-[24px] lg:gap-0 shrink-0"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
      >
        {challengeItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-[8px] items-start text-left"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.72,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5 + index * 0.14,
            }}
          >
            <h3
              className="font-semibold text-[#161C2D] text-[24px] leading-[150%] tracking-[-1.2px] text-left"
            >
              {item.title}
            </h3>
            <p
              className="font-light text-[#5C606C] text-[18px] leading-[150%] tracking-[-0.2px] text-left"
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}