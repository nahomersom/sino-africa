import { appendStrapiQuery, getStrapiApiBaseUrl } from "@/src/lib/strapiBase";
import type {
  Project,
  ProjectCategory,
  StrapiListResponse,
  StrapiSingleResponse,
} from "@/src/store/strapiApi";

/** Kept in sync with Strapi grid pagination in `strapiApi.getProjects`. */
export const PROJECTS_GRID_PAGE_SIZE = 9;

const serverFetchCache =
  typeof window === "undefined"
    ? ({ next: { revalidate: 0 } } satisfies RequestInit & { next?: { revalidate: number } })
    : undefined;

async function strapiGetJson<T>(
  pathWithQuery: string,
  init?: RequestInit,
): Promise<T | null> {
  const base = getStrapiApiBaseUrl();
  if (!base) return null;
  const url = `${base.replace(/\/$/, "")}/${pathWithQuery.replace(/^\//, "")}`;
  const res = await fetch(url, init ?? serverFetchCache);
  if (!res.ok) return null;
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function fetchProjectsList(
  params?: Record<string, unknown>,
): Promise<Project[]> {
  const path = appendStrapiQuery("projects", {
    populate: "*",
    "pagination[pageSize]": 100,
    ...(params ?? {}),
  });
  const json = await strapiGetJson<StrapiListResponse<Project>>(path);
  return json?.data ?? [];
}

/**
 * Load one project: `GET /api/projects/:id` first (detail route), then filtered collection as fallback.
 */
export async function fetchProjectById(
  id: string | number,
  params?: Record<string, unknown>,
): Promise<Project | null> {
  const idStr = String(id).trim();
  const merged = { populate: "*", ...(params ?? {}) };

  const bySegment = await strapiGetJson<StrapiSingleResponse<Project>>(
    appendStrapiQuery(`projects/${encodeURIComponent(idStr)}`, merged),
  );
  if (bySegment?.data) return bySegment.data;

  const filterKey = /^\d+$/.test(idStr) ? "filters[id][$eq]" : "filters[documentId][$eq]";
  const filtered = await strapiGetJson<StrapiListResponse<Project>>(
    appendStrapiQuery("projects", {
      ...merged,
      "pagination[pageSize]": 1,
      [filterKey]: idStr,
    }),
  );
  if (filtered?.data?.[0]) return filtered.data[0];

  const list = await fetchProjectsList({
    populate: "*",
    "pagination[pageSize]": 100,
    ...(params ?? {}),
  });
  return (
    list.find((p) => String(p.id) === idStr || p.documentId === idStr) ?? null
  );
}

/** Resolve by Strapi `slug` first, then same fallbacks as `fetchProjectById`. */
export async function fetchProjectBySlug(
  slug: string,
  params?: Record<string, unknown>,
): Promise<Project | null> {
  const s = slug.trim();
  if (!s) return null;
  const merged = { populate: "*", ...(params ?? {}) };
  const bySlug = await strapiGetJson<StrapiListResponse<Project>>(
    appendStrapiQuery("projects", {
      ...merged,
      "pagination[pageSize]": 1,
      "filters[slug][$eq]": s,
    }),
  );
  if (bySlug?.data?.[0]) return bySlug.data[0];
  return fetchProjectById(s, params);
}

/** Route segments for `/projects/[slug]` when using Strapi-backed pages. */
export async function fetchAllProjectSlugs(): Promise<string[]> {
  const projects = await fetchProjectsList();
  return projects.map((p) =>
    typeof p.slug === "string" && p.slug.trim().length > 0 ? p.slug.trim() : String(p.id),
  );
}

export async function fetchProjectCategoriesList(
  params?: Record<string, unknown>,
): Promise<ProjectCategory[]> {
  const path = appendStrapiQuery("project-categories", {
    populate: "*",
    "pagination[pageSize]": 100,
    ...(params ?? {}),
  });
  const json = await strapiGetJson<StrapiListResponse<ProjectCategory>>(path);
  return json?.data ?? [];
}
