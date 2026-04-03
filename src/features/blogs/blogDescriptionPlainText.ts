import type { RichTextNode } from "@/src/store/strapiApi";

/** Plain text for cards/previews when `description` is a markdown string or Strapi blocks. */
export function blogDescriptionPlainText(
  description: string | RichTextNode[] | null | undefined,
): string {
  if (!description) return "";
  if (typeof description === "string") return description.trim();
  if (!Array.isArray(description) || description.length === 0) return "";
  return description
    .flatMap((block) => (block.children || []).map((child: RichTextNode) => child.text || ""))
    .join(" ");
}
