import type { ReactNode } from "react";

export type HeroSocialIcon = {
  label: string;
  href: string;
  icon: ReactNode;
};

export type HeroSlide = {
  imageSrc: string;
  title: string;
  verticalName?: string;
  description: string;
  focusAreas: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const HERO_SOCIAL_ICONS: readonly HeroSocialIcon[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sino-africa-investment-and-trading-plc/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.22255 6.88885V13.1111M7.7781 9.55551V13.1111M7.7781 9.55551C7.7781 8.08271 8.97197 6.88885 10.4448 6.88885C11.9176 6.88885 13.1114 8.08271 13.1114 9.55551V13.1111M7.7781 9.55551V6.88885M4.33366 3.99996H4.22255M4.44477 3.99996C4.44477 4.12269 4.34528 4.22218 4.22255 4.22218C4.09982 4.22218 4.00033 4.12269 4.00033 3.99996C4.00033 3.87723 4.09982 3.77774 4.22255 3.77774C4.34528 3.77774 4.44477 3.87723 4.44477 3.99996ZM0.666992 8.66663C0.666992 4.89539 0.666992 3.00977 1.83857 1.8382C3.01014 0.666626 4.89576 0.666626 8.66699 0.666626C12.4382 0.666626 14.3239 0.666626 15.4954 1.8382C16.667 3.00977 16.667 4.89539 16.667 8.66663C16.667 12.4378 16.667 14.3235 15.4954 15.4951C14.3239 16.6666 12.4382 16.6666 8.66699 16.6666C4.89576 16.6666 3.01014 16.6666 1.83857 15.4951C0.666992 14.3235 0.666992 12.4378 0.666992 8.66663Z" stroke="#7D818D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@Sinoafricatrading.com",
    icon: (
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.665039 2.72386L6.19545 5.9496C8.23431 7.1388 9.09575 7.1388 11.1346 5.9496L16.665 2.72386M0.677655 8.88024C0.729951 11.4049 0.756103 12.6671 1.66101 13.6022C2.5659 14.5372 3.8253 14.5698 6.3441 14.6349C7.89647 14.6751 9.43359 14.6751 10.986 14.6349C13.5048 14.5698 14.7641 14.5372 15.6691 13.6022C16.574 12.6671 16.6001 11.4049 16.6524 8.88024C16.6693 8.06849 16.6693 7.26159 16.6524 6.44984C16.6001 3.92528 16.574 2.663 15.6691 1.72794C14.7641 0.792876 13.5048 0.760306 10.986 0.695157C9.43359 0.655001 7.89647 0.655001 6.34409 0.695148C3.8253 0.760289 2.5659 0.79286 1.661 1.72793C0.756095 2.66299 0.729951 3.92527 0.677647 6.44984C0.660831 7.26159 0.660839 8.06849 0.677655 8.88024Z" stroke="#7D818D" strokeWidth="1.33" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+251944317816",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.13906 3.07591L5.78114 2.2706C5.54711 1.74404 5.4301 1.48076 5.2551 1.27927C5.03578 1.02676 4.74991 0.840986 4.43009 0.743128C4.1749 0.665039 3.88679 0.665039 3.31056 0.665039C2.46763 0.665039 2.04616 0.665039 1.69235 0.827075C1.27559 1.01795 0.899206 1.4324 0.749241 1.86557C0.621934 2.2333 0.658405 2.6112 0.73133 3.367C1.50763 11.4119 5.91822 15.8224 13.9631 16.5988C14.7189 16.6717 15.0969 16.7081 15.4645 16.5808C15.8977 16.4309 16.3122 16.0545 16.5031 15.6377C16.665 15.2839 16.665 14.8624 16.665 14.0195C16.665 13.4433 16.665 13.1552 16.587 12.9C16.4891 12.5802 16.3033 12.2943 16.0508 12.075C15.8494 11.9 15.5861 11.783 15.0595 11.5489L14.2542 11.1911C13.684 10.9376 13.3988 10.8109 13.1091 10.7833C12.8318 10.7569 12.5522 10.7959 12.2927 10.8969C12.0215 11.0025 11.7818 11.2023 11.3024 11.6018C10.8252 11.9994 10.5866 12.1983 10.2951 12.3047C10.0366 12.3992 9.69489 12.4342 9.42271 12.3941C9.1156 12.3488 8.88049 12.2231 8.41017 11.9719C6.94706 11.1899 6.14019 10.3831 5.35827 8.91994C5.10695 8.44963 4.9813 8.21452 4.93604 7.90741C4.89593 7.63523 4.9309 7.29354 5.02531 7.03505C5.13182 6.74351 5.33066 6.50492 5.72833 6.02771C6.12782 5.54831 6.32757 5.30862 6.43318 5.03741C6.53425 4.77788 6.57316 4.49829 6.54678 4.22102C6.51922 3.93128 6.3925 3.64616 6.13906 3.07591Z" stroke="#7D818D" strokeWidth="1.33" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    imageSrc: "/images/home/hero-carousel-bg.png",
    title: "A Bridge Between Markets, Technology, and Institutional Infrastructure",
    verticalName: "SINO AFRICA",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Technology Deployment", "Institutional PartnershipS", "Technology Deployment"],
    primaryCta: { label: "Explore Our Platforms", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
  {
    imageSrc: "/images/home/carousel-image-2.jpg",
    title: "ACT IT",
    verticalName: "ACT IT",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Institutional Partnerships", "Technology Deployment", "Market Integration"],
    primaryCta: { label: "Read more about ACT IT", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
  {
    imageSrc: "/images/home/carousel-image-3.jpg",
    title: "SINOSEC",
    verticalName: "SINOSEC",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Platform Infrastructure", "Operational Excellence", "Technology Deployment"],
    primaryCta: { label: "Read more about SINOSEC", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
  {
    imageSrc: "/images/home/carousel-image-4.jpg",
    title: "MOBILITEX",
    verticalName: "MOBILITEX",
    description: "Building scalable infrastructure systems across Africa through partnerships, technology, and institutional capital.",
    focusAreas: ["Market Integration", "Institutional Partnerships", "Platform Infrastructure"],
    primaryCta: { label: "Read more about MOBILITEX", href: "/our-verticals" },
    secondaryCta: { label: "Partner with us", href: "/contact" },
  },
];
