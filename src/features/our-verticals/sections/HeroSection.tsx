import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1254px] flex-col items-center gap-10 overflow-hidden px-6 pb-10 pt-14 md:flex-row md:items-end md:gap-[8px] md:px-0 md:pb-[40px] md:pt-[152px]">
      <div
        aria-hidden
        className="verticals-pattern pointer-events-none absolute inset-0 -z-10 opacity-80"
      />
      <div className="max-w-xl space-y-4 md:max-w-[638px] md:flex-[0_0_638px] md:self-stretch">
        <p className="text-[13px] font-normal tracking-[0.125em] text-primary">OUR VERTICALS</p>
        <h1
          className="text-[36px] font-semibold text-text-100"
          style={{ letterSpacing: "-3.3333334657880993%", lineHeight: "1.3333333333333333em" }}
        >
          Lorem ipsum dolor sit amet consectetur. Enim lacus tempus feugiat nibh diam eget.
        </h1>
        <p className="max-w-[515px] text-base leading-7 text-[#5C606C]">
          Lorem ipsum dolor sit amet consectetur. Enim lacus tempus feugiat nibh diam eget.
          Lorem ipsum dolor sit amet consectetur. Enim lacus tempus feugiat nibh diam eget.
        </p>
      </div>

      <div className="flex w-full max-w-[608px] justify-center md:justify-end md:flex-[0_0_608px]">
        <div className="relative h-[360px] w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.14)] md:h-[612px]">
          <Image
            src="/images/our-verticals/our-verticals-hero.png"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 608px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
