import { appendStrapiQuery, getStrapiApiBaseUrl } from "@/src/lib/strapiBase";
import type { StrapiListResponse } from "@/src/store/strapiApi";
import type { Vertical } from "@/src/store/strapiApi";

const VERTICAL_POPULATE: Record<string, string | number> = {
  "populate[logo]": "true",
  "populate[heroImage]": "true",
  "populate[gradient]": "true",
  "populate[focusAreas][populate][images]": "true",
  "populate[ecosystemPartners][populate][icon]": "true",
};

export async function fetchVerticalsList(): Promise<Vertical[]> {
  const apiBase = getStrapiApiBaseUrl();
  if (!apiBase) return [];
  const url = appendStrapiQuery(`${apiBase}/verticals`, {
    ...VERTICAL_POPULATE,
    "pagination[pageSize]": 100,
  });
  try {
    const res = await fetch(url, { next: { revalidate: 0 } });
    if (!res.ok) return [];
    const json = (await res.json()) as StrapiListResponse<Vertical>;
    return json?.data ?? [];
  } catch {
    return [];
  }
}

export async function fetchVerticalBySlugServer(
  slug: string
): Promise<Vertical | null> {
  const apiBase = getStrapiApiBaseUrl();
  if (!apiBase) return null;
  const url = appendStrapiQuery(`${apiBase}/verticals`, {
    "filters[slug][$eq]": slug,
    ...VERTICAL_POPULATE,
    "pagination[pageSize]": 1,
  });
  try {
    const res = await fetch(url, { next: { revalidate: 0 } });
    if (!res.ok) return null;
    const json = (await res.json()) as StrapiListResponse<Vertical>;
    return json?.data?.[0] ?? null;
  } catch {
    return null;
  }
}
