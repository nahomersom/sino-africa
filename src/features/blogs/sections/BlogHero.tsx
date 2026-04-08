"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGetBlogsQuery, Blog, getStrapiMediaUrl } from "@/src/store/strapiApi";
import { blogDescriptionPlainText } from "@/src/features/blogs/blogDescriptionPlainText";
import { ErrorState } from "@/src/components/ui/ErrorState";

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
      className="relative shrink-0 w-[366px] md:w-[326px] lg:w-[615px] h-[446px] lg:h-[485px] rounded-[16px] overflow-hidden group cursor-pointer snap-start"
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
            <span className="text-white text-[12px] lg:text-[14px] font-medium leading-none  tracking-wide">
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
            <p className="text-white/60 text-[12px] lg:text-[16px] leading-[18px] lg:leading-normal font-normal flex-1 line-clamp-3 overflow-hidden text-ellipsis">
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
  return blogDescriptionPlainText(blog.description);
}

function getBlogImage(blog: Blog): string {
  if (blog.cover_img?.url) {
    return getStrapiMediaUrl(blog.cover_img.url);
  }
  return placeholderImage;
}

export function BlogHero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError, refetch } = useGetBlogsQuery({ "filters[isFeatured][$eq]": true });
  const blogs = data?.blogs ?? [];
  const pagination = data?.pagination;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = window.innerWidth >= 768 ? 25 : 24;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setCurrentIndex(index);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = window.innerWidth >= 768 ? 25 : 24;
        const scrollAmount = cardWidth + gap;

        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="w-full mx-auto bg-white py-[40px] md:py-[80px]">
      <div className="max-w-[1254px] md:max-w-[677px] lg:max-w-[1254px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Section Heading Container - Configured for tab-responsive */}
        <motion.div
          className="flex flex-col items-center text-center mx-auto w-full md:max-w-[837px] md:min-h-[160px] md:pb-[40px] md:gap-2 mb-[32px] md:mb-0 
             lg:items-start lg:text-left lg:mx-0"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-[#64C294] text-[13px] font-normal uppercase tracking-[0.15em]">
            Blogs
          </span>
          <h2 className="text-[#161C2D] text-[32px] md:text-[36px] font-semibold leading-[40px] md:leading-[48px] w-full mx-auto md:mx-0 max-w-[515px]">
            Our Insights on Infrastructure, Technology, and Institutional Systems
          </h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-[24px] md:gap-[25px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-[20px]"
          >
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="shrink-0 w-[366px] md:w-[326px] lg:w-[615px] h-[446px] lg:h-[485px] rounded-[16px] bg-gray-200 animate-pulse" />
              ))
            ) : isError ? (
              <div className="w-full">
                <ErrorState onRetry={refetch} />
              </div>
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
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
              <div className="w-full py-10 text-center text-gray-500 italic">
                No featured blogs found.
              </div>
            )}
          </div>
        </motion.div>

        {/* Pagination & Navigation */}
        <motion.div
          className="flex justify-between items-center mt-[32px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="text-[#161C2D] text-[16px] font-medium opacity-60">
            {blogs.length > 0 ? `${currentIndex + 1}/${blogs.length}` : "0/0"}
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
        </motion.div>
      </div>
    </section>
  );
}