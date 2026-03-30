

import { use } from "react";
import { BlogDetailPage } from "@/src/features/blogs/BlogDetailPage";
import { Nav } from "@/src/components/layout/Nav";
import { Footer } from "@/src/components/layout/Footer";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <main className="flex min-h-screen flex-col bg-white mt-28">
      <Nav />
      <BlogDetailPage id={id} />
    </main>
  );
}
