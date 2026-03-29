import { Nav } from "@/src/components/layout/Nav";
import { HomePage } from "@/src/features/home";

export default function Home() {
  return (
    <main className="flex w-full">
      <Nav variant="default" />
      <HomePage />
    </main>
  );
}
