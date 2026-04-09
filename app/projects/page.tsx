import type { Metadata } from "next";
import { Nav } from "@/src/components/layout/Nav";
import { ProjectsPage } from "@/src/features/projects";

export const metadata: Metadata = {
  title: "Projects | Sino Africa",
  description:
    "Selected technology, security, mobility, and infrastructure initiatives from Sino Africa.",
};

export default function Projects() {
  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectsPage />
    </main>
  );
}
