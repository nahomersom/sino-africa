"use client";

import Image from "next/image";
import Link from "next/link";

export function KeyDomainsSection() {
  const cards = [
    {
      title: "ACT IT",
      description: "Lorem ipsum dolor sit amet consectetur. Molestie metus lectus eleifend interdum aenean id et. Auctor amet ut at non.",
      color: "#3FAF7E",
    },
    {
      title: "SINO SEC",
      description: "Lorem ipsum dolor sit amet consectetur. Pretium lacus non hendrerit aliquam. Tincidunt pellentesque tincidunt ut quam.",
      color: "#4A5568",
    },
    {
      title: "MOBILITEX",
      description: "Lorem ipsum dolor sit amet consectetur. Pellentesque vel vulputate sed sollicitudin risus eget morbi. Id vitae est ut amet.",
      color: "#2F6FED",
    },
  ];

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-white w-full pt-10 px-8 pb-10 gap-[45px] md:py-10 md:px-20 md:gap-10 lg:pt-[152px] lg:pb-[140px] lg:px-[237px] lg:min-h-[961px] lg:gap-[45px]">
      {/* Header Container */}
      <div className="flex flex-col items-center text-center w-full max-w-[366px] md:max-w-[677px] lg:max-w-[552px] gap-4">
        <h2 className="font-bold text-[#161C2D] text-[36px] lg:text-[32px] leading-[150%]">
          Key Infrastructure Domains
        </h2>
        <p className="font-normal text-[#5C606C] text-[18px] lg:text-[16px] leading-[150%] w-full lg:w-[382px] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Elit eget mauris sed diam urna.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row w-full gap-2 md:max-w-[677px] lg:max-w-none lg:h-[552px] lg:gap-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center rounded-[8px] pt-10 pb-10 px-16 gap-[45px] h-[491.35px] md:w-[220px] md:h-[459px] md:py-6 md:px-4 md:gap-10 lg:flex-1 lg:h-[552px] lg:py-10 lg:px-16 lg:gap-[45px]"
            style={{ backgroundColor: card.color }}
          >
            {/* Icon */}
            <div className="relative h-[110px] w-[140px]">
              <Image
                src="/assets/images/cardicon.png"
                alt={card.title}
                fill
                className="object-contain grayscale brightness-200"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="font-semibold text-white text-[24px] leading-[150%] tracking-[-0.5px]">
                {card.title}
              </h3>
              <p className="text-white text-[16px] md:text-[14px] font-light leading-[150%] w-full lg:w-[284.67px] lg:h-[72px]">
                {card.description}
              </p>
            </div>

            {/* Read More */}
            <Link
              href="#"
              className="flex items-center gap-2 font-medium text-white transition-opacity hover:opacity-80 text-[17px] leading-[32px]"
            >
              READ MORE
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* Decoration */}
      <div
        className="absolute bottom-[55px] right-[-35px] hidden lg:block"
        style={{ width: "120px", height: "120px" }}
      >
        <Image
          src="/assets/images/decoration.png"
          alt="decoration"
          width={80}
          height={100}
          className="object-contain w-[80px] h-[150px]"
        />
      </div>
    </section>
  );
}


