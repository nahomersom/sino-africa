"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogDetailHeroProps {
  title: string;
  image: string;
}

export function BlogDetailHero({ title, image }: BlogDetailHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[40px] md:py-[60px] lg:py-[80px]">
      {/* Background Pattern (Subtle Wavy Lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C150 50 300 150 450 100C600 50 750 150 900 100C1050 50 1200 150 1200 100" stroke="#161C2D" strokeWidth="2" />
          <path d="M0 200C150 150 300 250 450 200C600 150 750 250 900 200C1050 150 1200 250 1200 200" stroke="#161C2D" strokeWidth="2" />
          <path d="M0 300C150 250 300 350 450 300C600 250 750 350 900 300C1050 250 1200 350 1200 300" stroke="#161C2D" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1254px] md:max-w-[677px] lg:max-w-[1254px] mx-auto px-4 lg:px-0 relative z-10">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="flex items-center gap-[8px] text-[#161C2D] text-[14px] font-medium mb-[32px] md:mb-[48px] hover:opacity-70 transition-opacity w-fit ml-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Blogs
        </Link>

        {/* Enforce flex-col for mobile and tablet, only use flex-row at lg (desktop) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-[32px] md:gap-[8px] lg:gap-[48px]">
          {/* Text Content */}
          <div className="flex flex-col gap-[8px] w-full max-w-[700px] md:flex-1 text-center md:text-left lg:text-left">
            <span className="text-[#64C294] text-[13px] font-normal uppercase tracking-[0.15em]">
              Blogs
            </span>
            <h1 className="text-[#161C2D] text-[32px] md:text-[24px] lg:text-[48px] font-semibold leading-tight lg:leading-[60px]">
              {title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative w-full md:w-[318px] lg:w-[500px] h-[240px] md:h-[284px] lg:h-[350px] rounded-[16px] overflow-hidden shadow-2xl shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 318px, 500px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}