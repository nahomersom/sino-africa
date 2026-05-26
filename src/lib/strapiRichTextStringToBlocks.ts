import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { RichTextNode } from "@/src/store/strapiApi";

/** Normalize markers + insert space before `_` when Strapi sends `**bold**_italic` (no gap). */
export function prepareStrapiMarkdownString(input: string): string {
  return input
    .replace(/\u2217/g, "*")
    .replace(/\uFF0A/g, "*")
    .replace(/(\*\*[^*]+\*\*)_(?!_)/g, "$1 _");
}

type TextMods = Partial<Pick<RichTextNode, "bold" | "italic" | "underline" | "strikethrough" | "code">>;

type TextLeaf = { type: "text"; text: string } & TextMods;

function parseItalicU(s: string, base: TextMods): TextLeaf[] {
  const leadingSpace = s.match(/^(\s+)/)?.[1] ?? "";
  const afterLeading = s.slice(leadingSpace.length);
  const trailingSpace = afterLeading.match(/(\s+)$/)?.[1] ?? "";
  const core = afterLeading.slice(0, afterLeading.length - trailingSpace.length);

  const out: TextLeaf[] = [];
  if (leadingSpace) out.push({ type: "text", text: leadingSpace, ...base });

  const t = core.trim();
  if (!t) {
    if (trailingSpace) out.push({ type: "text", text: trailingSpace, ...base });
    return out;
  }

  const isSingleUnderscoreWrapped = t.startsWith("_") && t.endsWith("_") && t.length >= 2;
  const isDoubleUnderscoreWrapped = t.startsWith("__") && t.endsWith("__") && t.length >= 4;

  if (isDoubleUnderscoreWrapped || isSingleUnderscoreWrapped) {
    const inner = isDoubleUnderscoreWrapped ? t.slice(2, -2) : t.slice(1, -1);
    const um = inner.match(/^<u>(.*?)<\/u>$/i);
    if (um) {
      out.push({ type: "text", text: um[1], ...base, italic: true, underline: true });
    } else {
      out.push({ type: "text", text: inner, ...base, italic: true });
    }
  } else {
    const umOnly = t.match(/^<u>(.*?)<\/u>$/i);
    if (umOnly) {
      out.push({ type: "text", text: umOnly[1], ...base, underline: true });
    } else {
      out.push({ type: "text", text: core, ...base });
    }
  }

  if (trailingSpace) out.push({ type: "text", text: trailingSpace, ...base });
  return out;
}

function parseParagraphInline(s: string): TextLeaf[] {
  const out: TextLeaf[] = [];
  let rest = s;

  while (rest.length > 0) {
    if (!rest.startsWith("**")) {
      const nextBold = rest.indexOf("**");
      const chunk = nextBold === -1 ? rest : rest.slice(0, nextBold);
      if (chunk) out.push(...parseItalicU(chunk, {}));
      if (nextBold === -1) break;
      rest = rest.slice(nextBold);
      continue;
    }

    const end = rest.indexOf("**", 2);
    if (end === -1) {
      out.push(...parseItalicU(rest, {}));
      break;
    }
    const inner = rest.slice(2, end);
    out.push(...parseItalicU(inner, { bold: true }));
    rest = rest.slice(end + 2);
  }

  return mergeTextNodes(out);
}

function sameTextMods(a: TextLeaf, b: TextLeaf): boolean {
  return (
    !!a.bold === !!b.bold &&
    !!a.italic === !!b.italic &&
    !!a.underline === !!b.underline &&
    !!a.strikethrough === !!b.strikethrough &&
    !!a.code === !!b.code
  );
}

function mergeTextNodes(nodes: TextLeaf[]): TextLeaf[] {
  const merged: TextLeaf[] = [];
  for (const n of nodes) {
    const prev = merged[merged.length - 1];
    if (prev && sameTextMods(prev, n) && prev.text !== undefined && n.text !== undefined) {
      prev.text += n.text;
    } else {
      merged.push({ ...n });
    }
  }
  return merged;
}

/** Convert a markdown-like / mixed HTML string into Strapi blocks JSON for `BlocksRenderer`. */
export function stringToBlocksContent(input: string): BlocksContent {
  const prepared = prepareStrapiMarkdownString(input.trim());
  if (!prepared) return [];

  const blocks: BlocksContent = [];
  let currentList: { format: "unordered" | "ordered"; items: string[] } | null = null;

  const flushList = () => {
    if (currentList) {
      blocks.push({
        type: "list",
        format: currentList.format,
        children: currentList.items.map((item) => ({
          type: "list-item",
          children: parseParagraphInline(item),
        })),
      });
      currentList = null;
    }
  };

  const lines = prepared.split(/\r?\n/);

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (trimmed.length === 0) {
      flushList();
      continue;
    }

    // Heading check
    const hm = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (hm) {
      flushList();
      blocks.push({
        type: "heading",
        level: Math.min(6, Math.max(1, hm[1].length)) as any,
        children: parseParagraphInline(hm[2]),
      });
      continue;
    }

    // List item check
    const unorderedMatch = line.match(/^[\s]*([-*+])\s+(.+)$/);
    const orderedMatch = line.match(/^[\s]*(\d+)\.\s+(.+)$/);

    if (unorderedMatch || orderedMatch) {
      const format = unorderedMatch ? "unordered" : "ordered";
      const content = unorderedMatch ? unorderedMatch[2] : orderedMatch![2];

      if (currentList && currentList.format === format) {
        currentList.items.push(content);
      } else {
        flushList();
        currentList = { format, items: [content] };
      }
      continue;
    }

    // Regular line — each newline becomes its own paragraph block.
    flushList();

    // A line that is entirely wrapped in **bold** (e.g. "**Outlook**") is treated
    // as a heading so it renders larger than body paragraphs.
    const wholeBoldMatch = trimmed.match(/^\*\*(.+)\*\*$/);
    if (wholeBoldMatch && !wholeBoldMatch[1].includes("**")) {
      blocks.push({
        type: "heading",
        level: 2 as any,
        children: parseParagraphInline(wholeBoldMatch[1]),
      });
      continue;
    }

    blocks.push({
      type: "paragraph",
      children: parseParagraphInline(trimmed),
    });
  }

  flushList();

  return blocks;
}
