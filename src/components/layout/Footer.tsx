"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetVerticalsQuery } from "@/src/store/strapiApi";

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.74038 14.3685L6.69351 12.9816C7.24445 12.5904 7.80305 12.3282 8.44034 12.1585C9.17201 11.9636 9.5 11.5644 9.5 10.711C9.5 8.54629 14.5 8.31595 14.5 10.711C14.5 11.5644 14.828 11.9636 15.5597 12.1585C16.202 12.3295 16.7599 12.5934 17.3065 12.9816L19.2596 14.3685C20.1434 14.9961 20.5547 15.2995 20.7842 15.7819C21 16.2358 21 16.768 21 17.8324C21 19.7461 21 20.703 20.4642 21.3164C19.8152 22.0593 18.128 21.9955 17.0917 21.9955H6.90833C5.87197 21.9955 4.21909 22.0986 3.5358 21.3164C3 20.703 3 19.7461 3 17.8324C3 16.768 3 16.2358 3.21584 15.7819C3.44526 15.2995 3.85662 14.9961 4.74038 14.3685Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.96014 3.69772C5.6417 4.07415 4.69384 4.54112 3.82645 5.10455C2.45318 5.9966 1.86443 7.60404 2.02607 9.15513C2.09439 9.81068 2.62064 10.1241 3.23089 9.95455C3.69451 9.82571 4.15888 9.7003 4.61961 9.56364C5.96706 9.16397 6.28399 8.67812 6.47124 7.29885L6.96014 3.69772ZM6.96014 3.69772C10.2186 2.76743 13.7814 2.76743 17.0399 3.69772M17.0399 3.69772C18.3583 4.07415 19.3062 4.54112 20.1735 5.10455C21.5468 5.9966 22.1356 7.60404 21.9739 9.15513C21.9056 9.81068 21.3794 10.1241 20.7691 9.95455C20.3055 9.82571 19.8411 10.7003 19.3804 9.56364C18.0329 9.16397 17.716 8.67812 17.5288 7.29885L17.0399 3.69772Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const footerLinks = {
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Our Verticals", href: "/our-verticals" },
      { label: "Solutions", href: "/technology" },
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
      { label: "Projects", href: "/projects" },
      { label: "Insights", href: "/blogs" },
    ],
  },
  contact: {
    title: "Contact",
    links: [
      { label: "info@Sinoafricatrading.com", href: "mailto:info@Sinoafricatrading.com" },
      { label: "+251900130895", href: "tel:+251900130895" },
      { label: "+251944317816", href: "tel:+251944317816" },
      { label: "+251982919293", href: "tel:+251982919293" },
      { label: "Contact us", href: "/contact" },
    ],
  },
};

export function Footer() {
  const { data: verticals = [] } = useGetVerticalsQuery();
  const dynamicVerticalLinks =
    verticals.length > 0
      ? verticals
        .map((item) => {
          const label = (item.title ?? item.name ?? "").trim();
          const slug = (item.slug ?? "").trim();
          if (!label || !slug) return null;
          return { label, href: `/our-verticals/${slug}` };
        })
        .filter((link): link is { label: string; href: string } => link !== null)
      : footerLinks.verticals.links;

  const sections = [
    footerLinks.quickLinks,
    { ...footerLinks.verticals, links: dynamicVerticalLinks },
    footerLinks.additional,
    footerLinks.contact,
  ] as const;

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
            A Bridge Between Markets, Technology, and Institutional Infrastructure, Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/company/sino_africa/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#7D818D] hover:text-primary"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2 0H1.8C.81 0 0 .81 0 1.8v14.4c0 .99.81 1.8 1.8 1.8h14.4c.99 0 1.8-.81 1.8-1.8V1.8c0-.99-.81-1.8-1.8-1.8ZM5.34 15.34H2.67V6.75h2.67v8.59ZM4 5.6a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.74h-2.67V11.2c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19v4.21H7.03V6.75h2.56v1.17h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1v4.7Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-[1fr_1fr_1fr_1.4fr]">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h3 className="text-[15px] font-light text-white/65">
                {section.title}
              </h3>
              <div className="flex flex-col gap-2">
                {(() => {
                  const hasAnyIcon = section.links.some((l: any) => l.icon);
                  return section.links.map((link: any) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`${link.href.startsWith("mailto:")
                        ? "block max-w-full wrap-break-word text-sm sm:text-base"
                        : "text-base"
                        } flex items-start gap-4 py-2 text-white transition-colors hover:text-primary`}
                    >
                      {link.icon ? (
                        <span className="shrink-0">{link.icon}</span>
                      ) : (
                        hasAnyIcon && (
                          <div
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                        )
                      )}
                      <span>{link.label}</span>
                    </Link>
                  ));
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}