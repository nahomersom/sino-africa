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
    <span className="block w-full text-center text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-black md:text-left">
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

/** Same 4-strip mosaic as desktop: full-height | stack of 2 | full-height | stack of 2, in a horizontal scroller. */
function GalleryMosaicMobileScroll({
  g0,
  g1,
  g2,
  g3,
  g4,
  g5,
}: {
  g0: GalleryImageItem;
  g1: GalleryImageItem;
  g2: GalleryImageItem;
  g3: GalleryImageItem;
  g4: GalleryImageItem;
  g5: GalleryImageItem;
}) {
  const stripClass = "h-full w-[132px] shrink-0 sm:w-[158px]";
  const mosaicHeight = "h-[288px] sm:h-[340px]";

  return (
    <div
      className={cn(
        "no-scrollbar overflow-x-auto md:hidden",
        "pl-3 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "sm:pl-4",
      )}
    >
      <div className={cn("flex w-max gap-3 sm:gap-4", mosaicHeight)}>
        <GalleryMosaicTile item={g0} className={stripClass} sizes="158px" />
        <div className={cn("flex min-h-0 min-w-0 shrink-0 flex-col gap-3 sm:gap-4", stripClass)}>
          <GalleryMosaicTile item={g1} className="min-h-0 min-w-0 w-full flex-1" sizes="158px" />
          <GalleryMosaicTile item={g2} className="min-h-0 min-w-0 w-full flex-1" sizes="158px" />
        </div>
        <GalleryMosaicTile item={g3} className={stripClass} sizes="158px" />
        <div className={cn("flex min-h-0 min-w-0 shrink-0 flex-col gap-3 sm:gap-4", stripClass)}>
          <GalleryMosaicTile item={g4} className="min-h-0 min-w-0 flex-1" sizes="158px" />
          <GalleryMosaicTile item={g5} className="min-h-0 min-w-0 flex-1" sizes="158px" />
        </div>
      </div>
    </div>
  );
}

