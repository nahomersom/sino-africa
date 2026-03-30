"use client";

import { ScrollReveal } from "@/src/components/ui/scroll-reveal";
import { BlogHero } from "./sections/BlogHero";
import { RecentBlogs } from "./sections/RecentBlogs";
import { AllBlogs } from "./sections/AllBlogs";

export function BlogsPage() {
  return (
    <>
      {/* Hero Section */}
      <BlogHero />

      {/* Most Recent Blogs Section */}
      <ScrollReveal>
        <RecentBlogs />
      </ScrollReveal>

      {/* All Blogs Section */}
      <ScrollReveal>
        <AllBlogs />
      </ScrollReveal>
    </>
  );
}
