import Link from "next/link";

type AboutSectionProps = {
  heading: string;
  bodyOne: string;
  bodyTwo: string;
};

export function AboutSection({ heading, bodyOne, bodyTwo }: AboutSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-center gap-6 overflow-hidden bg-white px-6 py-16 md:px-16 lg:px-60 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "url('/images/sino-symbol-tile.svg')", backgroundSize: "28px", backgroundRepeat: "repeat" }}
      />
      <h2 className="text-center text-4xl font-semibold tracking-tight text-text-100">
        {heading}
      </h2>
      <p className="max-w-3xl text-center text-lg leading-8 text-text-100/70">
        {bodyOne}
      </p>
      <p className="max-w-3xl text-center text-lg leading-8 text-text-100/70 whitespace-pre-line">
        {bodyTwo}
      </p>
      <Link
        href="/about"
        className="text-lg text-text-100 underline"
      >
        Read More
      </Link>
    </section>
  );
}
