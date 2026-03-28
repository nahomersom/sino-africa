type AboutSectionProps = {
  heading: string;
  bodyOne: string;
  bodyTwo: string;
};

export function AboutSection({ heading, bodyOne, bodyTwo }: AboutSectionProps) {
  return (
    <section className="flex w-full flex-col gap-6 py-6">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">{heading}</h2>
      <p className="max-w-4xl text-base leading-7 text-zinc-700">{bodyOne}</p>
      <p className="max-w-4xl text-base leading-7 text-zinc-700">{bodyTwo}</p>
    </section>
  );
}
