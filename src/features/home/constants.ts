export const homeContent = {
  about: {
    heading: "Who we are",
    bodyOne:
   "Sino Africa is an institutional infrastructure platform. We design, deploy, and operate mission-critical systems that governments and institutions cannot afford to get wrong. We are not a trading company. We do not distribute consumer technology. We own execution risk end-to-end from system integration and regulatory compliance to long-term lifecycle accountability." , 
      bodyTwo:"We operate across three specialized verticals: financial access infrastructure (ACT IT), identity and security systems (SINOSEC), and regulated mobility platforms (MOBILITEX). Every mandate is multi year, institution-grade, and delivered with disciplined execution. If we do not own the risk, we do not participate.",
  },
  whyChooseUs: {
    label: "What makes us different",
    heading: "Our Partners choose us because ...",
    description:
      "They choose a partner who owns execution end-to-end, ensures compliance, and delivers systems that perform reliably over time.",
    statements: [
      {
        icon: "/images/icon-01.svg",
        title: "End-to-End Ownership",
        description:
          "We take full responsibility from design and integration to compliance and long-term performance. No gaps, no handoffs.",
      },
      {
        icon: "/images/icon-02.svg",
        title: "Built for Critical Systems",
        description:
          "We operate where failure isn’t an option delivering infrastructure that institutions depend on every day.",
      },
      {
        icon: "/images/icon-03.svg",
        title: "Long-Term Commitment",
        description:
          "We don’t just deploy and leave. We support, maintain, and evolve every system we build over time.",
      },
      {
        icon: "/images/icon-04.svg",
        title: "Disciplined Execution",
        description:
          "We focus only on what we do best delivering within defined domains with precision, structure, and consistency.",
      },
    ],
  },
  cta: {
    heading: "Ready to launch your next project?",
    text: "SINO Africa got you covered, Contact us and we’ll reach out to you",
    buttonLabel: "Get Started With us",
  },
  whySinoAfrica: {
    heading: "Why Sino Africa",
    description:
      "Sino Africa exists to deliver infrastructure that works consistently, securely, and at scale in environments where precision matters most.",
    image: "/images/why-sino-africa.svg",
    steps: [
      {
        number: "1",
        title: "Proven in Complex Environments",
        description:
          "We operate in highly regulated, high-stakes sectors where coordination, compliance, and precision are essential.",
      },
      {
        number: "2",
        title: "Seamless System Integration",
        description:
          "We bring together global technologies and local systems into one cohesive, fully functional infrastructure.",
      },
      {
        number: "3",
        title: "Governance-First Approach",
        description:
          "Every solution is built within clear regulatory frameworks, ensuring stability, transparency, and trust.",
      },
    ],
  },
  verticals: {
    label: "Our Verticals",
    description:
      "We design and integrate financial access infrastructure\u2014transaction systems, digital identity integration, and regulated distribution networks\u2014for banks, telcos, and institutions.",
    items: [
      {
        name: "ACT IT",
        subtitle: "Software Development",
      },
      {
        name: "SINO SEC",
        subtitle: "Security Provider",
      },
      {
        name: "MOBILITEX",
        subtitle: "Urban Mobility",
      },
    ],
  },
  partners: {
    heading: "Our Partners",
    description:
      "We collaborate with leading institutions and global technology partners to deliver reliable, large-scale infrastructure across Africa.",
    logos: [
      { src: "/images/partners/markless.svg", alt: "Markless", width: 146, height: 24 },
      { src: "/images/partners/coworks.svg", alt: "Coworks", width: 155, height: 31 },
      { src: "/images/partners/greener.svg", alt: "Greener", width: 154, height: 30 },
      { src: "/images/partners/saastoday.svg", alt: "SaasToday", width: 97, height: 35 },
      { src: "/images/partners/dorfus.svg", alt: "Dorfus", width: 105, height: 28 },
      { src: "/images/partners/askimat.svg", alt: "Askimat", width: 115, height: 31 },
    ],
  },
  contact: {
    heading: "Get In Touch with us",
    description:
      "Feel free to reach out! Whether you\u2019re looking for more details, have feedback, or just want to say hello, we\u2019re here to help.",
    buttonLabel: "Contact us",
  },
} as const;
