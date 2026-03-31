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

// Helper to resolve Strapi media URLs (relative or absolute)
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;

  const base = STRAPI_BASE_URL || "";
  return `${base}${url}`;
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
        // Sensible defaults while still allowing override
        const withDefaults: Record<string, unknown> = {
          populate: "*",
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
          populate: "*",
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiSingleResponse<Vertical>) => {
        return response?.data ?? null;
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
  useCreateContactSubmissionMutation,
} = strapiApi;