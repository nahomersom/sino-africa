"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useGetVerticalsPaginatedQuery, getStrapiMediaUrl } from "@/src/store/strapiApi";

export function KeyDomainsSection() {
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageSize = isMobile ? 1 : 3;

  const { data, isLoading, isError, isFetching } = useGetVerticalsPaginatedQuery({
    "pagination[page]": page,
    "pagination[pageSize]": pageSize,
  });

  const verticals = data?.data ?? [];
  const pagination = data?.pagination;
  const totalPages = pagination?.pageCount ?? 1;

  // Cap the page if resizing makes the current page invalid
  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page]);

  if (isLoading && !data) {
    return (
      <section className="relative flex flex-col items-center overflow-hidden bg-white w-full py-20 px-8 gap-8 lg:px-[237px] lg:min-h-[600px]">
        <div className="animate-pulse text-[#5C606C]">Loading Infrastructure Domains...</div>
      </section>
    );
  }

  if (isError || (verticals.length === 0 && !isLoading)) {
    return null;
  }

  const cards = verticals.map((v) => ({
    title: v.title ?? "",
    description: v.description ?? "",
    baseColor: v.gradient?.baseColor ?? "#4A5568",
    accentColor: v.gradient?.accentColor ?? v.gradient?.baseColor ?? "#303845",
    logoUrl: getStrapiMediaUrl(v.logo?.url),
    slug: v.slug ?? "",
  }));

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-white w-full pt-10 px-8 pb-10 gap-[45px] md:py-10 md:px-20 md:gap-10 lg:pt-[152px] lg:pb-[140px] lg:px-[237px] lg:min-h-[961px] lg:gap-[45px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] hidden lg:block"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "28px",
          backgroundRepeat: "repeat",
        }}
      />
      <Image
        src="/assets/images/decoration.png"
        alt=""
        aria-hidden="true"
        width={80}
        height={120}
        className="pointer-events-none absolute bottom-15 right-0 hidden select-none lg:block w-[75px]"
      />
      {/* Header Container */}
      <div className="flex flex-col items-center text-center w-full max-w-[366px] md:max-w-[677px] lg:max-w-[552px] gap-4">
        <h2 className="font-bold text-[#161C2D] text-[36px] lg:text-[32px] leading-[150%]">
          Key Infrastructure Domains
        </h2>
        <p className="font-normal text-[#5C606C] text-[18px] lg:text-[18px] leading-[150%] w-full lg:w-[552px] mx-auto">
          Our verticals operate with specialized focus but shared architecture. They maintain distinct execution mandates while enabling seamless integration. They deliver discrete systems that function as unified infrastructure.
        </p>
      </div>

      {/* Cards Container */}
      <div className={`grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-2 md:max-w-[677px] lg:max-w-none lg:gap-2 transition-opacity duration-300 ${isFetching ? 'opacity-50' : 'opacity-100'}`}>
        {cards.map((card, index) => (
          <div
            key={card.slug || index}
            className="flex flex-col items-center justify-between text-center rounded-[8px] pt-10 pb-10 px-8 md:h-[459px] md:py-6 md:px-4 lg:h-[552px] lg:py-12 lg:px-16 z-1 overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${card.accentColor} 1%, ${card.baseColor} 100%)`
            }}
          >
            {/* Icon */}
            <div className="relative h-[110px] w-[140px] shrink-0">
              {card.logoUrl && (
                <Image
                  src={card.logoUrl}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="font-semibold text-white text-[24px] leading-[120%] tracking-[-0.5px] w-full wrap-break-word">
                {card.title}
              </h3>
              <p className="text-white text-[16px] lg:text-[16px] md:text-[14px] font-light leading-[150%] w-full lg:w-[284.67px] wrap-break-word line-clamp-6">
                {card.description}
              </p>
            </div>

            {/* Read More */}
            <Link
              href={`/our-verticals/${card.slug}`}
              className="flex items-center gap-2 font-medium text-white transition-opacity hover:opacity-80 text-[17px] leading-[32px] shrink-0"
            >
              READ MORE
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="flex items-center gap-6 mt-4">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#E2E4E8] text-[#161C2D] transition-all hover:bg-[#F8F9FA] disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Previous page"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:-translate-x-0.5">
              <path d="M15.8332 10H4.1665M4.1665 10L9.1665 15M4.1665 10L9.1665 5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2 font-medium text-[#161C2D] text-[16px]">
            <span className="text-[#161C2D] opacity-100">{String(page).padStart(2, '0')}</span>
            <span className="text-[#5C606C] opacity-40">/</span>
            <span className="text-[#5C606C] opacity-40">{String(totalPages).padStart(2, '0')}</span>
          </div>

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#E2E4E8] text-[#161C2D] transition-all hover:bg-[#F8F9FA] disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Next page"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5">
              <path d="M4.1665 10H15.8332M15.8332 10L10.8332 5M15.8332 10L10.8332 15" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}


