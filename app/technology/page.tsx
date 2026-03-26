import { Nav } from "@/src/components/Nav";
import { Footer } from "@/src/components/Footer";
import { TechnologyPageClient } from "@/src/components/TechnologyPageClient";

export default function TechnologyPage() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <Nav />

      <main className="flex-1">
        <TechnologyPageClient />
      </main>

      <Footer />
    </div>
  );
}
