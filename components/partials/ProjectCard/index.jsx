import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

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
    tl.to(containerProject.current, { duration: 0.5, visibility: "visible" })
      .to(revealProject.current, {
        duration: 0.5,
        height: "0%",
        ease: Power2.easeInOut,
      })
      .from(imgProject.current, {
        duration: 0.7,
        ease: Power2.easeInOut,
        delay: -1,
      })
  }, []);

  return (
    <a href="#" className="card-project" ref={cardProject}>
      <div className="relative group w-full h-auto" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {/* <div className="absolute z-[2] -top-2 left-0 overflow-hidden">
          <span className="font-koulen block text-main-red text-8xl font-extrabold tracking-wider translate-y-full opacity-0" ref={splitText}>
            02
          </span>
          <span
            className="w-full h-0.5 invisible block bg-main-red"
            ref={line}
          ></span>
        </div> */}
        <div className="relative w-full h-full" ref={containerProject}>
          <div
            className="absolute dark:bg-black bg-white w-full h-full z-[1]"
            ref={revealProject}
          />
          <div className={`w-full aspect-square duration-500 ease-in-out ${isHovering && "scale-95 opacity-70"}`} ref={imgProject}>
            <Image
              src="/assets/images/images.png"
              alt="project-item"
              layout="fill"
            />
          </div>
        </div>
        <div className="pt-5 space-y-3">
          <div className={`flex items-center gap-x-3 dark:text-white text-main-dark`}>
            <span className="font-koulen tracking-wide text-lg">
              Website Designer - 2020
            </span>
            <span className="w-5 h-5 rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                />
              </svg>
            </span>
          </div>
          <h3 className={`font-k2d font-semibold text-main-dark dark:text-white text-3xl duration-500 ease-in-out`}>
            BridgeZero - Website for work and visit visas
          </h3>
        </div>
      </div>
    </a>
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