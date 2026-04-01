import { cn } from "@/src/lib/utils";

type Props = {
  baseColor: string;
  accentColor: string;
  className?: string;
};

const SVG_ID = "vertical-detail-hero-bg";
const VB_W = 1728;
const VB_H = 900;

/**
 * Full-bleed hero backdrop: diagonal wash plus layered radial “ovals” from the top-left.
 * Implemented as SVG (not CSS color-mix) so bands stay visible across browsers.
 */
export function DetailHeroGradientBg({
  baseColor,
  accentColor,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
      >
        <defs>
          <filter
            id={`${SVG_ID}-oval-shadow`}
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            {/* Slight blur + tighter shadow so layers read clearly */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blurred" />
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#000000" floodOpacity="0.18" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient
            id={`${SVG_ID}-lin`}
            x1="0"
            y1="0"
            x2={VB_W}
            y2={VB_H}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={baseColor} />
            <stop offset="1" stopColor={accentColor} />
          </linearGradient>
          {/* Large corner oval — center left of frame so the limb fades off the left edge */}
          <radialGradient
            id={`${SVG_ID}-o1`}
            cx="-260"
            cy="-140"
            r="1400"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="0.34" stopColor={baseColor} stopOpacity="0.18" />
            <stop offset="0.64" stopColor={baseColor} stopOpacity="0.07" />
            <stop offset="1" stopColor={baseColor} stopOpacity="0" />
          </radialGradient>
          {/* Mid band — depth between base and accent */}
          <radialGradient
            id={`${SVG_ID}-o2`}
            cx="-260"
            cy="-140"
            r="1080"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={baseColor} stopOpacity="0.42" />
            <stop offset="0.48" stopColor={accentColor} stopOpacity="0.24" />
            <stop offset="1" stopColor={accentColor} stopOpacity="0" />
          </radialGradient>
          {/* Softer outer sheen, top-left */}
          <radialGradient
            id={`${SVG_ID}-o3`}
            cx="-260"
            cy="-140"
            r="860"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="0.42" stopColor={baseColor} stopOpacity="0.06" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width={VB_W} height={VB_H} fill={`url(#${SVG_ID}-lin)`} />

        <rect width={VB_W} height={VB_H} fill={`url(#${SVG_ID}-o1)`} />
        <rect width={VB_W} height={VB_H} fill={`url(#${SVG_ID}-o2)`} />
        <rect width={VB_W} height={VB_H} fill={`url(#${SVG_ID}-o3)`} />

        {/* Shadows need real oval geometry (rects have no oval edge to cast from). */}
        <g
          filter={`url(#${SVG_ID}-oval-shadow)`}
          opacity="0.9"
          className="mix-blend-screen"
        >
          {/* Concentric ellipses: smooth, symmetric top-left curvature with consistent aspect ratio */}
          <ellipse cx="-260" cy="-140" rx="1280" ry="900" fill={baseColor} opacity="0.1" />
          <ellipse cx="-260" cy="-140" rx="960" ry="680" fill={accentColor} opacity="0.085" />
          <ellipse cx="-260" cy="-140" rx="760" ry="540" fill={baseColor} opacity="0.075" />
        </g>
      </svg>
    </div>
  );
}
