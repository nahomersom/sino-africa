import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate mx-auto w-full bg-white">
      <div>
        <Image
          src="/images/our-verticals/verticals-hero-top.png"
          alt=""
          fill
          priority
          className="h-[1545px] w-full object-cover object-top"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1728px] flex-col items-center gap-2 overflow-x-hidden px-6 pb-10 pt-[120px] md:px-20 lg:flex-row lg:items-end lg:justify-center lg:gap-2 lg:px-[237px] lg:pb-10 lg:pt-[300px]">
        <div className="flex w-full min-w-0 max-w-[638px] flex-col gap-2 lg:flex-1">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-normal uppercase leading-[1.26em] tracking-[0.125em] text-primary">
              OUR VERTICALS
            </p>
            <h1
              className="max-w-[515px] text-[36px] font-semibold text-text-100"
              style={{ letterSpacing: "-0.03333333465788099em", lineHeight: "1.3333333333333333em" }}
            >
              Technology, security, and mobility—built for African markets and global standards.
            </h1>
          </div>
          <p
            className="max-w-[505px] text-base font-normal leading-[1.5em] text-muted"
            style={{ letterSpacing: "-0.00625em" }}
          >
            Sino Africa brings together specialised verticals that help organisations modernise IT, strengthen security,
            and move people and goods with confidence. Explore each vertical to see how we can support your goals.
          </p>
        </div>

        <div className="relative aspect-[608/612] w-full max-w-[608px] shrink-0 overflow-hidden lg:aspect-auto lg:h-[612px] lg:w-[608px]">
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute left-0 top-[-109px]">
              <div className="relative h-[721.41px] w-[627.27px] max-w-none overflow-hidden">
                <Image
                  src="/images/our-verticals/our-verticals-hero.png"
                  alt="Our verticals"
                  fill
                  priority
                  sizes="608px"
                  className="object-cover object-top"
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
