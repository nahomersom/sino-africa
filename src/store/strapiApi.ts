import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchProjectById, PROJECTS_GRID_PAGE_SIZE } from "@/src/features/projects/fetchProjects";
import { appendStrapiQuery, getStrapiApiBaseUrl, getStrapiMediaUrl } from "@/src/lib/strapiBase";

export { getStrapiMediaUrl };

const strapiBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => fetchBaseQuery({ baseUrl: getStrapiApiBaseUrl() })(args, api, extraOptions);

// --- Strapi Media type ---

export type StrapiMedia = {
  id: number | string;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: Record<string, unknown> | string | null;
  url: string;
  previewUrl: string | null;
  mime: string;
  ext: string;
  size: number;
};

// --- Blog types (Strapi v5 flat response) ---

export type RichTextNode = {
  type: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  children?: RichTextNode[];
  level?: number;
  format?: "ordered" | "unordered";
  url?: string;
  target?: string;
  rel?: string;
};

export type RichTextBlock = RichTextNode;

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

/** Repeating component `{ id, text }` on project. */
export type ProjectTextEntry = {
  id?: string | number;
  text?: string | null;
};

/** Single block field e.g. problem / solution / results. */
export type ProjectTextBlock = {
  id?: string | number;
  // Strapi commonly stores rich-text blocks as `{ text: RichTextBlock[] }`,
  // but some schemas may return plain strings as well.
  text?: string | RichTextBlock[] | null;
};

/** Populated media on project (schema uses string ids). */
export type ProjectMedia = {
  id?: string | number;
  documentId?: string;
  name?: string | null;
  alternativeText?: string | null;
  caption?: string | null;
  url?: string | null;
  width?: number;
  height?: number;
  mime?: string | null;
  ext?: string | null;
  size?: number;
  formats?: unknown;
  previewUrl?: string | null;
};

/**
 * Category from `GET /project-categories` with optional nested `projects`
 * when relations are populated (same project shape as `/projects`).
 */
export interface ProjectCategory {
  id: string | number;
  documentId: string;
  /** From OpenAPI; optional at runtime if a response is partially populated. */
  name?: string;
  /** Some schemas expose a display title; prefer `name` when both exist. */
  title?: string;
  slug?: string;
  projects?: Project[] | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string;
  localizations?: unknown[];
  createdBy?: unknown;
  updatedBy?: unknown;
}

/** Strapi flat project — `/projects`, `/projects/:id`, and nested under categories. */
export interface Project {
  id: string | number;
  documentId?: string;
  title: string;
  slug?: string;
  summary?: string | null;
  description?: string | RichTextBlock[] | null;
  development?: ProjectTextEntry[] | null;
  top_features?: ProjectTextEntry[] | null;
  client?: ProjectTextEntry[] | string | null;
  problem?: ProjectTextBlock | null;
  solution?: ProjectTextBlock | null;
  /** May be a Strapi block `{ id, text }` or legacy string / rich text. */
  results?: string | RichTextBlock[] | ProjectTextBlock | null;
  overview?: string | RichTextBlock[] | null;
  challenges?: string | RichTextBlock[] | ProjectTextBlock | null;
  what_we_did?: unknown;
  technologies?: unknown;
  cover_img?: ProjectMedia | StrapiMedia | null;
  gallery?: Array<ProjectMedia | StrapiMedia> | null;
  category?: string | { slug?: string } | null;
  project_category?: ProjectCategory | string | null;
  vertical?: { slug?: string } | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string;
  localizations?: unknown[];
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

const VERTICAL_DEEP_POPULATE: Record<string, string> = {
  "populate[logo]": "true",
  "populate[heroImage]": "true",
  "populate[gradient]": "true",
  "populate[focusAreas][populate][images]": "true",
  "populate[ecosystemPartners][populate][icon]": "true",
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
  baseQuery: strapiBaseQuery,
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
    getBlogs: builder.query<{blogs: Blog[], pagination: StrapiPagination}, Record<string, unknown> | void>({
      query: (params) => {
        const base = "blogs";
        const withDefaults: Record<string, unknown> = {
          populate: "*",
          "pagination[pageSize]": 25,
          "pagination[page]": 1,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiBlogsResponse) => {
        return {
          blogs: response?.data ?? [],
          pagination: response?.meta?.pagination ?? {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: response?.data?.length ?? 0
          }
        };
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

    getVerticalsPaginated: builder.query<
      { data: Vertical[]; pagination: StrapiPagination },
      Record<string, unknown> | void
    >({
      query: (params) => {
        const base = "verticals";
        const withDefaults: Record<string, unknown> = {
          ...VERTICAL_DEEP_POPULATE,
          "pagination[pageSize]": 3,
          "pagination[page]": 1,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiListResponse<Vertical>) => {
        const p = response?.meta?.pagination;
        const data = response?.data ?? [];
        const pageSize = p?.pageSize ?? 3;
        const total = p?.total ?? data.length;
        const pageCount =
          p?.pageCount ??
          (total > 0 ? Math.ceil(total / pageSize) : data.length > 0 ? 1 : 0);
        return {
          data,
          pagination: {
            page: p?.page ?? 1,
            pageSize,
            pageCount,
            total,
          },
        };
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

    getProjects: builder.query<
      { projects: Project[]; pagination: StrapiPagination },
      Record<string, unknown> | void
    >({
      query: (params) => {
        const base = "projects";
        const withDefaults: Record<string, unknown> = {
          populate: "*",
          "pagination[pageSize]": PROJECTS_GRID_PAGE_SIZE,
          "pagination[page]": 0,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiListResponse<Project>) => {
        const p = response?.meta?.pagination;
        const data = response?.data ?? [];
        const pageSize = p?.pageSize ?? PROJECTS_GRID_PAGE_SIZE;
        const total = p?.total ?? data.length;
        const pageCount =
          p?.pageCount ??
          (total > 0 ? Math.ceil(total / pageSize) : data.length > 0 ? 1 : 0);
        return {
          projects: data,
          pagination: {
            page: p?.page ?? 0,
            pageSize,
            pageCount,
            total,
          },
        };
      },
    }),

    getProjectById: builder.query<
      Project | null,
      { id: number | string; params?: Record<string, unknown> }
    >({
      async queryFn({ id, params }) {
        const project = await fetchProjectById(id, params);
        if (project) {
          return { data: project };
        }
        return {
          error: {
            status: 404,
            data: "Project not found",
          } as FetchBaseQueryError,
        };
      },
    }),

    getProjectCategories: builder.query<
      ProjectCategory[],
      Record<string, unknown> | void
    >({
      query: (params) => {
        const base = "project-categories";
        const withDefaults: Record<string, unknown> = {
          populate: "*",
          "pagination[pageSize]": 100,
          ...(params ?? {}),
        };
        return appendStrapiQuery(base, withDefaults);
      },
      transformResponse: (response: StrapiListResponse<ProjectCategory>) => {
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
  useGetVerticalsPaginatedQuery,
  useGetPartnersQuery,
  useGetTeamsQuery,
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useGetProjectCategoriesQuery,
  useCreateContactSubmissionMutation,
} = strapiApi;