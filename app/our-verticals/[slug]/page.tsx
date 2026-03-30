import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Nav } from "@/src/components/layout/Nav";
import {
  getVerticalDetail,
  verticalDetailSlugs,
  VerticalDetailPage,
} from "@/src/features/vertical-detail";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return verticalDetailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getVerticalDetail(slug);
  if (!content) {
    return { title: "Vertical" };
  }
  return {
    title: `${content.shortLabel} | Sino Africa`,
    description: content.heroDescription,
  };
}

export default async function VerticalDetailRoute({ params }: Props) {
  const { slug } = await params;
  const content = getVerticalDetail(slug);
  if (!content) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col">
      <Nav variant="inner-page" />
      <VerticalDetailPage content={content} />
    </div>
  );
}
