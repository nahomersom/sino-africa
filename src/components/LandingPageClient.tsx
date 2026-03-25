"use client";

import { useGetLandingPageQuery } from "@/src/store/strapiApi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function LandingPageClient() {
  const { data, isLoading, error } = useGetLandingPageQuery(undefined, {
    // Avoid calling Strapi until the env var is set.
    skip: !STRAPI_URL,
  });

  const title = data?.attributes.title ?? "Welcome to Sino Africa";
  const subtitle =
    data?.attributes.subtitle ?? "A modern landing page powered by Strapi + Redux Toolkit.";
  const body = data?.attributes.body ?? "Edit the content in Strapi to update this section.";

  return (
    <section className="flex w-full flex-1 flex-col items-start gap-6">
      {isLoading && <div className="text-sm text-zinc-600">Loading landing content...</div>}
      {error && <div className="text-sm text-red-600">Failed to load landing content.</div>}

      <div className="flex flex-col gap-3">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-7 text-zinc-700 dark:text-zinc-300">
          {subtitle}
        </p>
      </div>

      <div className="max-w-2xl text-zinc-700 dark:text-zinc-300">{body}</div>
    </section>
  );
}

