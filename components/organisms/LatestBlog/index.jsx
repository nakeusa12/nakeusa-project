import { MarqueeText } from "@components/atoms/MarqueeText";
import { BlogCard } from "@components/molecules/BlogCard";
import React from "react";

export const LatestBlog = () => {
  return (
    <section className="w-full h-full py-40">
      <MarqueeText
        text={"BLOGS • BLOGS • BLOGS • BLOGS • "}
        title={"LATEST NEWS"}
      />

      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};
