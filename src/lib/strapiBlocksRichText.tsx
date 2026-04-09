"use client";

import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import type { RichTextNode } from "@/src/store/strapiApi";
import { stringToBlocksContent } from "@/src/lib/strapiRichTextStringToBlocks";
import { cn } from "@/src/lib/utils";

export { prepareStrapiMarkdownString } from "@/src/lib/strapiRichTextStringToBlocks";

/** Strapi block JSON is compatible with BlocksContent at runtime; our API types use loose `RichTextNode[]`. */
export type StrapiRichTextValue = string | BlocksContent | RichTextNode[] | null | undefined;

/**
 * If Strapi returns blocks with one plain `text` leaf containing raw markdown/HTML (no modifier flags),
 * parse that string into real blocks so `BlocksRenderer` can style it.
 */
function extractRawMarkdownFromBlocks(blocks: RichTextNode[]): string | null {
  if (!blocks.length) return null;

  const lines: string[] = [];

  for (const block of blocks) {
    if (block.type !== "paragraph") return null;
    const children = block.children;
    if (!children?.length) continue;

    const parts: string[] = [];
    for (const node of children) {
      if (node.type === "link") return null;
      if (node.type !== undefined && node.type !== "text") return null;
      if (node.text === undefined) return null;
      if (node.bold || node.italic || node.underline || node.strikethrough || node.code) return null;
      parts.push(String(node.text));
    }

    lines.push(parts.join(""));
  }

  if (lines.length === 0) return null;

  const joined = lines.join("\n");
  const looksLikeRawMarkdown =
    /\*\*/.test(joined) || /<u\b/i.test(joined) || /_</.test(joined) || /_[^_]+_/.test(joined);
  if (!looksLikeRawMarkdown) return null;

  return joined;
}

function toBlocksContent(value: StrapiRichTextValue): BlocksContent {
  if (typeof value === "string") {
    return stringToBlocksContent(value);
  }
  if (Array.isArray(value)) {
    const raw = extractRawMarkdownFromBlocks(value);
    if (raw !== null) {
      return stringToBlocksContent(raw);
    }
    return value as unknown as BlocksContent;
  }
  return [];
}

const BLOCKS_RICH_TEXT_CLASS = cn(
  "[&_strong]:font-semibold [&_b]:font-semibold",
  "[&_em]:italic [&_i]:italic",
  "[&_u]:underline [&_u]:decoration-solid [&_u]:underline-offset-[0.12em]",
  "[&_strong+em]:ms-[0.35em]",
  "[&_strong+u]:ms-[0.35em]",
  "[&_b+em]:ms-[0.35em]",
  "[&_b+u]:ms-[0.35em]",
);

export function hasStrapiRichTextContent(value: StrapiRichTextValue): boolean {
  if (value == null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return Array.isArray(value) && value.length > 0;
}

export function StrapiBlocksRichText({
  value,
  className,
  hideListMarkers = false,
}: {
  value: StrapiRichTextValue;
  className: string;
  hideListMarkers?: boolean;
}) {
  if (!hasStrapiRichTextContent(value)) {
    return null;
  }

  const content = toBlocksContent(value);
  if (!content.length) {
    return null;
  }

  return (
    <div className={cn(className, BLOCKS_RICH_TEXT_CLASS)}>
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
          heading: ({ children, level }) => {
            if (level === 1) return <h3 className="mb-3 text-xl font-semibold">{children}</h3>;
            if (level === 2) return <h4 className="mb-3 text-lg font-semibold">{children}</h4>;
            if (level === 3) return <h5 className="mb-2 text-base font-semibold">{children}</h5>;
            return <h6 className="mb-2 text-base font-semibold">{children}</h6>;
          },
          list: ({ children, format }) =>
            format === "ordered" ? (
              <ol
                className={cn(
                  "mb-3 space-y-1 last:mb-0",
                  hideListMarkers ? "list-none ml-0 pl-0" : "ml-5 list-decimal",
                )}
              >
                {children}
              </ol>
            ) : (
              <ul
                className={cn(
                  "mb-3 space-y-1 last:mb-0",
                  hideListMarkers ? "list-none ml-0 pl-0" : "ml-5 list-disc",
                )}
              >
                {children}
              </ul>
            ),
          quote: ({ children }) => (
            <blockquote className="mb-3 border-l-2 border-black/20 pl-3 italic last:mb-0">
              {children}
            </blockquote>
          ),
        }}
      />
    </div>
  );
}
