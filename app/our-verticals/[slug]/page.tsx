import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import { Nav } from "@/src/components/layout/Nav";
import {
  getVerticalDetail,
  mergeVerticalDetailFromApi,
  verticalDetailSlugs,
  VerticalDetailPage,
} from "@/src/features/vertical-detail";
import { fetchVerticalBySlugServer, fetchVerticalsList } from "@/src/lib/strapi/verticals-server";

type Props = {
  params: Promise<{ slug: string }>;
};

const getVerticalPageData = cache(async (slug: string) => {
  const api = await fetchVerticalBySlugServer(slug);
  const fallback = getVerticalDetail(slug);
  return { api, fallback };
});

export async function generateStaticParams() {
  const fromCms = await fetchVerticalsList();
  const slugs = new Set<string>(verticalDetailSlugs);
  for (const v of fromCms) {
    const s = typeof v.slug === "string" ? v.slug.trim() : "";
    if (s) slugs.add(s);
  }
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { api, fallback } = await getVerticalPageData(slug);
  if (!api && !fallback) {
    return { title: "Vertical" };
  }
  const merged = mergeVerticalDetailFromApi(slug, api, fallback);
  return {
    title: `${merged.shortLabel || merged.name || "Vertical"} | Sino Africa`,
    description: merged.heroDescription,
  };
}

export default async function VerticalDetailRoute({ params }: Props) {
  const { slug } = await params;
  const { api, fallback } = await getVerticalPageData(slug);

  if (!api && !fallback) {
    notFound();
  }

  const content = mergeVerticalDetailFromApi(slug, api, fallback);

  return (
    <div className="flex w-full flex-col">
      <Nav variant="inner-page" />
      <VerticalDetailPage content={content} />
    </div>
  );
}
