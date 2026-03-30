import { Footer } from "@/src/components/layout/Footer";
import { Nav } from "@/src/components/layout/Nav";
import { TechnologyPage } from "@/src/features/technology";

export default function Technology() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50">
      <Nav />

      <main className="flex-1">
        <TechnologyPage />
      </main>
    </div>
  );
}
