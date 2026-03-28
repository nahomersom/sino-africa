import React from "react";
import { BlogHero } from "./sections/BlogHero";
import { RecentBlogs } from "./sections/RecentBlogs";
import { AllBlogs } from "./sections/AllBlogs";

export function BlogsPage() {
  return (
    <>
      {/* Hero Section */}
      <BlogHero />
      
      {/* Most Recent Blogs Section */}
      <RecentBlogs />

      {/* All Blogs Section */}
      <AllBlogs />
    </>
  );
}
