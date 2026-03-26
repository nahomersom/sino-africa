import Image from "next/image";
import { verticalItems } from "../constants";

export function VerticalsSection() {
  return (
    <section className="mx-auto flex w-full max-w-[1254px] flex-col items-center px-6 pt-14 pb-10 md:px-0 md:pt-[152px] md:pb-[88px]">
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <h2
          className="text-[36px] font-normal text-zinc-900"
          style={{ letterSpacing: "-3.3333334657880993%" }}
        >
          Our Verticals
        </h2>
        <p
          className="max-w-[382px] text-[18px] text-zinc-900/70"
          style={{ letterSpacing: "-1.1111111276679568%" }}
        >
          Lorem ipsum dolor sit amet consectetur. Elit eget mauris sed diam urna.
        </p>
      </div>

      <div className="mt-[45px] flex w-full items-stretch gap-2">
        {verticalItems.map((item) => (
          <article
            key={item.title}
            className={`${item.colorClass} flex flex-1 flex-col items-center justify-center gap-[45px] rounded-[8px] p-[40px_64px]`}
          >
            <div className="flex h-[142px] w-[142px] flex-col items-center justify-center gap-3">
              <div className="relative h-[68px] w-[142px]">
                <Image
                  src={item.iconSrc}
                  alt=""
                  fill
                  sizes="142px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[15px] text-center">
              <h3
                className="text-[24px] font-semibold text-white"
                style={{ letterSpacing: "-2.083333333333333%" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[16px] font-light leading-6 text-white/95"
                style={{ letterSpacing: "-1.2500000186264515%" }}
              >
                {item.description}
              </p>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-[16px]"
              aria-label={`${item.title} - Read more`}
            >
              <span
                className="text-[17px] font-medium text-white"
                style={{ letterSpacing: "-3.5294119049521053%" }}
              >
                READ MORE
              </span>
              <span className="relative h-[10.4px] w-[12px]">
                <Image src={item.arrowSrc} alt="" fill sizes="12px" unoptimized />
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
