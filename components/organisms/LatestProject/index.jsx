import { MarqueeText } from "@components/atoms/MarqueeText";
import { ProjectCard } from "@components/molecules/ProjectCard";

import { projects } from "json/data.json";

export const LatestProject = () => {
  return (
    <section className="w-full h-full mt-40">
      <MarqueeText
        text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "}
        title={"LATEST WORKS"}
      />
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 space-y-20 md:space-y-40">
        {projects
          // .filter((project) => project.latest)
          .map((project, index) => (
            <ProjectCard item={project} key={index} index={index} />
          ))}
      </div>
    </section>
  );
};
