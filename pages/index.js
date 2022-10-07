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
          <div className="group relative cursor-pointer overflow-hidden rounded">
            <div className="w-full aspect-square scale-100 group-hover:scale-110 duration-300 ease-out">
              <Image
                src="/assets/images/img-travelling.png"
                alt="post"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="w-full space-y-2 absolute top-0 left-0 h-full flex flex-col justify-end bg-gradient-to-b from-white/30 to-black/60 p-10">
              <span className="font-koulen text-white tracking-wider">
                Travelling
              </span>
              <h3 className="text-white text-xl md:text-3xl font-medium font-k2d">
                Islands in the archipelago with very beautiful views
              </h3>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden rounded">
            <div className="w-full aspect-square scale-100 group-hover:scale-110 duration-300 ease-out">
              <Image
                src="/assets/images/img-travelling.png"
                alt="post"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="w-full space-y-2 absolute top-0 left-0 h-full flex flex-col justify-end bg-gradient-to-b from-white/30 to-black/60 p-10">
              <span className="font-koulen text-white tracking-wider">
                Travelling
              </span>
              <h3 className="text-white text-xl md:text-3xl font-medium font-k2d">
                Islands in the archipelago with very beautiful views
              </h3>
            </div>
          </div>
          <div className="group relative cursor-pointer overflow-hidden rounded">
            <div className="w-full aspect-square scale-100 group-hover:scale-110 duration-300 ease-out">
              <Image
                src="/assets/images/img-travelling.png"
                alt="post"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <div className="w-full space-y-2 absolute top-0 left-0 h-full flex flex-col justify-end bg-gradient-to-b from-white/30 to-black/60 p-10">
              <span className="font-koulen text-white tracking-wider">
                Travelling
              </span>
              <h3 className="text-white text-xl md:text-3xl font-medium font-k2d">
                Islands in the archipelago with very beautiful views
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full z-10 relative pt-20 pb-10">
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
