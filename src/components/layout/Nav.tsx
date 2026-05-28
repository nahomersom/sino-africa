"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/src/lib/utils";
import { sortByVerticalOrder } from "@/src/lib/vertical-order";
import { getStrapiMediaUrl, useGetVerticalsQuery } from "@/src/store/strapiApi";
import { Button } from "../ui/app-button";

type NavSubLink = { label: string; href: string; iconSrc?: string; bgColor?: string };

type NavItem = {
  label: string;
  href: string;
  children?: readonly NavSubLink[];
};

function sortVerticalNavLinks(links: readonly NavSubLink[]): NavSubLink[] {
  return sortByVerticalOrder(links, (link) => link.href);
}

const verticalSubLinks: readonly NavSubLink[] = [
  { label: "Act IT", href: "/our-verticals/act-it" },
  { label: "SinoSec", href: "/our-verticals/sinosec" },
  { label: "Mobilitex", href: "/our-verticals/mobilitex" },
];

const navItems: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our Verticals", href: "/our-verticals", children: verticalSubLinks },
  { label: "Projects", href: "/projects" },
  { label: "Solutions", href: "/technology" },
  { label: "Insights", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];

const SUBMENU_BACKDROP_SHADOW =
  "0px 4px 8px 0px rgba(71, 71, 71, 0.1), 0px 15px 15px 0px rgba(71, 71, 71, 0.09), 0px 33px 20px 0px rgba(71, 71, 71, 0.05), 0px 58px 23px 0px rgba(71, 71, 71, 0.01), 0px 91px 26px 0px rgba(71, 71, 71, 0)";



function VerticalsSubmenuArtPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative hidden shrink-0 self-stretch overflow-hidden rounded-2xl bg-primary/20 lg:flex lg:items-center lg:justify-center",
        className,
      )}
      aria-hidden
    >
      <Image src="/brand/logo.svg" alt="Vertical dropdown icon" width={142.5} height={53.8} />
    </div>
  );
}

const VERTICAL_SUBLINK_ICON_FALLBACK = "/images/about/value-check.svg";

/** Figma layout_AMXIOM + style_TSI0YM — used in 6:2281 Backdrop (mobile drawer + lg+ submenu) */
function NavSubLinkRow({
  href,
  label,
  iconSrc,
  bgColor,
  onClick,
}: {
  href: string;
  label: string;
  iconSrc?: string;
  bgColor?: string;
  onClick?: () => void;
}) {
  const src = iconSrc || VERTICAL_SUBLINK_ICON_FALLBACK;
  const useWhiteForeground = Boolean(bgColor);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex min-h-0 flex-1 items-center gap-2 rounded-lg px-3 py-3",
        !bgColor && "bg-accent-60",
      )}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <Image
        src={src}
        alt=""
        width={23}
        height={23}
        className={cn(
          "size-[23px] shrink-0 object-contain",
          useWhiteForeground && "brightness-0 invert",
        )}
      />
      <span
        className={cn(
          "min-w-0 flex-1 text-left text-sm font-normal leading-[1.5]",
          useWhiteForeground ? "text-white" : "text-text-100",
        )}
      >
        {label}
      </span>
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6H13M13 6L8 1M13 6L8 11"
          className={cn(
            "transition-all duration-300",
            useWhiteForeground ? "stroke-white" : "stroke-[#1A1919]",
          )}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

type NavVariant = "default" | "inner-page";

type NavProps = {
  variant?: NavVariant;
  className?: string;
};