/** Four-column masonry: full-height | equal two-row stack | full-height | equal two-row stack (lg+). */
function ProjectDetailGallery({
  items,
  slug,
}: {
  items: readonly GalleryImageItem[];
  slug: string;
}) {
  const mosaic = items.slice(0, 6);
  const rest = items.slice(6);

  if (mosaic.length < 6) {
    return (
      <div className="w-full md:px-0">
        <div
          className={cn(
            "no-scrollbar overflow-x-auto md:hidden",
            "pl-3 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "sm:pl-4",
          )}
        >
          <div className="flex w-max gap-3 sm:gap-4">
            {items.map((item, i) => (
              <div
                key={`${slug}-gallery-scroll-${i}`}
                className="relative aspect-[4/3] w-[220px] shrink-0 overflow-hidden rounded-[6px] bg-[#E7E9ED] sm:w-[240px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden gap-3 sm:gap-4 md:grid md:grid-cols-3 md:px-0">
          {items.map((item, i) => (
            <div
              key={`${slug}-gallery-${i}`}
              className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[#E7E9ED]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const [g0, g1, g2, g3, g4, g5] = mosaic;

  return (
    <div className="flex w-full flex-col gap-4">
      <div
        className={cn(
          "hidden w-full gap-3 sm:gap-4 md:flex md:h-[491px] lg:h-[850px]",
          "px-3 sm:px-4 md:px-0",
        )}
      >
        <GalleryMosaicTile item={g0} className="flex-1" sizes="24vw" />
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 sm:gap-4">
          <GalleryMosaicTile item={g1} className="min-h-0 min-w-0 w-full flex-1" sizes="24vw" />
          <GalleryMosaicTile item={g2} className="min-h-0 min-w-0 w-full flex-1" sizes="24vw" />
        </div>
        <GalleryMosaicTile item={g3} className="flex-1" sizes="24vw" />
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 sm:gap-4">
          <GalleryMosaicTile item={g4} className="min-h-0 min-w-0 flex-1" sizes="24vw" />
          <GalleryMosaicTile item={g5} className="min-h-0 min-w-0 flex-1" sizes="24vw" />
        </div>
      </div>

      <GalleryMosaicMobileScroll g0={g0} g1={g1} g2={g2} g3={g3} g4={g4} g5={g5} />

      {rest.length > 0 ? (
        <>
          <div
            className={cn(
              "no-scrollbar overflow-x-auto md:hidden",
              "pl-3 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "sm:pl-4",
            )}
          >
            <div className="flex w-max gap-3 sm:gap-4">
              {rest.map((item, i) => (
                <div
                  key={`${slug}-gallery-extra-scroll-${i}`}
                  className="relative aspect-[4/3] w-[220px] shrink-0 overflow-hidden rounded-[6px] bg-[#E7E9ED] sm:w-[240px]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden gap-3 sm:gap-4 md:grid md:grid-cols-4 md:px-0">
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
          "px-8 pb-10 pt-[120px] md:px-[120px] md:pb-10 md:pt-[152px]",
        )}
      >
        <div className="pointer-events-none absolute left-0 top-[92px] z-20 md:top-[120px]" aria-hidden>
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
            className="max-w-none select-none"
            style={{
              opacity: 1,
              transform: "rotate(0deg)",
              transformOrigin: "top right",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[837px] flex-col gap-8 text-center md:gap-10 md:text-left xl:max-w-[1120px]">
          <div className="flex shrink-0 justify-center md:justify-start">
            <BackToProjectsLink className="justify-center md:justify-start" />
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-14 md:text-left xl:gap-16">
            <motion.div
              className="order-1 flex w-full max-w-[640px] flex-col items-center gap-4 md:w-[318.5px] md:max-w-none md:items-start md:gap-2 xl:w-[46%]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="flex w-full flex-col gap-4 md:h-[269px] md:gap-2">
                <div className="flex w-full flex-col items-center gap-2 md:items-start">
                  <span className="block w-full text-center text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary md:text-left">
                    {projectsContent.detail.heroBadge}
                  </span>
                  <h1 className="w-full text-center font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-black md:text-left md:text-[40px] md:leading-[1.2]">
                    {project.title}
                  </h1>
                </div>
                <p className="w-full text-center text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-left md:text-lg md:leading-[1.65]">
                  {project.heroDescription}
                </p>
              </div>
            </motion.div>

            <motion.div
              className={cn(
                "relative order-2 mx-auto w-full max-w-[651.24px] shrink-0 overflow-hidden rounded-[6px]",
                "aspect-[651.24/735] md:mx-0 md:mt-8 md:h-[383px] md:w-[318.5px] md:max-w-none xl:mt-0 xl:h-[500px] xl:w-[420px]",
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
        <section className="relative w-full overflow-x-clip bg-white px-8 py-12 md:px-[120px] md:py-[88px]">
          <div
            className={cn(
              "pointer-events-none absolute top-[70px] hidden",
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

          <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10 text-center md:gap-14 md:text-left">
            <h2 className="font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-black md:text-[36px] md:tracking-[-0.04em]">
              Project Details
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,280px)_1fr] md:gap-16 xl:grid-cols-[minmax(0,320px)_1fr]">
              <aside className="flex flex-col items-center gap-10 md:items-start">
                <div className="flex w-full max-w-xl flex-col gap-3">
                  <SectionKicker>What we did</SectionKicker>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-center text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:list-outside md:pl-5 md:text-left md:text-[15px]">
                    {project.whatWeDid.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full max-w-xl flex-col gap-3">
                  <SectionKicker>Technologies</SectionKicker>
                  <ul className="flex list-inside list-disc flex-col gap-2 text-center text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:list-outside md:pl-5 md:text-left md:text-[15px]">
                    {project.technologies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full max-w-xl flex-col gap-2">
                  <SectionKicker>Client</SectionKicker>
                  <p className="text-center text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:text-left md:text-[15px]">
                    {project.client}
                  </p>
                </div>
              </aside>

              <div className="flex min-w-0 flex-col items-center gap-10 md:items-start">
                <article className="flex w-full max-w-3xl flex-col gap-3">
                  <SectionKicker>Overview</SectionKicker>
                  <p className="text-center text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-left md:text-lg">
                    {project.overview}
                  </p>
                </article>
                <article className="flex w-full max-w-3xl flex-col gap-3">
                  <SectionKicker>Challenges</SectionKicker>
                  <p className="text-center text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-left md:text-lg">
                    {project.challenges}
                  </p>
                </article>
                <article className="flex w-full max-w-3xl flex-col gap-3">
                  <SectionKicker>Results</SectionKicker>
                  <p className="text-center text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-left md:text-lg">
                    {project.results}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="w-full bg-white py-12 md:py-[88px]">
          <div className="mx-auto mb-10 max-w-[1200px] px-8 md:mb-14 md:px-[120px]">
            <h2 className="text-center font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-black md:text-[36px] md:tracking-[-0.04em]">
              Gallery
            </h2>
          </div>

          <ProjectDetailGallery items={project.gallery} slug={project.slug} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection
          heading={projectsContent.contact.heading}
          description={projectsContent.contact.description}
          buttonLabel="Submit"
          variant="inner-page"
          namePlaceholder="Full Name"
        />
      </ScrollReveal>
    </div>
  );
}
