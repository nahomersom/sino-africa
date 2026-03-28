import { Nav } from "@/src/components/layout/Nav";
import { AboutPage } from "@/src/features/about/AboutPage";

export default function About() {
  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <AboutPage />
    </main>
  );
}
