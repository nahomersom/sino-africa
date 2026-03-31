"use client";

import { notFound, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGetProjectByIdQuery } from "@/src/store/strapiApi";
import { strapiProjectToProjectDetail } from "./mapStrapiProject";
import { ProjectDetailPage } from "./ProjectDetailPage";
import { ProjectDetailSkeleton } from "./ProjectDetailSkeleton";

const HAS_STRAPI = Boolean(process.env.NEXT_PUBLIC_STRAPI_URL);

type Props = { projectId: string };

export function ProjectDetailPageContainer({ projectId }: Props) {
  const router = useRouter();
  const id = projectId.trim();

  const { data, isLoading, isFetching, isError } = useGetProjectByIdQuery(
    { id },
    { skip: !HAS_STRAPI || !id },
  );

  useEffect(() => {
    if (!data) return;
    const canonical = String(data.id);
    if (canonical !== id) {
      router.replace(`/projects/${canonical}`);
    }
  }, [data, id, router]);

  const showSkeleton = isLoading || (isFetching && !data);

  if (showSkeleton) {
    return <ProjectDetailSkeleton />;
  }

  if (!HAS_STRAPI || !id || isError || data == null) {
    notFound();
  }

  const project = strapiProjectToProjectDetail(data);
  return <ProjectDetailPage project={project} />;
}
