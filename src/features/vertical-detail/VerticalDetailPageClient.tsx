"use client";

import { notFound } from "next/navigation";

import { useGetVerticalBySlugQuery } from "@/src/store/strapiApi";

import { getVerticalDetail } from "./getVerticalDetail";
import { mergeVerticalDetailFromApi } from "./mapApiToDetailContent";
import { VerticalDetailPage } from "./VerticalDetailPage";
import { VerticalDetailSkeleton } from "./VerticalDetailSkeleton";

type Props = { slug: string };

export function VerticalDetailPageClient({ slug }: Props) {
  const hasStrapi = Boolean(process.env.NEXT_PUBLIC_STRAPI_URL);
  const { data: apiVertical, isLoading, isFetching } = useGetVerticalBySlugQuery(
    slug,
    { skip: !hasStrapi }
  );
  const fallback = getVerticalDetail(slug);

  if (hasStrapi && (isLoading || isFetching)) {
    return <VerticalDetailSkeleton />;
  }

  if (!hasStrapi) {
    if (!fallback) notFound();
    return <VerticalDetailPage content={fallback} />;
  }

  if (!apiVertical && !fallback) {
    notFound();
  }

  const merged = mergeVerticalDetailFromApi(slug, apiVertical ?? null, fallback);
  return <VerticalDetailPage content={merged} />;
}
