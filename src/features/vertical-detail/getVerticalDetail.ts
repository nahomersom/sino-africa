import { verticalDetailBySlug } from "./content";
import type { VerticalDetailContent, VerticalDetailSlug } from "./types";

export function isVerticalDetailSlug(s: string): s is VerticalDetailSlug {
  return s in verticalDetailBySlug;
}

export function getVerticalDetail(slug: string): VerticalDetailContent | undefined {
  if (!isVerticalDetailSlug(slug)) return undefined;
  return verticalDetailBySlug[slug];
}
