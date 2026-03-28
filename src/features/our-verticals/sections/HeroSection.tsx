import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-[1728px] overflow-x-hidden">
      {/* Figma 154:1551 Pattern: abs x -58.5 y -1217, 1845×1845, opacity 0.5; tint #64C294 in file */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 opacity-50"
        style={{
          left: -58.5,
          top: -1217,
          width: 1845,
          height: 1845,
        }}
      >
        <Image
          src="/images/our-verticals/verticals-pattern.png"
          alt=""
          width={1845}
          height={1845}
          priority
          className="h-[1845px] w-[1845px] max-w-none object-cover object-top"
          unoptimized
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1728px] flex-col items-center gap-2 px-6 pb-10 pt-[120px] lg:flex-row lg:items-end lg:justify-center lg:gap-2 lg:px-[237px] lg:pb-10 lg:pt-[152px]">
        <div className="flex w-full min-w-0 max-w-[638px] flex-col gap-2 lg:flex-1">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-normal uppercase leading-[1.26em] tracking-[0.125em] text-[#64C294]">
              OUR VERTICALS
            </p>
            <h1
              className="max-w-[515px] text-[36px] font-semibold text-[#161C2D]"
              style={{ letterSpacing: "-0.03333333465788099em", lineHeight: "1.3333333333333333em" }}
            >
              Lorem ipsum dolor sit amet consectetur. Enim lacus tempus feugiat nibh diam eget.
            </h1>
          </div>
          <p
            className="max-w-[505px] text-base font-normal leading-[1.5em] text-[#5C606C]"
            style={{ letterSpacing: "-0.00625em" }}
          >
            Lorem ipsum dolor sit amet consectetur. Enim lacus tempus feugiat nibh diam eget. Lorem ipsum dolor sit
            amet consectetur. Enim lacus tempus feugiat nibh diam eget.Lorem ipsum dolor sit amet consectetur. Enim
            lacus tempus feugiat nibh diam eget.Lorem ipsum dolor sit amet consectetur. Enim lacus tempus feugiat nibh
            diam eget.Lorem ipsum dolor sit amet consectetur. Enim lacus tempus feugiat nibh diam eget.
          </p>
        </div>

        {/* Figma 155:1467 frame 608×612; inner 155:1720 at y -109, 627.27×721.41, object-fit cover */}
        <div className="relative h-[min(70vw,400px)] w-full max-w-[608px] shrink-0 sm:h-[480px] lg:h-[612px]">
          <div className="absolute -left-[37px] top-[160px] z-[1] hidden h-[109px] w-[119px] lg:block" aria-hidden>
            <Image src="/images/our-verticals/hero-africa-accent.svg" alt="" width={120} height={109} unoptimized />
          </div>
          <div className="relative h-full w-full overflow-hidden bg-white">
            <div className="absolute left-0 top-[-109px]">
              <div className="relative h-[721px] w-[627px] max-w-none overflow-hidden">
                <Image
                  src="/images/our-verticals/our-verticals-hero.png"
                  alt=""
                  fill
                  priority
                  sizes="608px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
