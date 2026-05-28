import type { VerticalDetailContent, VerticalDetailSlug } from "./types";

/** Unsplash image URL (id includes `photo-` prefix). */
const u = (photoId: string, w = 800, h = 800) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const verticalDetailBySlug: Record<VerticalDetailSlug, VerticalDetailContent> = {
  "act-it": {
    slug: "act-it",
    name: "ACT IT",
    shortLabel: "ACT IT",
    heroDescription:
      "End-to-end IT services and digital transformation—from infrastructure and cloud to support that keeps teams productive. We align technology with how your institution actually works.",
    heroImageAlt: "ACT IT vertical hero",
    institutionalTitle: "Institutional Capacity",
    institutionalParagraphs: [
      "ACT IT is built to support large programmes where reliability, governance, and clear ownership matter. We combine delivery discipline with practical change management so adoption sticks.",
      "From architecture and integration to run-state support, we help you modernise without losing control of cost, security, or service levels.",
    ],
    focusIntroTitle: "Core Operational Areas",
    focusIntroSubtitle:
      "Where we concentrate effort—so outcomes are measurable and your teams stay focused on mission-critical work.",
    focusRows: [
      {
        variant: "grid-text",
        title: "Regulatory Alignment & Distribution Architecture",
        body: "We design and implement IT landscapes that respect sector rules, data residency expectations, and how services are delivered across branches, partners, and channels.",
        gridImages: [
          u("photo-1448375240586-882707d88b76", 400, 400),
          u("photo-1511497584788-876760111969", 400, 400),
          u("photo-1464822759023-fed622ff2c3b", 400, 400),
          u("photo-1506905925346-21bda4d32df4", 400, 400),
        ],
      },
      {
        variant: "text-dual",
        title: "Cash Control & Collections Governance",
        body: "Strong controls around revenue operations reduce leakage and improve audit readiness. We help structure processes, tooling, and reporting so finance and operations share one source of truth.",
        images: [u("photo-1416879595882-3373a0480b5b", 480, 720), u("photo-1497366216548-37526070297c", 480, 720)],
      },
      {
        variant: "wide-text",
        title: "Lifecycle Continuity & Institutional Integration",
        body: "Systems are only as good as how they evolve. We plan roadmaps, handovers, and integration points so upgrades and new vendors do not destabilise day-to-day service.",
        images: [u("photo-1506905925346-21bda4d32df4", 1200, 640)],
      },
    ],
    partnersTitle: "Ecosystem Partners",
    partnersSubtitle:"The partners we work with",
    partners: [
      {
        title: "Banks & Financial Institutions",
        body: "Joint delivery models for core systems, channels, and compliance-heavy change programmes.",
      },
      {
        title: "Telecom Operators",
        body: "Connectivity, identity, and service platforms that underpin national-scale digital services.",
      },
      {
        title: "Technology Providers",
        body: "Certified teams and integration patterns across cloud, security, and enterprise software stacks.",
      },
    ],
    contactSubtitle:
      "Tell us about your environment and goals—we will route your message to the right practice lead.",
    theme: {
      focusHeadingColor: "#3FAF7E",
      heroGradient: { baseColor: "#3FAF7E", accentColor: "#328B64" },
      heroImageSrc: "/images/our-verticals/green-hero.png",
      focusPatternSrc: "/images/our-verticals/green-pattern.png",
    },
  },
  "sino-sec": {
    slug: "sino-sec",
    name: "Sino Sec.",
    shortLabel: "Sino Sec",
    heroDescription:
      "Security consulting, risk reduction, and resilient operations so your organisation can operate with confidence—across identity, infrastructure, and government-scale platforms.",
    heroImageAlt: "Sino Sec. vertical hero",
    institutionalTitle: "Institutional Capacity",
    institutionalParagraphs: [
      "Sino Sec. supports public and private institutions that cannot afford ambiguity in security posture. We translate policy into architecture, controls, and operating rhythms your teams can run.",
      "Our work spans advisory, design, and implementation support—with emphasis on traceability, incident readiness, and long-term maintainability.",
    ],
    focusIntroTitle: "Core Operational Areas",
    focusIntroSubtitle: "Core pillars we use to structure programmes from discovery through steady-state operations.",
    focusRows: [
      {
        variant: "grid-text",
        title: "Identity Infrastructure",
        body: "Foundational identity and access patterns—registration, authentication, federation, and lifecycle—designed for high-assurance environments.",
        gridImages: [
          u("photo-1500530855697-b586d89ba3ee", 400, 400),
          u("photo-1470071459604-3b5ec3a7fe05", 400, 400),
          u("photo-1469474968028-56623f02e42e", 400, 400),
          u("photo-1426604966848-d7adac402bff", 400, 400),
        ],
      },
      {
        variant: "text-dual",
        title: "Security Infrastructure",
        body: "Network segmentation, monitoring, and protective controls aligned to your threat model—implemented with operational clarity, not shelf-ware.",
        images: [u("photo-1518531933037-91b2f5f229cc", 480, 720), u("photo-1557683316-973673baf926", 480, 720)],
      },
      {
        variant: "wide-text",
        title: "Government Technology Platforms",
        body: "National and enterprise platforms that must scale, interoperate, and stay governable. We help align vendors, data models, and service interfaces to institutional mandates.",
        images: [u("photo-1504384308090-c894fdcc538d", 1200, 640)],
      },
    ],
    partnersTitle: "Operating Ecosystem",
    partnersSubtitle: "Trusted collaboration across the institutions and vendors that shape secure digital states.",
    partners: [
      {
        title: "Government & Sovereign Institutions",
        body: "Programmes where sovereignty, procurement rules, and citizen trust are non-negotiable.",
      },
      {
        title: "Critical Infrastructure Operators",
        body: "Resilience planning, monitoring maturity, and response playbooks for essential services.",
      },
      {
        title: "Security & Technology Vendors",
        body: "Integration and assurance so tools work together as a coherent control fabric.",
      },
    ],
    contactSubtitle:
      "Share your context in confidence—we will respond with a clear next step and the right subject-matter contact.",
    theme: {
      focusHeadingColor: "#4A5568",
      heroGradient: { baseColor: "#4A5568", accentColor: "#2D3748" },
      heroImageSrc: "/images/our-verticals/black-hero.png",
      focusPatternSrc: "/images/our-verticals/black-pattern.png",
    },
  },
  mobilitex: {
    slug: "mobilitex",
    name: "Mobilitex",
    shortLabel: "Mobilitex",
    heroDescription:
      "Mobility and logistics solutions that connect assets, routes, and people—combining asset management, technical advisory, and project delivery for operators who need reliability at scale.",
    heroImageAlt: "Mobilitex vertical hero",
    institutionalTitle: "Institutional Capacity",
    institutionalParagraphs: [
      "Mobilitex supports operators and public authorities modernising transport and logistics networks. We bring programme structure, vendor-neutral technical judgement, and a focus on safe, capital-efficient rollouts.",
      "Whether you are integrating OEM systems, designing SLAs, or standing up control towers, we align delivery to operational reality—not slide decks.",
    ],
    focusIntroTitle: "Core Operational Areas",
    focusIntroSubtitle: "How we help teams move from strategy to working mobility infrastructure.",
    focusRows: [
      {
        variant: "grid-text",
        title: "Regulatory Alignment & Safety Compliance",
        body: "Mapping rules, standards, and assurance steps so programmes stay auditable and safe as they scale across regions and modes.",
        gridImages: [
          u("photo-1507525428034-b723cf961d3e", 400, 400),
          u("photo-1419242902214-272b3f66ee7a", 400, 400),
          u("photo-1439404516859-70d78a826cc9", 400, 400),
          u("photo-1441974231531-c6227db76b6e", 400, 400),
        ],
      },
      {
        variant: "text-dual",
        title: "OEM Integration & SLA Design",
        body: "Clear interfaces between fleets, telematics, and back-office systems—with service levels that operations can actually measure and enforce.",
        images: [u("photo-1466692476869-aef1dfb1e735", 480, 720), u("photo-1504198458649-3128b932f49e", 480, 720)],
      },
      {
        variant: "wide-text",
        title: "Capital-Light Structuring & Operational Oversight",
        body: "Phasing, financing touchpoints, and governance so capital goes where it creates mobility outcomes—not duplicate platforms.",
        images: [u("photo-1506905925346-21bda4d32df4", 1200, 640)],
      },
    ],
    partnersTitle: "Operating Ecosystem",
    partnersSubtitle: "Working across the stakeholders who keep cities and corridors moving.",
    partners: [
      {
        title: "Cities & Transport Authorities",
        body: "Planning, procurement support, and delivery governance for public mobility programmes.",
      },
      {
        title: "Fleet & Logistics Operators",
        body: "Asset life-cycle, maintenance integration, and network performance improvements.",
      },
      {
        title: "Technology & OEM Ecosystems",
        body: "Neutral coordination across suppliers so integrations ship on time and stay supportable.",
      },
    ],
    contactSubtitle:
      "Reach out with your corridor, fleet, or programme context—we will connect you with a mobililty lead.",
    theme: {
      focusHeadingColor: "#2F6FED",
      heroGradient: { baseColor: "#2F6FED", accentColor: "#1A4FC4" },
      heroImageSrc: "/images/our-verticals/blue-hero.png",
      focusPatternSrc: "/images/our-verticals/blue-pattern.png",
    },
  },
};

export const verticalDetailSlugs = Object.keys(verticalDetailBySlug) as VerticalDetailSlug[];
