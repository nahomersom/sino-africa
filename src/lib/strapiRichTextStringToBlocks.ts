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

  const pushParagraph = (lines: string[]) => {
    const text = lines.join(" ").trim();
    if (!text) return;
    blocks.push({
      type: "paragraph" as const,
      children: parseParagraphInline(text),
    });
  };

  const pushHeading = (level: number, text: string) => {
    const t = text.trim();
    if (!t) return;
    blocks.push({
      type: "heading" as const,
      level: Math.min(6, Math.max(1, level)) as 1 | 2 | 3 | 4 | 5 | 6,
      children: parseParagraphInline(t),
    });
  };

  const lines = prepared.split(/\r?\n/);
  let paraLines: string[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    // Blank line ends a paragraph.
    if (line.trim().length === 0) {
      pushParagraph(paraLines);
      paraLines = [];
      continue;
    }

    // ATX heading: # Heading (H1) ... ###### Heading (H6)
    const hm = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (hm) {
      pushParagraph(paraLines);
      paraLines = [];
      pushHeading(hm[1].length, hm[2]);
      continue;
    }

    paraLines.push(line);
  }

  pushParagraph(paraLines);

  return blocks;
}
