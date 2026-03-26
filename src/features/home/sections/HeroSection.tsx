type HeroSectionProps = {
  title: string;
  subtitle: string;
  body: string;
  isLoading: boolean;
  hasError: boolean;
};

export function HeroSection({ title, subtitle, body, isLoading, hasError }: HeroSectionProps) {
  return (
    <section className="flex w-full flex-1 flex-col items-start gap-6 rounded-3xl bg-primary px-8 py-14">
      {isLoading && <div className="text-sm text-zinc-700">Loading landing content...</div>}
      {hasError && <div className="text-sm text-red-700">Failed to load landing content.</div>}

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-[0.16em] text-zinc-900/70">SINO AFRICA</p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900">{title}</h1>
        <p className="max-w-2xl text-lg leading-7 text-zinc-800">{subtitle}</p>
      </div>

      <p className="max-w-2xl text-zinc-800">{body}</p>
    </section>
  );
}
