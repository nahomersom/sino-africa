import { Nav } from "@/src/components/layout/Nav";
import { ContactPage } from "@/src/features/contact/ContactPage";

export default function Contact() {
  return (
    <main className="flex w-full">
      <Nav variant="inner-page" />
      <ContactPage />
    </main>
  );
}
