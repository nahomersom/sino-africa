import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// --- Strapi Media type ---

export type StrapiMedia = {
  id: number | string;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Record<string, unknown> | null;
  url: string;
  previewUrl: string | null;
  mime: string;
  ext: string;
  size: number;
};

// --- Blog types (Strapi v5 flat response) ---

export type RichTextChild = {
  text: string;
  type: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

export type RichTextBlock = {
  type: string;
  children: RichTextChild[];
};

export type BlogTag = {
  id: number | string;
  documentId: string;
  name: string;
};

export type Blog = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  summary: string;
  description: RichTextBlock[];
  cover_img: StrapiMedia | null;
  gallery: StrapiMedia[];
  isFeatured: boolean;
  readTime: string | null;
  publishedDate: string;
  tags: BlogTag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiBlogsResponse = {
  data: Blog[];
  meta: { pagination: StrapiPagination };
};

export type StrapiBlogResponse = {
  data: Blog;
  meta: Record<string, unknown>;
};

export type StrapiListResponse<T> = {
  data: T[];
  meta?: { pagination?: Partial<StrapiPagination> } & Record<string, unknown>;
};

export type StrapiSingleResponse<T> = {
  data: T;
  meta?: Record<string, unknown>;
};

// --- Legacy types (kept for existing endpoints) ---

export type StrapiEntity<TAttributes> = {
  id: number | string;
  attributes: TAttributes;
};

export type StrapiPagedResponse<TAttributes> = {
  data: Array<StrapiEntity<TAttributes>>;
};

export type LandingPageAttributes = {
  title?: string;
  subtitle?: string;
  body?: string;
};

export type AboutPageAttributes = {
  title?: string;
  body?: string;
};

export type ContactSubmission = {
  name: string;
  title: string;
  email: string;
  phone: string;
  message: string;
  locale?: string;
  localizations?: (string | number)[];
};

export type ContactSubmissionRequest = {
  data: ContactSubmission;
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// Normalize base URL (remove /api if present)
const STRAPI_BASE_URL = STRAPI_URL?.replace(/\/api\/?$/, "");

function appendStrapiQuery(
  url: string,
  params?: Record<string, unknown> | undefined
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
      // Strapi accepts repeated keys for arrays; keep it simple.
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

/** Populate keys tuned for Strapi v5 nested components / relations on `verticals`. */
const VERTICAL_DEEP_POPULATE: Record<string, unknown> = {
  "populate[logo]": "true",
  "populate[heroImage]": "true",
  "populate[gradient]": "true",
  "populate[focusAreas][populate][images]": "true",
  "populate[ecosystemPartners][populate][icon]": "true",
};

// Helper to resolve Strapi media URLs (relative or absolute)
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("https://") || url.startsWith("http://")) return url;
  if (url.startsWith("//")) return `https:${url}`;

  const base = STRAPI_BASE_URL || "";
  return `${base}${url}`;
}

/** Raw `url` from a flat Strapi upload, nested `{ data: upload }`, or v4-style `{ data: { attributes } }`. */
export function resolveStrapiUploadUrl(media: unknown): string | undefined {
  if (!media || typeof media !== "object") return undefined;
  const m = media as Record<string, unknown>;
  if (typeof m.url === "string") return m.url;
  const data = m.data;
  if (data == null || typeof data !== "object") return undefined;
  const d = data as Record<string, unknown>;
  if (typeof d.url === "string") return d.url;
  const attrs = d.attributes;
  if (attrs && typeof attrs === "object") {
    const url = (attrs as Record<string, unknown>).url;
    if (typeof url === "string") return url;
  }
  return undefined;
}

export type Vertical = {
  id: number | string;
  documentId?: string;
  title?: string;
  name?: string;
  slug?: string;
  description?: string;
  summary?: string;
  icon?: StrapiMedia | null;
  institutionalCapacityDescription?: string;
  focusAreasDescription?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  logo?: StrapiMedia | null;
  heroImage?: StrapiMedia | null;
  focusAreas?: VerticalFocusArea[];
  ecosystemPartners?: VerticalEcosystemPartner[];
  gradient?: VerticalGradient | null;
};

export type VerticalFocusArea = {
  id: number | string;
  title?: string;
  description?: string;
  images?: StrapiMedia[];
};

export type VerticalEcosystemPartner = {
  id: number | string;
  title?: string;
  description?: string;
  icon?: StrapiMedia | null;
};

export type VerticalGradient = {
  id: number | string;
  accentColor: string;
  baseColor: string;
};

export type Partner = {
  id: number | string;
  documentId?: string;
  name: string;
  link?: string | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  order?: number | null;
  logo?: StrapiMedia | null;
};

export type TeamRank = {
  id: number | string;
  documentId?: string;
  name: string;
  slug?: string | null;
  order?: number | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type Team = {
  id: number | string;
  documentId?: string;
  name: string;
  position?: string | null;
  bio?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  isHighlighted?: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  image?: StrapiMedia | null;
  rank?: TeamRank | null;
};

export const strapiApi = createApi({
  reducerPath: "strapiApi",
  baseQuery: fetchBaseQuery({
    // Ensures /api is appended exactly once
    baseUrl: STRAPI_BASE_URL ? `${STRAPI_BASE_URL}/api` : "",
  }),
  endpoints: (builder) => ({
    // Legacy endpoints
    getLandingPage: builder.query<
      StrapiEntity<LandingPageAttributes> | null,
      void
    >({
      query: () =>
        "landing-pages?populate=*&pagination[pageSize]=1",
      transformResponse: (
        response: StrapiPagedResponse<LandingPageAttributes>
      ) => {
        return response?.data?.[0] ?? null;
      },
    }),

    getAboutPage: builder.query<
      StrapiEntity<AboutPageAttributes> | null,
      void
    >({
      query: () =>
        "about-pages?populate=*&pagination[pageSize]=1",
      transformResponse: (
        response: StrapiPagedResponse<AboutPageAttributes>
      ) => {
        return response?.data?.[0] ?? null;
      },
    }),

    // Blog endpoints
    getBlogs: builder.query<Blog[], void>({
      query: () =>
        "blogs?populate=*&pagination[pageSize]=100",
      transformResponse: (response: StrapiBlogsResponse) => {
        return response?.data ?? [];
      },
    }),

    getBlogByDocumentId: builder.query<Blog | null, string>({
      query: (documentId) =>
        `blogs/${documentId}?populate=*`,
      transformResponse: (response: StrapiBlogResponse) => {
        return response?.data ?? null;
      },
    }),

    createContactSubmission: builder.mutation<
      void,
      ContactSubmissionRequest
    >({
      query: (body) => ({
        url: "contact-submissions",
        method: "POST",
        body,
      }),
    }),

    // Verticals endpoints
    getVerticals: builder.query<Vertical[], Record<string, unknown> | void>({
      query: (params) => {
        const base = "verticals";
        const withDefaults: Record<string, unknown> = {
          ...VERTICAL_DEEP_POPULATE,
          "pagination[pageSize]": 100,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiListResponse<Vertical>) => {
        return response?.data ?? [];
      },
    }),

    getVerticalById: builder.query<
      Vertical | null,
      { id: number | string; params?: Record<string, unknown> }
    >({
      query: ({ id, params }) => {
        const base = `verticals/${id}`;
        const withDefaults: Record<string, unknown> = {
          ...VERTICAL_DEEP_POPULATE,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiSingleResponse<Vertical>) => {
        return response?.data ?? null;
      },
    }),

    getVerticalBySlug: builder.query<Vertical | null, string>({
      query: (slug) =>
        appendStrapiQuery("verticals", {
          "filters[slug][$eq]": slug,
          ...VERTICAL_DEEP_POPULATE,
          "pagination[pageSize]": 1,
        }),
      transformResponse: (response: StrapiListResponse<Vertical>) => {
        const row = response?.data?.[0];
        return row ?? null;
      },
    }),

    // Partners endpoints
    getPartners: builder.query<Partner[], Record<string, unknown> | void>({
      query: (params) => {
        const base = "partners";
        const withDefaults: Record<string, unknown> = {
          populate: "*",
          sort: "order:asc",
          "pagination[pageSize]": 100,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiListResponse<Partner>) => {
        return response?.data ?? [];
      },
    }),

    // Teams endpoints
    getTeams: builder.query<Team[], Record<string, unknown> | void>({
      query: (params) => {
        const base = "teams";
        const withDefaults: Record<string, unknown> = {
          populate: "*",
          sort: ["isHighlighted:desc", "rank.order:asc", "name:asc"],
          "pagination[pageSize]": 100,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiListResponse<Team>) => {
        return response?.data ?? [];
      },
    }),
  }),
});

export const {
  useGetLandingPageQuery,
  useGetAboutPageQuery,
  useGetBlogsQuery,
  useGetBlogByDocumentIdQuery,
  useGetVerticalsQuery,
  useGetVerticalByIdQuery,
  useGetVerticalBySlugQuery,
  useGetPartnersQuery,
  useGetTeamsQuery,
  useCreateContactSubmissionMutation,
} = strapiApi;