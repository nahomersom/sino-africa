"use client";

import type { ReactNode } from "react";
import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { ContactSection } from "@/src/features/home/sections/ContactSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsContent } from "./constants";
import type { ProjectDetail } from "./constants";
import { cn } from "@/src/lib/utils";
import { StrapiRichTextBody } from "@/src/lib/strapiBlocksRichText";

type ProjectDetailPageProps = {
  project: ProjectDetail;
};

const PROJECT_DETAIL_TOP_VECTOR_IMAGE = "/images/projects/top-vector.png";
const PROJECT_DETAIL_DOTS_IMAGE = "/images/projects/project-detail-dots.png";

function BackToProjectsLink({ className }: { className?: string }) {
  return (
    <Link
      href="/projects"
      className={cn(
        "inline-flex w-fit max-w-full items-center gap-2 text-[18px] font-normal leading-[1.5] tracking-[0] text-text-100 transition-colors hover:text-primary",
        className,
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back to projects
    </Link>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <span className="block w-full text-center text-[18px] font-medium uppercase leading-[1.26] tracking-[0.125em] text-text-100 md:text-[20px] md:text-left">
      {children}
    </span>
  );
}

type GalleryImageItem = { src: string; alt: string };

function GalleryMosaicTile({
  item,
  className,
  sizes,
}: {
  item: GalleryImageItem;
  className?: string;
  sizes: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-0 min-w-0 overflow-hidden rounded-[6px] bg-[#E7E9ED]",
        className,
      )}
    >
      <Image src={item.src} alt={item.alt} fill className="object-cover" sizes={sizes} />
    </div>
  );
}

const GALLERY_ROW_H = "h-[491px] lg:h-[850px]";

const GALLERY_MOBILE_SCROLL = cn(
  "no-scrollbar overflow-x-auto md:hidden",
  "pl-3 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  "sm:pl-4",
);

const GALLERY_STRIP_TILE = cn(GALLERY_ROW_H, "w-[190px] lg:w-[478px] shrink-0");

const GALLERY_STACK_OUTER =
  "flex h-full w-[219px] shrink-0 flex-col gap-2 lg:w-[552px] lg:gap-[23px]";

const GALLERY_STACK_HALF = "h-[241.5px] lg:h-[413px] w-[219px] lg:w-[552px] shrink-0";

const GALLERY_DESKTOP_ROW =
  "hidden w-full gap-3 sm:gap-4 md:flex md:h-[491px] lg:h-[850px] px-3 sm:px-4 md:px-0";

/** First six images: mosaic columns scale from 1–6; same pattern as the full grid when all slots are filled. */
function GalleryDesktopMosaic({ items }: { items: readonly GalleryImageItem[] }) {
  const n = items.length;
  if (n === 0) return null;

  const colGap = "gap-3 sm:gap-4";
  const tileFlex = "min-h-0 min-w-0 flex-1";
  const stackCol = cn("flex min-h-0 min-w-0 flex-1 flex-col", colGap);

  if (n === 1) {
    return (
      <div className={GALLERY_DESKTOP_ROW}>
        <GalleryMosaicTile item={items[0]} className={cn(tileFlex, "w-full")} sizes="90vw" />
      </div>
    );
  }

  if (n === 2) {
    return (
      <div className={GALLERY_DESKTOP_ROW}>
        <GalleryMosaicTile item={items[0]} className={tileFlex} sizes="42vw" />
        <GalleryMosaicTile item={items[1]} className={tileFlex} sizes="42vw" />
      </div>
    );
  }

  if (n === 3) {
    return (
      <div className={GALLERY_DESKTOP_ROW}>
        <GalleryMosaicTile item={items[0]} className={tileFlex} sizes="30vw" />
        <div className={stackCol}>
          <GalleryMosaicTile item={items[1]} className={cn(tileFlex, "w-full")} sizes="30vw" />
          <GalleryMosaicTile item={items[2]} className={cn(tileFlex, "w-full")} sizes="30vw" />
        </div>
      </div>
    );
  }

  if (n === 4) {
    return (
      <div className={GALLERY_DESKTOP_ROW}>
        <GalleryMosaicTile item={items[0]} className={tileFlex} sizes="24vw" />
        <div className={stackCol}>
          <GalleryMosaicTile item={items[1]} className={cn(tileFlex, "w-full")} sizes="24vw" />
          <GalleryMosaicTile item={items[2]} className={cn(tileFlex, "w-full")} sizes="24vw" />
        </div>
        <GalleryMosaicTile item={items[3]} className={tileFlex} sizes="24vw" />
      </div>
    );
  }

  if (n === 5) {
    return (
      <div className={GALLERY_DESKTOP_ROW}>
        <GalleryMosaicTile item={items[0]} className={tileFlex} sizes="20vw" />
        <div className={stackCol}>
          <GalleryMosaicTile item={items[1]} className={cn(tileFlex, "w-full")} sizes="20vw" />
          <GalleryMosaicTile item={items[2]} className={cn(tileFlex, "w-full")} sizes="20vw" />
        </div>
        <GalleryMosaicTile item={items[3]} className={tileFlex} sizes="20vw" />
        <GalleryMosaicTile item={items[4]} className={tileFlex} sizes="20vw" />
      </div>
    );
  }

  return (
    <div className={GALLERY_DESKTOP_ROW}>
      <GalleryMosaicTile item={items[0]} className={tileFlex} sizes="24vw" />
      <div className={stackCol}>
        <GalleryMosaicTile item={items[1]} className={cn(tileFlex, "w-full")} sizes="24vw" />
        <GalleryMosaicTile item={items[2]} className={cn(tileFlex, "w-full")} sizes="24vw" />
      </div>
      <GalleryMosaicTile item={items[3]} className={tileFlex} sizes="24vw" />
      <div className={stackCol}>
        <GalleryMosaicTile item={items[4]} className={cn(tileFlex, "w-full")} sizes="24vw" />
        <GalleryMosaicTile item={items[5]} className={cn(tileFlex, "w-full")} sizes="24vw" />
      </div>
    </div>
  );
}

function GalleryMobileMosaic({ items }: { items: readonly GalleryImageItem[] }) {
  const n = items.length;
  if (n === 0) return null;

  const row = cn("flex w-max items-center gap-[8px]", GALLERY_ROW_H);

  if (n === 1) {
    return (
      <div className="flex w-full justify-center px-3 sm:px-4 md:hidden">
        <GalleryMosaicTile
          item={items[0]}
          className={cn(
            GALLERY_ROW_H,
            "w-[min(100%,478px)] max-w-[min(100vw-1.5rem,478px)] shrink-0",
          )}
          sizes="478px"
        />
      </div>
    );
  }

  return (
    <div className={GALLERY_MOBILE_SCROLL}>
      <div className={row}>
        {n >= 1 ? <GalleryMosaicTile item={items[0]} className={GALLERY_STRIP_TILE} sizes="478px" /> : null}

        {n >= 3 ? (
          <div className={GALLERY_STACK_OUTER}>
            <GalleryMosaicTile item={items[1]} className={GALLERY_STACK_HALF} sizes="552px" />
            <GalleryMosaicTile item={items[2]} className={GALLERY_STACK_HALF} sizes="552px" />
          </div>
        ) : n === 2 ? (
          <GalleryMosaicTile item={items[1]} className={GALLERY_STRIP_TILE} sizes="478px" />
        ) : null}

        {n >= 4 ? <GalleryMosaicTile item={items[3]} className={GALLERY_STRIP_TILE} sizes="478px" /> : null}

        {n === 6 ? (
          <div className={GALLERY_STACK_OUTER}>
            <GalleryMosaicTile item={items[4]} className={GALLERY_STACK_HALF} sizes="552px" />
            <GalleryMosaicTile item={items[5]} className={GALLERY_STACK_HALF} sizes="552px" />
          </div>
        ) : n === 5 ? (
          <GalleryMosaicTile item={items[4]} className={GALLERY_STRIP_TILE} sizes="478px" />
        ) : null}
      </div>
    </div>
  );
}

function ProjectDetailGallery({
  items,
  slug,
}: {
  items: readonly GalleryImageItem[];
  slug: string;
}) {
  if (items.length === 0) return null;

  const mosaic = items.slice(0, 6);
  const rest = items.slice(6);

  return (
    <div className="flex w-full flex-col gap-4">
      <GalleryDesktopMosaic items={mosaic} />
      <GalleryMobileMosaic items={mosaic} />

      {rest.length > 0 ? (
        <>
          <div className={GALLERY_MOBILE_SCROLL}>
            <div className={cn("flex w-max items-center gap-[8px]", GALLERY_ROW_H)}>
              {rest.map((item, i) => (
                <div
                  key={`${slug}-gallery-extra-scroll-${i}`}
                  className="relative h-[491px] lg:h-[850px] w-[190px] lg:w-[478px] shrink-0 overflow-hidden rounded-[6px] bg-[#E7E9ED]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="478px"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "hidden gap-3 sm:gap-4 md:grid md:px-0",
              rest.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {rest.map((item, i) => (
              <div
                key={`${slug}-gallery-extra-md-${i}`}
                className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[#E7E9ED]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="flex w-full flex-1 flex-col mt-10">
      <section
        className={cn(
          "relative flex w-full flex-col gap-8 overflow-x-clip bg-white",
          "px-8 pb-10 pt-[100px] md:px-[80px] lg:px-[120px] md:pb-10 md:pt-[80px] lg:pt-[152px]",
        )}
      >
        <div className="pointer-events-none absolute left-[-39px] md:left-0 top-[22px] z-20 md:top-[80px] lg:top-[120px]" aria-hidden>
          <Image
            src={PROJECT_DETAIL_DOTS_IMAGE}
            alt=""
            width={119}
            height={109}
            className="max-w-none select-none"
            style={{
              width: 84,
              height: 100,
              opacity: 1,
              transform: "rotate(0deg)",
            }}
            priority={false}
          />
        </div>

        <div className="pointer-events-none absolute -right-[20px] top-10 z-0" aria-hidden>
          <Image
            src={PROJECT_DETAIL_TOP_VECTOR_IMAGE}
            alt=""
            width={520}
            height={500}
            className="max-w-none select-none h-[319.54px] w-[332.02px] -rotate-[14.27deg]  md:h-[500px] md:w-[520px] md:rotate-0 "
            style={{
              transformOrigin: "top right",
            }}
          />
        </div>

        <div className="relative z-10 md:mx-auto flex w-full max-w-[837px] flex-col gap-8  md:gap-10 md:text-left xl:max-w-[1120px]">
          <div className="flex shrink-0 justify-start px-3 py-[4.5px] md:px-0 md:py-0">
            <BackToProjectsLink className="justify-start" />
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14 md:text-left xl:gap-16">
            <motion.div
              className="order-1 flex w-full max-w-[640px] flex-col items-center gap-4 md:w-[318.5px] md:max-w-none md:items-start md:gap-2 xl:w-[46%]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="flex w-full flex-col gap-4 md:gap-2">
                <div className="flex w-full flex-col items-center gap-2 md:items-start">
                  <span className="block w-full text-center text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary md:text-left">
                    {projectsContent.detail.heroBadge}
                  </span>
                  <h1 className="w-full text-center font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-black md:text-left md:text-[40px] md:leading-[1.2]">
                    {project.title}
                  </h1>
                </div>
                <StrapiRichTextBody value={project.description} />
              </div>
            </motion.div>

            <motion.div
              className={cn(
                "relative order-2 mx-auto w-full max-w-[651.24px] shrink-0 overflow-hidden rounded-[5px]",
                "aspect-[651.24/735] md:mx-0 md:mt-8 md:h-[383px] md:w-[318.5px] md:max-w-none xl:mt-0 xl:h-[620px] xl:w-[550px]",
              )}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            >
              <Image
                src={project.heroImageSrc}
                alt={project.heroImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 767px) 90vw, (max-width: 1279px) 318px, 420px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="relative w-full overflow-x-clip bg-white px-8 py-10 md:px-[80px] lg:px-[120px] md:py-[88px]">
          <div
            className={cn(
              "pointer-events-none absolute -left-[300px] top-[70px] h-[600px] w-[600px]",
              "md:block md:-left-[300px] md:h-[600px] md:w-[600px]",
              "lg:-left-[420px] lg:h-[847px] lg:w-[847px]",
            )}
            aria-hidden
          >
            <Image
              src="/images/projects/project-detail-oval.png"
              alt=""
              fill
              className="object-contain object-right opacity-90"
              sizes="847px"
            />
          </div>

          <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10  md:gap-14 md:text-left">
            <h2 className="font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-black md:text-[36px] md:tracking-[-0.04em] self-center">
              Project Details
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,280px)_1fr] md:gap-0 xl:grid-cols-[minmax(0,320px)_1fr]">
              <aside className="flex flex-col items-center gap-10 md:items-start md:pr-10 lg:pr-16 xl:pr-20">
                <div className="flex w-full max-w-xl flex-col gap-3">
                  <SectionKicker>Development</SectionKicker>
                  <ul className="font-(family-name:--font-nata-sans) flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 list-none pl-0 text-center text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:flex-col md:items-start md:justify-start md:gap-2 md:text-left md:text-[15px]">
                    {project.whatWeDid.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full max-w-xl flex-col gap-3">
                  <SectionKicker>Top features</SectionKicker>
                  <ul className="font-(family-name:--font-nata-sans) flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 list-none pl-0 text-center text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:flex-col md:items-start md:justify-start md:gap-2 md:text-left md:text-[15px]">
                    {project.technologies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full max-w-xl flex-col gap-2">
                  <SectionKicker>Client</SectionKicker>
                  <p className="font-(family-name:--font-nata-sans) text-center text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:text-left md:text-[15px]">
                    {project.client}
                  </p>
                </div>
              </aside>

              <div className="flex min-w-0 flex-col items-center gap-10 md:items-start md:border-l md:border-black/10 md:pl-10 lg:pl-16 xl:pl-20">

                <article className="flex w-full max-w-3xl flex-col gap-3">
                  <SectionKicker>Challenges</SectionKicker>
                  <StrapiRichTextBody value={project.challenges} />
                </article>
                <article className="flex w-full max-w-3xl flex-col gap-3">
                  <SectionKicker>Results</SectionKicker>
                  <StrapiRichTextBody value={project.results} />
                </article>
                <article className="flex w-full max-w-3xl flex-col gap-3">
                  <SectionKicker>Solutions</SectionKicker>
                  <StrapiRichTextBody value={project.solution} />
                </article>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>


      {project.gallery.length > 0 ? (
        <ScrollReveal>
          <section className="w-full bg-white py-10 md:py-[88px]">
            <div className="mx-auto mb-10 max-w-[1200px] px-8 md:mb-8 md:px-[120px]">
              <h2 className="text-center font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-black md:text-[36px] md:tracking-[-0.04em]">
                Gallery
              </h2>
            </div>

            <ProjectDetailGallery items={project.gallery} slug={project.slug} />
          </section>
        </ScrollReveal>
      ) : null}

      <ScrollReveal>
        <ContactSection
          heading={projectsContent.contact.heading}
          description={projectsContent.contact.description}
          buttonLabel="Send"
          namePlaceholder="Full Name"
        />
      </ScrollReveal>
    </div>
  );
}
