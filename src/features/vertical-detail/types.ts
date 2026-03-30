export type VerticalDetailSlug = "act-it" | "sino-sec" | "mobilitex";

export type VerticalDetailTheme = {
  /** Partner cards, hero logo tint, contact CTA accent */
  focusHeadingColor: string;
  heroBgSrc: string;
  heroImageSrc: string;
  focusPatternSrc: string;
};

export type FocusRow =
  | {
      variant: "grid-text";
      title: string;
      body: string;
      gridImages: [string, string, string, string];
    }
  | {
      variant: "text-dual";
      title: string;
      body: string;
      images: [string, string];
    }
  | {
      variant: "wide-text";
      title: string;
      body: string;
      image: string;
    };

export type PartnerCard = {
  title: string;
  body: string;
};

export type VerticalDetailContent = {
  slug: VerticalDetailSlug;
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
