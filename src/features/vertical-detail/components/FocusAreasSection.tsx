import Image from "next/image";

import { cn } from "@/src/lib/utils";

import type { FocusRow as FocusRowType } from "../types";

/** Focus row title + body stack (design: 434px wide, 21px gap). */
const focusRowCopyStack = "flex w-full max-w-[434px] min-w-0 flex-col gap-[21px]";
const focusRowCopyTitle =
  "font-heading text-[36px] font-semibold leading-[48px] tracking-[-1.2px] text-balance text-text-100";
const focusRowCopyBody =
  "font-sans text-[19px] font-normal leading-[32px] tracking-[-0.2px] text-muted";

function FocusRowCopy({ title, body, className }: { title: string; body: string; className?: string }) {
  return (
    <div className={cn(focusRowCopyStack, className)}>
      {title ? (
        <h3 className={focusRowCopyTitle}>{title}</h3>
      ) : (
        <div className="space-y-3">
          <div className="h-9 w-full max-w-[340px] animate-pulse rounded-md bg-border-light" />
          <div className="h-9 w-full max-w-[280px] animate-pulse rounded-md bg-border-light/80" />
        </div>
      )}
      {body ? (
        <p className={focusRowCopyBody}>{body}</p>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="h-4 w-full animate-pulse rounded-md bg-border-light/70" />
          <div className="h-4 w-full max-w-[95%] animate-pulse rounded-md bg-border-light/60" />
          <div className="h-4 w-full max-w-[80%] animate-pulse rounded-md bg-border-light/50" />
        </div>
      )}
    </div>
  );
}

type Props = {
  title: string;
  subtitle: string;
  rows: FocusRowType[];
  patternSrc: string;
  rightPanelColor?: string;
};

/** First focus row image mosaic: 449×511, staggered 212px columns, 25px gaps (design spec). Below lg: fluid width, same 2-col rhythm, no horizontal scroll. */
function FocusImageCell({
  src,
  sizes,
  className,
}: {
  src: string | null;
  sizes: string;
  className: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {src ? (
        <Image src={src} alt="" fill className="object-cover" sizes={sizes} />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-border-light" aria-hidden />
      )}
    </div>
  );
}

