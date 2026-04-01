"use client";

import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { ContactSection } from "@/src/features/home/sections/ContactSection";
import {
  useGetProjectCategoriesQuery,
  useGetProjectsQuery,
} from "@/src/store/strapiApi";
import { useEffect, useMemo, useState } from "react";
import {
  PROJECTS_GRID_PAGE_SIZE,
  projectFilterTabs,
  projectsContent,
} from "./constants";
import { strapiProjectToProjectCard } from "./mapStrapiProject";
import { ProjectsGridSection } from "./sections/ProjectsGridSection";
import { ProjectsHeroSection } from "./sections/ProjectsHeroSection";

const HAS_STRAPI = Boolean(process.env.NEXT_PUBLIC_STRAPI_URL) || "https://sino-cms.ablazelabs.com" ;

export function ProjectsPage() {
  const [page, setPage] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const projectQueryArgs = useMemo((): Record<string, unknown> => {
    const base: Record<string, unknown> = {
      "pagination[page]": page,
      "pagination[pageSize]": PROJECTS_GRID_PAGE_SIZE,
    };
    if (activeFilter !== "all") {
      base.filters = {
        project_category: {
          slug: { $eq: activeFilter },
        },
      };
    }
    return base;
  }, [page, activeFilter]);

  const { data, isLoading, isError } = useGetProjectsQuery(projectQueryArgs, {
    skip: !HAS_STRAPI,
  });

  const { data: categories, isLoading: categoriesLoading } = useGetProjectCategoriesQuery(
    undefined,
    {
      skip: !HAS_STRAPI,
    },
  );

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setPage(0);
  };

  const staticFiltered = useMemo(() => {
    const all = [...projectsContent.grid.items];
    if (activeFilter === "all") return all;
    return all.filter((p) => p.filter === activeFilter);
  }, [activeFilter]);

  const staticPageCount = Math.max(1, Math.ceil(staticFiltered.length / PROJECTS_GRID_PAGE_SIZE));

  const staticPageItems = useMemo(
    () =>
      staticFiltered.slice(
        page * PROJECTS_GRID_PAGE_SIZE,
        (page + 1) * PROJECTS_GRID_PAGE_SIZE,
      ),
    [staticFiltered, page],
  );

  useEffect(() => {
    if (HAS_STRAPI || staticPageCount === 0) return;
    const maxPage = Math.max(0, staticPageCount - 1);
    if (page > maxPage) setPage(maxPage);
  }, [HAS_STRAPI, staticPageCount, page]);

  useEffect(() => {
    if (!HAS_STRAPI || !data?.pagination) return;
    const max = Math.max(0, (data.pagination.pageCount || 1) - 1);
    if (page > max) setPage(max);
  }, [HAS_STRAPI, data?.pagination, page]);

  const items = useMemo(() => {
    if (!HAS_STRAPI) {
      return staticPageItems;
    }
    if (!data?.projects?.length) {
      return [];
    }
    return data.projects.map(strapiProjectToProjectCard);
  }, [HAS_STRAPI, data?.projects, staticPageItems]);

  const filterTabs = useMemo(() => {
    if (!HAS_STRAPI) {
      return projectFilterTabs;
    }
    const allTab = { id: "all", label: "All" };
    const fromApi =
      categories?.map((c) => ({
        id: c.slug?.trim() || String(c.id),
        label: c.name?.trim() || c.title?.trim() || "Category",
      })) ?? [];
    return [allTab, ...fromApi];
  }, [categories]);

  const totalCount = HAS_STRAPI ? (data?.pagination.total ?? 0) : staticFiltered.length;

  const pagination = HAS_STRAPI
    ? data?.pagination
      ? {
          page: data.pagination.page,
          pageCount: Math.max(1, data.pagination.pageCount || 1),
          total: data.pagination.total,
          onPageChange: setPage,
        }
      : null
    : {
        page,
        pageCount: staticPageCount,
        total: staticFiltered.length,
        onPageChange: setPage,
      };

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
          items={items}
          activeFilter={activeFilter}
          onActiveFilterChange={handleFilterChange}
          filterTabs={filterTabs}
          isLoading={HAS_STRAPI && isLoading}
          isFilterTabsLoading={HAS_STRAPI && categoriesLoading && !isLoading}
          loadError={HAS_STRAPI && isError}
          totalCount={totalCount}
          pagination={pagination}
        />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection
          heading={projectsContent.contact.heading}
          description={projectsContent.contact.description}
          buttonLabel={projectsContent.contact.buttonLabel}
          variant="inner-page"
        />
      </ScrollReveal>
    </div>
  );
}
