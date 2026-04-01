import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/src/components/layout/Nav";
import { ProjectDetailPage } from "@/src/features/projects/ProjectDetailPage";
import { getAllProjectDetailSlugs, getProjectDetail } from "@/src/features/projects/constants";
import { fetchAllProjectSlugs, fetchProjectBySlug } from "@/src/features/projects/fetchProjects";
import { strapiProjectToProjectDetail } from "@/src/features/projects/mapStrapiProject";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  let apiSlugs: string[] = [];
  try {
    apiSlugs = await fetchAllProjectSlugs();
  } catch {
    apiSlugs = [];
  }
  const merged = [...new Set([...apiSlugs, ...getAllProjectDetailSlugs()])];
  return merged.map((slug) => ({ slug }));
}

async function resolveProject(slug: string) {
  try {
    const api = await fetchProjectBySlug(slug);
    if (api) return strapiProjectToProjectDetail(api);
  } catch {
    /* fall through */
  }
  return getProjectDetail(slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await resolveProject(slug);
  if (!project) {
    return { title: "Project | Sino Africa" };
  }
  return {
    title: `${project.title} | Sino Africa`,
    description: project.heroDescription,
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = await resolveProject(slug);
  if (!project) notFound();

  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectDetailPage project={project} />
    </main>
  );
}
