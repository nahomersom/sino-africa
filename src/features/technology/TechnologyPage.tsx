import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { TechnologyHero } from "./sections/TechnologyHero";
import { ChallengeSection } from "./sections/ChallengeSection";
import { KeyDomainsSection } from "./sections/KeyDomainsSection";
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
        <KeyDomainsSection />
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