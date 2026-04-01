"use client";

import { cn } from "@/src/lib/utils";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";
import { ImageFillWithSkeleton } from "@/src/components/ui/image-with-skeleton";
import { Skeleton } from "@/src/components/ui/skeleton";
import { ProjectsPatternBackdrop } from "@/src/features/projects/components/ProjectsPatternBackdrop";
import type { ProjectCard } from "../constants";
import Link from "next/link";

const SKELETON_CARD_COUNT = 6;
const SKELETON_TAB_COUNT = 6;

export type ProjectFilterTabItem = { id: string; label: string };

type ProjectsPagination = {
  page: number;
  pageCount: number;
  total: number;
  onPageChange: (page: number) => void;
};

type ProjectsGridSectionProps = {
  heading: string;
  intro: string;
  items: readonly ProjectCard[];
  activeFilter: string;
  onActiveFilterChange: (id: string) => void;
  /** First tab should be `{ id: "all", label: "All" }`; remaining ids must match `ProjectCard.filter`. */
  filterTabs: readonly ProjectFilterTabItem[];
  isLoading?: boolean;
  /** Shown after project list resolves but category tabs are still fetching. */
  isFilterTabsLoading?: boolean;
  loadError?: boolean;
  /** Total items for current filter (all pages), for empty-state copy. */
  totalCount: number;
  /** When null (e.g. initial Strapi load), pagination bar is hidden. */
  pagination: ProjectsPagination | null;
};

