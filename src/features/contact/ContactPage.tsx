import { contactContent } from "./constants";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";

export function ContactPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <ContactInfoSection items={contactContent.info} />
      <ContactFormSection
        heading={contactContent.form.heading}
        description={contactContent.form.description}
        buttonLabel={contactContent.form.buttonLabel}
      />
    </div>
  );
}
