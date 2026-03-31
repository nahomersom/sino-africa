import {
  getStrapiMediaUrl,
  resolveStrapiUploadUrl,
  type Vertical,
  type VerticalFocusArea,
} from "@/src/store/strapiApi";

import type { FocusRow, PartnerCard, VerticalDetailContent } from "./types";

const EMPTY_PARTNERS: [PartnerCard, PartnerCard, PartnerCard] = [
  { title: "", body: "" },
  { title: "", body: "" },
  { title: "", body: "" },
];

const DEFAULT_THEME: VerticalDetailContent["theme"] = {
  focusHeadingColor: "#3FAF7E",
  heroGradient: { baseColor: "#3FAF7E", accentColor: "#328B64" },
  heroImageSrc: "/images/our-verticals/green-hero.png",
  focusPatternSrc: "/images/our-verticals/green-pattern.png",
};

function splitInstitutionalText(raw: string | null | undefined): string[] {
  if (!raw?.trim()) return [];
  const byParagraph = raw
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (byParagraph.length > 0) return byParagraph;
  return [raw.trim()];
}

function focusImagesFromArea(area: VerticalFocusArea | undefined): string[] {
  if (!area?.images?.length) return [];
  return area.images
    .map((m) => getStrapiMediaUrl(resolveStrapiUploadUrl(m)))
    .filter((u): u is string => Boolean(u));
}

function buildFocusRows(
  apiAreas: VerticalFocusArea[] | undefined,
  fallbackRows: FocusRow[] | undefined
): FocusRow[] {
  const fb = fallbackRows ?? [];

  return [0, 1, 2].map((i): FocusRow => {
    const rowFallback = fb[i];
    const area = apiAreas?.[i];
    const title =
      area?.title?.trim() ||
      (rowFallback ? getFocusTitle(rowFallback) : "");
    const body =
      area?.description?.trim() ||
      (rowFallback ? getFocusBody(rowFallback) : "");
    const urls = focusImagesFromArea(area);

    if (i === 0) {
      const fbGrid =
        rowFallback?.variant === "grid-text"
          ? rowFallback.gridImages
          : ([null, null, null, null] as const);
      const gridImages: [string | null, string | null, string | null, string | null] = [
        urls[0] ?? fbGrid[0] ?? null,
        urls[1] ?? fbGrid[1] ?? null,
        urls[2] ?? fbGrid[2] ?? null,
        urls[3] ?? fbGrid[3] ?? null,
      ];
      return { variant: "grid-text", title, body, gridImages };
    }

    if (i === 1) {
      const fbIm =
        rowFallback?.variant === "text-dual"
          ? rowFallback.images
          : ([null, null] as const);
      const images: [string | null, string | null] = [
        urls[0] ?? fbIm[0] ?? null,
        urls[1] ?? fbIm[1] ?? null,
      ];
      return { variant: "text-dual", title, body, images };
    }

    const fbImg = rowFallback?.variant === "wide-text" ? rowFallback.image : null;
    const image = urls[0] ?? fbImg ?? null;
    return { variant: "wide-text", title, body, image };
  });
}

function getFocusTitle(row: FocusRow): string {
  return row.title;
}

function getFocusBody(row: FocusRow): string {
  return row.body;
}

function buildPartners(
  api: NonNullable<Vertical["ecosystemPartners"]> | undefined,
  fallback: [PartnerCard, PartnerCard, PartnerCard] | undefined
): [PartnerCard, PartnerCard, PartnerCard] {
  const fb = fallback ?? EMPTY_PARTNERS;
  const cards: PartnerCard[] = [0, 1, 2].map((i) => {
    const row = api?.[i];
    const baseCard = fb[i];
    const iconSrc = row?.icon
      ? getStrapiMediaUrl(resolveStrapiUploadUrl(row.icon)) || undefined
      : undefined;
    return {
      title: row?.title?.trim() || baseCard.title,
      body: row?.description?.trim() || baseCard.body,
      iconSrc: iconSrc ?? baseCard.iconSrc,
    };
  });
  return [cards[0], cards[1], cards[2]];
}

export function mergeVerticalDetailFromApi(
  routeSlug: string,
  api: Vertical | null | undefined,
  fallback?: VerticalDetailContent
): VerticalDetailContent {
  const slug = api?.slug?.trim() || routeSlug;
  const baseTheme = fallback?.theme ?? DEFAULT_THEME;

  const name = api?.title?.trim() || fallback?.name || "";
  const shortLabel =
    fallback?.shortLabel || name.split(/\s+/)[0] || name || slug;
  const heroDescription =
    api?.description?.trim() || fallback?.heroDescription || "";
  const heroImageAlt =
    api?.heroImage?.alternativeText?.trim() ||
    api?.title ||
    fallback?.heroImageAlt ||
    "";

  const institutionalSource = api?.institutionalCapacityDescription?.trim() || "";
  const institutionalParagraphs = institutionalSource
    ? splitInstitutionalText(institutionalSource)
    : fallback?.institutionalParagraphs?.length
      ? fallback.institutionalParagraphs
      : [];

  const focusIntroTitle = fallback?.focusIntroTitle ?? "Our Focus Areas";
  const focusIntroSubtitle =
    api?.focusAreasDescription?.trim() || fallback?.focusIntroSubtitle || "";

  const focusRows = buildFocusRows(api?.focusAreas, fallback?.focusRows);

  const partnersTitle = fallback?.partnersTitle ?? "Ecosystem Partners";
  const partnersSubtitle =
    fallback?.partnersSubtitle ??
    "Organisations we collaborate with to deliver secure, scalable outcomes.";

  const partners = buildPartners(api?.ecosystemPartners, fallback?.partners);

  const contactSubtitle =
    fallback?.contactSubtitle ||
    "Tell us about your environment and goals—we will route your message to the right practice lead.";

  const focusHeadingColor =
    api?.gradient?.baseColor?.trim() ||
    fallback?.theme?.focusHeadingColor ||
    api?.gradient?.accentColor?.trim() ||
    baseTheme.focusHeadingColor;

  const heroImageSrc =
    getStrapiMediaUrl(resolveStrapiUploadUrl(api?.heroImage)) ||
    fallback?.theme?.heroImageSrc ||
    baseTheme.heroImageSrc;

  const heroGradient = {
    baseColor:
      api?.gradient?.baseColor?.trim() ||
      fallback?.theme?.heroGradient.baseColor ||
      baseTheme.heroGradient.baseColor,
    accentColor:
      api?.gradient?.accentColor?.trim() ||
      fallback?.theme?.heroGradient.accentColor ||
      baseTheme.heroGradient.accentColor,
  };

  const focusPatternSrc =
    fallback?.theme?.focusPatternSrc ?? baseTheme.focusPatternSrc;

  const heroLogoSrc =
    getStrapiMediaUrl(resolveStrapiUploadUrl(api?.logo)) ||
    fallback?.heroLogoSrc ||
    undefined;

  return {
    slug,
    institutionalTitleDotSrc: fallback?.institutionalTitleDotSrc,
    heroLogoSrc,
    name,
    shortLabel,
    heroDescription,
    heroImageAlt,
    institutionalTitle: fallback?.institutionalTitle ?? "Institutional Capacity",
    institutionalParagraphs,
    focusIntroTitle,
    focusIntroSubtitle,
    focusRows,
    partnersTitle,
    partnersSubtitle,
    partners,
    contactSubtitle,
    theme: {
      focusHeadingColor, // CMS gradient.baseColor, else static / accentColor
      heroGradient,
      heroImageSrc,
      focusPatternSrc,
    },
  };
}
