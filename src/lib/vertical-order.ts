/** Canonical display order for verticals across the app: ACT IT → SinoSec → Mobilitex. */
const VERTICAL_DISPLAY_ORDER: Readonly<Record<string, number>> = {
  actit: 0,
  sinosec: 1,
  mobilitex: 2,
};

const UNORDERED_RANK = 100;

/** Lowercase + strip non-alphanumerics so "SinoSec", "sinosec", and any legacy "Sino Sec." all match. */
function normalize(s: string | null | undefined): string {
  return (s ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

/** Rank a vertical-like value (slug, title, or href like "/our-verticals/sinosec"). */
export function rankVertical(value: string | null | undefined): number {
  const raw = (value ?? "").trim();
  const tail = raw.includes("/") ? raw.split("/").filter(Boolean).pop() ?? "" : raw;
  return VERTICAL_DISPLAY_ORDER[normalize(tail)] ?? UNORDERED_RANK;
}

/** Sort an array by the canonical vertical order, using each item's slug/title/href via `getKey`. */
export function sortByVerticalOrder<T>(
  items: readonly T[],
  getKey: (item: T) => string | null | undefined,
): T[] {
  return [...items].sort((a, b) => {
    const ka = (getKey(a) ?? "").trim();
    const kb = (getKey(b) ?? "").trim();
    const ra = rankVertical(ka);
    const rb = rankVertical(kb);
    return ra - rb || normalize(ka).localeCompare(normalize(kb));
  });
}
