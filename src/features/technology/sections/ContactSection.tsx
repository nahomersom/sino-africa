"use client";

import { ContactSection as HomeContactSection } from "@/src/features/home/sections/ContactSection";
import { homeContent } from "@/src/features/home/constants";

export function ContactSection() {
  return (
    <HomeContactSection
      heading={homeContent.contact.heading}
      description={homeContent.contact.description}
      buttonLabel={homeContent.contact.buttonLabel}
    />
  );
}


