import { ContactSection } from "@/src/features/home/sections/ContactSection";
import { homeContent } from "@/src/features/home/constants";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

import type { VerticalDetailContent } from "./types";
import { CenteredProseSection, resolveInstitutionalTitleDotSrc } from "./components/CenteredProseSection";
import { DetailHero } from "./components/DetailHero";
import { FocusAreasSection } from "./components/FocusAreasSection";
import { PartnerCardsSection } from "./components/PartnerCardsSection";

type Props = {
  content: VerticalDetailContent;
};

export function VerticalDetailPage({ content }: Props) {
  const { theme } = content;
  const titleDotSrc = resolveInstitutionalTitleDotSrc(
    content.slug,
    content.institutionalTitleDotSrc
  );

  return (
    <div className="flex min-h-full w-full flex-1 flex-col bg-white">
      <main className="w-full min-w-0">
        <DetailHero
          name={content.name}
          heroDescription={content.heroDescription}
          heroImageAlt={content.heroImageAlt}
          heroLogoSrc={content.heroLogoSrc}
          theme={theme}
        />
          <CenteredProseSection
            titleDotSrc={titleDotSrc}
            title={content.institutionalTitle}
            paragraphs={content.institutionalParagraphs}
          />

        <ScrollReveal>
          <FocusAreasSection
            title={content.focusIntroTitle}
            subtitle={content.focusIntroSubtitle}
            rows={content.focusRows}
            patternSrc={theme.focusPatternSrc}
          />
        </ScrollReveal>

        <ScrollReveal>
          <PartnerCardsSection
            title={content.partnersTitle}
            subtitle={content.partnersSubtitle}
            partners={content.partners}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ContactSection
            heading={homeContent.contact.heading}
            description={content.contactSubtitle}
            buttonLabel={homeContent.contact.buttonLabel}
            accentColor={content.theme.heroGradient.accentColor}
          />
        </ScrollReveal>
      </main>
    </div>
  );
}
