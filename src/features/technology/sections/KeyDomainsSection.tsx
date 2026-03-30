import Image from "next/image";
import Link from "next/link";

export function KeyDomainsSection() {
  const cards = [
    {
      title: "ACT IT",
      description: "Provides financial transaction rails and payment infrastructure for mobility platforms and identity-linked disbursements.",
      color: "#3FAF7E",
    },
    {
      title: "SINO SEC",
      description: "Delivers foundational identity services, including verification, biometric authentication, and secure data infrastructure for financial and mobility systems.",
      color: "#4A5568",
    },
    {
      title: "MOBILITEX",
      description: "Offers physical transport and mobility platforms, including logistics infrastructure, network management, and operational support for mobility services.",
      color: "#2F6FED",
    },
  ];

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
        src="/images/partners/partner-dot-pattern.svg"
        alt=""
        aria-hidden="true"
        width={123}
        height={121}
        className="pointer-events-none absolute bottom-4 -right-10 hidden select-none lg:block"
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
      <div className="flex flex-col md:flex-row w-full gap-2 md:max-w-[677px] lg:max-w-none lg:h-[552px] lg:gap-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center rounded-[8px] pt-10 pb-10 px-16 gap-[45px] h-[491.35px] md:w-[220px] md:h-[459px] md:py-6 md:px-4 md:gap-10 lg:flex-1 lg:h-[552px] lg:py-10 lg:px-16 lg:gap-[45px] z-1"
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

    </section>
  );
}


