import { getStrapiMediaUrl } from "@/src/lib/strapiBase";
import type { Project, ProjectMedia, RichTextBlock } from "@/src/store/strapiApi";
import type { ProjectCard, ProjectDetail } from "./constants";
import { projectsContent } from "./constants";

const d = projectsContent.detail;

const PLACEHOLDER_CARD_IMAGE = "/images/about/hero-photo-2.png";

function mediaUrl(m: { url?: string | null } | null | undefined): string | undefined {
  const u = m?.url;
  return typeof u === "string" && u.length > 0 ? u : undefined;
}

function strapiFieldToPlain(
  value: string | RichTextBlock[] | null | undefined,
): string {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  return value
    .flatMap((block) => (block.children ?? []).map((c) => c.text ?? ""))
    .join(" ")
    .trim();
}

function descriptionPlain(p: Project): string {
  const desc = p.description;
  if (desc == null) return "";
  if (typeof desc === "string") return desc.trim();
  return strapiFieldToPlain(desc);
}

function blockRich(
  block: { text?: string | RichTextBlock[] | null } | null | undefined,
): string | RichTextBlock[] | undefined {
  const t = block?.text;
  if (typeof t === "string") {
    const trimmed = t.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }
  if (Array.isArray(t) && t.length > 0) return t;
  return undefined;
}

function richFromMaybe(value: unknown): string | RichTextBlock[] | undefined {
  if (value == null) return undefined;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    // Some Strapi fields arrive as JSON-stringified blocks:
    // "[{\"type\":\"paragraph\",\"children\":[...]}]"
    if ((trimmed.startsWith("[") && trimmed.endsWith("]")) || (trimmed.startsWith("{") && trimmed.endsWith("}"))) {
      try {
        const parsed = JSON.parse(trimmed) as unknown;
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed as RichTextBlock[];
        }
      } catch {
        // Fall back to plain string when parsing fails.
      }
    }
    return trimmed;
  }
  if (Array.isArray(value) && value.length > 0) {
    return value as RichTextBlock[];
  }
  if (typeof value === "object" && "text" in value) {
    return blockRich(value as { text?: string | RichTextBlock[] | null });
  }
  return undefined;
}

function textsFromEntries(entries: unknown): string[] | undefined {
  if (!Array.isArray(entries)) return undefined;
  const texts = entries
    .map((e) => {
      if (e && typeof e === "object" && "text" in e) {
        const raw = (e as { text?: unknown }).text;
        return typeof raw === "string" ? raw.trim() : "";
      }
      return "";
    })
    .filter(Boolean);
  return texts.length ? texts : undefined;
}

function slugishCategory(raw: unknown): string | undefined {
  if (typeof raw === "string") return raw;
  if (raw && typeof raw === "object" && "slug" in raw) {
    const s = (raw as { slug?: string }).slug;
    if (typeof s === "string") return s;
  }
  return undefined;
}

function projectCategorySlug(p: Project): string | undefined {
  return (
    slugishCategory(p.category) ??
    slugishCategory(p.project_category) ??
    slugishCategory(p.vertical)
  );
}

