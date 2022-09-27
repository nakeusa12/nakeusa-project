import { useOnScreen } from "@hooks/useOnScreen";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const useArrayRef = () => {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
};

export const Project = () => {
  const projectContainer = useRef();
  const [projects, setProjectsRef] = useArrayRef();
  const [activeImage, setActiveImage] = useState(1);

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

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <div className="flex flex-nowrap h-screen w-[400%]" ref={projectContainer}>
       <div className="activeImageProject font-sen">
          <span>{activeImage}</span>
          <span>/</span>
          <span>{projectData.length}</span>
        </div>
      {projectData.map((card, index) => {
        return(
          <ProjectCard
            key={index}
            index={index}
            total={index + 1}
            refPro={setProjectsRef}
            value={card}
            title={card.title}
            img={card.src}
            category={card.category}
            updateActiveImage={handleUpdateActiveImage}
          />
        )
      })}
    </div>
  );
};

const ProjectCard = forwardRef(({ title, img, category, total, updateActiveImage, index}, refPro) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className="flex flex-col justify-center items-center relative w-full h-full"
      ref={refPro}
    >
      <div className="w-full md:w-96 h-[600px] bg-teal-50">
        <img src={img} className="w-full h-full object-contain" alt="" />
        {/* <Image src={img} width="100%" height="100%" layout="responsive" objectFit="contain" /> */}
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