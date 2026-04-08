import type { ReactNode } from "react";

export type HeroSocialIcon = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type HeroSlide = {
  imageSrc: string;
  title: string;
  description: string;
  focusAreas: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const HERO_SOCIAL_ICONS: readonly HeroSocialIcon[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3333 0H0.666667C0.298477 0 0 0.298477 0 0.666667V15.3333C0 15.7015 0.298477 16 0.666667 16H8.5461V9.80397H6.461V7.38924H8.5461V5.60846C8.5461 3.54187 9.8083 2.41657 11.6518 2.41657C12.5349 2.41657 13.2939 2.48232 13.515 2.51171V4.67141L12.2365 4.67199C11.2338 4.67199 11.0397 5.14842 11.0397 5.84755V7.38924H13.4309L13.1195 9.80397H11.0397V16H15.3333C15.7015 16 16 15.7015 16 15.3333V0.666667C16 0.298477 15.7015 0 15.3333 0Z" fill="#7D818D" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.70167 0.048C5.555 0.00933334 5.82733 0 8 0C10.1727 0 10.445 0.00933334 11.2983 0.048C12.599 0.107333 13.7407 0.426 14.6573 1.34267C15.5743 2.25967 15.8927 3.40167 15.952 4.70167C15.9907 5.555 16 5.82733 16 8C16 10.1727 15.9907 10.445 15.952 11.2983C15.8927 12.599 15.574 13.7407 14.6573 14.6573C13.7403 15.5743 12.598 15.8927 11.2983 15.952C10.445 15.9907 10.1727 16 8 16C5.82733 16 5.555 15.9907 4.70167 15.952C3.401 15.8927 2.25933 15.574 1.34267 14.6573C0.425667 13.7403 0.107333 12.5983 0.048 11.2983C0.00933334 10.445 0 10.1727 0 8C0 5.82733 0.00933334 5.555 0.048 4.70167C0.107333 3.401 0.426 2.25933 1.34267 1.34267C2.25967 0.425667 3.40167 0.107333 4.70167 0.048ZM11.2327 1.48807C10.389 1.44941 10.136 1.44141 8.00002 1.44141C5.86402 1.44141 5.61102 1.44974 4.76735 1.48807C3.85702 1.52974 3.01202 1.71207 2.36202 2.36207C1.71202 3.01207 1.52969 3.85707 1.48802 4.76741C1.44935 5.61107 1.44135 5.86407 1.44135 8.00007C1.44135 10.1361 1.44969 10.3891 1.48802 11.2327C1.52969 12.1431 1.71202 12.9881 2.36202 13.6381C3.01202 14.2881 3.85702 14.4704 4.76735 14.5121C5.61069 14.5507 5.86369 14.5587 8.00002 14.5587C10.1364 14.5587 10.3894 14.5504 11.2327 14.5121C12.143 14.4704 12.988 14.2881 13.638 13.6381C14.288 12.9881 14.4704 12.1431 14.512 11.2327C14.5507 10.3891 14.5587 10.1361 14.5587 8.00007C14.5587 5.86407 14.5504 5.61107 14.512 4.76741C14.4704 3.85707 14.288 3.01207 13.638 2.36207C12.988 1.71207 12.143 1.52974 11.2327 1.48807Z" fill="#7D818D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.36366 8.36372C4.36366 6.15469 6.15431 4.36372 8.36366 4.36372C10.573 4.36372 12.3637 6.15437 12.3637 8.36372C12.3637 10.5731 10.573 12.3637 8.36366 12.3637C6.15431 12.3637 4.36366 10.5727 4.36366 8.36372ZM5.76709 8.36392C5.76709 9.79787 6.9297 10.9605 8.36365 10.9605C9.7976 10.9605 10.9602 9.79787 10.9602 8.36392C10.9602 6.92997 9.7976 5.76736 8.36365 5.76736C6.9297 5.76736 5.76709 6.92997 5.76709 8.36392Z" fill="#7D818D" />
        <path d="M13.0909 4.0002C13.0909 4.60269 12.6025 5.09111 12 5.09111C11.3975 5.09111 10.9091 4.60269 10.9091 4.0002C10.9091 3.39771 11.3975 2.90929 12 2.90929C12.6025 2.90929 13.0909 3.39771 13.0909 4.0002Z" fill="#7D818D" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.666667 0H15.3333C15.7 0 16 0.3 16 0.666667V15.3333C16 15.7 15.7 16 15.3333 16H0.666667C0.3 16 0 15.7 0 15.3333V0.666667C0 0.3 0.3 0 0.666667 0ZM2.36665 13.6333H4.73331V6H2.36665V13.6333ZM3.56664 4.96684C2.79998 4.96684 2.19998 4.36684 2.19998 3.60017C2.19998 2.83351 2.79998 2.23351 3.56664 2.23351C4.33331 2.23351 4.93331 2.83351 4.93331 3.60017C4.93331 4.33351 4.33331 4.96684 3.56664 4.96684ZM11.2667 13.6332H13.6V9.43325C13.6 7.36658 13.1667 5.79991 10.7667 5.79991C9.63334 5.79991 8.83334 6.43325 8.53334 7.03325H8.50001V5.99991H6.23334V13.6332H8.60001V9.86658C8.60001 8.86658 8.80001 7.89991 10.0333 7.89991C11.2667 7.89991 11.2667 9.03325 11.2667 9.93325V13.6332Z" fill="#7D818D" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 1.62371C15.4 1.91237 14.7667 2.09278 14.1 2.20103C14.7667 1.76804 15.3 1.08247 15.5333 0.252577C14.9 0.649485 14.2 0.938144 13.4333 1.11856C12.8333 0.43299 11.9667 0 11.0333 0C9.23333 0 7.76667 1.58763 7.76667 3.53608C7.76667 3.82474 7.8 4.07732 7.86667 4.3299C5.16667 4.18557 2.73333 2.77835 1.1 0.613402C0.833333 1.15464 0.666667 1.73196 0.666667 2.38144C0.666667 3.60825 1.23333 4.69072 2.13333 5.34021C1.6 5.30412 1.1 5.15979 0.633333 4.90722V4.9433C0.633333 6.67526 1.76667 8.11856 3.26667 8.4433C3 8.51546 2.7 8.55155 2.4 8.55155C2.2 8.55155 1.96667 8.51546 1.76667 8.47938C2.2 9.8866 3.4 10.933 4.83333 10.933C3.7 11.8711 2.3 12.4485 0.766667 12.4485C0.5 12.4485 0.233333 12.4485 0 12.4124C1.46667 13.4227 3.16667 14 5.03333 14C11.0667 14 14.3667 8.58763 14.3667 3.89691C14.3667 3.75258 14.3667 3.57217 14.3667 3.42783C15 2.95876 15.5667 2.34536 16 1.62371Z" fill="#7D818D" />
      </svg>
    ),
  },
] as const;

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    imageSrc: "/images/home/hero-carousel-bg.png",
    title: "A Bridge Between Markets, Technology, and Institutional Infrastructure",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Technology Deployment", "Institutional PartnershipS", "Technology Deployment"],
    primaryCta: { label: "Explore Our Platforms", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
  {
    imageSrc: "/images/home/carousel-image-2.jpg",
    title: "ACT IT",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Institutional Partnerships", "Technology Deployment", "Market Integration"],
    primaryCta: { label: "Explore Our Platforms", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
  {
    imageSrc: "/images/home/carousel-image-3.jpg",
    title: "SINOSEC",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Platform Infrastructure", "Operational Excellence", "Technology Deployment"],
    primaryCta: { label: "Explore Our Platforms", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
  {
    imageSrc: "/images/home/carousel-image-4.jpg",
    title: "MOBILITEX",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Market Integration", "Institutional Partnerships", "Platform Infrastructure"],
    primaryCta: { label: "Explore Our Platforms", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
];
