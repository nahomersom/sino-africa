"use client";

import { ContactSection } from "@/src/features/home/sections/ContactSection";
import { aboutContent } from "./constants";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { TeamSection } from "./sections/TeamSection";
import { WhatDefinesUsSection } from "./sections/WhatDefinesUsSection";

export function AboutPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <AboutHeroSection
        label={aboutContent.hero.label}
        heading={aboutContent.hero.heading}
      />
      <WhatDefinesUsSection
        heading={aboutContent.whatDefinesUs.heading}
        description={aboutContent.whatDefinesUs.description}
        mission={aboutContent.whatDefinesUs.mission}
        vision={aboutContent.whatDefinesUs.vision}
        values={aboutContent.whatDefinesUs.values}
      />
      <TeamSection
        heading={aboutContent.team.heading}
        description={aboutContent.team.description}
        ceo={aboutContent.team.ceo}
        managers={aboutContent.team.managers}
        staff={aboutContent.team.staff}
      />
      <ContactSection
        heading={aboutContent.contact.heading}
        description={aboutContent.contact.description}
        buttonLabel={aboutContent.contact.buttonLabel}
        variant="inner-page"
      />
    </div>
  );
}
