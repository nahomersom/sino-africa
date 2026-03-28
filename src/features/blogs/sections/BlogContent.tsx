"use client";

import { RichTextBlock } from "@/src/store/strapiApi";

interface BlogContentProps {
  description: RichTextBlock[];
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
    <div className="flex flex-col gap-[40px] text-[#161C2D]/80 text-[16px] leading-[1.8] font-normal w-full md:max-w-[677px] lg:max-w-[700px]">
      {formattedDate && (
        <p className="text-[#5C606C] text-[14px] font-medium">
          Published on {formattedDate}
        </p>
      )}

      {description && description.length > 0 ? (
        description.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p key={index}>
                {block.children.map((child, childIndex) => {
                  let content: React.ReactNode = child.text;

                  if (child.bold) {
                    content = <strong key={childIndex}>{content}</strong>;
                  }
                  if (child.italic) {
                    content = <em key={childIndex}>{content}</em>;
                  }
                  if (child.underline) {
                    content = <u key={childIndex}>{content}</u>;
                  }

                  return <span key={childIndex}>{content}</span>;
                })}
              </p>
            );
          }

          if (block.type === "heading") {
            return (
              <h2 key={index} className="text-[#161C2D] text-[24px] font-semibold">
                {block.children.map((child) => child.text).join("")}
              </h2>
            );
          }

          // Fallback for other block types
          return (
            <div key={index}>
              {block.children.map((child) => child.text).join("")}
            </div>
          );
        })
      ) : (
        <p className="text-[#5C606C] italic">No content available for this blog post.</p>
      )}
    </div>
  );
}