export function Nav({ variant = "default", className = "" }: NavProps) {
  const pathname = usePathname();
  const useLightMobileBranding = variant === "default" && pathname === "/";
  const [isMobileMdScrolled, setIsMobileMdScrolled] = useState(false);
  // True once the user has scrolled past the first viewport (≈ past the hero).
  // We collapse the nav's outer padding so the pill attaches to the top edge.
  const [isPastFirstSection, setIsPastFirstSection] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const STRAPI_URL =
    process.env.NEXT_PUBLIC_STRAPI_URL?.trim() ||
    "https://api.sinoafricatrading.com ";
  const { data: verticals = [] } = useGetVerticalsQuery(undefined, {
    skip: !STRAPI_URL,
  });

  const dynamicVerticalSubLinks: readonly NavSubLink[] =
    verticals.length > 0
      ? sortVerticalNavLinks(
        verticals
          .map((v) => {
            const title = (v.title ?? v.name ?? v.slug ?? "").toString().trim();
            const slug = (v.slug ?? "").toString().trim();
            if (!title || !slug) return null;
            const iconSrc = getStrapiMediaUrl(v.logo?.url);
            const link: NavSubLink = {
              label: title,
              href: `/our-verticals/${slug}`,
            };
            if (iconSrc) link.iconSrc = iconSrc;
            if (v.gradient?.baseColor) link.bgColor = v.gradient.baseColor;
            return link;
          })
          .filter((x): x is NavSubLink => x !== null),
      )
      : verticalSubLinks;

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onViewportChange = () => {
      const isLgUp = window.matchMedia("(min-width: 1024px)").matches;
      setIsMobileMdScrolled(!isLgUp && window.scrollY > 6);
      setIsPastFirstSection(window.scrollY > window.innerHeight * 0.8);
      if (isLgUp) setMenuOpen(false);
    };

    onViewportChange();
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);
    return () => {
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
    };
  }, []);

  const useDarkMobileBranding = !useLightMobileBranding || isMobileMdScrolled;

  return (
    <header className={`fixed inset-x-0 top-0 z-30 w-full ${className}`}>
      <div
        className={cn(
          "md:mx-auto w-full max-w-[1252px] px-8 lg:px-4",
          isPastFirstSection ? "py-0 lg:py-0" : "py-6 lg:pt-8 lg:pb-0",
        )}
      >
        <div
          className={`flex items-center justify-between transition-colors duration-200 ${isMobileMdScrolled
            ? "rounded-[20px] bg-white/95 p-3 shadow-[0_6px_20px_rgba(15,23,42,0.08)] backdrop-blur-md"
            : ""
            } lg:rounded-[32px] lg:p-4 lg:backdrop-blur-[32px] ${variant === "default"
              ? "lg:bg-white/80 lg:shadow-[0_8px_30px_rgba(15,23,42,0.2)]"
              : "lg:bg-white/80 lg:shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
            }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2">
            {useLightMobileBranding && !useDarkMobileBranding ? (
              <>
                <Image
                  src="/brand/whiteLogo.svg"
                  alt="Sino Africa"
                  width={113}
                  height={43}
                  priority
                  className="h-[43px] w-[113px] lg:hidden"
                />
                <Image
                  src="/brand/logo.svg"
                  alt="Sino Africa"
                  width={142}
                  height={54}
                  priority
                  className="hidden h-[53.8px] w-[142.5px] lg:block"
                />
              </>
            ) : (
              <Image
                src="/brand/logo.svg"
                alt="Sino Africa"
                width={142}
                height={54}
                priority
                className="h-[43px] w-[113px] lg:h-[53.8px] lg:w-[142.5px]"
              />
            )}
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className={cn(
              "flex size-6 shrink-0 items-center justify-center lg:hidden",
              useLightMobileBranding && !useDarkMobileBranding ? "text-white" : "text-text-100",
            )}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Main">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href !== "#" && !item.href.startsWith("/#") && pathname.startsWith(item.href);

              const children =
                item.label === "Our Verticals" ? dynamicVerticalSubLinks : item.children;

              if (children?.length) {
                return (
                  <div key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-2 py-3 text-sm transition-colors cursor-pointer",
                        isActive
                          ? "font-medium text-primary"
                          : "font-normal text-text-100",
                      )}
                      aria-haspopup="menu"
                    >
                      {item.label}
                    </Link>
                    <div
                      role="menu"
                      aria-label={`${item.label} submenu`}
                      className={cn(
                        "invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-opacity duration-200",
                        "pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto",
                        "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                      )}
                    >
                      {/* Figma 6:2281 Backdrop: row, gap 8px, p 16px, r 24px, w 502, shadow effect_V9Q2NO */}
                      <div
                        className="flex w-[min(502px,calc(100vw-4rem))] flex-row items-stretch gap-2 rounded-[24px] bg-white p-4"
                        style={{ boxShadow: SUBMENU_BACKDROP_SHADOW }}
                      >
                        <VerticalsSubmenuArtPanel className="w-[183px] min-h-[186px]" />
                        <div className="flex min-h-[186px] min-w-0 flex-1 flex-col gap-1 self-stretch py-2">
                          {children.map((child) => (
                            <NavSubLinkRow
                              key={child.label}
                              href={child.href}
                              label={child.label}
                              iconSrc={child.iconSrc}
                              bgColor={child.bgColor}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={`px-2 py-3 text-sm transition-colors ${isActive
                    ? "font-medium text-primary"
                    : "font-normal text-text-100"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button asChild variant="primary" className="hidden min-w-[142px] lg:inline-flex">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto py-12 pl-8 pr-8 lg:hidden"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between gap-[77px]">
              <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
                <Image
                  src="/brand/logo.svg"
                  alt="Sino Africa"
                  width={113}
                  height={43}
                  className="h-[43px] w-[113px]"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex size-6 shrink-0 items-center justify-center text-text-100"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav
              className="flex w-full flex-col items-stretch gap-2"
              aria-label="Main"
            >
              {navItems.map((item) => {
                const isActive =
                  item.href === "/" || item.href === "/about"
                    ? pathname === item.href
                    : false;

                const children =
                  item.label === "Our Verticals" ? dynamicVerticalSubLinks : item.children;

                if (children?.length) {
                  return (
                    <div
                      key={item.label}
                      className="flex w-full max-w-full flex-col items-stretch gap-2 px-2 py-3"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="w-full text-left text-sm font-normal leading-[1.5] text-text-100"
                      >
                        {item.label}
                      </Link>
                      {/* Figma 6:2281 Backdrop — art panel hidden on mobile/md; lg+ uses desktop submenu */}
                      <div className="flex w-full max-w-full flex-col items-stretch rounded-[24px]">
                        <div className="flex min-h-0 min-w-0 w-full flex-col gap-1 py-2">
                          {children.map((v) => (
                            <NavSubLinkRow
                              key={v.label}
                              href={v.href}
                              label={v.label}
                              iconSrc={v.iconSrc}
                              bgColor={v.bgColor}
                              onClick={() => setMenuOpen(false)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-lg px-2 py-3 text-left text-sm leading-[1.5]",
                      isActive ? "font-medium text-primary" : "font-normal text-text-100",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-12 flex w-full shrink-0 items-center justify-center rounded-[23px] bg-primary px-6 py-6 text-sm font-normal leading-[1.5] text-white"
          >
            Contact us
          </Link>
        </div>
      ) : null}
    </header>
  );
}
