"use client";

import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { ContactSection } from "@/src/features/home/sections/ContactSection";
import type { ProjectCard } from "./constants";
import { projectsContent } from "./constants";
import { ProjectsGridSection } from "./sections/ProjectsGridSection";
import { ProjectsHeroSection } from "./sections/ProjectsHeroSection";

type ProjectsPageProps = {
  /** Strapi-backed grid; when omitted, uses static `projectsContent.grid.items`. */
  gridItems?: readonly ProjectCard[];
};

export function ProjectsPage({ gridItems }: ProjectsPageProps = {}) {
  const items = gridItems ?? projectsContent.grid.items;

  return (
    <div className="flex w-full flex-1 flex-col">
      <ProjectsHeroSection
        label={projectsContent.hero.label}
        heading={projectsContent.hero.heading}
        description={projectsContent.hero.description}
      />
      <ScrollReveal>
        <ProjectsGridSection
          heading={projectsContent.grid.heading}
          intro={projectsContent.grid.intro}
          items={items}
        />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection
          heading={projectsContent.contact.heading}
          description={projectsContent.contact.description}
          buttonLabel={projectsContent.contact.buttonLabel}
          variant="inner-page"
        />
      </ScrollReveal>
    </div>
  );
}
