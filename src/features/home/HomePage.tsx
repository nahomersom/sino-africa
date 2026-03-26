"use client";

import { useGetLandingPageQuery } from "@/src/store/strapiApi";
import { homeContent } from "./constants";
import { AboutSection } from "./sections/AboutSection";
import { CtaSection } from "./sections/CtaSection";
import { HeroSection } from "./sections/HeroSection";
import { WhySinoAfricaSection } from "./sections/WhySinoAfricaSection";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function HomePage() {
  const { data, isLoading, error } = useGetLandingPageQuery(undefined, {
    skip: !STRAPI_URL,
  });

  const title = data?.attributes.title ?? "Welcome to Sino Africa";
  const subtitle =
    data?.attributes.subtitle ?? "A modern landing page powered by Strapi + Redux Toolkit.";
  const body = data?.attributes.body ?? "Edit the content in Strapi to update this section.";

  return (
    <div className="flex w-full flex-1 flex-col gap-10">
      <HeroSection title={title} subtitle={subtitle} body={body} isLoading={isLoading} hasError={Boolean(error)} />
      <AboutSection
        heading={homeContent.about.heading}
        bodyOne={homeContent.about.bodyOne}
        bodyTwo={homeContent.about.bodyTwo}
      />
      <WhySinoAfricaSection
        heading={homeContent.whySinoAfrica.heading}
        intro={homeContent.whySinoAfrica.intro}
        points={homeContent.whySinoAfrica.points}
      />
      <CtaSection heading={homeContent.cta.heading} text={homeContent.cta.text} buttonLabel={homeContent.cta.buttonLabel} />
    </div>
  );
}
