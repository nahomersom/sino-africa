"use client";

import { HERO_SOCIAL_ICONS } from "@/src/features/home/sections/HeroSection.constants";

export function FloatingSocialBar() {
  return (
    <div className="pointer-events-none fixed right-0 bottom-20 z-40 flex min-h-[150px] w-[52px] flex-col gap-2.5 rounded-l-[20px] bg-[#F4F7FACC] px-2.5 py-4 backdrop-blur-[44px] shadow-[-3px_0px_6px_0px_#0000001A,-11px_0px_11px_0px_#00000017,-25px_0px_15px_0px_#0000000D,-45px_0px_18px_0px_#00000003,-71px_0px_20px_0px_#00000000] lg:bottom-[128px] lg:min-h-[180px] lg:w-[68px] lg:gap-3 lg:rounded-l-[24px] lg:px-4 lg:py-6">
      <div className="pointer-events-auto flex flex-col gap-2.5 lg:gap-3">
        {HERO_SOCIAL_ICONS.map((social) => {
          // All current links (LinkedIn, Email via Gmail compose, WhatsApp) are
          // http(s) and open in a new tab.
          const opensNewTab = social.href.startsWith("http");
          return (
            <a
              key={social.label}
              href={social.href}
              {...(opensNewTab
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={social.label}
              className="inline-flex size-8 items-center justify-center rounded-full bg-white text-white transition-colors lg:size-9"
            >
              {social.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
