import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/src/components/layout/Nav";
import { ProjectDetailPage } from "@/src/features/projects/ProjectDetailPage";
import { getAllProjectDetailSlugs, getProjectDetail } from "@/src/features/projects/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
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
  const project = getProjectDetail(slug);
  if (!project) notFound();

  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectDetailPage project={project} />
    </main>
  );
}
