"use client";

import { notFound } from "next/navigation";

import { getStrapiApiBaseUrl } from "@/src/lib/strapiBase";
import { useGetProjectBySlugQuery } from "@/src/store/strapiApi";

import { getProjectDetail } from "./constants";
import { strapiProjectToProjectDetail } from "./mapStrapiProject";
import { ProjectDetailPage } from "./ProjectDetailPage";
import { ProjectDetailSkeleton } from "./ProjectDetailSkeleton";

type Props = { slug: string };

export function ProjectDetailPageClient({ slug }: Props) {
  const strapiBase = getStrapiApiBaseUrl();
  const { data: apiProject, isLoading, isFetching, isError } = useGetProjectBySlugQuery(slug, {
    skip: !strapiBase,
  });
  const fallback = getProjectDetail(slug);

  if (strapiBase && (isLoading || isFetching)) {
    return <ProjectDetailSkeleton />;
  }

  if (!strapiBase) {
    if (!fallback) notFound();
    return <ProjectDetailPage project={fallback} />;
  }

  if (isError || !apiProject) {
    if (!fallback) notFound();
    return <ProjectDetailPage project={fallback} />;
  }

  return <ProjectDetailPage project={strapiProjectToProjectDetail(apiProject)} />;
}
