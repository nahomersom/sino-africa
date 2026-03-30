import Image from "next/image";

export function RoleSection() {
  const checklistItems = [
    "Execution Owner",
    "Integration Authority",
    "Lifecycle Partner",
    "Disciplined Operator"
  ];

  return (
    <section className="flex w-full items-center justify-center bg-[#f4f7fa] py-[40px] lg:py-[100px] px-[32px] md:px-[80px] h-auto min-h-[666px] md:min-h-[311px] lg:h-[666px]">
      <div className="flex flex-col md:flex-row items-center w-full max-w-[366px] md:max-w-[677px] lg:max-w-[1053px] gap-[40px] md:gap-[51px]">

        {/* Logo Container */}
        <div className="relative flex shrink-0 items-center justify-center px-[30px] w-full md:w-[218px] lg:w-[545px] h-[205px] md:h-[60px] lg:h-[205px]">
          <Image
            src="/assets/images/sinoafrica.png"
            alt="Sino Africa Trading"
            width={545}
            height={205}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Text and Checklist Container */}
        <div className="flex flex-col w-full text-center md:text-left md:w-[407px] lg:w-[457px] gap-[32px] lg:gap-[16px]">

          <h2 className="font-bold text-[#161C2D] text-[36px] md:text-[32px] lg:text-[36px] leading-[120%] tracking-[-1.2px]">
            How Sino Africa Provides Solutions
          </h2>

          <p className="font-light text-[#5C606C] text-[24px] md:text-[16px] leading-[150%] tracking-[-0.2px]">
            Sino Africa closes the gap in infrastructure by ensuring disciplined, end-to-end execution, operating fully within regulatory frameworks, and taking full lifecycle responsibility. We operate on the principle that infrastructure that truly matters cannot be treated as a mere transaction.
          </p>

          <div className="grid grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 text-left lg:mt-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#3FAF7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-normal text-[#161C2D] text-[16px] md:text-[14px] lg:text-[16px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}