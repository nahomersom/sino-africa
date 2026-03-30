export type ProjectFilterId = "all" | "act-it" | "sino-sec" | "mobilitex" | "pilot";

export type ProjectFilterTab = {
  id: ProjectFilterId;
  label: string;
};

export const projectFilterTabs: readonly ProjectFilterTab[] = [
  { id: "all", label: "All" },
  { id: "act-it", label: "ACT IT" },
  { id: "sino-sec", label: "Sino Sec" },
  { id: "mobilitex", label: "Mobilitex" },
  { id: "pilot", label: "Pilot Projects" },
] as const;

export type ProjectCard = {
  id: string;
  /** Which primary filter tab this card belongs to (not "all"). */
  filter: Exclude<ProjectFilterId, "all">;
  title: string;
  description: string;
  /** Replace with real imagery when available (Figma exports). */
  imageSrc: string;
  imageAlt: string;
};

export const projectsContent = {
  hero: {
    label: "OUR PROJECTS",
    heading: "Delivering technology and infrastructure that moves businesses forward.",
    description:
      "From digital platforms to secure systems and mobility solutions, our work spans sectors and borders—built with partners who expect reliability, scale, and clarity.",
  },
  grid: {
    heading: "Our Featured Projects",
    intro:
      "Lorem ipsum dolor sit amet consectetur. Nunc euismod consectetur arcu nunc etiam lobortis montes enim. Ut risus neque lectus donec id pretium orci platea habitant.",
    items: [
      {
        id: "act-it",
        filter: "act-it",
        title: "Act IT enterprise rollout",
        description:
          "Unified tooling and workflows for distributed teams, with a focus on adoption and measurable operational gains.",
        imageSrc: "/images/about/hero-photo-2.png",
        imageAlt: "Act IT project preview",
      },
      {
        id: "sino-sec",
        filter: "sino-sec",
        title: "SINO Sec compliance program",
        description:
          "Hardening, monitoring, and policy alignment for organisations scaling across regulated environments.",
        imageSrc: "/images/about/hero-photo-0.jpg",
        imageAlt: "SINO Sec project preview",
      },
      {
        id: "mobilitex",
        filter: "mobilitex",
        title: "Mobilitex field operations",
        description:
          "Logistics and workforce mobility solutions improving turnaround times and visibility in the field.",
        imageSrc: "/images/about/hero-photo-1.jpg",
        imageAlt: "Mobilitex project preview",
      },
      {
        id: "pilot-connectivity",
        filter: "pilot",
        title: "National connectivity backbone",
        description:
          "Planning and delivery support for resilient network capacity serving enterprise and public-sector use cases.",
        imageSrc: "/images/about/hero-photo-2.png",
        imageAlt: "Infrastructure project preview",
      },
      {
        id: "act-it-integration",
        filter: "act-it",
        title: "Cross-border trade integration",
        description:
          "APIs and data exchange layers connecting partners, customs workflows, and core business systems.",
        imageSrc: "/images/about/hero-photo-0.jpg",
        imageAlt: "Integration project preview",
      },
      {
        id: "pilot-analytics",
        filter: "pilot",
        title: "Operational analytics cockpit",
        description:
          "Dashboards and pipelines turning operational signals into decisions leadership can act on weekly.",
        imageSrc: "/images/about/hero-photo-1.jpg",
        imageAlt: "Analytics project preview",
      },
    ] satisfies ProjectCard[],
  },
  contact: {
    heading: "Get In Touch with us",
    description:
      "Have a project in mind? Tell us about your goals—we\u2019ll help you shape the right approach.",
    buttonLabel: "Contact us",
  },
} as const;
