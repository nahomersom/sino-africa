import { Skeleton } from "@/src/components/ui/skeleton";

/** Shared loading placeholder for project detail (segment loading + client fetch). */
export function ProjectDetailSkeleton() {
  return (
    <div className="mt-10 flex w-full flex-1 flex-col" aria-busy>
      <section className="relative flex w-full flex-col gap-8 overflow-x-clip bg-white px-8 pb-10 pt-[120px] md:px-[120px] md:pb-10 md:pt-[152px]">
        <div className="relative z-10 mx-auto flex w-full max-w-[837px] flex-col gap-8 text-center md:gap-10 md:text-left xl:max-w-[1120px]">
          <Skeleton className="mx-auto h-6 w-40 md:mx-0" />
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-14 xl:gap-16">
            <div className="order-1 flex w-full max-w-[640px] flex-col items-center gap-4 md:items-start xl:w-[46%]">
              <Skeleton className="h-4 w-28 md:h-[13px]" />
              <Skeleton className="h-10 w-full max-w-md md:h-12" />
              <div className="flex w-full flex-col gap-2 pt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            </div>
            <Skeleton className="order-2 mx-auto aspect-[651.24/735] w-full max-w-[651px] rounded-[6px] md:mx-0 md:mt-8 md:h-[383px] md:w-[318.5px] md:max-w-none xl:mt-0 xl:h-[500px] xl:w-[420px]" />
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-x-clip bg-white px-8 py-12 md:px-[120px] md:py-[88px]">
        <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10 text-center md:gap-14 md:text-left">
          <Skeleton className="mx-auto h-9 w-48 md:mx-0 md:h-10" />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,280px)_1fr] md:gap-16 xl:grid-cols-[minmax(0,320px)_1fr]">
            <div className="flex flex-col items-center gap-10 md:items-start">
              <div className="flex w-full max-w-xl flex-col gap-3">
                <Skeleton className="mx-auto h-4 w-32 md:mx-0" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
              </div>
              <div className="flex w-full max-w-xl flex-col gap-3">
                <Skeleton className="mx-auto h-4 w-36 md:mx-0" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
              <div className="flex w-full max-w-xl flex-col gap-2">
                <Skeleton className="mx-auto h-4 w-24 md:mx-0" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
            <div className="flex min-w-0 flex-col items-center gap-10 md:items-start">
              {[0, 1, 2].map((block) => (
                <div key={block} className="flex w-full max-w-3xl flex-col gap-3">
                  <Skeleton className="mx-auto h-4 w-28 md:mx-0" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[92%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
