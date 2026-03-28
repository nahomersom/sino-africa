"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetBlogsQuery, Blog, getStrapiMediaUrl } from "@/src/store/strapiApi";

interface BlogCardProps {
  slug: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const placeholderImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop";

const BlogCard = ({ slug, date, title, description, image }: BlogCardProps) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="relative shrink-0 w-[366px] md:w-[326px] lg:w-[615px] h-[446px] lg:h-[485px] rounded-[16px] overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      <Image
        src={image || placeholderImage}
        alt={title}
        fill
        sizes="(max-width: 768px) 366px, (max-width: 1024px) 326px, 615px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 p-[24px] lg:p-[32px] flex flex-col justify-end gap-[16px] lg:gap-[24px] z-10">
        <div className="flex justify-between items-center w-full">
          <div className="bg-[#64C294] rounded-[32px] px-[16px] py-[8px] lg:py-[12px] h-[32px] lg:h-[39px] flex items-center justify-center">
            <span className="text-white text-[12px] lg:text-[14px] font-medium leading-none uppercase tracking-wide">
              Featured Blog
            </span>
          </div>
          <span className="text-white text-[12px] lg:text-[14px] font-medium opacity-80">
            {date}
          </span>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-white text-[16px] lg:text-[32px] font-semibold leading-[24px] lg:leading-[40px] w-full max-w-[551px]">
            {title}
          </h3>
          <div className="flex justify-between items-end gap-[20px] w-full max-w-[551px]">
            <p className="text-white/60 text-[12px] lg:text-[16px] leading-[18px] lg:leading-normal font-normal flex-1">
              {description}
            </p>
            {/* Hidden on mobile & tablet to fit the smaller 326px width */}
            <button className="hidden lg:flex items-center gap-[8px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-[24px] py-[14px] rounded-full text-white text-[14px] font-medium transition-colors shrink-0">
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function getDescriptionText(blog: Blog): string {
  if (!blog.description || blog.description.length === 0) return "";
  return blog.description
    .flatMap((block) => block.children.map((child) => child.text))
    .join(" ");
}

function getBlogImage(blog: Blog): string {
  if (blog.cover_img?.url) {
    return getStrapiMediaUrl(blog.cover_img.url);
  }
  return placeholderImage;
}

export function BlogHero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { data: blogs = [], isLoading } = useGetBlogsQuery();

  const featuredBlogs = blogs.filter((blog) => blog.isFeatured);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const isTablet = window.innerWidth < 1024;
      const scrollAmount = isTablet ? 350 : 640;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full mx-auto bg-white py-[40px] md:py-[80px]">
      <div className="max-w-[1254px] md:max-w-[677px] lg:max-w-[1254px] mx-auto px-4 md:px-0 lg:px-0">

        {/* Section Heading Container - Configured for tab-responsive */}
        <div className="flex flex-col items-center text-center mx-auto w-full md:max-w-[837px] md:min-h-[160px] md:pb-[40px] md:gap-[40px] gap-[16px] mb-[32px] md:mb-0 ">
          <span className="text-[#64C294] text-[13px] font-normal uppercase tracking-[0.15em] ">
            Blogs
          </span>
          <h2 className="text-[#161C2D] text-[32px] md:text-[36px] font-semibold leading-[40px] md:leading-[48px] w-full mx-auto">
            Our Insights on Infrastructure, Technology, and Institutional Systems
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-[24px] md:gap-[25px] overflow-x-auto no-scrollbar scroll-smooth pb-[20px] px-[16px] md:px-0 lg:px-0"
        >
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="shrink-0 w-[366px] md:w-[326px] lg:w-[615px] h-[446px] lg:h-[485px] rounded-[16px] bg-gray-200 animate-pulse" />
            ))
          ) : featuredBlogs.length > 0 ? (
            featuredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                slug={blog.documentId}
                date={formatDate(blog.publishedDate)}
                title={blog.title}
                description={blog.summary || getDescriptionText(blog)}
                image={getBlogImage(blog)}
              />
            ))
          ) : (
            blogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                slug={blog.documentId}
                date={formatDate(blog.publishedDate)}
                title={blog.title}
                description={blog.summary || getDescriptionText(blog)}
                image={getBlogImage(blog)}
              />
            ))
          )}
        </div>

        {/* Pagination & Navigation */}
        <div className="flex justify-between items-center mt-[32px] px-[16px] md:px-0 lg:px-0">
          <div className="text-[#161C2D] text-[16px] font-medium opacity-60">
            {featuredBlogs.length > 0 ? `1/${featuredBlogs.length}` : `1/${Math.min(blogs.length, 3)}`}
          </div>
          <div className="flex gap-[12px]">
            <button
              onClick={() => scroll("left")}
              className="w-[48px] h-[48px] rounded-full border border-[#161C2D]/10 flex items-center justify-center hover:bg-[#161C2D]/5 transition-colors group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#161C2D] group-hover:scale-110 transition-transform">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-[48px] h-[48px] rounded-full border border-[#161C2D]/10 flex items-center justify-center hover:bg-[#161C2D]/5 transition-colors group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#161C2D] group-hover:scale-110 transition-transform">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}