export const aboutContent = {
  hero: {
    label: "ABOUT US",
    heading: "We empower growth by Powering the Systems That Keep Nations Moving.",
    /** Photo collage slots — artboard 1236×611 (Figma); dot grid is `hero-dots.svg` */
    images: {
      center: "/images/about/hero-photo-0.jpg",
      left: "/images/about/hero-photo-2.png",
      right: "/images/about/hero-photo-1.jpg",
    },
    description:
      "We work at the core of critical infrastructure helping governments and institutions turn complex challenges into reliable, compliant systems that drive long-term growth and stability."
  },
  whatDefinesUs: {
    heading: "What Defines us",
    description:
      "What shapes our decisions, and inspire us to create meaningful impact for our partners and communities.",
    mission: {
      title: "Our Mission",
      description:
        "Sino Africa delivers mission critical regulated financial, identity, security, and mobility systems through disciplined execution, strict regulatory alignment, and full lifecycle accountability. We transform policy into operational reality, embed global technologies within local governance frameworks, and assume end-to-end responsibility to ensure continuity, stability, and long-term institutional trust.",
    },
    vision: {
      title: "Our Vision",
      description:
        "Strengthening Africa’s institutions by integrating and sustaining global technologies within local governance.",
    },
    values: {
      title: "Our Core Values",
      items: [
        "Execution Ownership",
        "Institutional Trust",
        "Regulatory Alignment",
        "Lifecycle Responsibility",
        "Strategic Discipline",
        "Operational Readiness",
      ],
    },
  },
  team: {
    heading: "Our Team",
    description:
      "A strong, disciplined team with vibrant energy, delivering end-to-end solutions with full lifecycle accountability. ",
    ceo: {
      name: "Simon Cowell",
      role: "CEO / Founder",
      image: "/images/about/team/ceo.png",
    },
    managers: [
      { name: "Amina Fikru", role: "Graphic Designer", image: "/images/about/team/manager-1.png" },
      { name: "Hawi Tesfaye", role: "Software Engineer", image: "/images/about/team/manager-2.png" },
      { name: "Solomon Dibaba", role: "Data Analyst", image: "/images/about/team/manager-3.png" },
    ],
    staff: [
      { name: "Marta T.", role: "Software Engineer", image: "/images/about/team/manager-1.png" },
      { name: "Abebe K.", role: "Product Manager", image: "/images/about/team/manager-2.png" },
      { name: "Hana D.", role: "UX/UI Designer", image: "/images/about/team/manager-3.png" },
      { name: "Solomon A.", role: "Data Analyst", image: "/images/about/team/manager-1.png" },
      { name: "Liya N.", role: "Marketing Specialist", image: "/images/about/team/manager-2.png" },
      { name: "Kebede A.", role: "Business Analyst", image: "/images/about/team/manager-3.png" },
      { name: "Meron T.", role: "Content Strategist", image: "/images/about/team/manager-1.png" },
      { name: "Tsehay A.", role: "Graphic Designer", image: "/images/about/team/manager-2.png" },
      { name: "Biruk M.", role: "System Administrator", image: "/images/about/team/manager-3.png" },
      { name: "Nardos E.", role: "Sales Executive", image: "/images/about/team/manager-1.png" },
    ],
  },
  contact: {
    heading: "Get In Touch with us",
    description:
      "Feel free to reach out! Whether you\u2019re looking for more details, have feedback, or just want to say hello, we\u2019re here to help.",
    buttonLabel: "Contact us",
  },
} as const;
