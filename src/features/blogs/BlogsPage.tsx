"use client";

import { BlogHero } from "./sections/BlogHero";
import { RecentBlogs } from "./sections/RecentBlogs";
import { AllBlogs } from "./sections/AllBlogs";

export function BlogsPage() {
  return (
    <div className="relative">
     <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] top-64 "
        style={{ backgroundImage: "url('/images/sino-symbol-tile.svg')", backgroundSize: "20px", backgroundRepeat: "repeat" }}
      />
      {/* Hero Section */}
      <BlogHero />

      {/* Most Recent Blogs Section */}
      <RecentBlogs />

      {/* All Blogs Section */}
      <AllBlogs />
    </div>
  );
}
