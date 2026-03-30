export const aboutContent = {
  hero: {
    label: "ABOUT US",
    heading: "We empower growth by connecting global markets and unlocking new opportunities.",
    /** Photo collage slots — artboard 1236×611 (Figma); dot grid is `hero-dots.svg` */
    images: {
      center: "/images/about/hero-photo-0.jpg",
      left: "/images/about/hero-photo-2.png",
      right: "/images/about/hero-photo-1.jpg",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc euismod consectetur arcu nunc etiam lobortis montes enim. Ut risus neque lectus donec id pretium orci platea habitant. Sed placerat varius id curabitur ut arcu. Vitae congue.",
  },
  whatDefinesUs: {
    heading: "What Defines us",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit eget mauris sed diam urna. Integer massa tortor at rutrum quis lobortis a. Condimentum nunc.",
    mission: {
      title: "Our Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus et velit blandit mattis volutpat semper. Tristique tellus purus.",
    },
    vision: {
      title: "Our Vision",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus et velit blandit mattis volutpat semper. Tristique tellus purus.",
    },
    values: {
      title: "Our Core Values",
      items: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
    },
  },
  team: {
    heading: "Our Team",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit eget mauris sed diam urna. Integer massa tortor at rutrum quis lobortis a. Condimentum nunc.",
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
