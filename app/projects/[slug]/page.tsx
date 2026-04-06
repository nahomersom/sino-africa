import type { Metadata } from "next";
import { Nav } from "@/src/components/layout/Nav";
import { ProjectDetailPageClient } from "@/src/features/projects/ProjectDetailPageClient";
import { getAllProjectDetailSlugs, getProjectDetail } from "@/src/features/projects/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const staticProject = getProjectDetail(slug);
  if (!staticProject) {
    return { title: "Project | Sino Africa" };
  }
  return {
    title: `${staticProject.title} | Sino Africa`,
    description: staticProject.heroDescription,
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectDetailPageClient slug={slug} />
    </main>
  );
}