function projectCategoryLabel(p: Project): string {
  const category = p.project_category;
  if (category && typeof category === "object") {
    const name = (category as { name?: unknown }).name;
    if (typeof name === "string" && name.trim()) return name.trim();
    const title = (category as { title?: unknown }).title;
    if (typeof title === "string" && title.trim()) return title.trim();
  }

  const slug = projectCategorySlug(p)?.trim();
  if (slug) {
    return slug
      .split(/[-_]/g)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  return "Other";
}

function asStringList(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  if (value.every((x) => typeof x === "string")) return value as string[];
  return undefined;
}

function heroDescriptionFromProject(p: Project): string {
  const fromSummary = strapiFieldToPlain(p.summary ?? undefined);
  if (fromSummary) return fromSummary;
  const fromDesc = descriptionPlain(p);
  if (fromDesc) return fromDesc;
  return "Learn more about this project below.";
}

function resultsBodyFromProject(p: Project): string | RichTextBlock[] {
  const r = p.results;
  if (r && typeof r === "object" && !Array.isArray(r) && "text" in r) {
    return blockRich(r as { text?: string | RichTextBlock[] | null }) ?? "";
  }
  return richFromMaybe(r) ?? "";
}

function clientPlain(p: Project): string {
  const fromEntries = textsFromEntries(p.client);
  if (fromEntries?.length) return fromEntries.join(", ");
  if (typeof p.client === "string" && p.client.trim()) return p.client.trim();
  return d.sharedClient;
}

function galleryFromProject(p: Project): { src: string; alt: string }[] {
  return (
    p.gallery
      ?.map((m) => m as ProjectMedia)
      .filter((m) => mediaUrl(m))
      .map((m) => ({
        src: getStrapiMediaUrl(mediaUrl(m)!),
        alt: m.alternativeText ?? m.name ?? p.title,
      })) ?? []
  );
}

function cardDescription(p: Project): string {
  const fromSummary = strapiFieldToPlain(p.summary ?? undefined);
  if (fromSummary) return fromSummary;
  const fromBody = descriptionPlain(p);
  if (!fromBody) return heroDescriptionFromProject(p);
  if (fromBody.length > 200) return `${fromBody.slice(0, 197).trimEnd()}…`;
  return fromBody;
}

export function strapiProjectToProjectCard(p: Project): ProjectCard {
  const cover = p.cover_img as ProjectMedia | null | undefined;
  const coverU = mediaUrl(cover);
  const imageSrc = coverU ? getStrapiMediaUrl(coverU) : PLACEHOLDER_CARD_IMAGE;
  const imageAlt = cover?.alternativeText ?? cover?.name ?? p.title;
  const routeId =
    typeof p.slug === "string" && p.slug.trim().length > 0 ? p.slug.trim() : String(p.id);

  return {
    id: routeId,
    filterId: projectCategorySlug(p)?.trim() || "other",
    filterLabel: projectCategoryLabel(p),
    title: p.title,
    description: cardDescription(p),
    imageSrc,
    imageAlt,
  };
}

export function strapiProjectToProjectDetail(p: Project): ProjectDetail {
  const raw = p as Project & {
    challenge?: unknown;
    chanllenge?: unknown;
    result?: unknown;
    problem?: unknown;
    solution?: unknown;
  };

  const slug =
    typeof p.slug === "string" && p.slug.trim().length > 0
      ? p.slug.trim()
      : String(p.id);

  const whatWeDid =
    textsFromEntries(p.development) ??
    textsFromEntries(p.what_we_did) ??
    asStringList(p.what_we_did) ??
    [...d.sharedWhatWeDid];
  const technologies =
    textsFromEntries(p.top_features) ??
    asStringList(p.technologies) ??
    [...d.sharedTechnologies];

  const overview =
    richFromMaybe(p.overview ?? undefined) ??
    richFromMaybe(p.description ?? undefined) ??
    d.sharedOverview;
  const solution =
    richFromMaybe(p.solution) ??
    richFromMaybe(raw.solution) ??
    richFromMaybe(p.overview ?? undefined) ??
    d.sharedOverview;
  const description = richFromMaybe(p.description ?? undefined) ?? heroDescriptionFromProject(p);

  const challenges =
    richFromMaybe(p.problem) ??
    richFromMaybe(p.challenges ?? undefined) ??
    richFromMaybe(raw.challenge) ??
    richFromMaybe(raw.chanllenge) ??
    d.sharedChallenges;

  const results = resultsBodyFromProject(p) || richFromMaybe(raw.result) || d.sharedResults;

  const cover = p.cover_img as ProjectMedia | null | undefined;
  const coverU = mediaUrl(cover);
  const heroImageSrc = coverU != null ? getStrapiMediaUrl(coverU) : PLACEHOLDER_CARD_IMAGE;

  const gallery = galleryFromProject(p);
  const resolvedGallery =
    gallery.length > 0 ? gallery : [...d.gallery];

  return {
    slug,
    title: p.title,
    heroDescription: heroDescriptionFromProject(p),
    heroImageSrc,
    heroImageAlt: cover?.alternativeText ?? cover?.name ?? p.title,
    whatWeDid,
    technologies,
    client: clientPlain(p),
    overview,
    solution,
    description,
    challenges,
    results,
    gallery: resolvedGallery,
  };
}
