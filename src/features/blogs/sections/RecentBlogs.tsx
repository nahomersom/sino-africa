"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetBlogsQuery, getStrapiMediaUrl, Blog } from "@/src/store/strapiApi";
import { ErrorState } from "@/src/components/ui/ErrorState";
import { StaggerContainer, StaggerItem } from "@/src/components/ui/scroll-reveal";

interface RecentBlogCardProps {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  className?: string;
}

const placeholderImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";

const RecentBlogCard = ({ slug, title, date, readTime, image, className = "" }: RecentBlogCardProps) => {
  return (
    <Link href={`/blogs/${slug}`} className={`relative rounded-[16px] overflow-hidden group cursor-pointer ${className}`}>
      <Image
        src={image || placeholderImage}
        alt={title}
        fill
        sizes="(max-width: 1024px) 326px, 487px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 pt-[32px] px-[24px] pb-[24px] flex flex-col justify-end z-10">
        <div className="flex justify-between items-center mb-[8px]">
          <span className="text-white text-[12px] font-medium opacity-80">{readTime}</span>
          <span className="text-white text-[12px] font-medium opacity-80">{date}</span>
        </div>
        <h3 className="text-white text-[18px] font-semibold leading-tight group-hover:underline">
          {title}
        </h3>
      </div>
    </Link>
  );
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function getBlogImage(blog: Blog): string {
  if (blog.cover_img?.url) {
    return getStrapiMediaUrl(blog.cover_img.url);
  }
  return placeholderImage;
}

export function RecentBlogs() {
  const { data, isLoading, isError, refetch } = useGetBlogsQuery({
    "filters[isFeatured][$ne]": true,
    "pagination[pageSize]": 6,
    "sort": "publishedDate:desc"
  });
  const blogs = data?.blogs ?? [];

  return (
    <section className="w-full bg-white pb-[100px]">
      <div className="max-w-[1254px] md:max-w-[677px] lg:max-w-[1254px] mx-auto px-4 md:px-0 lg:px-0 flex flex-col gap-[24px]">
        {/* Section Heading */}
        <h2 className="text-[#161C2D] text-[24px] font-normal uppercase leading-none tracking-tight">
          Most Recent
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-[360px] rounded-[16px] bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={refetch} />
        ) : (
          <>
            {/*
                DESKTOP VIEW (1024px and up)
             */}
            <StaggerContainer
              className="hidden lg:flex flex-col gap-[8px]"
              stagger={0.12}
              amount="some"
            >
              {/* Row 1 - Custom Alignment (487px, 375.5px, 375.5px) */}
              <div className="grid gap-[8px] w-full" style={{ gridTemplateColumns: '487px 1fr 1fr' }}>
                {blogs.slice(0, 3).map((blog) => (
                  <StaggerItem
                    key={blog.id}
                    duration={0.95}
                    distance={40}
                    scale={0.94}
                    ease={[0.16, 1, 0.3, 1]}
                  >
                    <RecentBlogCard
                      slug={blog.documentId}
                      title={blog.title}
                      readTime={blog.readTime || "5 minutes"}
                      date={formatDate(blog.publishedDate)}
                      image={getBlogImage(blog)}
                      className="h-[360px] w-full"
                    />
                  </StaggerItem>
                ))}
              </div>

              {/* Row 2 - Equal Alignment */}
              <div className="grid grid-cols-3 gap-[8px] w-full">
                {blogs.slice(3, 6).map((blog) => (
                  <StaggerItem
                    key={blog.id}
                    duration={0.95}
                    distance={40}
                    scale={0.94}
                    ease={[0.16, 1, 0.3, 1]}
                  >
                    <RecentBlogCard
                      slug={blog.documentId}
                      title={blog.title}
                      readTime={blog.readTime || "5 minutes"}
                      date={formatDate(blog.publishedDate)}
                      image={getBlogImage(blog)}
                      className="h-[360px] w-full"
                    />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* =========================================
                TABLET & MOBILE VIEW (Below 1024px)
            ========================================= */}
            <StaggerContainer
              className="grid lg:hidden grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(326px,1fr))] gap-[8px] w-full"
              stagger={0.1}
              amount="some"
            >
              {blogs.map((blog) => (
                <StaggerItem
                  key={blog.id}
                  duration={0.9}
                  distance={32}
                  scale={0.95}
                  ease={[0.16, 1, 0.3, 1]}
                >
                  <RecentBlogCard
                    slug={blog.documentId}
                    title={blog.title}
                    readTime={blog.readTime || "5 minutes"}
                    date={formatDate(blog.publishedDate)}
                    image={getBlogImage(blog)}
                    className="h-[240px] w-full"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}

      </div>
    </section>
  );
}