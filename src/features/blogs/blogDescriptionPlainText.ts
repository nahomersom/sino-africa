import type { RichTextNode } from "@/src/store/strapiApi";

/** Plain text for cards/previews when `description` is a markdown string or Strapi blocks. */
export function blogDescriptionPlainText(
  description: string | RichTextNode[] | null | undefined,
): string {
  if (!description) return "";
  if (typeof description === "string") {
    return description
      .trim()
      // Headings: `### Title` -> `Title`
      .replace(/^\s{0,3}#{1,6}\s+/gm, "")
      // Bold/italic markers: `**x**`, `__x__`, `_x_` -> `x`
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/_(.*?)_/g, "$1")
      // Collapse whitespace/newlines for card display.
      .replace(/\s+/g, " ")
      .trim();
  }
  if (!Array.isArray(description) || description.length === 0) return "";
  return description
    .flatMap((block) => (block.children || []).map((child: RichTextNode) => child.text || ""))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
