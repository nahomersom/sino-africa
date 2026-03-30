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
    <span className="text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-black">
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
      <div className="w-full px-3 sm:px-4 md:px-5 lg:px-0">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
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
          "hidden h-[850px] w-full gap-3 sm:gap-4 lg:flex",
          "px-3 sm:px-4 md:px-5 lg:px-0",
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

      <div className="grid grid-cols-2 gap-3 px-3 sm:gap-4 sm:px-4 md:px-5 lg:hidden">
        {[g0, g1, g2, g3, g4, g5].map((item, i) => (
          <div
            key={`${slug}-gallery-sm-${i}`}
            className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[#E7E9ED]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 px-3 sm:grid-cols-3 sm:gap-4 sm:px-4 md:px-5 lg:grid-cols-4 lg:px-0">
          {rest.map((item, i) => (
            <div
              key={`${slug}-gallery-extra-${i}`}
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
          "px-8 pb-10 pt-[120px] md:px-20 md:pb-12 md:pt-[113px] lg:px-[120px] lg:pb-14 lg:pt-[152px]",
        )}
      >
        <div className="pointer-events-none absolute left-0 top-[92px] z-20 md:top-[96px] lg:top-[120px]" aria-hidden>
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

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-8 lg:gap-10">
          <div className="lg:hidden">
            <BackToProjectsLink />
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-14">
            <motion.div
              className="order-2 flex max-w-[640px] flex-col gap-4 lg:order-1 lg:min-h-[735px] lg:justify-between lg:gap-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="hidden shrink-0 lg:block">
                <BackToProjectsLink />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-normal uppercase leading-[1.26] tracking-[0.125em] text-primary">
                    {projectsContent.detail.heroBadge}
                  </span>
                  <h1 className="text-left font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-black md:text-[40px] md:leading-[1.2]">
                    {project.title}
                  </h1>
                </div>
                <p className="text-left text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-lg md:leading-[1.65]">
                  {project.heroDescription}
                </p>
              </div>
            </motion.div>

            <motion.div
              className={cn(
                "relative order-1 mx-auto w-full max-w-[651.24px] shrink-0 overflow-hidden rounded-[6px] lg:order-2 lg:mx-0",
                "aspect-[651.24/735] lg:aspect-auto lg:h-[735px] lg:w-[651.24px]",
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
                sizes="(max-width: 1023px) 90vw, 651px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="relative w-full overflow-x-clip bg-white px-8 py-12 md:px-20 md:py-[72px] lg:px-[120px] lg:py-[88px]">
          <div
            className="pointer-events-none absolute -left-[420px] top-[70px] hidden h-[847px] w-[847px] lg:block"
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

          <div className="relative z-[1] mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:gap-14">
            <h2 className="text-center font-(family-name:--font-nata-sans) text-[28px] font-semibold leading-[1.3] tracking-[-0.035em] text-black md:text-[36px] md:tracking-[-0.04em]">
              Project Details
            </h2>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,320px)_1fr]">
              <aside className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <SectionKicker>What we did</SectionKicker>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:text-[15px]">
                    {project.whatWeDid.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <SectionKicker>Technologies</SectionKicker>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:text-[15px]">
                    {project.technologies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <SectionKicker>Client</SectionKicker>
                  <p className="text-sm font-light leading-[1.55] tracking-[-0.01em] text-black md:text-[15px]">
                    {project.client}
                  </p>
                </div>
              </aside>

              <div className="flex min-w-0 flex-col gap-10">
                <article className="flex flex-col gap-3">
                  <SectionKicker>Overview</SectionKicker>
                  <p className="text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-lg">
                    {project.overview}
                  </p>
                </article>
                <article className="flex flex-col gap-3">
                  <SectionKicker>Challenges</SectionKicker>
                  <p className="text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-lg">
                    {project.challenges}
                  </p>
                </article>
                <article className="flex flex-col gap-3">
                  <SectionKicker>Results</SectionKicker>
                  <p className="text-base font-light leading-[1.65] tracking-[-0.0125em] text-black md:text-lg">
                    {project.results}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="w-full bg-white py-12 md:py-[72px] lg:py-[88px]">
          <div className="mx-auto mb-10 max-w-[1200px] px-8 md:mb-12 md:px-20 lg:mb-14 lg:px-[120px]">
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
