export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t border-zinc-200 bg-white"
    >
      <div className="mx-auto flex w-full max-w-[1254px] flex-col gap-2 px-4 lg:px-0 py-8 text-sm text-zinc-600">
        <div>© {new Date().getFullYear()} Sino Africa. All rights reserved.</div>
      </div>
    </footer>
  );
}