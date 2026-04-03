"use client";

import type { RichTextNode } from "@/src/store/strapiApi";
import {
  hasStrapiRichTextContent,
  StrapiBlocksRichText,
} from "@/src/lib/strapiBlocksRichText";

interface BlogContentProps {
  description: string | RichTextNode[];
  publishedDate?: string;
}

const BLOG_BODY_CLASS =
  "text-center text-base font-light leading-[1.65] tracking-[-0.0125em] text-black break-words [overflow-wrap:anywhere] md:text-left md:text-sm md:leading-[1.65] lg:text-lg";

export function BlogContent({ description, publishedDate }: BlogContentProps) {
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex flex-col gap-[24px] lg:gap-[43px] text-[#161C2D]/80 text-[14px] md:text-[16px] leading-[1.8] font-normal w-full lg:w-[887px]">
      {formattedDate && (
        <p className="text-[#5C606C] text-[14px] font-medium mb-[16px]">
          Published on {formattedDate}
        </p>
      )}

      <div className="rich-text-content w-full">
        {hasStrapiRichTextContent(description) ? (
          <div className="relative w-full min-h-0 max-w-[65ch] overflow-x-hidden break-words [overflow-wrap:anywhere]">
            <StrapiBlocksRichText value={description} className={BLOG_BODY_CLASS} />
          </div>
        ) : (
          <p className="text-[#5C606C] italic">No content available for this blog post.</p>
        )}
      </div>
    </div>
  );
}
