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

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// Helper to resolve Strapi media URLs (relative or absolute)
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  // Strip trailing slash from base, prepend to relative url
  const base = STRAPI_URL ? STRAPI_URL.replace(/\/api\/?$/, "") : "";
  return `${base}${url}`;
}

export const strapiApi = createApi({
  reducerPath: "strapiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: STRAPI_URL || "",
  }),
  endpoints: (builder) => ({
    // Legacy endpoints
    getLandingPage: builder.query<StrapiEntity<LandingPageAttributes> | null, void>({
      query: () => "landing-pages?populate=*&pagination[pageSize]=1",
      transformResponse: (response: StrapiPagedResponse<LandingPageAttributes>) => {
        return response?.data?.[0] ?? null;
      },
    }),
    getAboutPage: builder.query<StrapiEntity<AboutPageAttributes> | null, void>({
      query: () => "about-pages?populate=*&pagination[pageSize]=1",
      transformResponse: (response: StrapiPagedResponse<AboutPageAttributes>) => {
        return response?.data?.[0] ?? null;
      },
    }),

    // Blog endpoints
    getBlogs: builder.query<Blog[], void>({
      query: () => "blogs?populate=*&pagination[pageSize]=100",
      transformResponse: (response: StrapiBlogsResponse) => {
        return response?.data ?? [];
      },
    }),
    getBlogByDocumentId: builder.query<Blog | null, string>({
      query: (documentId) => `blogs/${documentId}?populate=*`,
      transformResponse: (response: StrapiBlogResponse) => {
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
} = strapiApi;
