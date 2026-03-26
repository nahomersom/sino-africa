import { Nav } from "@/src/components/Nav";
import { Footer } from "@/src/components/Footer";
import { LandingPageClient } from "@/src/components/LandingPageClient";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50">
      <Nav />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10">
        <LandingPageClient />
      </main>

      <Footer />
    </div>
  );
}
