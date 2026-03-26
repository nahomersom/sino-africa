import Image from "next/image";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { VerticalsSection } from "./sections/VerticalsSection";

export function OurVerticalsPage() {
  return (
    <div className="min-h-full bg-white">
      <div className="mx-auto w-full max-w-[1254px] px-6 pt-8 md:px-0">
        <Image src="/brand/logo-full.svg" alt="Sino Africa" width={130} height={24} priority />
      </div>

      <HeroSection />
      <VerticalsSection />
      <ContactSection />
    </div>
  );
}
