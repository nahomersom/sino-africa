import { Nav } from "@/src/components/layout/Nav";
import { CareerDetail } from "@/src/features/careers/sections/CareerDetail";

export default async function CareerDetailPage({ params }: { params: Promise<{ documentId: string }> }) {
  const { documentId } = await params;

  return (
    <main className="flex min-h-screen flex-1 w-full flex-col">
      <Nav variant="inner-page" />
      <CareerDetail documentId={documentId} />
    </main>
  );
}
