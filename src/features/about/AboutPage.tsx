"use client";

import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { ContactSection } from "@/src/features/home/sections/ContactSection";
import { getStrapiMediaUrl, useGetTeamsQuery } from "@/src/store/strapiApi";
import { aboutContent } from "./constants";
import { AboutHeroSection } from "./sections/AboutHeroSection";
// import { TeamSection } from "./sections/TeamSection";
// import { WhatDefinesUsSection } from "./sections/WhatDefinesUsSection";
import { OurMissionSection } from "./sections/OurMissionSection";
import { OurVisionSection } from "./sections/OurVisionSection";
import { CoreValuesSection } from "./sections/CoreValuesSection";

export function AboutPage() {
  const { data: teams = [] } = useGetTeamsQuery();
  const fallbackRows = [aboutContent.team.managers, aboutContent.team.staff.slice(0, 5), aboutContent.team.staff.slice(5, 10)];

  const highlightedFromApi = teams.find((member) => member.isHighlighted) ?? null;
  const highlightedMember = highlightedFromApi
    ? {
      name: highlightedFromApi.name,
      role: highlightedFromApi.position ?? "",
      image: getStrapiMediaUrl(highlightedFromApi.image?.url) || aboutContent.team.ceo.image,
      linkedin: highlightedFromApi.linkedin ?? null,
      twitter: highlightedFromApi.twitter ?? null,
    }
    : {
      name: aboutContent.team.ceo.name,
      role: aboutContent.team.ceo.role,
      image: aboutContent.team.ceo.image,
      linkedin: null,
      twitter: null,
    };

  const nonHighlightedRowsMap = new Map<number, {
    name: string;
    role: string;
    image: string;
    linkedin: string | null;
    twitter: string | null;
  }[]>();

  teams
    .filter((member) => !member.isHighlighted)
    .forEach((member) => {
      const order = member.rank?.order ?? 999;
      const row = nonHighlightedRowsMap.get(order) ?? [];
      row.push({
        name: member.name,
        role: member.position ?? "",
        image: getStrapiMediaUrl(member.image?.url) || aboutContent.team.managers[0].image,
        linkedin: member.linkedin ?? null,
        twitter: member.twitter ?? null,
      });
      nonHighlightedRowsMap.set(order, row);
    });

  const rankedRows =
    nonHighlightedRowsMap.size > 0
      ? Array.from(nonHighlightedRowsMap.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([, row]) => row)
      : fallbackRows;

  return (
    <div className="flex w-full flex-1 flex-col">
      <AboutHeroSection
        label={aboutContent.hero.label}
        heading={aboutContent.hero.heading}
        headingDescription={aboutContent.hero.headingDescription}
        description={aboutContent.hero.description}
        images={aboutContent.hero.images}
      />
      <OurMissionSection
        heading={aboutContent.mission.title}
        description={aboutContent.mission.description}
      />
      <OurVisionSection
        heading={aboutContent.vision.title}
        description={aboutContent.vision.description}
      />
      <CoreValuesSection />
      {/* <ScrollReveal>
        <WhatDefinesUsSection
          heading={aboutContent.whatDefinesUs.heading}
          description={aboutContent.whatDefinesUs.description}
       
          values={aboutContent.whatDefinesUs.values}
        />
      </ScrollReveal> */}
      {/* <ScrollReveal>
        <TeamSection
          heading={aboutContent.team.heading}
          description={aboutContent.team.description}
          highlightedMember={highlightedMember}
          rankedRows={rankedRows}
        />
      </ScrollReveal> */}
      <ScrollReveal>
        <ContactSection
          heading={aboutContent.contact.heading}
          description={aboutContent.contact.description}
          buttonLabel={aboutContent.contact.buttonLabel}
        />
      </ScrollReveal>
    </div>
  );
}