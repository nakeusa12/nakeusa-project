import { MarqueeText } from "@components/atoms/MarqueeText";
import { ProjectCard } from "@components/molecules/ProjectCard";
import useGetValue from "@hooks/useGetValue";

export const LatestProject = () => {
  const posts = useGetValue("projects");
  if (posts.isLoading) {
    return <p>Fetching data...</p>;
  }
  const data = Object.values(posts.snapshot);
  let totalKey = Object.keys(data).length

  console.log(data);

  return (
    <section className="w-full h-full mt-40">
      <MarqueeText
        text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "}
        title={"LATEST WORKS"}
      />
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 space-y-20 md:space-y-40">
        {data.map((item, index) => {
          return(
            <ProjectCard key={index} item={item} index={index} totalKey={totalKey} />
          )
        })}
      </div>
    </section>
  );
};
