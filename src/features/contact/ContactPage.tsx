import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { contactContent } from "./constants";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";

export function ContactPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <ScrollReveal delay={0.2}>
        <ContactInfoSection items={contactContent.info} />
      </ScrollReveal>
      <ScrollReveal>
        <ContactFormSection
          heading={contactContent.form.heading}
          description={contactContent.form.description}
          buttonLabel={contactContent.form.buttonLabel}
        />
      </ScrollReveal>
    </div>
  );
}
