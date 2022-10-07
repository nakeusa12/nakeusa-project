import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = () => {
  const cardProject = useRef(null);
  const containerProject = useRef(null);
  const contentProject = useRef(null);
  const revealProject = useRef(null);
  const imgProject = useRef(null);
  const cardTL = useRef(null);


  const onMouseEnter = () => {
    cardTL.current.play();
  };
  const onMouseLeave = () => {
    cardTL.current.timeScale(2);
    cardTL.current.reverse();
  };

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardProject.current,
        // markers: true,
        start: "top +=650",
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

  useEffect(() => {
    let title = new SplitType(".titleProject")
    let titleProject = document.querySelectorAll(".titleProject .char")
    let categoryProject = document.querySelector(".categoryProject")
    let yearProject = document.querySelector(".yearProject")
    console.log(titleProject);

    cardTL.current = gsap
      .timeline({ paused: true, ease: Power2.easeInOut })
      .to(imgProject.current, {
        scale: 1.05,
        duration: 0.2,
      })
      .to(contentProject.current, { visibility: "visible", duration: 0.2 })
      .to(titleProject, {
        duration: 0.1,
        y: 0,
        stagger: 0.1
      }, "-=1")
      .to([categoryProject, yearProject], {
        duration: 0.3,
        y: 0,
        stagger: 0.5,
        opacity: 1
      });

  }, []);

  return (
    <>
      <article
        className="card-project flex max-w-4xl w-full gap-5 scale-100 flex-col-reverse md:flex-row"
        ref={cardProject}
      >
        <a
          href="#"
          className="relative group w-full h-auto cursor-none"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="relative w-full h-full overflow-hidden"
            ref={containerProject}
          >
            <div
              className="absolute bg-main-dark w-full h-full z-[1]"
              ref={revealProject}
            />
            <div
              className={`w-full aspect-square md:aspect-video duration-500 ease-in-out`}
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
          <div
            className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-end content-card-project invisible"
            ref={contentProject}
          >
            <div className="w-full h flex flex-col p-5 md:p-10">
              <h1 className="font-poppins tracking-wide font-koulen text-main-dark dark:text-white text-5xl uppercase titleProject">
                BrigeZero
              </h1>
              <div className="w-full flex justify-between items-center mt-1 relative overflow-hidden">
                <span className="font-k2d tracking-wide text-base inline-block translate-y-full categoryProject opacity-0">
                  Website Designer
                </span>
                <span className="font-koulen tracking-wide text-2xl inline-block translate-y-full yearProject  opacity-0">2020</span>
              </div>
            </div>
          </div>
        </a>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
          01/06
        </span>
      </article>
    </>
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
