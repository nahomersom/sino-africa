"use client";

import { cn } from "@/src/lib/utils";
import {
  StaggerContainer,
  StaggerItem,
} from "@/src/components/ui/scroll-reveal";
import { ProjectsPatternBackdrop } from "@/src/features/projects/components/ProjectsPatternBackdrop";
import type { ProjectCard, ProjectFilterId } from "../constants";
import { projectFilterTabs } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ProjectsGridSectionProps = {
  heading: string;
  intro: string;
  items: readonly ProjectCard[];
};

export function ProjectsGridSection({ heading, intro, items }: ProjectsGridSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((p) => p.filter === activeFilter);
  }, [items, activeFilter]);

  return (
    <section className="relative mt-8 w-full overflow-hidden px-8 pb-14 pt-8 md:mt-10 md:px-20 md:pb-[100px] md:pt-10 lg:mt-12 lg:px-[120px] lg:pb-[100px] lg:pt-12">
      <ProjectsPatternBackdrop />

      <div className="relative z-[1] mx-auto mt-8 flex w-full max-w-[1200px] flex-col gap-10 md:mt-10 lg:mt-14 lg:gap-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex max-w-[640px] flex-col gap-4">
            <h2 className="font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-text-100 md:text-[36px] md:leading-[1.4] md:tracking-[-0.04em]">
              {heading}
            </h2>
            <p className="text-base font-light leading-[1.65] tracking-[-0.0125em] text-muted md:text-lg md:leading-[1.65] md:tracking-[-0.011em]">
              {intro}
            </p>
          </div>

          <div
            className="box-border mx-auto grid w-full max-w-[633px] grid-cols-6 gap-2 rounded-[24px] bg-[#F6F7FB] p-4 md:flex md:min-h-[85px] md:max-w-[633px] md:flex-nowrap md:items-center md:justify-center md:gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectFilterTabs.map((tab, index) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn(
                    "box-border flex h-[53px] items-center justify-center whitespace-nowrap rounded-[16px] px-4 py-4 text-center text-sm font-normal leading-[1.5] transition-colors md:shrink-0 md:px-8",
                    index < 3 && "max-md:col-span-2",
                    index === 3 && "max-md:col-span-3 max-md:col-start-1",
                    index === 4 && "max-md:col-span-3 max-md:col-start-4",
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

        <StaggerContainer
          key={activeFilter}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          stagger={0.08}
          amount={0.12}
        >
          {filteredItems.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="flex h-full flex-col rounded-[24px] border border-[#E7E9ED] border-[2px] bg-transparent p-3 transition-colors hover:border-primary/40 hover:bg-white/60 md:gap-5 md:p-4"
              >
                <article className="flex h-full flex-col gap-4 md:gap-5">
                  <div className="relative aspect-[319.33331298828125/313] w-full shrink-0 overflow-hidden rounded-[10px] bg-transparent">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
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
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
