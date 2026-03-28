import { Footer } from "@/src/components/layout/Footer";
import { Nav } from "@/src/components/layout/Nav";
import { AboutPage } from "@/src/features/about";

export default function About() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50">
      <Nav />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10">
        <AboutPage />
      </main>

      <Footer />
    </div>
  );
}

