import type { Metadata } from "next";
import { Nav } from "@/src/components/layout/Nav";
import { projectsContent } from "@/src/features/projects/constants";
import {
  fetchProjectCategoriesList,
  fetchProjectsList,
} from "@/src/features/projects/fetchProjects";
import {
  projectCategoryToFilterTab,
  strapiProjectToProjectCard,
} from "@/src/features/projects/mapStrapiProject";
import { ProjectsPage } from "@/src/features/projects";

export const metadata: Metadata = {
  title: "Projects | Sino Africa",
  description:
    "Selected technology, security, mobility, and infrastructure initiatives from Sino Africa.",
};

export default async function Projects() {
  let gridItems = projectsContent.grid.items;
  let categoryTabs: { id: string; label: string }[] | undefined;
  try {
    const [list, categories] = await Promise.all([
      fetchProjectsList(),
      fetchProjectCategoriesList(),
    ]);
    if (list.length > 0) {
      gridItems = list.map(strapiProjectToProjectCard);
      const fromCms = categories
        .map(projectCategoryToFilterTab)
        .filter((t): t is NonNullable<typeof t> => t != null);
      if (fromCms.length > 0) {
        categoryTabs = fromCms;
      }
    }
  } catch {
    /* keep static fallback */
  }

  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectsPage gridItems={gridItems} categoryTabs={categoryTabs} />
    </main>
  );
}
