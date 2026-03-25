import Link from "next/link";

export function Nav() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Sino Africa
        </div>

        <nav className="flex items-center gap-5 text-sm">
          <Link className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50" href="/">
            Home
          </Link>
          <Link className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50" href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

