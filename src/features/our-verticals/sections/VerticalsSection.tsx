import { verticalItems } from "../constants";

export function VerticalsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Our Verticals</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          We focus on platforms where execution, partnerships, and long-term value creation meet.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {verticalItems.map((item) => (
          <article
            key={item.title}
            className={`${item.colorClass} rounded-xl p-8 text-white shadow-[0_18px_35px_rgba(15,23,42,0.12)]`}
          >
            <div className="mb-8 h-10 w-20 rounded-full border-4 border-white/70" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/90">{item.description}</p>
            <button
              type="button"
              className="mt-7 text-sm font-medium tracking-wide text-white/95 transition hover:text-white"
            >
              READ MORE →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
