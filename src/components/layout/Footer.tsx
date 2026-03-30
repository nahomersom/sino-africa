import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Our Verticals", href: "/#verticals" },
      { label: "Technology and Infrastructure", href: "/#" },
    ],
  },
  verticals: {
    title: "Our Verticals",
    links: [
      { label: "Sino Sec", href: "/our-verticals/sino-sec" },
      { label: "ACT IT", href: "/our-verticals/act-it" },
      { label: "Mobilitex", href: "/our-verticals/mobilitex" },
    ],
  },
  additional: {
    title: "Additional Links",
    links: [
      { label: "Projects", href: "/#" },
      { label: "Blogs", href: "/#" },
    ],
  },
  contact: {
    title: "Contact",
    links: [
      { label: "contact@sinoafricatrading.com", href: "mailto:contact@sinoafricatrading.com" },
      { label: "+251 9 00 00 0000", href: "tel:+251900000000" },
      { label: "Contact us", href: "/#contact" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="w-full bg-theme-secondary">
      <div className="mx-auto flex w-full flex-col justify-between gap-12 px-8 py-10 md:px-16 lg:flex-row lg:px-36 lg:py-20">
        <div className="flex max-w-md flex-col gap-9">
            <Image
              src="/brand/whiteLogo.svg"
              alt="Sino Africa logo"
              width={143}
              height={54}
              className="h-auto w-full max-w-[128px]"
              priority
            />
          <p className="text-base leading-6 text-white/65">
            Lorem ipsum dolor sit amet consectetur. Lacinia est ac euismod sit
            nunc placerat in odio bibendum.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" aria-label="Twitter" className="text-[#7D818D] hover:text-primary">
              <svg width="17" height="15" viewBox="0 0 17 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3 3.73c.01.16.01.32.01.48 0 4.85-3.69 10.44-10.44 10.44A10.38 10.38 0 0 1 .5 13.28a7.6 7.6 0 0 0 .88.04 7.36 7.36 0 0 0 4.56-1.57 3.68 3.68 0 0 1-3.44-2.55c.56.08 1.07.08 1.65-.07a3.68 3.68 0 0 1-2.95-3.61v-.05c.5.28 1.06.44 1.66.46a3.68 3.68 0 0 1-1.14-4.91 10.45 10.45 0 0 0 7.58 3.84 3.68 3.68 0 0 1 6.27-3.35 7.23 7.23 0 0 0 2.33-.89 3.67 3.67 0 0 1-1.62 2.03 7.37 7.37 0 0 0 2.12-.57 7.9 7.9 0 0 1-1.84 1.9Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook" className="text-[#7D818D] hover:text-primary">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9a9 9 0 1 0-10.41 8.89v-6.29H5.31V9h2.28V7.02c0-2.25 1.34-3.5 3.39-3.5.98 0 2.01.18 2.01.18v2.21h-1.13c-1.12 0-1.47.69-1.47 1.4V9h2.49l-.4 2.6h-2.09v6.29A9 9 0 0 0 18 9Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="text-[#7D818D] hover:text-primary">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1.62c2.4 0 2.69.01 3.64.05.87.04 1.35.19 1.66.31.42.16.72.36 1.03.67.32.32.51.61.67 1.03.13.32.27.79.31 1.66.04.95.05 1.24.05 3.64s-.01 2.69-.05 3.64c-.04.87-.18 1.35-.31 1.66-.16.42-.35.72-.67 1.03-.31.32-.61.51-1.03.67-.31.13-.79.27-1.66.31-.95.04-1.24.05-3.64.05s-2.69-.01-3.64-.05c-.87-.04-1.35-.18-1.66-.31a2.78 2.78 0 0 1-1.03-.67 2.78 2.78 0 0 1-.67-1.03c-.13-.31-.27-.79-.31-1.66C1.65 11.69 1.64 11.4 1.64 9s.01-2.69.05-3.64c.04-.87.18-1.34.31-1.66.16-.42.35-.71.67-1.03.31-.31.61-.51 1.03-.67.31-.12.79-.27 1.66-.31C6.31 1.65 6.6 1.64 9 1.64M9 0C6.56 0 6.25.01 5.29.05 4.34.09 3.68.26 3.1.49c-.6.23-1.1.54-1.6 1.04S.72 2.49.49 3.1C.26 3.68.09 4.34.05 5.29.01 6.25 0 6.56 0 9s.01 2.75.05 3.71c.04.96.21 1.61.44 2.19.23.6.54 1.1 1.04 1.6s1 .81 1.6 1.04c.58.23 1.23.4 2.19.44.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c.96-.04 1.61-.21 2.19-.44.6-.23 1.1-.54 1.6-1.04s.81-1 1.04-1.6c.23-.58.4-1.23.44-2.19.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.04-.95-.21-1.61-.44-2.19a4.42 4.42 0 0 0-1.04-1.6A4.42 4.42 0 0 0 14.9.49C14.32.26 13.66.09 12.71.05 11.75.01 11.44 0 9 0Zm0 4.38a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.24ZM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.8-7.8a1.08 1.08 0 1 0 0-2.16 1.08 1.08 0 0 0 0 2.16Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-[#7D818D] hover:text-primary">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2 0H1.8C.81 0 0 .81 0 1.8v14.4c0 .99.81 1.8 1.8 1.8h14.4c.99 0 1.8-.81 1.8-1.8V1.8c0-.99-.81-1.8-1.8-1.8ZM5.34 15.34H2.67V6.75h2.67v8.59ZM4 5.6a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.74h-2.67V11.2c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19v4.21H7.03V6.75h2.56v1.17h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1v4.7Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h3 className="text-[15px] font-light text-white/65">
                {section.title}
              </h3>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="py-2 text-base text-white hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
