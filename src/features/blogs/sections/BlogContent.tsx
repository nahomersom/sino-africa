"use client";

import type { RichTextNode } from "@/src/store/strapiApi";
import {
  hasStrapiRichTextContent,
  StrapiRichTextBody,
} from "@/src/lib/strapiBlocksRichText";

interface BlogContentProps {
  description: string | RichTextNode[];
  publishedDate?: string;
}

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
          <StrapiRichTextBody value={description} />
        ) : (
          <p className="text-[#5C606C] italic">No content available for this blog post.</p>
        )}
      </div>
    </div>
  );
}
