import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { homeContent } from "@/src/features/home/constants";
import { ContactSection } from "@/src/features/home/sections/ContactSection";

import { contactContent } from "./constants";
import { ContactInfoSection } from "./sections/ContactInfoSection";

export function ContactPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <ScrollReveal delay={0.2}>
        <ContactInfoSection items={contactContent.info} />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection
          heading={homeContent.contact.heading}
          description={homeContent.contact.description}
          buttonLabel={homeContent.contact.buttonLabel}
          variant="inner-page"
        />
      </ScrollReveal>
    </div>
  );
}
