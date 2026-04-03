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

      <div className="relative z-10 flex w-full justify-center overflow-x-hidden pb-10 pt-[120px] lg:pb-10 lg:pt-[203px]">
        <div className="mx-auto flex w-full max-w-[1252px] flex-col items-center gap-6 px-8 lg:flex-row lg:items-end lg:justify-center lg:gap-2 lg:px-4">
          <div className="order-2 mt-20 flex w-full min-w-0 max-w-[760px] flex-col gap-2 text-center lg:order-1 lg:flex-1 lg:text-left">
            <div className="flex flex-col gap-2">
              <p className="text-[13px] font-normal uppercase leading-[1.26em] tracking-[0.125em] text-primary">
                OUR VERTICALS
              </p>
              <h1
                className="mx-auto max-w-[620px] text-[36px] font-semibold text-text-100 lg:mx-0"
                style={{ letterSpacing: "-0.03333333465788099em", lineHeight: "1.3333333333333333em" }}
              >
                Three instruments, one platform, united for institutional impact.
              </h1>
            </div>
            <p
              className="mx-auto max-w-[620px] pb-2 text-base font-normal leading-[1.5em] text-muted lg:mx-0"
              style={{ letterSpacing: "-0.00625em" }}
            >
              Our verticals operate with specialized focus but shared architecture. They maintain distinct
              execution mandates while enabling seamless integration. They deliver discrete systems that
              function as unified infrastructure.
            </p>
            <p
              className="mx-auto max-w-[620px] text-base font-normal leading-[1.5em] text-muted lg:mx-0"
              style={{ letterSpacing: "-0.00625em" }}
            >
              Sino Africa&apos;s three verticals are not silos. They are specialized execution platforms
              designed to work in concert creating integrated infrastructure solutions that no single
              vertical could deliver alone.
            </p>
          </div>

          <div className="relative order-1 w-full min-w-0 max-w-[608px] shrink-0 overflow-hidden lg:order-2">
            <div className="relative aspect-[608/612] w-full overflow-hidden lg:aspect-auto lg:h-[612px] lg:w-[608px]">
              <div className="relative inset-0 z-20 lg:left-0 lg:right-auto lg:top-0 lg:h-[721.41px] lg:w-[627.27px]">
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
      </div>
    </section>
  );
}
