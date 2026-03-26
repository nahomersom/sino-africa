import Link from "next/link";

type CtaSectionProps = {
  heading: string;
  text: string;
  buttonLabel: string;
};

export function CtaSection({ heading, text, buttonLabel }: CtaSectionProps) {
  return (
    <section
      id="platforms"
      className="flex w-full items-center justify-between gap-6 rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{heading}</h2>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">{text}</p>
      </div>
      <Link
        href="/#contact"
        className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-zinc-900 transition-opacity hover:opacity-90"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
