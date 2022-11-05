import gsap from "gsap";
import { useEffect, useRef } from "react";

export const MarqueeText = ({ text, title }) => {
  // const marqueeText = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to(".marquee", { duration: 10, x: "-50%", ease: "none" });

    const marquee = document.querySelectorAll(".marquee");

    for (let index = 0; index < marquee.length; index++) {
      marquee[index].addEventListener("mouseover", () => {
        gsap.to(tl, {
          timeScale: 0.1,
          duration: 1,
        });
      });
  
      marquee[index].addEventListener("mouseout", () => {
        gsap.to(tl, {
          timeScale: 1,
          duration: 1,
        });
      });
    }
   
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="marquee text-main-red dark:text-main-blue font-righteous text-9xl md:text-[12rem] leading-[14vw]">
        <span>{text}&nbsp;</span>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="dark:bg-white bg-main-dark py-4 px-7 text-sm md:text-base uppercase dark:text-main-dark font-medium dark:font-medium text-white tracking-[0.2em]">
          {title}
        </span>
      </div>
    </div>
  );
};
