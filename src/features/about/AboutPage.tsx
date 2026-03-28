"use client";

import { useGetAboutPageQuery } from "@/src/store/strapiApi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export function AboutPage() {
  const { data, isLoading, error } = useGetAboutPageQuery(undefined, {
    skip: !STRAPI_URL,
  });

  const title = data?.attributes.title ?? "About Sino Africa";
  const body = data?.attributes.body ?? "Edit the about content in Strapi.";

  return (
    <section className="flex w-full flex-1 flex-col items-start gap-6">
      {isLoading && (
        <div className="text-sm text-zinc-600">
          Loading about content...
        </div>
      )}
      {error && (
        <div className="text-sm text-red-600">
          Failed to load about content.
        </div>
      )}

      <div className="flex flex-col gap-3">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h1>
        <div className="max-w-3xl text-zinc-700">
          {body}
        </div>
      </div>
    </section>
  );
}