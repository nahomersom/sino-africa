import { getStrapiMediaUrl } from "@/src/lib/strapiBase";
import type { Project, ProjectMedia, RichTextBlock } from "@/src/store/strapiApi";
import type { ProjectCard, ProjectDetail } from "./constants";
import { projectsContent } from "./constants";

const d = projectsContent.detail;

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

function blockPlain(block: { text?: string | null } | null | undefined): string {
  const t = block?.text;
  return typeof t === "string" ? t.trim() : "";
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

function toFilterTabId(slug: string | undefined): ProjectCard["filter"] {
  const s = slug?.trim();
  if (!s || s === "all") return undefined;
  return s;
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

function resultsBodyFromProject(p: Project): string {
  const r = p.results;
  if (r && typeof r === "object" && !Array.isArray(r) && "text" in r) {
    return blockPlain(r as { text?: string | null });
  }
  return strapiFieldToPlain(r as string | RichTextBlock[] | undefined);
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
  const imageSrc = coverU ? getStrapiMediaUrl(coverU) : "";
  const imageAlt = cover?.alternativeText ?? cover?.name ?? p.title;
  const routeId = String(p.id);

  return {
    id: routeId,
    detailHref: `/projects/${encodeURIComponent(routeId)}`,
    filter: toFilterTabId(projectCategorySlug(p)),
    title: p.title,
    description: cardDescription(p),
    imageSrc,
    imageAlt,
  };
}

export function strapiProjectToProjectDetail(p: Project): ProjectDetail {
  const id = String(p.id);
  const whatWeDid =
    textsFromEntries(p.development) ?? textsFromEntries(p.what_we_did) ?? asStringList(p.what_we_did) ?? [...d.sharedWhatWeDid];
  const technologies =
    textsFromEntries(p.top_features) ?? asStringList(p.technologies) ?? [...d.sharedTechnologies];

  const overview =
    blockPlain(p.solution) ||
    strapiFieldToPlain(p.overview ?? undefined) ||
    descriptionPlain(p) ||
    d.sharedOverview;

  const challenges =
    blockPlain(p.problem) || strapiFieldToPlain(p.challenges ?? undefined) || d.sharedChallenges;

  const results =
    resultsBodyFromProject(p) || d.sharedResults;

  const cover = p.cover_img as ProjectMedia | null | undefined;
  const coverU = mediaUrl(cover);

  return {
    id,
    title: p.title,
    heroDescription: heroDescriptionFromProject(p),
    heroImageSrc: coverU != null ? getStrapiMediaUrl(coverU) : "",
    heroImageAlt: cover?.alternativeText ?? cover?.name ?? p.title,
    whatWeDid,
    technologies,
    client: clientPlain(p),
    overview,
    challenges,
    results,
    gallery: galleryFromProject(p),
  };
}
