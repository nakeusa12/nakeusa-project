import { Hero } from "@components/organisms/Hero";
import Layout from "@components/molecules/Layout";

import gsap from "gsap";
// import { Project } from "@components/partials/Project";
import { MarqueeText } from "@components/atoms/MarqueeText";
import { useEffect } from "react";
import { ButtonLink } from "@components/atoms/ButtonLink";
import { ProjectCard } from "@components/molecules/ProjectCard";
import { BlogCard } from "@components/molecules/BlogCard";
import { QuoteSection } from "@components/organisms/QuoteSection";
import { ServiceHome } from "@components/organisms/ServiceHome";

export default function Home() {
  const description =
    "Hey Everyone! I'm Saiful Nakeusa and I’m from Indonesia.I have been working as an Web Designer and Frontend Web Developer with more than 2 years of experience and still learning and exploring.";

  useEffect(() => {
    const serviceExplainWrap = document.querySelector(
      ".serviceExplain-wrapper"
    );
    const serviceExplain = document.querySelector(".serviceExplain");
    const techList = document.querySelectorAll(".tech-list");
    let serviceTL = new gsap.timeline({
      scrollTrigger: {
        trigger: serviceExplainWrap,
        start: "top bottom",
      },
    });

    serviceTL.from(serviceExplain, { y: 200, opacity: 0, duration: 0.7 });
    serviceTL.from(techList, { y: 200, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");
  }, []);

  return (
    <Layout titlePage="Home" metaDescription={description}>
      <Hero />
      <QuoteSection />
      <ServiceHome />
      <section className="w-full h-full mt-40">
        <MarqueeText
          text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "}
          title={"LATEST WORKS"}
        />
        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 space-y-20 md:space-y-40">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
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
    </Layout>
  );
}

