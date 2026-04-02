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
    description: "",
  },
  grid: {
    heading: "Our Featured Projects",
    intro:
    "Showcasing our most impactful and innovative projects.",
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
  detail: {
    /** Eyebrow above the project title (detail page hero). */
    heroBadge: "OUR PROJECT",
    sharedWhatWeDid: [
      "Discovery workshops with leadership and field teams",
      "Architecture and integration planning across core systems",
      "Implementation, testing, and staged rollout with training",
      "Hypercare, KPI reviews, and continuous optimisation",
    ] as const,
    sharedTechnologies: [
      "Cloud-native services and API gateways",
      "Identity, access management, and encryption standards",
      "Observability, logging, and automated alerting",
      "Data pipelines and governed reporting layers",
      "Secure CI/CD and infrastructure-as-code",
    ] as const,
    sharedClient: "Sino Africa delivery team with regional enterprise partners",
    sharedOverview:
      "Lorem ipsum dolor sit amet consectetur. Auctor quisque accumsan eu facilisis pharetra quisque. Nibh egestas dictum scelerisque ullamcorper id. Risus netus tellus leo pulvinar pellentesque diam pretium gravida. A lacus nec augue nunc accumsan posuere. Imperdiet massa molestie metus lectus sed orci augue nec nam.",
    sharedChallenges:
      "Lorem ipsum dolor sit amet consectetur. Cum commodo fermentum orci ultrices vitae. Porttitor aliquet a egestas tincidunt senectus enim tincidunt cras nulla. Fermentum pretium nunc molestie fusce amet vulputate diam sit tempor. Sed blandit et at tristique magna cras tortor viverra nibh. Felis orci egestas tincidunt nunc senectus imperdiet.",
    sharedResults:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque mauris dui sit orci nam. Enim et nunc lacus purus adipiscing venenatis cras. Vel odio aliquet est integer molestie in feugiat consectetur pellentesque. Dolor consectetur nisl ut pellentesque sem orci mauris viverra in. Sollicitudin id ullamcorper enim purus eu massa erat nunc pellentesque.",
    heroTail:
      " We aligned stakeholders on scope, de-risked delivery milestones, and focused on adoption so outcomes stick after go-live.",
    gallery: [
      { src: "/images/about/hero-photo-0.jpg", alt: "Project environment" },
      { src: "/images/about/hero-photo-1.jpg", alt: "Field perspective" },
      { src: "/images/about/hero-photo-2.png", alt: "Program delivery" },
      { src: "/images/hero-background.jpg", alt: "Regional landscape" },
      { src: "/images/about/hero-photo-1.jpg", alt: "Operations overview" },
      { src: "/images/about/hero-photo-0.jpg", alt: "Stakeholder alignment" },
    ] as const,
  },
  contact: {
    heading: "Get In Touch with us",
    description:
      "Have a project in mind? Tell us about your goals—we\u2019ll help you shape the right approach.",
    buttonLabel: "Contact us",
  },
} as const;

export type ProjectDetail = {
  slug: string;
  title: string;
  heroDescription: string;
  heroImageSrc: string;
  heroImageAlt: string;
  whatWeDid: readonly string[];
  technologies: readonly string[];
  client: string;
  overview: string;
  challenges: string;
  results: string;
  gallery: readonly { src: string; alt: string }[];
};

const d = projectsContent.detail;

/** Long-form copy overrides per card; imagery and titles come from the grid card. */
const projectDetailExtras: Partial<
  Record<
    string,
    {
      heroDescription?: string;
      whatWeDid?: readonly string[];
      technologies?: readonly string[];
      client?: string;
      overview?: string;
      challenges?: string;
      results?: string;
      gallery?: readonly { src: string; alt: string }[];
    }
  >
> = {};

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  const card = projectsContent.grid.items.find((item) => item.id === slug);
  if (!card) return undefined;

  const extra = projectDetailExtras[slug] ?? {};

  return {
    slug,
    title: card.title,
    heroDescription:
      extra.heroDescription ?? `${card.description}${d.heroTail}`,
    heroImageSrc: card.imageSrc,
    heroImageAlt: card.imageAlt,
    whatWeDid: extra.whatWeDid ?? d.sharedWhatWeDid,
    technologies: extra.technologies ?? d.sharedTechnologies,
    client: extra.client ?? d.sharedClient,
    overview: extra.overview ?? d.sharedOverview,
    challenges: extra.challenges ?? d.sharedChallenges,
    results: extra.results ?? d.sharedResults,
    gallery: extra.gallery ?? d.gallery,
  };
}

export function getAllProjectDetailSlugs(): string[] {
  return projectsContent.grid.items.map((item) => item.id);
}
