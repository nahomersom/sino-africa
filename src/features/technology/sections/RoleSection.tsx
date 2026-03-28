
import Image from "next/image";

export function RoleSection() {
  const checklistItems = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem",
    "Lorem ipsum dol"
  ];

  return (
    <>
      {/* Mobile Only Section - Hidden on MD and larger */}
      <section
        className="flex md:hidden w-full max-w-[430px] mx-auto flex-col items-center justify-center bg-[#f4f7fa]"
        style={{
          height: "666px",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "32px",
          paddingRight: "32px",
          gap: "40px"
        }}
      >
        {/* Mobile Logo Container */}
        <div
          className="relative flex w-full max-w-[366px] items-center justify-center"
          style={{
            height: "205px",
            paddingLeft: "30px",
            paddingRight: "30px",
            gap: "30px"
          }}
        >
          <Image
            src="/assets/images/sinoafrica.png"
            alt="Sino Africa Trading"
            width={366}
            height={205}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Mobile Text and Checklist Container */}
        <div
          className="flex w-full max-w-[366px] flex-col items-center text-center"
          style={{ gap: "32px" }}
        >
          <h2
            className="font-bold text-[#161C2D]"
            style={{
              fontSize: "36px",
              lineHeight: "120%",
              letterSpacing: "-1.2px",
            }}
          >
            Sino Africa’s Role
          </h2>

          <p
            className="font-light text-[#5C606C]"
            style={{
              fontSize: "24px",
              lineHeight: "150%",
              letterSpacing: "-0.2px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Ac facilisis feugiat gravida ipsum pellentesque turpis. Placerat aenean.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#3FAF7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="font-normal text-[#161C2D]"
                  style={{ fontSize: "16px" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab/Tablet Only Section - Hidden on mobile and desktop screens */}
      <section
        className="hidden md:flex lg:hidden w-full max-w-[837px] mx-auto items-center justify-center bg-[#f4f7fa]"
        style={{
          height: "auto",
          minHeight: "311px",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "80px",
          paddingRight: "80px",
          gap: "40px"
        }}
      >
        <div
          className="flex items-center"
          style={{ width: "677px", height: "auto", gap: "51px" }}
        >
          {/* Tablet Logo Container - Width 218px, Height 60px */}
          <div
            className="relative flex shrink-0 items-center justify-center"
            style={{
              width: "218px",
              height: "60px",
              paddingLeft: "30px",
              paddingRight: "30px",
              gap: "30px"
            }}
          >
            <Image
              src="/assets/images/sinoafrica.png"
              alt="Sino Africa Trading"
              width={218}
              height={60}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Tablet Text and Checklist Container - Width 407px */}
          <div className="flex flex-col" style={{ width: "407px", gap: "32px" }}>
            <h2
              className="font-bold text-[#161C2D]"
              style={{
                fontSize: "32px",
                lineHeight: "120%",
                letterSpacing: "-1.2px",
              }}
            >
              Sino Africa’s Role
            </h2>

            <p
              className="font-light text-[#5C606C]"
              style={{
                width: "407px",
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "-0.2px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ac facilisis feugiat gravida ipsum pellentesque turpis. Placerat aenean.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#3FAF7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="font-normal text-[#161C2D]"
                    style={{ fontSize: "14px" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Only Section - Hidden on smaller screens */}
      <section
        className="hidden lg:flex w-full items-center justify-center bg-[#f4f7fa]"
        style={{
          height: "666px",
          paddingTop: "100px",
          paddingBottom: "100px",
          paddingLeft: "464px",
          paddingRight: "464px",
        }}
      >
        <div
          className="flex items-center"
          style={{ width: "1053.1px", height: "296px", gap: "51px" }}
        >
          {/* Logo Container - Width 545px, Height 205px, Padding 30px, Gap 30px */}
          <div
            className="relative flex items-center justify-center bg-transparent"
            style={{
              width: "545px",
              height: "205px",
              paddingLeft: "30px",
              paddingRight: "30px",
              gap: "30px"
            }}
          >
            <Image
              src="/assets/images/sinoafrica.png"
              alt="Sino Africa Trading"
              width={545}
              height={205}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Text and Checklist Container */}
          <div className="flex flex-col" style={{ width: "457px", gap: "16px" }}>
            <h2
              className="font-bold text-[#161C2D]"
              style={{
                fontSize: "36px",
                lineHeight: "120%",
                letterSpacing: "-1.2px",
              }}
            >
              Sino Africa’s Role
            </h2>

            <p
              className="font-light text-[#5C606C]"
              style={{
                width: "457px",
                height: "108px",
                fontSize: "24px",
                lineHeight: "150%",
                letterSpacing: "-0.2px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Ac facilisis feugiat gravida ipsum pellentesque turpis. Placerat aenean.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-x-12 gap-y-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#3FAF7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="font-normal text-[#161C2D]"
                    style={{ fontSize: "16px" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
