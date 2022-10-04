import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <a href="#" className="card-project">
      <div
        className="relative group w-full h-auto"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="w-full aspect-square">
          <Image
            src="/assets/images/images.png"
            alt="project-item"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
        <div className="pt-5 space-y-3">
          <div className="flex items-center gap-x-3 dark:text-white text-main-dark">
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
          <h3 className="font-k2d font-semibold text-main-dark dark:text-white text-3xl">
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