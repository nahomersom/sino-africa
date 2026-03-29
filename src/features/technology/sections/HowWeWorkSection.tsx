import Image from "next/image";

export function HowWeWorkSection() {
  const steps = [
    {
      number: 1,
      color: "#F64B4B",
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit amet consectetur. Commodo ut elit pretium facilisis vel mus lobortis.",
    },
    {
      number: 2,
      color: "#68D585",
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam ac urna iaculis at morbi tellus. Massa et leo.",
    },
    {
      number: 3,
      color: "#473BF0",
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus amet duis convallis volutpat pharetra sit.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden flex w-full flex-col items-center bg-white h-auto pt-[40px] pb-[40px] px-[32px] gap-[40px] md:px-[80px] md:py-[40px] lg:h-[828px] lg:pt-[100px] lg:pb-[100px] lg:px-[464px] lg:gap-[40px]"
    >
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
      {/* Header */}
      <div
        className="flex flex-col items-center text-center w-full max-w-[366px] gap-[16px] md:max-w-[677px] lg:max-w-none lg:w-[552px]"
      >
        <h2
          className="font-normal text-[#161C2D]"
          style={{
            fontSize: "36px",
            lineHeight: "150%",
          }}
        >
          How We Work
        </h2>
        <p
          className="font-normal text-[#161C2D] w-full md:max-w-[677px] lg:w-[382px] mx-auto"
          style={{
            fontSize: "18px",
            lineHeight: "150%",
            letterSpacing: "-0.2px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Elit eget mauris sed diam urna.
        </p>
      </div>

      {/* Steps Container */}
      <div
        className="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full max-w-[353px] mt-0 gap-[8px] md:max-w-[677px] lg:max-w-none lg:w-[1009px] lg:mt-[100px] lg:gap-0 lg:items-center"
      >
        {/* Horizontal Dashed Line (Tablet & Desktop) */}
        {/* Adjusted top position: 20px for 40px circles on tab, 36.5px for 73px circles on desktop */}
        <div
          className="hidden md:block absolute left-[12%] right-[12%] top-[20px] lg:top-[36.5px] border-t-2 border-dashed border-[#E2E4E8] z-0"
        />

        {steps.map((step, index) => [
          <div
            key={`step-${index}`}
            className="z-10 flex flex-col items-center text-center w-full gap-[24px] md:gap-[8px] lg:gap-[24px] md:flex-1 lg:flex-none lg:w-[252px]"
          >
            {/* Number Circle */}
            <div
              className="flex items-center justify-center rounded-full text-white font-bold shrink-0 w-[73px] h-[73px] text-[24px] md:w-[40px] md:h-[40px] md:text-[18px] lg:w-[73px] lg:h-[73px] lg:text-[24px]"
              style={{
                backgroundColor: step.color,
              }}
            >
              {step.number}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3
                className="font-semibold text-[#161C2D]"
                style={{ fontSize: "21px", lineHeight: "150%" }}
              >
                {step.title}
              </h3>
              <p
                className="font-normal text-[#5C606C]"
                style={{ fontSize: "17px", lineHeight: "150%" }}
              >
                {step.description}
              </p>
            </div>
          </div>,

          /* Vertical Dashed Line (Mobile Only) */
          index < steps.length - 1 && (
            <div
              key={`line-${index}`}
              className="md:hidden h-[80px] border-l-2 border-dashed border-[#E2E4E8]"
            />
          ),
        ])}
      </div>
    </section>
  );
}