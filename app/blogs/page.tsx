import { Nav } from "@/src/components/layout/Nav";
import { BlogsPage } from "@/src/features/blogs/BlogsPage";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white mt-28">
      <Nav />
      <BlogsPage />
    </div>
  );
}