function FocusGridTextImages({
  gridImages,
}: {
  gridImages: [string | null, string | null, string | null, string | null];
}) {
  const [topLeft, rightTop, leftBottom, rightBottom] = gridImages;
  const cellSizes = "(max-width: 1023px) 42vw, 212px";
  return (
    <div className="relative mx-auto w-full max-w-[449px] min-w-0">
      <div className="relative flex w-full min-w-0 flex-row gap-3 overflow-hidden rounded-lg lg:h-[511px] lg:w-[449px] lg:gap-[25px]">
        <div className="flex min-w-0 flex-1 flex-col gap-3 lg:w-[212px] lg:flex-none lg:gap-[25px]">
          <FocusImageCell
            src={topLeft}
            sizes={cellSizes}
            className="aspect-[206/212] w-full lg:aspect-auto lg:h-[206px] lg:w-[212px] lg:shrink-0"
          />
          <FocusImageCell
            src={leftBottom}
            sizes={cellSizes}
            className="aspect-[255/212] w-full lg:aspect-auto lg:h-[255px] lg:w-[212px] lg:shrink-0"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3 pt-3 lg:w-[212px] lg:flex-none lg:gap-[25px] lg:pt-[25px]">
          <FocusImageCell
            src={rightTop}
            sizes={cellSizes}
            className="aspect-[255/212] w-full lg:aspect-auto lg:h-[255px] lg:w-[212px] lg:shrink-0"
          />
          <FocusImageCell
            src={rightBottom}
            sizes={cellSizes}
            className="aspect-[206/212] w-full lg:aspect-auto lg:h-[206px] lg:w-[212px] lg:shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

/** Adaptive 2-col staggered mosaic for the wide-text grid path: renders only the cells that have images (2–4). */
function FocusWideMosaic({ images }: { images: string[] }) {
  const cellSizes = "(max-width: 1023px) 42vw, 212px";
  const cellClasses = [
    "aspect-[206/212] w-full lg:aspect-auto lg:h-[206px] lg:w-[212px] lg:shrink-0",
    "aspect-[255/212] w-full lg:aspect-auto lg:h-[255px] lg:w-[212px] lg:shrink-0",
    "aspect-[255/212] w-full lg:aspect-auto lg:h-[255px] lg:w-[212px] lg:shrink-0",
    "aspect-[206/212] w-full lg:aspect-auto lg:h-[206px] lg:w-[212px] lg:shrink-0",
  ];
  // Reading-order distribution across the two staggered columns.
  const left = [
    { src: images[0], className: cellClasses[0] },
    images[2] ? { src: images[2], className: cellClasses[1] } : null,
  ].filter((c): c is { src: string; className: string } => Boolean(c?.src));
  const right = [
    images[1] ? { src: images[1], className: cellClasses[2] } : null,
    images[3] ? { src: images[3], className: cellClasses[3] } : null,
  ].filter((c): c is { src: string; className: string } => Boolean(c?.src));

  return (
    <div className="relative mx-auto w-full max-w-[449px] min-w-0">
      <div className="relative flex w-full min-w-0 flex-row gap-3 lg:w-[449px] lg:gap-[25px]">
        {left.length > 0 && (
          <div className="flex min-w-0 flex-1 flex-col gap-3 lg:w-[212px] lg:flex-none lg:gap-[25px]">
            {left.map((c, i) => (
              <FocusImageCell key={i} src={c.src} sizes={cellSizes} className={c.className} />
            ))}
          </div>
        )}
        {right.length > 0 && (
          <div className="flex min-w-0 flex-1 flex-col gap-3 pt-3 lg:w-[212px] lg:flex-none lg:gap-[25px] lg:pt-[25px]">
            {right.map((c, i) => (
              <FocusImageCell key={i} src={c.src} sizes={cellSizes} className={c.className} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Second focus row images: 447×468 group; left 327×468, right 264×382 overlapping left (design spec). Below lg: percentage layout so width tracks container. */
function FocusDualOverlapImages({
  images,
  rightPanelColor,
}: {
  images: [string | null, string | null];
  rightPanelColor?: string;
}) {
  const [leftSrc] = images;
  return (
    <div className="relative mx-auto w-full max-w-[447px] min-w-0 lg:mx-0">
      <div className="relative aspect-[447/468] w-full lg:aspect-auto lg:h-[468px] lg:w-[447px]">
        <div className="absolute left-0 top-0 z-[1] h-full w-[73.15%] overflow-hidden rounded-lg bg-border-light shadow-sm lg:h-[468px] lg:w-[327px]">
          {leftSrc ? (
            <Image
              src={leftSrc}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 75vw, 327px"
            />
          ) : (
            <div className="absolute inset-0 animate-pulse bg-border-light" aria-hidden />
          )}
        </div>
        <div
          className="absolute left-[40.94%] top-[9.19%] z-0 h-[81.62%] w-[59.06%] overflow-hidden rounded-lg shadow-sm lg:left-[183px] lg:top-[43px] lg:h-[382px] lg:w-[264px]"
          style={{ backgroundColor: rightPanelColor || "var(--color-border-light)" }}
        />
      </div>
    </div>
  );
}

function FocusRowBlock({
  row,
  index,
  rightPanelColor,
}: {
  row: FocusRowType;
  index: number;
  rightPanelColor?: string;
}) {
  if (row.variant === "grid-text") {
    return (
      <div className="mx-auto grid w-full max-w-[1011px] grid-cols-1 items-center gap-10 lg:grid-cols-[449px_1fr] lg:gap-x-[62px] lg:gap-y-0">
        <FocusGridTextImages gridImages={row.gridImages} />
        <FocusRowCopy title={row.title} body={row.body} />
      </div>
    );
  }

  if (row.variant === "text-dual") {
    return (
      <div className="mx-auto grid w-full max-w-[1011px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_447px] lg:gap-x-[62px] lg:gap-y-0">
        <FocusRowCopy title={row.title} body={row.body} className="order-2 lg:order-1" />
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <FocusDualOverlapImages images={row.images} rightPanelColor={rightPanelColor} />
        </div>
      </div>
    );
  }

  const reversed = index % 2 === 1;
  const validImages = row.images.filter((s): s is string => Boolean(s)).slice(0, 4);
  const useGrid = validImages.length >= 2;

  if (useGrid) {
    return (
      <div
        className={cn(
          "mx-auto grid w-full max-w-[1011px] grid-cols-1 items-center gap-10 lg:gap-x-[62px] lg:gap-y-0",
          reversed ? "lg:grid-cols-[1fr_449px]" : "lg:grid-cols-[449px_1fr]"
        )}
      >
        {reversed ? (
          <>
            <FocusRowCopy title={row.title} body={row.body} className="order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <FocusWideMosaic images={validImages} />
            </div>
          </>
        ) : (
          <>
            <FocusWideMosaic images={validImages} />
            <FocusRowCopy title={row.title} body={row.body} />
          </>
        )}
      </div>
    );
  }

  const singleImage = row.images[0] ?? null;
  const image = (
    <div className="relative aspect-[16/10] w-full min-w-0 overflow-hidden rounded-lg bg-border-light shadow-sm">
      {singleImage ? (
        <Image
          src={singleImage}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-border-light" aria-hidden />
      )}
    </div>
  );

  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-[1011px] grid-cols-1 items-center gap-10 lg:gap-x-[62px] lg:gap-y-0",
        reversed ? "lg:grid-cols-[auto_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_auto]"
      )}
    >
      {reversed ? (
        <>
          <FocusRowCopy title={row.title} body={row.body} className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">{image}</div>
        </>
      ) : (
        <>
          {image}
          <FocusRowCopy title={row.title} body={row.body} />
        </>
      )}
    </div>
  );
}

export function FocusAreasSection({ title, subtitle, rows, patternSrc, rightPanelColor }: Props) {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-white bg-[position:right_center] bg-no-repeat py-20 bg-[length:auto_72%] sm:bg-[length:auto_84%] lg:bg-[length:auto_100%] lg:py-[100px]"
      style={{ backgroundImage: `url('${patternSrc}')` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-1/2 z-[2] hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-border-light/80 opacity-40 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[120px] top-1/2 z-[2] hidden h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-border-light/60 opacity-30 lg:block"
      />

      <div className="relative z-10 px-6 lg:px-[min(15rem,12vw)]">
        <div className="relative mx-auto flex w-full max-w-full flex-col gap-14 md:max-w-[552px] lg:max-w-[1100px] lg:gap-14">
          <div className="mx-auto flex max-w-[552px] flex-col gap-4 text-center">
            {title ? (
              <h2 className="font-heading text-4xl font-semibold leading-[1.33] tracking-[-0.033em] text-text-100">
                {title}
              </h2>
            ) : (
              <div className="mx-auto h-10 w-[280px] max-w-full animate-pulse rounded-md bg-border-light" />
            )}
            {subtitle ? (
              <p className="text-lg font-normal leading-normal tracking-[-0.011em] text-muted/70">{subtitle}</p>
            ) : (
              <div className="mx-auto h-5 w-[320px] max-w-full animate-pulse rounded-md bg-border-light/80" />
            )}
          </div>

          <div className="flex flex-col gap-20 lg:gap-24">
            {rows.map((row, i) => (
              <FocusRowBlock key={`${row.variant}-${i}`} row={row} index={i} rightPanelColor={rightPanelColor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
