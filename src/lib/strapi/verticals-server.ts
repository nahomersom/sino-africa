import type { StrapiListResponse } from "@/src/store/strapiApi";
import type { Vertical } from "@/src/store/strapiApi";

function getStrapiBaseUrl(): string | null {
  const raw = process.env.NEXT_PUBLIC_STRAPI_URL || "https://sino-cms.ablazelabs.com";
  if (!raw) return null;
  return raw.replace(/\/api\/?$/, "");
}

function appendQuery(url: string, params: Record<string, unknown>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    search.append(key, String(value));
  }
  const qs = search.toString();
  if (!qs) return url;
  return url.includes("?") ? `${url}&${qs}` : `${url}?${qs}`;
}

const VERTICAL_POPULATE: Record<string, string | number> = {
  "populate[logo]": "true",
  "populate[heroImage]": "true",
  "populate[gradient]": "true",
  "populate[focusAreas][populate][images]": "true",
  "populate[ecosystemPartners][populate][icon]": "true",
};

export async function fetchVerticalsList(): Promise<Vertical[]> {
  const base = getStrapiBaseUrl();
  if (!base) return [];
  const url = appendQuery(`${base}/api/verticals`, {
    ...VERTICAL_POPULATE,
    "pagination[pageSize]": 100,
  });
  try {
    const res = await fetch(url, { next: { revalidate: 120 } });
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
  const base = getStrapiBaseUrl();
  if (!base) return null;
  const url = appendQuery(`${base}/api/verticals`, {
    "filters[slug][$eq]": slug,
    ...VERTICAL_POPULATE,
    "pagination[pageSize]": 1,
  });
  try {
    const res = await fetch(url, { next: { revalidate: 120 } });
    if (!res.ok) return null;
    const json = (await res.json()) as StrapiListResponse<Vertical>;
    return json?.data?.[0] ?? null;
  } catch {
    return null;
  }
}
