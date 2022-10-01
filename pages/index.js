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

export default function Home() {
  return (
    <Layout titlePage="Home">
      <Hero />
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto px-6 md:px-5 z-10 relative">
        <QuoteOfTheDay />
      </div>
      <div className="w-full h-full">
        <MarqueeText
          text={"SERVICES • SERVICES • SERVICES • SERVICES • "}
          title={"WHAT CAN I DO"}
        />

        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="w-full space-y-10">
            <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal text-main-dark dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal text-main-dark dark:text-white">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="py-3 md:py-4 px-10 md:px-12 inline-flex items-center justify-center border dark:border-white border-main-dark dark:text-white text-main-dark text-sm md:text-xl tracking-wider uppercase font-k2d">
              Learn More
            </button>
          </div>
          <div className="w-full gap-x-20 xl:gap-x-40 gap-y-10 flex sm:flex-row flex-col">
            <div className="inline-flex flex-row gap-x-6">
              <div className="inline-flex flex-col gap-y-2.5 pt-2">
                <BsTriangleFill className="w-4 h-4 rotate-180" />
                <BsTriangleFill className="w-4 h-4 rotate-180" />
                <BsTriangleFill className="w-4 h-4 rotate-180" />
              </div>
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
            </div>
            <div className="inline-flex flex-row gap-x-6">
              <div className="inline-flex flex-col gap-y-2.5 pt-2">
                <BsTriangleFill className="w-4 h-4 rotate-180" />
                <BsTriangleFill className="w-4 h-4 rotate-180" />
                <BsTriangleFill className="w-4 h-4 rotate-180" />
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
        </div>
      </div>
      <section className="py-40">
        <MarqueeText
          text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "}
          title={"LATEST WORKS"}
        />
        <Project>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Project>
        <div className="text-center w-full pt-10">
          <a href="#">
            <button className="py-3 md:py-4 font-sen px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider uppercase">
              View All Projects
            </button>
          </a>
        </div>
      </section>
      <section className="w-full h-full py-40">
        <MarqueeText
          text={"BLOGS • BLOGS • BLOGS • BLOGS • "}
          title={"LATEST NEWS"}
        />

        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group relative cursor-pointer">
            <div className="w-full aspect-square overflow-hidden rounded">
              <img
                src="https://uploads-ssl.webflow.com/61c1d79ddb7d937624ed3ec6/61d5fede6bf47be8b9768556_s-o-c-i-a-l-c-u-t-96A9UTFAMUM-unsplash%202-p-800.png"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
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
          <div className="group relative cursor-pointer">
            <div className="w-full aspect-square overflow-hidden rounded">
              <img
                src="https://uploads-ssl.webflow.com/61c1d79ddb7d937624ed3ec6/61d5fede6bf47be8b9768556_s-o-c-i-a-l-c-u-t-96A9UTFAMUM-unsplash%202-p-800.png"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
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
          <div className="group relative cursor-pointer">
            <div className="w-full aspect-square overflow-hidden rounded">
              <img
                src="https://uploads-ssl.webflow.com/61c1d79ddb7d937624ed3ec6/61d5fede6bf47be8b9768556_s-o-c-i-a-l-c-u-t-96A9UTFAMUM-unsplash%202-p-800.png"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
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
              <a href="#">sfulnakeusa@gmail.com</a>
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

const Project = ({ children }) => {
  return (
    <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-20  ">
      {children}
    </div>
  );
};

const ProjectCard = () => {
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
