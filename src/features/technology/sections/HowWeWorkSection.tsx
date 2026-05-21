

export function HowWeWorkSection() {
  const steps = [
    {
      number: 1,
      color: "#F64B4B",
      title: "We Assess",
      description:
        "We enter only where regulatory clarity exists and failure carries consequence. No grey areas. No speculative opportunities.",
    },
    {
      number: 2,
      color: "#68D585",
      title: "We Design",
      description:
        "We architect systems with integration, compliance, and long-term continuity built in not added later.",
    },
    {
      number: 3,
      color: "#473BF0",
      title: "We Deploy",
      description:
        "We execute with single-party accountability, bridging global technology with local institutional environments.",
    },
    {
      number: 4,
      color: "#64C294",
      title: "We Sustain",
      description:
        "Deployment is the beginning. We maintain, support, and upgrade across the lifecycle. We do not depart.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden flex w-full max-w-[1728px] mx-auto flex-col items-center bg-white h-auto pt-[40px] pb-[40px] px-[32px] gap-[40px] md:px-[80px] md:py-[40px] lg:min-h-[828px] lg:pt-[100px] lg:pb-[100px] lg:px-[80px] xl:px-[188px] lg:gap-[40px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] hidden lg:block"
        style={{
          backgroundImage: "url('/images/sino-symbol-tile.svg')",
          backgroundSize: "20px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* <Image
        src="/images/partners/partner-dot-pattern.svg"
        alt=""
        aria-hidden="true"
        width={123}
        height={121}
        className="pointer-events-none absolute bottom-4 -right-10 hidden select-none lg:block"
      /> */}

      {/* Header */}
      <div
        className="flex flex-col items-center text-center w-full max-w-[366px] gap-[16px] md:max-w-[677px] lg:max-w-[552px]"
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
          className="font-normal text-[#161C2D] w-full max-w-[382px] mx-auto"
          style={{
            fontSize: "18px",
            lineHeight: "150%",
            letterSpacing: "-0.2px",
          }}
        >
          A clear, structured approach to delivering impactful solutions.
        </p>
      </div>

      {/* Steps Container */}
      <div
        className="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full max-w-[353px] mt-0 gap-[8px] md:max-w-[677px] lg:max-w-[1352px] h-auto lg:min-h-[261px] lg:mt-[100px] lg:gap-[32px] lg:items-start"
      >
        {/* Horizontal Dashed Line (Tablet & Desktop) */}
        <div
          className="hidden md:block absolute left-[12%] right-[12%] top-[20px] lg:top-[36.5px] h-[3px] z-0"
          style={{
            backgroundImage: "linear-gradient(to right, #D5D7DD 8px, transparent 8px)",
            backgroundSize: "13px 3px",
            backgroundRepeat: "repeat-x",
          }}
        />

        {steps.map((step, index) => [
          <div
            key={`step-${index}`}
            className="z-10 flex flex-col items-center text-center w-full gap-[24px] md:gap-[8px] lg:gap-[24px] md:flex-1 lg:flex-1"
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
            <div className="flex flex-col gap-2 w-full max-w-[280px]">
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
              className="md:hidden h-[80px] w-[3px]"
              style={{
                backgroundImage: "linear-gradient(to bottom, #D5D7DD 4px, transparent 4px)",
                backgroundSize: "3px 13px",
                backgroundRepeat: "repeat-y",
              }}
            />
          ),
        ])}
      </div>
    </section>
  );
}