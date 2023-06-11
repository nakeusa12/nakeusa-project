import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectCard = ({ item, index }) => {
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
        className="flex flex-col-reverse w-full max-w-4xl gap-5 scale-100 card-project md:flex-row"
        ref={cardProject}
      >
        <Link href={item.url}>
          <a
            target=""
            className="relative w-full h-auto group cursor-none content-card-project"
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
                className={`w-full aspect-square md:aspect-video duration-700 ease-in-out relative ${
                  isHover ? "scale-105" : "scale-100"
                }`}
                ref={imgProject}
              >
                <Image
                  src={item.image}
                  alt="project-item"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
            <div
              className="absolute top-0 left-0 flex items-end invisible w-full h-full bg-white/50 dark:bg-black/50"
              ref={contentProject}
            >
              <div className="flex flex-col w-full p-5 h md:p-10">
                <h1 className="relative overflow-hidden text-5xl tracking-wide uppercase font-k2d text-main-dark dark:text-white">
                  <span
                    className="inline-block translate-y-full opacity-0"
                    ref={titleProject}
                  >
                    {item.name}
                  </span>
                </h1>
                <div className="relative flex items-center justify-between w-full mt-1 overflow-hidden">
                  <span
                    className="inline-block text-base tracking-wide translate-y-full opacity-0 font-k2d text-main-dark dark:text-white"
                    ref={categoryProject}
                  >
                    {item.category}
                  </span>
                  <span
                    className="inline-block text-2xl tracking-wide translate-y-full opacity-0 font-koulen text-main-dark dark:text-white"
                    ref={yearProject}
                  >
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          </a>
          </Link>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
          0{index + 1}/06
        </span>
      </article>
    </>
  );
};
