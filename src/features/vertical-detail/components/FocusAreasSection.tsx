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
      <h3 className={focusRowCopyTitle}>{title}</h3>
      <p className={focusRowCopyBody}>{body}</p>
    </div>
  );
}

type Props = {
  title: string;
  subtitle: string;
  rows: FocusRowType[];
  patternSrc: string;
};

/** First focus row image mosaic: 449×511, staggered 212px columns, 25px gaps (design spec). */
function FocusGridTextImages({ gridImages }: { gridImages: [string, string, string, string] }) {
  const [topLeft, rightTop, leftBottom, rightBottom] = gridImages;
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
        {[topLeft, rightTop, leftBottom, rightBottom].map((src, j) => (
          <div
            key={`${src}-${j}`}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 767px) 50vw, 240px" />
          </div>
        ))}
      </div>
      <div className="relative hidden h-[511px] w-[449px] max-w-full shrink-0 overflow-hidden rounded-lg md:flex md:flex-row md:gap-[25px]">
        <div className="flex w-[212px] shrink-0 flex-col gap-[25px]">
          <div className="relative h-[206px] w-[212px] shrink-0 overflow-hidden rounded-lg">
            <Image src={topLeft} alt="" fill className="object-cover" sizes="212px" />
          </div>
          <div className="relative h-[255px] w-[212px] shrink-0 overflow-hidden rounded-lg">
            <Image src={leftBottom} alt="" fill className="object-cover" sizes="212px" />
          </div>
        </div>
        <div className="flex w-[212px] shrink-0 flex-col gap-[25px] pt-[25px]">
          <div className="relative h-[255px] w-[212px] shrink-0 overflow-hidden rounded-lg">
            <Image src={rightTop} alt="" fill className="object-cover" sizes="212px" />
          </div>
          <div className="relative h-[206px] w-[212px] shrink-0 overflow-hidden rounded-lg">
            <Image src={rightBottom} alt="" fill className="object-cover" sizes="212px" />
          </div>
        </div>
      </div>
    </>
  );
}

/** Second focus row images: 447×468 group; left 327×468, right 264×382 overlapping left (design spec). */
function FocusDualOverlapImages({ images }: { images: [string, string] }) {
  const [leftSrc, rightSrc] = images;
  return (
    <>
      <div className="relative mx-auto flex max-w-[447px] justify-center gap-2 sm:gap-3 md:hidden">
        <div className="relative z-[1] h-[min(320px,55vw)] w-[55%] min-w-0 overflow-hidden rounded-lg bg-border-light shadow-sm">
          <Image src={leftSrc} alt="" fill className="object-cover" sizes="(max-width: 767px) 45vw, 327px" />
        </div>
        <div className="relative z-0 -ml-[12%] mt-[6%] h-[min(262px,48vw)] w-[45%] min-w-0 overflow-hidden rounded-lg bg-border-light shadow-sm">
          <Image src={rightSrc} alt="" fill className="object-cover" sizes="(max-width: 767px) 40vw, 264px" />
        </div>
      </div>
      <div className="relative mx-auto hidden h-[468px] w-[447px] shrink-0 md:block lg:mx-0">
        <div className="absolute left-0 top-0 z-[1] h-[468px] w-[327px] overflow-hidden rounded-lg bg-border-light shadow-sm">
          <Image src={leftSrc} alt="" fill className="object-cover" sizes="327px" />
        </div>
        <div className="absolute left-[183px] top-[43px] z-0 h-[382px] w-[264px] overflow-hidden rounded-lg bg-border-light shadow-sm">
          <Image src={rightSrc} alt="" fill className="object-cover" sizes="264px" />
        </div>
      </div>
    </>
  );
}

function FocusRowBlock({ row }: { row: FocusRowType }) {
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
          <FocusDualOverlapImages images={row.images} />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-[1011px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-[62px] lg:gap-y-0">
      <div className="relative aspect-[16/10] w-full min-w-0 overflow-hidden rounded-lg bg-border-light shadow-sm">
        <Image src={row.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 560px" />
      </div>
      <FocusRowCopy title={row.title} body={row.body} />
    </div>
  );
}

export function FocusAreasSection({ title, subtitle, rows, patternSrc }: Props) {
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
            <h2 className="font-heading text-4xl font-semibold leading-[1.33] tracking-[-0.033em] text-text-100">
              {title}
            </h2>
            <p className="text-lg font-normal leading-normal tracking-[-0.011em] text-muted/70">{subtitle}</p>
          </div>

          <div className="flex flex-col gap-20 lg:gap-24">
            {rows.map((row, i) => (
              <FocusRowBlock key={i} row={row} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
