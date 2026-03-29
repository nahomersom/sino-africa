import { Nav } from "@/src/components/layout/Nav";
import { Footer } from "@/src/components/layout/Footer";
import { BlogsPage } from "@/src/features/blogs/BlogsPage";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white mt-28">
      <Nav />
      <BlogsPage />
    </div>
  );
}
