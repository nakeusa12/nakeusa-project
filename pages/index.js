import Head from "next/head";
// import { useEffect } from "react";
// import tw from "twin.macro";
import { Hero } from "@components/partials/Hero";
import { Navbar } from "@components/partials/Navbar";
import { BsArrowRight } from "react-icons/bs";
import Layout from "@components/partials/Layout";
import { BsTriangleFill } from "react-icons/bs";
import Image from "next/image";
import gsap from "gsap";
import { Project } from "@components/partials/Project";
import { QuoteOfTheDay } from "@components/partials/QuoteOfTheDay";
import { MarqueeText } from "@components/basics/MarqueeText";
import { MasonryLayout } from "@components/basics/MasonryLayout";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import ScrollToPlugin from "gsap/dist/ScrollToPlugin"
// import { useEffect } from "react";

// import { MasonryLayout } from "@components/basics/MasonryLayout";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <div className="max-w-full md:max-w-[80%] mx-auto px-6 md:px-5 z-10 relative">
        <QuoteOfTheDay />
      </div>
      <div className="w-full h-full bg-white">
        <MarqueeText text={"SERVICES • SERVICES • SERVICES • SERVICES • "} title={"WHAT CAN I DO"} />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-5 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="w-full space-y-10">
            <p className="font-sen text-base md:text-lg font-medium md:leading-8 whitespace-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-sen text-base md:text-lg font-medium md:leading-8 whitespace-normal">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="py-3 md:py-4 px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider uppercase font-sen">
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
                <h3 className="text-main-dark uppercase font-poppins font-bold text-lg tracking-wider">
                  TECH STACK
                </h3>
                <ul className="text-main-dark space-y-4 font-sen mt-5 text-base">
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
                <h3 className="text-main-dark uppercase font-poppins font-bold text-lg tracking-wider">
                  ANIME STACK
                </h3>
                <ul className="text-main-dark space-y-4 font-sen mt-5 text-base">
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
      <div className="bg-white">
        <MarqueeText text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "} title={"LATEST WORKS"} />

        {/* <div className="w-full max-w-full h-screen mt-20 bg-red-50">
            <ul className="w-full whitespace-nowrap overflow-hidden">
              <li className="inline-flex w-screen h-screen justify-center items-center">
                <div className="w-full flex flex-col bg-green-100  justify-start">
                  <div className="w-full relative">
                    <Image
                      src="/assets/images/images.png"
                      alt="Picture of the author"
                      width={650}
                      height={700}
                    />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
        <div className="mt-20"><Project /></div>
      </div>
      <div className="w-full h-full bg-white py-40">
        <MarqueeText text={"BLOGS • BLOGS • BLOGS • BLOGS • "} title={"LATEST NEWS"} />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group relative cursor-pointer">
            <div className="w-full h-[450px] overflow-hidden rounded backdrop-contrast-125 bg-white/30">
              <img
                src="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
              />
            </div>
            <div className="w-full p-5 block space-y-5 relative">
              <div className="text-main-dark flex w-full items-center justify-between font-medium">
                <span>Category</span>
                <span>- July 4, 2022</span>
              </div>
              <h1 className="text-main-dark text-3xl font-semibold">
                Disini Adalah untuk judul dari blog tersebut.
              </h1>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <div className="w-full h-[450px] overflow-hidden rounded backdrop-contrast-125 bg-white/30">
              <img
                src="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
              />
            </div>
            <div className="w-full p-5 block space-y-5 relative">
              <div className="text-main-dark flex w-full items-center justify-between font-medium">
                <span>Category</span>
                <span>- July 4, 2022</span>
              </div>
              <h1 className="text-main-dark text-3xl font-semibold">
                Disini Adalah untuk judul dari blog tersebut.
              </h1>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <div className="w-full h-[450px] overflow-hidden rounded backdrop-contrast-125 bg-white/30">
              <img
                src="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
              />
            </div>
            <div className="w-full p-5 block space-y-5 relative">
              <div className="text-main-dark flex w-full items-center justify-between font-medium">
                <span>Category</span>
                <span>- July 4, 2022</span>
              </div>
              <h1 className="text-main-dark text-3xl font-semibold">
                Disini Adalah untuk judul dari blog tersebut.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// let MainHome = tw.main`
//   opacity-100
// `;
