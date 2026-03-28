import { Nav } from "@/src/components/layout/Nav";
import { OurVerticalsPage } from "@/src/features/our-verticals";

export default function OurVerticals() {
  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <OurVerticalsPage />
    </main>
  );
}
