import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Strapi v4 typical response shape:
// { data: [{ id, attributes: { ... } }, ...], meta: { ... } }
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
const STRAPI_BASE_URL = STRAPI_URL?.replace(/\/api\/?$/, "");

export const strapiApi = createApi({
  reducerPath: "strapiApi",
  baseQuery: fetchBaseQuery({
    // Strapi base is typically: http://localhost:1337
    // Collection endpoints live under: /api/<collection-name>
    baseUrl: STRAPI_BASE_URL ? `${STRAPI_BASE_URL}/api` : "",
  }),
  endpoints: (builder) => ({
    // Change `landing-pages` to your Strapi collection/content type name.
    getLandingPage: builder.query<StrapiEntity<LandingPageAttributes> | null, void>({
      query: () => "landing-pages?populate=*&pagination[pageSize]=1",
      transformResponse: (response: StrapiPagedResponse<LandingPageAttributes>) => {
        return response?.data?.[0] ?? null;
      },
    }),
    // Change `about-pages` to your Strapi collection/content type name.
    getAboutPage: builder.query<StrapiEntity<AboutPageAttributes> | null, void>({
      query: () => "about-pages?populate=*&pagination[pageSize]=1",
      transformResponse: (response: StrapiPagedResponse<AboutPageAttributes>) => {
        return response?.data?.[0] ?? null;
      },
    }),
  }),
});

export const { useGetLandingPageQuery, useGetAboutPageQuery } = strapiApi;

