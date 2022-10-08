import { Hero } from "@components/partials/Hero";
import Layout from "@components/partials/Layout";
import { BsTriangleFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from "react-icons/fa";
import gsap from "gsap";
// import { Project } from "@components/partials/Project";
import { QuoteOfTheDay } from "@components/partials/QuoteOfTheDay";
import { MarqueeText } from "@components/basics/MarqueeText";
import { useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@components/basics/ButtonLink";
import Link from "next/link";
import { ProjectCard } from "@components/partials/ProjectCard";

export default function Home() {
  const description =
    "Hey Everyone! I'm Saiful Nakeusa and I’m from Indonesia.I have been working as an Web Designer and Frontend Web Developer with more than 2 years of experience and still learning and exploring.";

  return (
    <Layout titlePage="Home" metaDescription={description}>
      <Hero />
      <section className="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto px-6 md:px-5 z-10 relative mt-40 md:mt-0">
        <QuoteOfTheDay />
      </section>
      <section className="w-full h-full">
        <MarqueeText
          text={"SERVICES • SERVICES • SERVICES • SERVICES • "}
          title={"WHAT CAN I DO"}
        />

        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="w-full space-y-10">
            <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal text-main-dark dark:text-white">
              Starting from UI Design as a static and dynamic page, animated
              interaction becomes an attraction for users. WebApps that can be
              accessed when offline on mobile.
            </p>
            <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal text-main-dark dark:text-white">
              I advise you on what improvements to make to your site, while
              staying within the "custom made" vision. According to your
              philosophy and goals.
            </p>
            <ButtonLink href={"/"} value={"Learn More"} />
          </div>
          <div className="w-full gap-x-20 xl:gap-x-40 gap-y-10 flex sm:flex-row flex-col">
            <div>
              <h3 className="text-main-dark dark:text-white uppercase font-poppins font-bold text-lg tracking-wider">
                TECH STACK
              </h3>
              <ul className="text-main-dark dark:text-white space-y-4 font-k2d mt-5 text-base">
                <li>HTML / CSS / Javascript</li>
                <li>React / Next JS</li>
                <li>Svelte / SvelteKit JS</li>
                <li>Alphine JS</li>
                <li>Tailwind CSS</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div>
              <h3 className="text-main-dark dark:text-white uppercase font-poppins font-bold text-lg tracking-wider">
                ANIME STACK
              </h3>
              <ul className="text-main-dark dark:text-white space-y-4 font-k2d mt-5 text-base">
                <li>Framer Motion</li>
                <li>GSAP</li>
                <li>Lottie JS</li>
                <li>ScrollReveal JS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <MarqueeText
          text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "}
          title={"LATEST WORKS"}
        />
        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 space-y-20 md:space-y-40">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        {/* <div className="flex justify-center w-full pt-10">
          <ButtonLink href={"/"} value={"View All Projects"} />
        </div> */}
      </section>
      <section className="w-full h-full py-40">
        <MarqueeText
          text={"BLOGS • BLOGS • BLOGS • BLOGS • "}
          title={"LATEST NEWS"}
        />

        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="relative cursor-pointer rounded border-2 dark:border-main-dark border-gray-200 p-10 group">
            <span className="text-sm text-main-dark/70 dark:text-white/70">
              08 Oct, 2022 &#9679; 4 minutes ago
            </span>
            <div className="w-full aspect-auto my-5 group-hover:scale-105 duration-500 ease-in-out">
              <Image
                src="/assets/images/img-travelling.png"
                alt="post"
                layout="responsive"
                width={100}
                height={40}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className="flex-col flex justify-between gap-y-10">
              <div className="w-full space-y-3 relative">
                <h3 className="text-main-dark dark:text-white text-xl font-semibold font-k2d">
                  Islands in the archipelago with very beautiful views
                </h3>
                <p className="text-sm text-main-dark/70 dark:text-white/70 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
              <div className="w-full text-left">
                <a href="#" className="inline-flex items-center ">
                  <span className="w-0 h-[3px] group-hover:w-16  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
                  <span className="relative mx-2 text-main-dark dark:text-white">Read More</span>
                  <span className="w-16 h-[3px] group-hover:w-0  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative cursor-pointer rounded border-2 dark:border-main-dark border-gray-200 p-10 group">
            <span className="text-sm text-main-dark/70 dark:text-white/70">
              08 Oct, 2022 &#9679; 4 minutes ago
            </span>
            <div className="w-full aspect-auto my-5 group-hover:scale-105 duration-500 ease-in-out">
              <Image
                src="/assets/images/img-travelling.png"
                alt="post"
                layout="responsive"
                width={100}
                height={40}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className="flex-col flex justify-between gap-y-10">
              <div className="w-full space-y-3 relative">
                <h3 className="text-main-dark dark:text-white text-xl font-semibold font-k2d">
                  Islands in the archipelago with very beautiful views
                </h3>
                <p className="text-sm text-main-dark/70 dark:text-white/70 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
              <div className="w-full text-left">
                <a href="#" className="inline-flex items-center ">
                  <span className="w-0 h-[3px] group-hover:w-16  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
                  <span className="relative mx-2">Read More</span>
                  <span className="w-16 h-[3px] group-hover:w-0  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative cursor-pointer rounded border-2 dark:border-main-dark border-gray-200 p-10 group">
            <span className="text-sm text-main-dark/70 dark:text-white/70">
              08 Oct, 2022 &#9679; 4 minutes ago
            </span>
            <div className="w-full aspect-auto my-5 group-hover:scale-105 duration-500 ease-in-out">
              <Image
                src="/assets/images/img-travelling.png"
                alt="post"
                layout="responsive"
                width={100}
                height={40}
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </div>
            <div className="flex-col flex justify-between gap-y-10">
              <div className="w-full space-y-3 relative">
                <h3 className="text-main-dark dark:text-white text-xl font-semibold font-k2d">
                  Islands in the archipelago with very beautiful views
                </h3>
                <p className="text-sm text-main-dark/70 dark:text-white/70 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
              <div className="w-full text-left">
                <a href="#" className="inline-flex items-center ">
                  <span className="w-0 h-[3px] group-hover:w-16  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
                  <span className="relative mx-2">Read More</span>
                  <span className="w-16 h-[3px] group-hover:w-0  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full z-10 relative pt-16 pb-10">
        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 grid md:grid-cols-2 gap-x-10">
          <div className="w-full flex flex-col gap-y-20">
            <span className="text-2xl sm:text-3xl lg:text-4xl dark:text-white text-main-dark">
              For work enquiries or if you just want to say hello, email{" "}
              <Link href={"mailto:sfulnakeusa@gmail.com"}>
                <a className="inline-block relative cursor-pointer top-1.5 md:py-0.5 overflow-hidden group">
                  <span className="dark:bg-main-blue bg-main-red w-full h-full absolute -bottom-12 duration-200 ease-out group-hover:bottom-0 opacity-0 group-hover:opacity-100"></span>
                  <span className="block relative duration-200 ease-out group-hover:text-white">
                    sfulnakeusa@gmail.com
                  </span>
                </a>
              </Link>
            </span>
            <ul className="w-full flex flex-row items-center justify-center md:justify-start flex-wrap gap-10 xl:gap-20 dark:text-white text-main-dark">
              <li>
                <FaTwitter className="text-3xl" />
              </li>
              <li>
                <FaLinkedin className="text-3xl" />
              </li>
              <li>
                <FaGithub className="text-3xl" />
              </li>
              <li>
                <SiMinutemailer className="text-3xl" />
              </li>
            </ul>
            <p className="dark:text-white text-main-dark">
              Thanks to several websites for the inspiration. coding by me ©2022
            </p>
          </div>
          <div className=""></div>
        </div>
      </section>
    </Layout>
  );
}
