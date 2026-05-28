export type VerticalItem = {
  title: string;
  description: string;
  colorClass: string;
  iconSrc: string;
  arrowSrc: string;
};

export const verticalItems: VerticalItem[] = [
  {
    title: "ACT IT",
    description:
      "End-to-end IT services and digital transformation—from infrastructure and cloud to support that keeps teams productive.",
    colorClass: "bg-[#3FAF7E]",
    iconSrc: "/icons/vertical-cards-icon.png",
    arrowSrc: "/images/our-verticals/vertical-card-arrow-1.svg",
  },
  {
    title: "SINOSEC",
    description:
      "Security consulting, risk reduction, and resilient operations so your organisation can operate with confidence.",
    colorClass: "bg-[#4A5568]",
    iconSrc: "/icons/vertical-cards-icon.png",
    arrowSrc: "/images/our-verticals/vertical-card-arrow-3.svg",
  },
  {
    title: "MOBILITEX",
    description:
      "Mobility and logistics solutions that connect assets, routes, and people—designed for reliability at scale.",
    colorClass: "bg-[#2F6FED]",
    iconSrc: "/icons/vertical-cards-icon.png",
    arrowSrc: "/images/our-verticals/vertical-card-arrow-2.svg",
  },
];
