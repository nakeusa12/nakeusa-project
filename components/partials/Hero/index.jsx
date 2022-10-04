import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap, { Power2 } from "gsap";
import Link from "next/link";
import { ButtonLink } from "@components/basics/ButtonLink";
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerImg = useRef(null);
  const revealImg = useRef(null);
  const image = useRef(null);

  console.log(image);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(containerImg.current, { duration: 0.5, visibility: "visible" })
      .to(revealImg.current, {
        duration: 0.7,
        height: "0%",
        ease: Power2.easeInOut,
      })
      .from(image.current, {
        duration: 1,
        scale: 1.5,
        ease: Power2.easeInOut,
        delay: -0.8,
        scrollTrigger: {
          trigger: containerImg.current,
          scrub: 1,
          start: "top bottom",
        },
      });
  }, []);

  return (
    <section className="relative flex flex-row min-h-screen w-full">
      <div className="relative max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto flex flex-col justify-center px-6 md:px-5 z-10">
        <div className="w-full block">
          <div className="inline-flex items-center dark:bg-main-blue bg-main-red py-2 px-5 xs:text-base sm:text-lg md:text-xl text-white font-medium uppercase tracking-[0.15rem]">
            HI EVERYONE <span className="wave text-xl md:text-2xl">👋</span>
          </div>
        </div>
        <div className="mt-5 md:mt-10 w-full max-w-4xl">
          <h1 className="font-bold font-koulen text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-white text-main-dark leading-[130%] tracking-wider md:tracking-wide">
            Being Creative In Building A Unique and Quality WebApps
          </h1>
        </div>
        <div className="mt-5 md:mt-10 flex w-full items-center flex-wrap gap-x-3 md:gap-x-5">
          <p className="font-semibold text-base sm:text-lg text-main-dark dark:text-white">
            {" "}
            WEB DESIGNER{" "}
          </p>
          <span className="dark:text-main-blue text-main-red text-3xl">
            &#9656;
          </span>
          <p className="font-semibold text-base sm:text-lg text-main-dark dark:text-white">
            {" "}
            FRONTEND DEVELOPER{" "}
          </p>
          <span className="dark:text-main-blue text-main-red text-3xl">
            &#9656;
          </span>
          <p className="font-semibold text-base sm:text-lg text-main-dark dark:text-white">
            {" "}
            CONTENT CREATOR{" "}
          </p>
        </div>
        <div className="mt-10">
          <ButtonLink href={"/"} value={"Let's Explore"} />
        </div>
      </div>

      {/* <img src="/assets/images/photo.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 1, transition: 'opacity 500ms ease 0s'}} /> */}
      <div className="absolute right-0 top-0 md:top-[30%] z-0 inline-block">
        <div
          className="relative overflow-hidden opacity-20 w-[850px]"
          ref={containerImg}
        >
          <div
            className="absolute dark:bg-black bg-white w-full h-full z-[1]"
            ref={revealImg}
          />
          <div className="aspect-square w-full" ref={image}>
            <Image
              src="/assets/images/photo.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
