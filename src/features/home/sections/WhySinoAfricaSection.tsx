type WhySinoAfricaSectionProps = {
  heading: string;
  intro: string;
  points: readonly string[];
};

export function WhySinoAfricaSection({ heading, intro, points }: WhySinoAfricaSectionProps) {
  return (
    <section id="why-sino-africa" className="flex w-full flex-col gap-6 rounded-3xl bg-accent-60 p-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">{heading}</h2>
      <p className="max-w-3xl text-base leading-7 text-zinc-700">{intro}</p>

      <div className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <article key={point} className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm leading-6 text-zinc-700">{point}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
