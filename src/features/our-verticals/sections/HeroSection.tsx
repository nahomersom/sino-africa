const puzzleLetters = ["S", "I", "N", "O"];

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pb-16 pt-14 md:flex-row md:items-start md:pt-20">
      <div className="max-w-xl space-y-4">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500">OUR VERTICALS</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          Build impact across industries
        </h1>
        <p className="text-base leading-7 text-zinc-600 md:text-lg">
          Sino Africa operates across focused verticals, each designed to deliver practical value
          for enterprises, institutions, and growth-stage initiatives.
        </p>
      </div>

      <div className="flex w-full max-w-md justify-center md:justify-end">
        <div className="grid h-56 w-56 grid-cols-2 grid-rows-2 overflow-hidden rounded-full border-4 border-white shadow-[0_20px_60px_rgba(15,23,42,0.14)] md:h-72 md:w-72">
          {puzzleLetters.map((letter, index) => (
            <div
              key={letter}
              className={`flex items-center justify-center text-4xl font-semibold ${
                index % 2 === 0 ? "bg-[#57c595]" : "bg-[#2f67d8]"
              } ${index > 1 ? "text-white" : "text-zinc-900"}`}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
