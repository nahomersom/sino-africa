"use client";

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
      <ChallengeSection />
      <KeyDomainsSection />
      <RoleSection />
      <HowWeWorkSection />
      <ContactSection />
    </div>
  );
}