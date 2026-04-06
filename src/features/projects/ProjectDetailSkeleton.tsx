import { ContactSection } from "@/src/features/home/sections/ContactSection";

import { projectsContent } from "./constants";

/** Layout rhythm aligned with `ProjectDetailPage` while Strapi loads. */
export function ProjectDetailSkeleton() {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col bg-white">
      <main className="w-full min-w-0">
        <section className="relative flex w-full flex-col overflow-x-clip bg-white pb-10 pt-16 md:pb-14 md:pt-20 lg:pb-[72px] lg:pt-24">
          <div className="relative z-[1] mx-auto flex w-full max-w-[1452px] flex-col gap-10 px-5 md:px-12 lg:flex-row lg:gap-14 lg:px-[120px]">
            <div className="flex max-w-[640px] flex-1 flex-col gap-6 lg:max-w-[596px]">
              <div className="h-6 w-32 animate-pulse rounded-md bg-border-light/80" />
              <div className="h-11 w-full max-w-md animate-pulse rounded-md bg-border-light" />
              <div className="h-24 w-full animate-pulse rounded-md bg-border-light/70" />
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] flex-1 lg:mx-0">
              <div className="absolute inset-0 animate-pulse rounded-[10px] bg-border-light/60" />
            </div>
          </div>
        </section>

        <section className="border-y border-border-light bg-border-light/25 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-5 md:px-12 lg:px-[120px]">
            <div className="mx-auto flex max-w-[552px] flex-col gap-4">
              <div className="mx-auto h-9 w-48 animate-pulse rounded-md bg-border-light" />
              <div className="mx-auto h-5 w-72 animate-pulse rounded-md bg-border-light/70" />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="h-40 animate-pulse rounded-[16px] bg-border-light/65" />
              <div className="h-40 animate-pulse rounded-[16px] bg-border-light/55" />
            </div>
          </div>
        </section>

        <ContactSection
          heading={projectsContent.contact.heading}
          description={projectsContent.contact.description}
          buttonLabel="Submit"
          namePlaceholder="Full Name"
        />
      </main>
    </div>
  );
}
