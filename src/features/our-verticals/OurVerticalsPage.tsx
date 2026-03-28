import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { VerticalsSection } from "./sections/VerticalsSection";

export function OurVerticalsPage() {
  return (
    <div className="min-h-full bg-white">
      <main>
        <HeroSection />
        <VerticalsSection />
        <ContactSection />
      </main>
    </div>
  );
}
