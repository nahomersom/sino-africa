"use client";

import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import {
  getStrapiMediaUrl,
  useGetPartnersQuery,
  useGetVerticalsQuery,
} from "@/src/store/strapiApi";
import { homeContent } from "./constants";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { CtaSection } from "./sections/CtaSection";
import { HeroSection } from "./sections/HeroSection";
import { PartnersSection } from "./sections/PartnersSection";
import { VerticalsSection } from "./sections/VerticalsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { WhySinoAfricaSection } from "./sections/WhySinoAfricaSection";

type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export function HomePage() {
  const { data: verticals = [] } = useGetVerticalsQuery();
  const { data: partners = [] } = useGetPartnersQuery();
  const defaultPartnerLogos: PartnerLogo[] = homeContent.partners.logos.map(
    (logo) => ({
      src: logo.src,
      alt: logo.alt,
      width: logo.width,
      height: logo.height,
    }),
  );

  const fallbackVerticalSlugs = ["act-it", "sino-sec", "mobilitex"] as const;

  const verticalItems =
    verticals.length > 0
      ? verticals.map((item) => ({
          title: item.title ?? item.name ?? "",
          description: item.description ?? "",
          subtitle:
            item.focusAreasDescription ??
            item.summary ??
            item.description ??
            "",
          slug: (item.slug ?? "").toString().trim() || undefined,
          logoSrc: getStrapiMediaUrl(item.logo?.url) || undefined,
          gradient:
            item.gradient?.accentColor && item.gradient?.baseColor
              ? `linear-gradient(180deg, ${item.gradient.accentColor} 1%, ${item.gradient.baseColor} 100%)`
              : undefined,
        }))
      : homeContent.verticals.items.map((item, i) => ({
          title: item.name,
          description: homeContent.verticals.description,
          subtitle: item.subtitle,
          slug: fallbackVerticalSlugs[i],
          logoSrc: undefined,
          gradient: undefined,
        }));

  const verticalsDescription =
    verticals.find((item) => item.description)?.description ??
    homeContent.verticals.description;

  const partnerLogos: readonly PartnerLogo[] =
 partners
          .map((partner, index) => {
            const src = getStrapiMediaUrl(partner.logo?.url);
            if (!src) return null;
            const sizeFallback =
              defaultPartnerLogos[index % defaultPartnerLogos.length];
            return {
              src,
              alt: partner.logo?.alternativeText ?? partner.name,
              width: sizeFallback.width,
              height: sizeFallback.height,
            };
          })
          .filter((logo): logo is PartnerLogo => logo !== null)
      ;

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
          description={verticalsDescription}
          items={verticalItems}
        />
      </ScrollReveal>
      <ScrollReveal>
        <PartnersSection
          heading={homeContent.partners.heading}
          description={homeContent.partners.description}
          logos={partnerLogos}
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
