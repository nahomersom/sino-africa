/**
 * Figma 6:2093 — three reference ellipses (`rounded-full` in design) on the verticals gradient.
 * Width × height in px (design uses non-square ellipses).
 */
export const VERTICALS_REFERENCE_ELLIPSES = [
  { w: 2422.44, h: 2242, opacity: 5.07 },
  { w: 1776.6, h: 1644, opacity: 4.58 },
  { w: 1457, h: 1349, opacity: 3.61 },
] as const;

/**
 * `top` offset (px) for each reference ellipse — [gradient index][ellipse index].
 * Same order as `VERTICALS_REFERENCE_ELLIPSES`. Figma 6:2093.
 * Replace rows 2–3 with your Figma values for the 2nd and 3rd gradient palettes.
 */
export const VERTICALS_ELLIPSE_TOP_PX_BY_GRADIENT = [
  [-242, 60.5, 228],
  [-98, 220.5, 487],
  [-347, 6.5, 77],
] as const;

/** First reference ellipse width (px) in `VerticalsSection` gradient; others follow `VERTICALS_REFERENCE_ELLIPSES` proportions */
export const VERTICALS_SECTION_GRADIENT_FIRST_ELLIPSE_WIDTH_PX = 242.44;

/** Our Verticals nav submenu left column width — ellipses scale down to fit */
export const NAV_VERTICALS_ART_COLUMN_WIDTH = 183;


