import { ContactSection } from "@/src/features/home/sections/ContactSection";
import { homeContent } from "@/src/features/home/constants";

/** Placeholder layout matching vertical detail section rhythm while Strapi data loads. */
export function VerticalDetailSkeleton() {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col bg-white">
      <main className="w-full min-w-0">
        <section className="relative isolate flex w-full flex-col overflow-x-clip">
          <div className="relative mx-auto flex min-h-[480px] w-full flex-col bg-border-light/40 pb-10 pt-24 lg:min-h-[640px] lg:pt-32">
            <div className="mx-auto flex w-full max-w-[1452px] flex-col gap-10 px-6 lg:flex-row lg:px-[min(8rem,6vw)]">
              <div className="flex max-w-[596px] flex-1 flex-col gap-6">
                <div className="h-8 w-40 animate-pulse rounded-md bg-white/50" />
                <div className="size-[142px] animate-pulse rounded-lg bg-white/35" />
                <div className="h-14 w-full max-w-md animate-pulse rounded-md bg-white/40" />
                <div className="h-24 w-full max-w-lg animate-pulse rounded-md bg-white/30" />
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[520px] flex-1">
                <div className="absolute inset-0 animate-pulse rounded-[10px] bg-white/35" />
              </div>
            </div>
          </div>
          <div className="h-16 w-full animate-pulse bg-border-light/30" />
        </section>

        <section className="px-6 py-20 lg:px-[min(15rem,12vw)] lg:py-[100px]">
          <div className="mx-auto flex max-w-[804px] flex-col items-center gap-6">
            <div className="h-10 w-64 animate-pulse rounded-md bg-border-light" />
            <div className="flex w-full flex-col gap-3">
              <div className="h-4 w-full animate-pulse rounded-md bg-border-light/80" />
              <div className="h-4 w-full animate-pulse rounded-md bg-border-light/70" />
              <div className="h-4 w-full max-w-[90%] animate-pulse rounded-md bg-border-light/60" />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-[100px]">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-14 px-6">
            <div className="mx-auto flex max-w-[552px] flex-col gap-4">
              <div className="mx-auto h-10 w-56 animate-pulse rounded-md bg-border-light" />
              <div className="mx-auto h-5 w-72 animate-pulse rounded-md bg-border-light/80" />
            </div>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12"
              >
                <div className="aspect-[4/3] w-full animate-pulse rounded-lg bg-border-light/70" />
                <div className="flex flex-col gap-4">
                  <div className="h-9 w-[80%] max-w-sm animate-pulse rounded-md bg-border-light" />
                  <div className="h-4 w-full animate-pulse rounded-md bg-border-light/75" />
                  <div className="h-4 w-full max-w-[95%] animate-pulse rounded-md bg-border-light/65" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 lg:px-[min(15rem,12vw)] lg:py-[100px]">
          <div className="mx-auto flex max-w-[1248px] flex-col gap-14">
            <div className="mx-auto flex max-w-[552px] flex-col gap-4">
              <div className="mx-auto h-10 w-48 animate-pulse rounded-md bg-border-light" />
              <div className="mx-auto h-5 w-64 animate-pulse rounded-md bg-border-light/80" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex min-h-[320px] flex-col gap-6 rounded-[16px] border border-border-card p-8 lg:h-[552px]"
                >
                  <div className="size-[88px] animate-pulse rounded-2xl bg-border-light" />
                  <div className="h-8 w-3/4 max-w-[200px] animate-pulse rounded-md bg-border-light/80" />
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="h-4 w-full animate-pulse rounded-md bg-border-light/70" />
                    <div className="h-4 w-full animate-pulse rounded-md bg-border-light/60" />
                    <div className="h-4 w-2/3 animate-pulse rounded-md bg-border-light/50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          heading={homeContent.contact.heading}
          description={homeContent.contact.description}
          buttonLabel={homeContent.contact.buttonLabel}
        />
      </main>
    </div>
  );
}
