import type { Metadata } from "next";
import { Nav } from "@/src/components/layout/Nav";
import { projectsContent } from "@/src/features/projects/constants";
import { fetchProjectsList } from "@/src/features/projects/fetchProjects";
import { strapiProjectToProjectCard } from "@/src/features/projects/mapStrapiProject";
import { ProjectsPage } from "@/src/features/projects";

export const metadata: Metadata = {
  title: "Projects | Sino Africa",
  description:
    "Selected technology, security, mobility, and infrastructure initiatives from Sino Africa.",
};

export default async function Projects() {
  let gridItems = projectsContent.grid.items;
  try {
    const list = await fetchProjectsList();
    if (list.length > 0) {
      gridItems = list.map(strapiProjectToProjectCard);
    }
  } catch {
    /* keep static fallback */
  }

  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectsPage gridItems={gridItems} />
    </main>
  );
}
