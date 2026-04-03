import { use } from "react";
import { Metadata } from "next";
import { BlogDetailPage } from "@/src/features/blogs/BlogDetailPage";
import { Nav } from "@/src/components/layout/Nav";
import { getStrapiApiBaseUrl, getStrapiMediaUrl } from "@/src/lib/strapiBase";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  try {
    const res = await fetch(`${getStrapiApiBaseUrl()}/blogs/${id}?populate=*`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch blog");
    
    const json = await res.json();
    const blog = json?.data;
    if (!blog) return { title: "Blog" };

    const title = blog.title;
    // Extract a plain text description from Rich Text if summary is not present or we can just use summary.
    const description = blog.summary || "Read this insightful blog post.";
    const imageUrl = blog.cover_img?.url 
      ? getStrapiMediaUrl(blog.cover_img.url) 
      : "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: imageUrl }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    return { title: "Blog" };
  }
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <main className="flex min-h-screen flex-col bg-white mt-28">
      <Nav />
      <BlogDetailPage id={id} />
    </main>
  );
}
