"use client";

import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { homeContent } from "./constants";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { CtaSection } from "./sections/CtaSection";
import { HeroSection } from "./sections/HeroSection";
import { PartnersSection } from "./sections/PartnersSection";
import { VerticalsSection } from "./sections/VerticalsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { WhySinoAfricaSection } from "./sections/WhySinoAfricaSection";

export function HomePage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <HeroSection />
      <ScrollReveal>
        <AboutSection
          heading={homeContent.about.heading}
          bodyOne={homeContent.about.bodyOne}
          bodyTwo={homeContent.about.bodyTwo}
        />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUsSection
          label={homeContent.whyChooseUs.label}
          heading={homeContent.whyChooseUs.heading}
          description={homeContent.whyChooseUs.description}
          statements={homeContent.whyChooseUs.statements}
        />
      </ScrollReveal>
      <ScrollReveal direction="none">
        <CtaSection
          heading={homeContent.cta.heading}
          text={homeContent.cta.text}
          buttonLabel={homeContent.cta.buttonLabel}
        />
      </ScrollReveal>
      <ScrollReveal>
        <WhySinoAfricaSection
          heading={homeContent.whySinoAfrica.heading}
          description={homeContent.whySinoAfrica.description}
          image={homeContent.whySinoAfrica.image}
          steps={homeContent.whySinoAfrica.steps}
        />
      </ScrollReveal>
      <ScrollReveal>
        <VerticalsSection
          label={homeContent.verticals.label}
          description={homeContent.verticals.description}
          items={homeContent.verticals.items}
        />
      </ScrollReveal>
      <ScrollReveal>
        <PartnersSection
          heading={homeContent.partners.heading}
          description={homeContent.partners.description}
          logos={homeContent.partners.logos}
        />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection
          heading={homeContent.contact.heading}
          description={homeContent.contact.description}
          buttonLabel={homeContent.contact.buttonLabel}
        />
      </ScrollReveal>
    </div>
  );
}
