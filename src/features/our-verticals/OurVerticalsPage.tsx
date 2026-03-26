import Image from "next/image";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { VerticalsSection } from "./sections/VerticalsSection";

export function OurVerticalsPage() {
  return (
    <div className="min-h-full bg-[#f8fafc]">
      <div className="mx-auto w-full max-w-6xl px-6 pt-8">
        <Image src="/brand/logo-full.svg" alt="Sino Africa" width={130} height={24} priority />
      </div>

      <HeroSection />
      <VerticalsSection />
      <ContactSection />
    </div>
  );
}
