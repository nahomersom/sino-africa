"use client";

import { RichTextNode } from "@/src/store/strapiApi";

interface BlogContentProps {
  description: RichTextNode[];
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

  const renderRichText = (nodes: RichTextNode[]): React.ReactNode => {
    if (!nodes || !Array.isArray(nodes)) return null;

    return nodes.map((node, index) => {
      // 1. Handle Text Leaf Nodes
      if (node.type === "text" || (!node.type && node.text !== undefined)) {
        let content: React.ReactNode = node.text;

        if (content === "") return null; // Skip empty strings

        if (node.bold) content = <strong key={`b-${index}`}>{content}</strong>;
        if (node.italic) content = <em key={`i-${index}`}>{content}</em>;
        if (node.underline) content = <u key={`u-${index}`}>{content}</u>;
        if (node.strikethrough) content = <s key={`s-${index}`}>{content}</s>;
        if (node.code) content = <code key={`c-${index}`} className="bg-gray-100 text-[#161C2D] px-1.5 py-0.5 rounded text-[14px] font-mono border border-gray-200">{content}</code>;

        return <span key={index}>{content}</span>;
      }

      // 2. Process Children recursively (safe check)
      const children = node.children ? renderRichText(node.children) : null;

      // 3. Handle Block Nodes
      switch (node.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-6 last:mb-0">
              {children}
            </p>
          );
        case "heading":
          const level = node.level || 2;
          const Tag = `h${level}` as any;
          const headingClass =
            level === 1 ? "text-[#161C2D] text-[36px] font-bold mt-10 mb-6 leading-tight" :
              level === 2 ? "text-[#161C2D] text-[28px] font-semibold mt-10 mb-6 leading-tight" :
                level === 3 ? "text-[#161C2D] text-[22px] font-semibold mt-8 mb-4 leading-tight" :
                  "text-[#161C2D] text-[18px] font-medium mt-8 mb-4 leading-normal";
          return (
            <Tag key={index} className={headingClass}>
              {children}
            </Tag>
          );
        case "list":
          const ListTag = node.format === "ordered" ? "ol" : "ul";
          // Add margin-left for nesting. If not nested, ml-6 is default.
          const listClass = node.format === "ordered"
            ? "list-decimal list-outside ml-10 mb-6 space-y-3"
            : "list-disc list-outside ml-10 mb-6 space-y-3";
          return (
            <ListTag key={index} className={listClass}>
              {children}
            </ListTag>
          );
        case "list-item":
          return (
            <li key={index} className="pl-2 leading-relaxed">
              {children}
            </li>
          );
        case "link":
          return (
            <a
              key={index}
              href={node.url}
              target={node.target || "_self"}
              rel={node.rel || "noopener noreferrer"}
              className="text-[#64C294] font-semibold hover:underline decoration-2 underline-offset-4 transition-all focus:outline-none"
            >
              {children}
            </a>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-[#64C294] bg-[#F7F9FB] pl-6 pr-4 py-8 italic my-10 text-[#161C2D]/70 text-[20px] rounded-r-[8px]"
            >
              {children}
            </blockquote>
          );
        case "code":
          return (
            <pre key={index} className="bg-[#161C2D] text-white p-6 rounded-[12px] my-8 overflow-x-auto text-[14px] leading-relaxed font-mono">
              <code>{children}</code>
            </pre>
          );
        default:
          return <div key={index} className="mb-6">{children}</div>;
      }
    });
  };

  return (
    <div className="flex flex-col gap-[24px] lg:gap-[43px] text-[#161C2D]/80 text-[14px] md:text-[16px] leading-[1.8] font-normal w-full lg:w-[887px]">
      {formattedDate && (
        <p className="text-[#5C606C] text-[14px] font-medium mb-[16px]">
          Published on {formattedDate}
        </p>
      )}

      <div className="rich-text-content w-full">
        {description && description.length > 0 ? (
          renderRichText(description)
        ) : (
          <p className="text-[#5C606C] italic">No content available for this blog post.</p>
        )}
      </div>
    </div>
  );
}
