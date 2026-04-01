import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate mx-auto w-full max-md:overflow-x-clip bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 z-0 overflow-hidden max-md:left-1/2 max-md:w-screen max-md:max-w-[100dvw] max-md:-translate-x-1/2 md:inset-x-0 md:w-full md:translate-x-0 md:top-[92px] lg:top-0"
      >
        <div className="relative aspect-[1728/988] w-full">
        <Image
          src="/images/our-verticals/verticals-hero-top.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-left-top md:origin-top-left md:object-contain md:object-left-top md:scale-[1.08] lg:scale-[1.12] xl:scale-100"
          unoptimized
        />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1728px] flex-col items-center gap-6 overflow-x-hidden px-6 pb-10 pt-[120px] md:px-20 lg:flex-row lg:items-end lg:justify-center lg:gap-2 lg:px-[237px] lg:pb-10 lg:pt-[300px]">
        <div className="order-2 flex w-full min-w-0 max-w-[760px] flex-col gap-2 text-center lg:order-1 lg:flex-1 lg:text-left mt-20">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-normal uppercase leading-[1.26em] tracking-[0.125em] text-primary">
              OUR VERTICALS
            </p>
            <h1
              className="mx-auto max-w-[620px] text-[36px] font-semibold text-text-100 lg:mx-0"
              style={{ letterSpacing: "-0.03333333465788099em", lineHeight: "1.3333333333333333em" }}
            >
              Technology, security, and mobility—built for African markets and global standards.
            </h1>
          </div>
          <p
            className="mx-auto max-w-[620px] text-base font-normal leading-[1.5em] text-muted lg:mx-0"
            style={{ letterSpacing: "-0.00625em" }}
          >
            Sino Africa brings together specialised verticals that help organisations modernise IT, strengthen security,
            and move people and goods with confidence. Explore each vertical to see how we can support your goals.
          </p>
        </div>

        <div className="relative order-1 w-full min-w-0 max-w-[608px] shrink-0 overflow-hidden lg:order-2">
          <div className="relative aspect-[608/612] w-full overflow-hidden lg:aspect-auto lg:h-[612px] lg:w-[608px]">
            <div className="absolute inset-0 lg:left-0 lg:right-auto lg:top-[-109px] lg:bottom-auto lg:h-[721.41px] lg:w-[627.27px]">
              <Image
                src="/images/our-verticals/our-verticals-hero.png"
                alt="Our verticals"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 608px"
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
