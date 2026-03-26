import Image from "next/image";

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

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1254px] flex-col gap-12 px-6 py-12 md:flex-row md:justify-between md:px-0 md:py-[80px]">
        <div className="flex max-w-[509px] flex-col gap-6">
          <Image
            src="/images/our-verticals/footer/footer-logo.svg"
            alt="Sino Africa"
            width={142}
            height={54}
            unoptimized
          />
          <p className="text-[16px] text-zinc-800" style={{ letterSpacing: "-0.6250000093132257%", opacity: 0.65 }}>
            Lorem ipsum dolor sit amet consectetur. Lacinia est ac euismod sit nunc placerat in odio bibendum.
          </p>

          <div className="flex items-center gap-2">
            <a href="#" aria-label="Twitter" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/images/our-verticals/footer/footer-twitter.svg" alt="" width={18} height={18} unoptimized />
            </a>
            <a href="#" aria-label="Facebook" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/images/our-verticals/footer/footer-facebook.svg" alt="" width={18} height={18} unoptimized />
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/images/our-verticals/footer/footer-instagram.svg" alt="" width={18} height={18} unoptimized />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/images/our-verticals/footer/footer-linkedin.svg" alt="" width={18} height={18} unoptimized />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-[15px] font-light text-zinc-800" style={{ letterSpacing: "-0.6666666766007742%", opacity: 0.65 }}>
                {col.title}
              </h3>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[16px] text-zinc-800 transition hover:underline"
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
