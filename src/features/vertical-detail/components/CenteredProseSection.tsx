type Props = {
  title: string;
  paragraphs: string[];
};

export function CenteredProseSection({ title, paragraphs }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 lg:px-[min(15rem,12vw)] lg:py-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 hidden h-[min(80%,420px)] w-48 -translate-y-1/2 opacity-[0.35] lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-border-light) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[804px] flex-col items-center gap-6 text-center lg:gap-6">
        <h2 className="font-heading text-4xl font-semibold leading-[1.33] tracking-[-0.04em] text-text-100">
          {title}
        </h2>
        <div className="flex w-full max-w-[804px] min-h-[128px] flex-col gap-5 opacity-70">
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 48)}
              className="text-lg font-normal leading-[1.78] tracking-[-0.011em] text-text-100"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
