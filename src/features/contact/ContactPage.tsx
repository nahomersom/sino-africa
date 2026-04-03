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
        <div className="relative w-full overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "url('/images/sino-symbol-tile.svg')",
              backgroundSize: "28px",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="relative z-[1]">
            <ContactFormMapSection />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
