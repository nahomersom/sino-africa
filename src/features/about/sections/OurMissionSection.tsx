type OurMissionSection = {
    heading: string;
    description: string;
    bgImage: string;
  };
  
export function OurMissionSection({heading,description,bgImage}:OurMissionSection){
  return  (
    <section className="relative flex w-full flex-col items-center gap-8 overflow-hidden lg:justify-center"
    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
        <div className="absolute inset-0 bg-black/70"/>
        <div className="relative z-10 flex max-w-[552px] flex-col items-center gap-4">
            <h2 className="max-w-[455px] text-center font-(family-name:--font-nata-sans) text-[32px] font-semibold leading-[1.25] tracking-[-0.0375em] text-text-100 md:text-[36px] md:font-normal md:leading-[1.5] md:tracking-[-0.033em]">
                {heading}
            </h2>
        </div>
        <p className="max-w-[366px] md:max-w-[369px] lg:max-w-[498px] text-center text-base font-light leading-6 tracking-[-0.0125em] text-text-100/70 md:text-lg md:font-normal md:leading-[1.5] md:tracking-[-0.011em]">
            {description}
        </p>
        
    
    </section>)
}