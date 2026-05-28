import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/our-verticals/sino-sec",
        destination: "/our-verticals/sinosec",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;