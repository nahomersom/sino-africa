import { AboutPageClient } from "@/src/components/AboutPageClient";
import { Footer } from "@/src/components/Footer";
import { Nav } from "@/src/components/Nav";

export default function About() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 dark:bg-black">
      <Nav />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10">
        <AboutPageClient />
      </main>

      <Footer />
    </div>
  );
}

