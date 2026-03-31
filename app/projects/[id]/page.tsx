import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Nav } from "@/src/components/layout/Nav";
import { ProjectDetailPage } from "@/src/features/projects/ProjectDetailPage";
import { ProjectDetailPageContainer } from "@/src/features/projects/ProjectDetailPageContainer";
import { fetchAllProjectIds, fetchProjectById } from "@/src/features/projects/fetchProjects";
import { strapiProjectToProjectDetail } from "@/src/features/projects/mapStrapiProject";
import { getStrapiApiBaseUrl } from "@/src/lib/strapiBase";

/** Mirrors ProjectsPage: browser RTK calls need a public Strapi origin. */
const CLIENT_FETCHES_STRAPI = Boolean(process.env.NEXT_PUBLIC_STRAPI_URL);

type PageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  if (!getStrapiApiBaseUrl()) {
    return [];
  }
  try {
    const ids = await fetchAllProjectIds();
    return ids.map((id) => ({ id: String(id) }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id: idParam } = await params;
  const id = decodeURIComponent(idParam).trim();

  if (!id || !getStrapiApiBaseUrl()) {
    return { title: "Project | Sino Africa" };
  }

  const apiProject = await fetchProjectById(id);
  if (!apiProject) {
    return { title: "Project | Sino Africa" };
  }

  const detail = strapiProjectToProjectDetail(apiProject);
  return {
    title: `${detail.title} | Sino Africa`,
    description: detail.heroDescription,
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id: idParam } = await params;
  const id = decodeURIComponent(idParam).trim();

  if (!id) {
    notFound();
  }

  if (!getStrapiApiBaseUrl()) {
    notFound();
  }

  if (!CLIENT_FETCHES_STRAPI) {
    const apiProject = await fetchProjectById(id);
    if (!apiProject) notFound();
    const canonicalId = String(apiProject.id);
    if (id !== canonicalId) {
      redirect(`/projects/${canonicalId}`);
    }
    const project = strapiProjectToProjectDetail(apiProject);
    return (
      <main className="flex w-full">
        <Nav variant="inner-page" />
        <ProjectDetailPage project={project} />
      </main>
    );
  }

  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ProjectDetailPageContainer projectId={id} />
    </main>
  );
}