function ProjectsGridSkeletonCards() {
  return (
    <div
      id="projects-grid"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      aria-hidden
    >
      {Array.from({ length: SKELETON_CARD_COUNT }).map((_, i) => (
        <div
          key={`project-skeleton-${i}`}
          className="flex h-full flex-col rounded-[24px] border border-[#E7E9ED] border-[2px] bg-transparent p-3 md:gap-5 md:p-4"
        >
          <Skeleton className="aspect-[319.33331298828125/313] w-full shrink-0 rounded-[10px]" />
          <div className="mt-4 flex min-h-0 flex-1 flex-col gap-2 md:mt-5">
            <Skeleton className="h-7 w-4/5 rounded-[10px] md:h-8" />
            <Skeleton className="h-3.5 w-full rounded-md md:h-4" />
            <Skeleton className="h-3.5 w-full rounded-md md:h-4" />
            <Skeleton className="h-3.5 w-2/3 rounded-md md:h-4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectsGridSection({
  heading,
  intro,
  items,
  activeFilter,
  onActiveFilterChange,
  filterTabs,
  isLoading,
  isFilterTabsLoading,
  loadError,
  totalCount,
  pagination,
}: ProjectsGridSectionProps) {
  const tabsPending = Boolean(isFilterTabsLoading) && !isLoading;

  const showFilterSkeleton = Boolean(isLoading || (tabsPending && items.length > 0));

  return (
    <section
      className="relative mt-8 w-full overflow-hidden px-8 pb-14 pt-8 md:mt-10 md:px-20 md:pb-[100px] md:pt-10 lg:mt-12 lg:px-[120px] lg:pb-[100px] lg:pt-12"
      aria-busy={Boolean(isLoading || (tabsPending && items.length > 0))}
    >
      <ProjectsPatternBackdrop />

      <div className="relative z-[1] mx-auto mt-8 flex w-full max-w-[1200px] flex-col gap-10 md:mt-10 lg:mt-14 lg:gap-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex max-w-[640px] flex-col gap-4">
            {isLoading ? (
              <div className="flex w-full flex-col gap-4" aria-hidden>
                <Skeleton className="mx-auto h-9 w-[min(100%,280px)] md:h-10 lg:h-11" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="mx-auto h-4 w-[88%] rounded-md" />
              </div>
            ) : (
              <>
                <h2 className="font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-text-100 md:text-[36px] md:leading-[1.4] md:tracking-[-0.04em]">
                  {heading}
                </h2>
                <p className="text-base font-light leading-[1.65] tracking-[-0.0125em] text-muted md:text-lg md:leading-[1.65] md:tracking-[-0.011em]">
                  {intro}
                </p>
              </>
            )}
          </div>

          {showFilterSkeleton ? (
            <div
              className="box-border mx-auto flex w-full max-w-[633px] flex-wrap items-center justify-center gap-2 rounded-[24px] bg-[#F6F7FB] p-4 md:min-h-[85px] md:gap-2"
              aria-hidden
            >
              {Array.from({ length: SKELETON_TAB_COUNT }).map((_, i) => (
                <Skeleton
                  key={`filter-skeleton-${i}`}
                  className="h-[53px] min-w-[80px] flex-1 rounded-[16px] sm:max-w-[120px] sm:flex-none md:w-28"
                />
              ))}
            </div>
          ) : (
            <div
              className="box-border mx-auto flex w-full max-w-[633px] flex-wrap items-center justify-center gap-2 rounded-[24px] bg-[#F6F7FB] p-4 md:min-h-[85px] md:gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    aria-label={`${tab.label}: filter projects`}
                    aria-pressed={isActive}
                    aria-controls="projects-grid"
                    key={tab.id}
                    type="button"
                    onClick={() => onActiveFilterChange(tab.id)}
                    className={cn(
                      "box-border flex h-[53px] min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-[16px] px-4 py-4 text-center text-sm font-normal leading-[1.5] transition-colors sm:flex-none md:shrink-0 md:px-8",
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "bg-white text-text-100 hover:bg-white/90",
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {loadError ? (
          <p className="text-center text-base font-light leading-relaxed text-muted">
            Projects could not be loaded. Please try again later.
          </p>
        ) : null}

        {!isLoading && !loadError && totalCount === 0 && activeFilter === "all" ? (
          <p className="text-center text-base font-light leading-relaxed text-muted">
            No projects are published yet.
          </p>
        ) : null}

        {!isLoading && !loadError && totalCount === 0 && activeFilter !== "all" ? (
          <p className="text-center text-base font-light leading-relaxed text-muted">
            No projects match this filter.
          </p>
        ) : null}

        {isLoading ? (
          <ProjectsGridSkeletonCards />
        ) : (
          <>
            <StaggerContainer
              key={`${activeFilter}-${pagination?.page ?? 0}`}
              id="projects-grid"
              className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              stagger={0.08}
              amount={0.12}
            >
              {!loadError &&
              items.map((project) => {
                const cardClassName =
                  "flex h-full flex-col rounded-[24px] border border-[#E7E9ED] border-[2px] bg-transparent p-3 transition-colors hover:border-primary/40 hover:bg-white/60 md:gap-5 md:p-4";

                const inner = (
                  <article className="flex h-full flex-col gap-4 md:gap-5">
                    <div className="relative aspect-[319.33331298828125/313] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#E7E9ED]/50">
                      {project.imageSrc ? (
                        <ImageFillWithSkeleton
                          fill
                          src={project.imageSrc}
                          alt={project.imageAlt}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          skeletonClassName="rounded-[10px]"
                        />
                      ) : (
                        <Skeleton
                          className="absolute inset-0 rounded-[10px]"
                          aria-hidden
                        />
                      )}
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col gap-2">
                      <h3 className="font-(family-name:--font-nata-sans) text-xl font-semibold leading-snug tracking-[-0.03em] text-text-100 md:text-[22px]">
                        {project.title}
                      </h3>
                      <p className="text-sm font-light leading-[1.55] tracking-[-0.01em] text-muted md:text-[15px]">
                        {project.description}
                      </p>
                    </div>
                  </article>
                );

                return (
                  <StaggerItem key={project.id}>
                    {project.detailHref ? (
                      <Link href={project.detailHref} className={cardClassName}>
                        {inner}
                      </Link>
                    ) : (
                      <div className={cardClassName}>{inner}</div>
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {pagination && pagination.pageCount > 1 ? (
              <nav
                className="flex flex-wrap items-center justify-center gap-3 pt-8 md:gap-4 md:pt-10"
                aria-label="Projects pages"
              >
                <button
                  type="button"
                  disabled={pagination.page <= 0 || Boolean(isLoading)}
                  onClick={() => pagination.onPageChange(pagination.page - 1)}
                  className={cn(
                    "rounded-full border border-border-card px-5 py-2.5 text-sm font-normal text-text-100 transition-colors",
                    pagination.page <= 0 || isLoading
                      ? "opacity-40"
                      : "hover:border-primary hover:text-primary",
                  )}
                >
                  Previous
                </button>
                <span className="text-sm font-light tabular-nums text-muted">
                  Page {pagination.page + 1} of {pagination.pageCount}
                </span>
                <button
                  type="button"
                  disabled={pagination.page >= pagination.pageCount - 1 || Boolean(isLoading)}
                  onClick={() => pagination.onPageChange(pagination.page + 1)}
                  className={cn(
                    "rounded-full border border-border-card px-5 py-2.5 text-sm font-normal text-text-100 transition-colors",
                    pagination.page >= pagination.pageCount - 1 || isLoading
                      ? "opacity-40"
                      : "hover:border-primary hover:text-primary",
                  )}
                >
                  Next
                </button>
              </nav>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
