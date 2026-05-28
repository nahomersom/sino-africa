"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetVerticalsQuery } from "@/src/store/strapiApi";
import { sortByVerticalOrder } from "@/src/lib/vertical-order";

type FooterNavLink = {
  label: string;
  href: string;
  /** Icon before label (mail, tel, etc.) */
  leadingIconSrc?: string;
};

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
      { label: "ACT IT", href: "/our-verticals/act-it" },
      { label: "SinoSec", href: "/our-verticals/sinosec" },
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
      {
        label: "info@sinoafricatrading.com",
        href: "mailto:info@sinoafricatrading.com ",
        leadingIconSrc: "/icons/mail.svg",
      },
      {
        label: "+251944317816",
        href: "tel:+251944317816",
        leadingIconSrc: "/icons/tel.svg",
      },
      { label: "+251982919293", href: "tel:+251982919293" },
      { label: "Contact us", href: "/contact" },
    ] satisfies FooterNavLink[],
  },
};

export function Footer() {
  const { data: verticals = [] } = useGetVerticalsQuery();
  const orderedVerticals = sortByVerticalOrder(verticals, (v) => v.slug ?? v.title ?? v.name);
  const dynamicVerticalLinks =
    orderedVerticals.length > 0
      ? orderedVerticals
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
                  const links = section.links as readonly FooterNavLink[];
                  const hasLeadingIcon = links.some((l) => Boolean(l.leadingIconSrc));
                  return links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`${link.href.startsWith("mailto:")
                        ? "max-w-full wrap-break-word text-sm sm:text-base"
                        : "text-base"
                        } flex items-center gap-2 py-2 text-white transition-colors hover:text-primary`}
                    >
                      {link.leadingIconSrc ? (
                        <Image
                          src={link.leadingIconSrc}
                          alt=""
                          width={24}
                          height={24}
                          className="size-6 shrink-0"
                          aria-hidden
                        />
                      ) : hasLeadingIcon ? (
                        <span className="size-6 shrink-0" aria-hidden />
                      ) : null}
                      <span
                        className={
                          link.href.startsWith("mailto:") ? "min-w-0 flex-1" : undefined
                        }
                      >
                        {link.label}
                      </span>
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