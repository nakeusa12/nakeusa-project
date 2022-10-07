import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = () => {
  const [isHovering, setIsHovered] = useState(false);
  const cardProject = useRef(null);
  const containerProject = useRef(null);
  const revealProject = useRef(null);
  const imgProject = useRef(null);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardProject.current,
        markers: true,
        start: "top +=500",
      },
    });
    tl.from(cardProject.current, { scale: 0 })
      .to(containerProject.current, { duration: 0.5, visibility: "visible" })
      .to(revealProject.current, {
        duration: 0.5,
        width: "0%",
        ease: Power2.easeInOut,
      })
      .from(imgProject.current, {
        duration: 0.7,
        ease: Power2.easeInOut,
        delay: -1,
      });
  }, []);

  return (
    <article
      className="card-project flex max-w-4xl w-full gap-5 scale-100 flex-col-reverse md:flex-row"
      ref={cardProject}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href="#" className="relative group w-full h-auto">
        <div className="relative w-full h-full overflow-hidden" ref={containerProject}>
          <div
            className="absolute bg-main-dark w-full h-full z-[1]"
            ref={revealProject}
          />
          <div
            className={`w-full aspect-video duration-500 ease-in-out ${isHovering ? 'scale-105' : 'scale-100'}`}
            ref={imgProject}
          >
            <Image
              src="/assets/images/project-img.png"
              alt="project-item"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/50 flex items-end  ${isHovering ? 'visible' : 'invisible'}`}>
          <div className="w-full h flex flex-col p-5 md:p-10">
            <h1 className="font-poppins tracking-wide font-koulen text-main-dark dark:text-white text-5xl uppercase">
              BridgeZero
            </h1>
            <div className="w-full flex justify-between items-center mt-1">
              <span className="font-k2d tracking-wide text-base">
                Website Designer
              </span>
              <span className="font-koulen tracking-wide text-2xl">2020</span>
            </div>
          </div>
        </div>
      </a>
      <span className="text-base sm:text-lg md:text-xl lg:text-2xl">01/06</span>
    </article>
  );
};

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
