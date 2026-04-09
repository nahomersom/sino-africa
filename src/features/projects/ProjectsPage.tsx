"use client";

import { useMemo } from "react";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { ContactSection } from "@/src/features/home/sections/ContactSection";
import { getStrapiApiBaseUrl } from "@/src/lib/strapiBase";
import {
  useGetProjectCategoriesQuery,
  useGetProjectsQuery,
} from "@/src/store/strapiApi";
import type { ProjectCard } from "./constants";
import { projectsContent } from "./constants";
import {
  projectCategoryToFilterTab,
  strapiProjectToProjectCard,
} from "./mapStrapiProject";
import { ProjectsGridSection } from "./sections/ProjectsGridSection";
import { ProjectsHeroSection } from "./sections/ProjectsHeroSection";

type ProjectsPageProps = {
  /** Optional override; normally the grid is loaded from Strapi in the browser. */
  gridItems?: readonly ProjectCard[];
  /** Optional override for filter tabs from CMS. */
  categoryTabs?: readonly { id: string; label: string }[];
};

export function ProjectsPage({ gridItems, categoryTabs }: ProjectsPageProps = {}) {
  const strapiBase = getStrapiApiBaseUrl();
  const skipStrapi = !strapiBase;

  const listQuery = useGetProjectsQuery(
    { "pagination[pageSize]": 100, "pagination[page]": 1 },
    { skip: skipStrapi || gridItems != null },
  );
  const categoriesQuery = useGetProjectCategoriesQuery(undefined, {
    skip: skipStrapi || gridItems != null,
  });

  const { resolvedItems, resolvedTabs, gridLoading } = useMemo(() => {
    if (gridItems != null) {
      return {
        resolvedItems: gridItems,
        resolvedTabs: categoryTabs,
        gridLoading: false,
      };
    }
    if (skipStrapi) {
      return {
        resolvedItems: projectsContent.grid.items,
        resolvedTabs: categoryTabs,
        gridLoading: false,
      };
    }
    const listLoading = listQuery.isLoading || listQuery.isFetching;
    const projects = listQuery.data?.projects ?? [];
    const needCategoryTabs =
      !listQuery.isError && projects.length > 0;
    const categoriesLoading =
      categoriesQuery.isLoading || categoriesQuery.isFetching;
    const loading = listLoading || (needCategoryTabs && categoriesLoading);
    if (loading) {
      return { resolvedItems: [] as const, resolvedTabs: undefined, gridLoading: true };
    }
    if (listQuery.isError || projects.length === 0) {
      return {
        resolvedItems: projectsContent.grid.items,
        resolvedTabs: categoryTabs,
        gridLoading: false,
      };
    }
    const cards = projects.map(strapiProjectToProjectCard);
    const fromCms = (categoriesQuery.data ?? [])
      .map(projectCategoryToFilterTab)
      .filter((t): t is NonNullable<typeof t> => t != null);
    return {
      resolvedItems: cards,
      resolvedTabs: fromCms.length > 0 ? fromCms : categoryTabs,
      gridLoading: false,
    };
  }, [
    gridItems,
    categoryTabs,
    skipStrapi,
    listQuery.isLoading,
    listQuery.isFetching,
    listQuery.isError,
    listQuery.data,
    categoriesQuery.data,
    categoriesQuery.isLoading,
    categoriesQuery.isFetching,
  ]);

  return (
    <div className="flex w-full flex-1 flex-col">
      <ProjectsHeroSection
        label={projectsContent.hero.label}
        heading={projectsContent.hero.heading}
        description={projectsContent.hero.description}
      />
      <ScrollReveal>
        <ProjectsGridSection
          heading={projectsContent.grid.heading}
          intro={projectsContent.grid.intro}
          items={resolvedItems}
          categoryTabs={resolvedTabs}
          loading={gridLoading}
        />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection
          heading={projectsContent.contact.heading}
          description={projectsContent.contact.description}
          buttonLabel={projectsContent.contact.buttonLabel}
        />
      </ScrollReveal>
    </div>
  );
}
