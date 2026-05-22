import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { VerticalsSection } from "@/src/features/our-verticals/sections/VerticalsSection";
import { TechnologyHero } from "./sections/TechnologyHero";
import { ChallengeSection } from "./sections/ChallengeSection";
import { RoleSection } from "./sections/RoleSection";
import { HowWeWorkSection } from "./sections/HowWeWorkSection";
import { ContactSection } from "./sections/ContactSection";

export function TechnologyPage() {
  return (
    <div className="flex w-full flex-col">
      <TechnologyHero />
      <ScrollReveal>
        <ChallengeSection />
      </ScrollReveal>
      <ScrollReveal>
        <VerticalsSection />
      </ScrollReveal>
      <ScrollReveal>
        <RoleSection />
      </ScrollReveal>
      <ScrollReveal>
        <HowWeWorkSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}