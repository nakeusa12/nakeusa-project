import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { forwardRef, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useArrayRef = () => {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
};

export const Project = () => {
  const projectContainer = useRef();
  const [projects, setProjectsRef] = useArrayRef();

  useEffect(() => {
    const totalProjects = projects.current.length;
    console.log(totalProjects);

    gsap.to(projects.current, {
      xPercent: -100 * (totalProjects - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectContainer.current,
        markers: true,
        pin: true,
        scrub: 1,
        snap: 1 / (totalProjects - 1),
        end: () => "+=" + projectContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="flex flex-nowrap h-screen w-[400%]" ref={projectContainer}>
      {projectData.map((card, index) => {
        return(
          <ProjectCard
            key={index}
            total={index + 1}
            ref={setProjectsRef}
            value={card}
            title={card.title}
            img={card.src}
            category={card.category}
          />
        )
      })}
    </div>
  );
};

const ProjectCard = forwardRef(({ title, img, category, total }, ref) => {
  return (
    <div
      className="flex flex-col justify-center items-center relative w-full h-full bg-red-200"
      ref={ref}
    >
      <div className="inline-flex items-center font-sen font-bold gap-x-2 text-main-blue text-xl">
        {total} <div className="w-40 h-1 bg-main-blue"></div>
      </div>
      <div className="w-full md:w-96 h-40">
        <Image src={img} width="100%" height="100%" layout="responsive" objectFit="contain" />
      </div>
      <div className="mt-10 space-y-4">
        <h3 className="font-bold text-black text-4xl font-sen">{title}</h3>
        <p className="font-sen text-xl text-main-gray">2020 - {category}</p>
      </div>
    </div>
  );
});

const projectData = [
  {
    src: "/assets/images/images.png",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/assets/images/images.png",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/assets/images/images.png",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/assets/images/images.png",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];