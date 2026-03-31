import { ScrollReveal } from "@/src/components/ui/scroll-reveal";

import { contactContent } from "./constants";
import { ContactFormMapSection } from "./sections/ContactFormMapSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";

export function ContactPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <ScrollReveal delay={0.2}>
        <ContactInfoSection items={contactContent.info} />
      </ScrollReveal>
      <ScrollReveal>
        <div
          className="relative lg:[background-image:url('/images/sino-symbol-tile.svg')] lg:[background-repeat:repeat] lg:[background-size:28px]"
        >
          <div className="pointer-events-none absolute inset-0 hidden bg-white/85 lg:block" />
          <div className="relative z-10">
            <ContactFormMapSection />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
