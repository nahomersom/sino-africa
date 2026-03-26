import { Footer } from "@/src/components/layout/Footer";
import { Nav } from "@/src/components/layout/Nav";
import { HomePage } from "@/src/features/home";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 dark:bg-black">
      <Nav />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10">
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}
