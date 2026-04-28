/** Known slugs with full static fallbacks in `content.ts`. */
export type VerticalDetailSlug = "act-it" | "sino-sec" | "mobilitex";

export type VerticalDetailTheme = {
  /** Partner cards, hero logo tint, contact CTA accent */
  focusHeadingColor: string;
  /** Programmatic hero backdrop (replaces flat bg-*.png assets). */
  heroGradient: { baseColor: string; accentColor: string };
  heroImageSrc: string;
  focusPatternSrc: string;
};

export type FocusRow =
  | {
    variant: "grid-text";
    title: string;
    body: string;
    /** Use `null` for a static skeleton cell when the CMS has no image. */
    gridImages: [string | null, string | null, string | null, string | null];
  }
  | {
    variant: "text-dual";
    title: string;
    body: string;
    images: [string | null, string | null];
  }
  | {
    variant: "wide-text";
    title: string;
    body: string;
    image: string | null;
  };

export type PartnerCard = {
  title: string;
  body: string;
  /** Strapi ecosystem partner icon; when absent, the section uses the default mask graphic. */
  iconSrc?: string;
};

export type VerticalDetailContent = {
  slug: string;
  /** Decorative asset beside “Institutional Capacity”; defaults from slug when omitted. */
  institutionalTitleDotSrc?: string;
  /** Strapi vertical logo (hero). */
  heroLogoSrc?: string;
  name: string;
  shortLabel: string;
  heroDescription: string;
  heroImageAlt: string;
  institutionalTitle: string;
  institutionalParagraphs: string[];
  focusIntroTitle: string;
  focusIntroSubtitle: string;
  focusRows: FocusRow[];
  partnersTitle: string;
  partnersSubtitle: string;
  partners: [PartnerCard, PartnerCard, PartnerCard];
  contactSubtitle: string;
  theme: VerticalDetailTheme;
};
