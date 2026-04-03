"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetBlogsQuery, Blog, getStrapiMediaUrl } from "@/src/store/strapiApi";
import { ErrorState } from "@/src/components/ui/ErrorState";

interface AllBlogCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const placeholderImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";

const AllBlogCard = ({ slug, title, description, image }: AllBlogCardProps) => {
  return (
    <Link href={`/blogs/${slug}`} className="flex flex-col gap-[16px] w-full rounded-[24px] border border-[#e7e9ed] p-[16px] bg-white transition-all hover:shadow-lg hover:-translate-y-1 group">
      <div className="relative w-full h-[295px] rounded-[16px] overflow-hidden">
        <Image
          src={image || placeholderImage}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[#161c2d] text-[16px] font-medium leading-[100%] tracking-[0px]">
          {title}
        </h3>
        <p className="text-[#5C606C] text-[12px] font-normal leading-[150%] tracking-[0px] line-clamp-3 overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </Link>
  );
};

function getDescriptionText(blog: Blog): string {
  if (!blog.description || !Array.isArray(blog.description) || blog.description.length === 0) return "";
  return blog.description
    .flatMap((block) => (block.children || []).map((child: any) => child.text || ""))
    .join(" ");
}

function getBlogImage(blog: Blog): string {
  if (blog.cover_img?.url) {
    return getStrapiMediaUrl(blog.cover_img.url);
  }
  return placeholderImage;
}

interface AllBlogsProps {
  showTitle?: boolean;
  excludeDocumentId?: string;
  tags?: string[];
}

export function AllBlogs({ showTitle = true, excludeDocumentId, tags }: AllBlogsProps) {
  const queryParams: Record<string, any> = {};
  
  if (tags && tags.length > 0) {
    tags.forEach((tag, index) => {
      queryParams[`filters[tags][name][$in][${index}]`] = tag;
    });
  }

  const { data, isLoading, isError, refetch } = useGetBlogsQuery(queryParams);
  const allBlogs = data?.blogs ?? [];
  const blogs = excludeDocumentId ? allBlogs.filter((b) => b.documentId !== excludeDocumentId) : allBlogs;

  return (
    <section className="w-full bg-white py-[16px]">
      <div className="max-w-[1254px] md:max-w-[677px] lg:max-w-[1254px] mx-auto px-4 md:px-0 lg:px-0">
        {/* Section Heading */}
        <div className="flex flex-col gap-[24px] mb-[24px]">
          {showTitle && (
            <h2 className="text-[#161C2D] text-[16px] font-medium uppercase leading-[100%] tracking-[0px]">
              All Blogs
            </h2>
          )}

          {/* Grid Container */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="rounded-[24px] border border-[#e7e9ed] p-[16px] bg-white">
                  <div className="w-full h-[295px] rounded-[16px] bg-gray-200 animate-pulse" />
                  <div className="mt-[16px] space-y-[8px]">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <ErrorState onRetry={refetch} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[16px]">
              {blogs.map((blog) => (
                <AllBlogCard
                  key={blog.id}
                  slug={blog.documentId}
                  title={blog.title}
                  description={blog.summary || getDescriptionText(blog)}
                  image={getBlogImage(blog)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
