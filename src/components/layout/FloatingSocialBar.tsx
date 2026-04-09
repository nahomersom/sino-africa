"use client";

import Link from "next/link";
import { HERO_SOCIAL_ICONS } from "@/src/features/home/sections/HeroSection.constants";

export function FloatingSocialBar() {
  return (
    <div className="pointer-events-none fixed right-0 bottom-[128px] z-40 hidden min-h-[228px] w-[68px] flex-col gap-3 rounded-l-[24px] bg-[#F4F7FACC] px-4 py-6 backdrop-blur-[44px] shadow-[-3px_0px_6px_0px_#0000001A,-11px_0px_11px_0px_#00000017,-25px_0px_15px_0px_#0000000D,-45px_0px_18px_0px_#00000003,-71px_0px_20px_0px_#00000000] lg:flex">
      <div className="pointer-events-auto flex flex-col gap-3">
        {HERO_SOCIAL_ICONS.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="inline-flex size-9 items-center justify-center rounded-full bg-white text-white transition-colors"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
