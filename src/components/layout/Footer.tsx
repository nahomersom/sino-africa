import Image from "next/image";

export type FooterVariant = "light" | "dark";

const footerColumns = [
  {
    title: "Quick Links",
    links: ["Home", "About us", "Our Verticals", "Technology and Infrastructure"],
  },
  {
    title: "Our Verticals",
    links: ["Sino Sec", "ACT IT", "Mobilitex"],
  },
  {
    title: "Additional Links",
    links: ["Projects", "Blogs"],
  },
  {
    title: "Contact",
    links: ["contact@sinoafricatrading.com", "+251 9 00 00 0000", "Contact us"],
  },
] as const;

type FooterProps = {
  variant?: FooterVariant;
};

export function Footer({ variant = "light" }: FooterProps) {
  const isDark = variant === "dark";

  return (
    <footer id={isDark ? undefined : "contact"} className={`w-full ${isDark ? "bg-[#1A1919]" : "bg-white"}`}>
      <div className="mx-auto flex w-full max-w-[1254px] flex-col gap-12 px-6 py-12 md:flex-row md:justify-between md:px-[143px] md:py-[80px]">
        <div className="flex max-w-[509px] flex-col gap-[35px]">
          <Image
            src="/images/our-verticals/footer/footer-logo.svg"
            alt="Sino Africa"
            width={142}
            height={54}
            unoptimized
            className={isDark ? "brightness-0 invert" : ""}
          />
          <p
            className={`text-[16px] leading-[1.5em] ${isDark ? "text-white" : "text-zinc-800"}`}
            style={{ letterSpacing: "-0.6250000093132257%", opacity: 0.65 }}
          >
            Lorem ipsum dolor sit amet consectetur. Lacinia est ac euismod sit nunc placerat in odio bibendum.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" aria-label="Twitter" className="inline-flex h-[18px] w-[18px] cursor-pointer items-center justify-center">
              <Image
                src="/images/our-verticals/footer/footer-twitter.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
                className={isDark ? "opacity-[0.65]" : ""}
              />
            </a>
            <a href="#" aria-label="Facebook" className="inline-flex h-[18px] w-[18px] cursor-pointer items-center justify-center">
              <Image
                src="/images/our-verticals/footer/footer-facebook.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
                className={isDark ? "opacity-[0.65]" : ""}
              />
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex h-[18px] w-[18px] cursor-pointer items-center justify-center">
              <Image
                src="/images/our-verticals/footer/footer-instagram.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
                className={isDark ? "opacity-[0.65]" : ""}
              />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-[18px] w-[18px] cursor-pointer items-center justify-center">
              <Image
                src="/images/our-verticals/footer/footer-linkedin.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
                className={isDark ? "opacity-[0.65]" : ""}
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:flex md:flex-nowrap md:justify-end md:gap-2">
          {footerColumns.map((col) => (
            <div
              key={col.title}
              className={`flex min-w-0 flex-col gap-5 ${
                col.title === "Our Verticals" ? "md:w-[125px]" : col.title === "Additional Links" ? "md:w-[156px]" : col.title === "Contact" ? "md:w-[161px]" : ""
              }`}
            >
              <h3
                className={`text-[15px] font-light leading-[1.5em] ${isDark ? "text-white" : "text-zinc-800"}`}
                style={{ letterSpacing: "-0.6666666766007742%", opacity: 0.65 }}
              >
                {col.title}
              </h3>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className={`cursor-pointer text-[16px] leading-[1.5em] transition hover:underline ${isDark ? "text-white" : "text-zinc-800"}`}
                    style={{ letterSpacing: "-1.2500000186264515%", fontWeight: 400 }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
