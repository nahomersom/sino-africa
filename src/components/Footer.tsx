export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-zinc-600">
        <div>© {new Date().getFullYear()} Sino Africa. All rights reserved.</div>
      </div>
    </footer>
  );
}

