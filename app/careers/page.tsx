import { Nav } from "@/src/components/layout/Nav";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { CareersHeader } from "@/src/features/careers/sections/CareersHeader";
import { JobListingSection } from "@/src/features/careers/sections/JobListingSection";
import { homeContent } from "@/src/features/home/constants";
import { ContactSection } from "@/src/features/home/sections/ContactSection";

export default function Careers() {
  return (
    <main className="flex min-h-screen flex-1 w-full flex-col">
      <Nav variant="inner-page" />
      <CareersHeader />
      <JobListingSection />
      {/* Additional sections for the Careers page will be added here */}
      <ScrollReveal>
        <ContactSection
          heading={homeContent.contact.heading}
          description={homeContent.contact.description}
          buttonLabel={homeContent.contact.buttonLabel}
        />
      </ScrollReveal>
    </main>
  );
}
