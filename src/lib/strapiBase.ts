/**
 * CMS origin without trailing `/api`.
 * Read lazily so Server Components and API routes always see current env (Next may not
 * set `process.env` before the first import of this module). Prefer `STRAPI_URL` on the
 * server; fall back to `NEXT_PUBLIC_STRAPI_URL` for browser/build.
 */
export function getStrapiRootUrl(): string {
  const raw =
    typeof process !== "undefined"
      ? (process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL ?? "https://sino-cms.ablazelabs.com")
      : undefined;
  if (!raw) return "";
  // Strip optional /api suffix, trim, then remove trailing slashes so `${root}/api` never becomes `//api`
  // (Strapi returns 400 "Malicious Path" for paths like https://host//api/...).
  return raw.replace(/\/api\/?$/, "").trim().replace(/\/+$/, "");
}

export function getStrapiApiBaseUrl(): string {
  const root = getStrapiRootUrl();
  return root ? `${root}/api` : "";
}

export function appendStrapiQuery(
  url: string,
  params?: Record<string, unknown> | undefined,
): string {
  if (!params || Object.keys(params).length === 0) return url;

  const search = new URLSearchParams();

  const add = (key: string, value: unknown) => {
    if (value === undefined || value === null) return;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      search.append(key, String(value));
      return;
    }
    if (Array.isArray(value)) {
      for (const v of value) add(key, v);
      return;
    }
    if (typeof value === "object") {
      for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
        add(`${key}[${k}]`, v);
      }
    }
  };

  for (const [k, v] of Object.entries(params)) add(k, v);

  const qs = search.toString();
  if (!qs) return url;
  return url.includes("?") ? `${url}&${qs}` : `${url}?${qs}`;
}

export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  const root = getStrapiRootUrl();
  return `${root}${url}`;
}
