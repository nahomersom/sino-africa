import { homeContent } from "@/src/features/home/constants";
import { ContactSection } from "@/src/features/home/sections/ContactSection";

import { HeroSection } from "./sections/HeroSection";
import { VerticalsSection } from "./sections/VerticalsSection";

export function OurVerticalsPage() {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col bg-white">
      <main className="w-full min-w-0">
        <HeroSection />
        <VerticalsSection />
        <ContactSection
          heading={homeContent.contact.heading}
          description={homeContent.contact.description}
          buttonLabel={homeContent.contact.buttonLabel}
        />
      </main>
    </div>
  );
}
