"use client";

import { useGetBlogByDocumentIdQuery, getStrapiMediaUrl } from "@/src/store/strapiApi";
import { BlogDetailHero } from "./sections/BlogDetailHero";
import { BlogContent } from "./sections/BlogContent";
import { SharingSidebar } from "./sections/SharingSidebar";
import { AllBlogs } from "./sections/AllBlogs";
import { ErrorState } from "@/src/components/ui/ErrorState";

interface BlogDetailPageProps {
  id: string;
}

const placeholderImage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop";

export function BlogDetailPage({ id }: BlogDetailPageProps) {
  const { data: blog, isLoading, isError, refetch } = useGetBlogByDocumentIdQuery(id);

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col">
        <section className="w-full bg-white py-[80px]">
          <div className="max-w-[1254px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-[48px]" />
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-[48px]">
              <div className="flex flex-col gap-[8px] flex-1">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-12 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="w-full lg:w-[500px] h-[350px] rounded-[16px] bg-gray-200 animate-pulse shrink-0" />
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <ErrorState onRetry={refetch} />
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <ErrorState
          title="Blog not found"
          message="The blog post you're looking for doesn't exist or has been removed."
          onRetry={() => window.history.back()}
        />
      </main>
    );
  }

  const coverImage = blog.cover_img?.url
    ? getStrapiMediaUrl(blog.cover_img.url)
    : placeholderImage;

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <BlogDetailHero title={blog.title} image={coverImage} />

      {/* Main Content Area */}
      <div className="w-full bg-white">
        <div className="max-w-[1254px] md:max-w-[677px] lg:max-w-[1254px] mx-auto px-4 md:px-6 lg:px-8 py-[80px] flex flex-col items-center md:gap-[43px] lg:flex-row lg:justify-between lg:gap-[24px] lg:items-start">
          {/* Article Content */}
          <BlogContent description={blog.description} publishedDate={blog.publishedDate} />

          {/* Sidebar */}
          <SharingSidebar title={blog.title} />
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="bg-white py-[100px] w-full">
        <div className="max-w-[1254px] md:max-w-[677px] lg:max-w-[1254px] mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-[#161C2D] text-[24px] font-semibold mb-[48px] uppercase tracking-normal text-center md:text-center lg:text-left">
            Related Blogs
          </h2>
          <AllBlogs 
            showTitle={false} 
            excludeDocumentId={blog.documentId} 
            tags={blog.tags?.map((t) => t.name)} 
          />
        </div>
      </div>
    </main>
  );
}
