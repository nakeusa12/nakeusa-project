import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = () => {
  const [isHover, setIsHover] = useState(false);
  const cardProject = useRef(null);
  const containerProject = useRef(null);
  const categoryProject = useRef(null);
  const contentProject = useRef(null);
  const revealProject = useRef(null);
  const titleProject = useRef(null);
  const yearProject = useRef(null);
  const imgProject = useRef(null);
  const cardTL = useRef(null);

  const onMouseEnter = () => {
    cardTL.current.play();
    setIsHover(true);
  };
  const onMouseLeave = () => {
    cardTL.current.timeScale(1.5);
    cardTL.current.reverse();
    setIsHover(false);
  };

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardProject.current,
        start: "top +=900",
      },
    });
    tl.from(cardProject.current, { scale: 0, duration: 0.4 })
      .to(containerProject.current, { duration: 0.2, visibility: "visible" })
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
    cardTL.current = gsap
      .timeline({ paused: true, ease: Power2.easeInOut })
      .to(contentProject.current, { visibility: "visible", duration: 0.2 })
      .to(titleProject.current, {
        duration: 0.3,
        y: 0,
        opacity: 1,
      })
      .to([categoryProject.current, yearProject.current], {
        duration: 0.3,
        y: 0,
        stagger: 0.3,
        opacity: 1,
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
          className="relative group w-full h-auto cursor-none content-card-project"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div
            className="relative w-full h-full overflow-hidden"
            ref={containerProject}
          >
            <div
              className="absolute bg-gray-200 dark:bg-main-dark w-full h-full z-[1]"
              ref={revealProject}
            />
            <div
              className={`w-full aspect-square md:aspect-video duration-700 ease-in-out ${
                isHover ? "scale-105" : "scale-100"
              }`}
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
            className="absolute top-0 left-0 w-full h-full bg-white/50 dark:bg-black/50 flex items-end invisible"
            ref={contentProject}
          >
            <div className="w-full h flex flex-col p-5 md:p-10">
              <h1 className="font-k2d tracking-wide text-main-dark dark:text-white text-5xl uppercase relative overflow-hidden">
                <span
                  className="inline-block translate-y-full opacity-0"
                  ref={titleProject}
                >
                  BridgeZero
                </span>
              </h1>
              <div className="w-full flex justify-between items-center mt-1 relative overflow-hidden">
                <span
                  className="font-k2d tracking-wide text-base inline-block translate-y-full opacity-0 text-main-dark dark:text-white"
                  ref={categoryProject}
                >
                 Website UI UX Design
                </span>
                <span
                  className="font-koulen tracking-wide text-2xl inline-block translate-y-full opacity-0 text-main-dark dark:text-white"
                  ref={yearProject}
                >
                  2020
                </span>
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