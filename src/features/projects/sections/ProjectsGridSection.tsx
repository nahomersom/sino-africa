"use client";

import { cn } from "@/src/lib/utils";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";
import type { ProjectCard } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { useMemo, useState } from "react";

type FilterTab = { id: string; label: string };

type ProjectsGridSectionProps = {
  heading: string;
  intro: string;
  items: readonly ProjectCard[];
  /** Full set of categories (e.g. from Strapi). Tabs also include any `filterId` on items not listed here. */
  categoryTabs?: readonly FilterTab[];
};

function ProjectsGridEmptyState({
  activeFilter,
  filterLabel,
  onShowAll,
}: {
  activeFilter: string;
  filterLabel: string;
  onShowAll: () => void;
}) {
  const isCategoryFilter = activeFilter !== "all";

  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-6 rounded-[24px] border-2 border-[#E7E9ED] bg-white/80 px-6 py-14 text-center shadow-sm md:px-12 md:py-[72px]"
      role="status"
      aria-live="polite"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary"
        aria-hidden
      >
        <LayoutGrid className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <div className="flex max-w-[440px] flex-col gap-3">
        <h3 className="font-(family-name:--font-nata-sans) text-xl font-semibold tracking-[-0.03em] text-text-100 md:text-[22px]">
          {isCategoryFilter
            ? `No projects in ${filterLabel}`
            : "No projects to show yet"}
        </h3>
        <p className="text-sm font-light leading-[1.6] tracking-[-0.01em] text-muted md:text-base md:leading-[1.65]">
          {isCategoryFilter
            ? `We don't have any featured projects under ${filterLabel} right now. Browse all projects or try another category to explore more work.`
            : "There are no projects listed here at the moment. Check back soon or contact us if you're looking for something specific."}
        </p>
      </div>
      {isCategoryFilter && (
        <button
          type="button"
          onClick={onShowAll}
          className="mt-1 cursor-pointer rounded-[16px] bg-primary px-8 py-4 text-sm font-normal leading-[1.5] text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          View all projects
        </button>
      )}
    </div>
  );
}

export function ProjectsGridSection({ heading, intro, items, categoryTabs }: ProjectsGridSectionProps) {
  const tabs = useMemo(() => {
    const seen = new Set<string>();
    const ordered: FilterTab[] = [];
    const push = (tab: FilterTab) => {
      if (!tab.id || seen.has(tab.id)) return;
      seen.add(tab.id);
      ordered.push(tab);
    };

    push({ id: "all", label: "All" });
    if (categoryTabs?.length) {
      for (const t of categoryTabs) push(t);
    }
    for (const item of items) {
      push({ id: item.filterId, label: item.filterLabel });
    }
    return ordered;
  }, [items, categoryTabs]);

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((p) => p.filterId === activeFilter);
  }, [items, activeFilter]);

  const activeTabLabel = useMemo(
    () => tabs.find((t) => t.id === activeFilter)?.label ?? "this category",
    [activeFilter, tabs],
  );

  const showEmpty = filteredItems.length === 0;

  return (
    <section className="relative mt-8 w-full overflow-x-hidden px-8 pb-14 pt-8 md:mt-10 md:px-20 md:pb-[100px] md:pt-10 lg:mt-12 lg:px-[120px] lg:pb-[100px] lg:pt-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "url('/images/sino-symbol-tile.svg')", backgroundSize: "28px", backgroundRepeat: "repeat" }}
      />

      <div className="relative z-[1] mx-auto mt-8 flex w-full max-w-[1200px] flex-col gap-10 md:mt-10 lg:mt-14 lg:gap-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex max-w-[640px] flex-col gap-4">
            <h2 className="font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-text-100 md:text-[36px] md:leading-[1.4] md:tracking-[-0.04em]">
              {heading}
            </h2>
            <p className="text-base font-light leading-[1.65] tracking-[-0.0125em] text-muted md:text-lg md:leading-[1.65] md:tracking-[-0.011em] md:max-w-[330px]">
              {intro}
            </p>
        </div>

          <div
            className="box-border mx-auto flex w-full max-w-[720px] flex-wrap justify-center gap-2 rounded-[24px] bg-[#F6F7FB] p-4"
            role="group"
            aria-label="Filter projects by category"
          >
            {tabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn(
                    "box-border flex h-[53px] w-[calc((100%-0.5rem)/2)] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[16px] px-4 py-4 text-center text-sm font-normal leading-[1.5] transition-colors sm:w-[calc((100%-1rem)/3)] md:w-[calc((100%-1.5rem)/4)] md:px-8",
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
        </div>

        {showEmpty ? (
          <ProjectsGridEmptyState
            activeFilter={activeFilter}
            filterLabel={activeTabLabel}
            onShowAll={() => setActiveFilter("all")}
          />
        ) : (
          <StaggerContainer
            key={activeFilter}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
            stagger={0.08}
            amount={0.12}
          >
            {filteredItems.map((project) => (
              <StaggerItem key={project.id} className="min-w-0">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex h-full min-w-0 flex-col rounded-[24px] border border-[#E7E9ED] border-[2px] bg-transparent p-3 transition-colors hover:border-primary/40 hover:bg-white/60 md:gap-5 md:p-4"
                >
                  <article className="flex h-full min-w-0 flex-col gap-4 md:gap-5">
                    <div className="relative aspect-[319.33331298828125/313] w-full shrink-0 overflow-hidden rounded-[10px] bg-transparent">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2">
                      <h3 className="font-(family-name:--font-nata-sans) break-words text-xl font-semibold leading-snug tracking-[-0.03em] text-text-100 md:text-[22px]">
                        {project.title}
                      </h3>
                      <p className="break-words text-sm font-light leading-[1.55] tracking-[-0.01em] text-muted md:text-[15px]">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
