import Head from "next/head";
// import { useEffect } from "react";
// import tw from "twin.macro";
import { Hero } from "@components/partials/Hero";
import { Navbar } from "@components/partials/Navbar";
import { BsArrowRight } from 'react-icons/bs';
import Layout from "@components/partials/Layout";
import Marquee from 'react-gsap-marquee'
import { BsTriangleFill } from 'react-icons/bs';
import Image from "next/image";
import gsap from "gsap";
import Project from "@components/partials/Project";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import ScrollToPlugin from "gsap/dist/ScrollToPlugin"
// import { useEffect } from "react";

// import { MasonryLayout } from "@components/basics/MasonryLayout";

export default function Home() {

  return (
    <Layout title="Home">
        <Hero />
        <div className="max-w-full md:max-w-[80%] mx-auto px-6 md:px-5 z-10 relative">
          <div className="w-full grid grid-cols-12 gap-5">
            <div className="py-10 px-10 bg-white bg-opacity-50 xl:col-start-2 col-span-12 xl:col-span-10 flex flex-col lg:flex-row gap-12 min-h-[400px]">
              <div className="font-righteous text-main-blue text-5xl lg:text-6xl max-w-[200px] w-full">
                Quote <br /> <sup className="text-main-dark text-xl lg:text-2xl">Of The</sup> <span className="text-main-blue text-4xl lg:text-5xl">DAY</span>
              </div>
              <div className="w-full space-y-8">
                <p className="font-bold font-sen text-2xl sm:text-3xl lg:text-4xl text-main-dark leading-9 sm:leading-10 lg:leading-[48px] whitespace-normal">
                  “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
                </p>
                <div className="inline-flex gap-x-5 items-center">
                  <p className="text-xl lg:text-2xl text-main-dark leading-8 font-sen">Marilyn Monroe</p>
                  <div className="w-40 h-1 bg-main-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white py-40">
          <div className="relative w-full h-full">
            <Marquee className="rotate-[-3deg]" maxVelocity={0} reverseOnScrollUp={false} speed={20}>
              <h1 className="text-main-blue uppercase font-righteous block whitespace-nowrap text-[12vw] leading-[14vw] mb-20 align-middle pt-16 pr-10">SERVICES • SERVICES • SERVICES • SERVICES • </h1>
            </Marquee>
            <div className="absolute top-0 left-0 right-0 w-full flex justify-center items-center h-full">
              <span className="bg-main-dark py-4 px-7 text-base uppercase text-white tracking-[0.2em]">
                WHAT CAN I DO
              </span>
            </div>
          </div>
          
          <div className="w-full max-w-full md:max-w-[80%] mx-auto px-6 md:px-5 mt-20 grid grid-cols-12 gap-10 lg:gap-5">
              <div className="col-span-12 lg:col-span-5 w-full space-y-10">
                <p className="font-sen text-lg font-medium leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  <br /> <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className="py-3 md:py-4 px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider uppercase font-sen">
                Learn More
                </button>
              </div>
              {/* <div className="col-span-7 w-full grid grid-rows-4 gap-y-10">
                <div className="w-full flex justify-between items-end flex-row pb-4 border-b border-main-gray">
                  <div className="flex flex-col space-y-4">
                    <div className="w-14 h-11">
                      <img src="/assets/svgs/web-development.svg" alt="web-developement-icon" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-white text-lg font-semibold">
                      Website Developement
                    </h4>
                  </div>
                  <div className="inline-flex gap-x-1 items-center group">
                    <p className=" text-sm text-main-gray font-medium">Detail</p> 
                    <BsArrowRight className="-rotate-45 text-main-gray text-base font-medium group-hover:rotate-0 duration-300" />
                  </div>
                </div>
                <div className="w-full flex justify-between items-end flex-row pb-4 border-b border-main-gray">
                  <div className="flex flex-col space-y-4">
                    <div className="w-14 h-11">
                      <img src="/assets/svgs/uiux-design.svg" alt="web-developement-icon" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-white text-lg font-semibold">
                      UI UX Design
                    </h4>
                  </div>
                  <div className="inline-flex gap-x-1 items-center group">
                    <p className=" text-sm text-main-gray font-medium">Detail</p> 
                    <BsArrowRight className="-rotate-45 text-main-gray text-base font-medium group-hover:rotate-0 duration-300" />
                  </div>
                </div>
                <div className="w-full flex justify-between items-end flex-row pb-4 border-b border-main-gray">
                  <div className="flex flex-col space-y-4">
                    <div className="w-14 h-11">
                      <img src="/assets/svgs/responsive-webapp.svg" alt="web-developement-icon" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-white text-lg font-semibold">
                      Responsive WebApp
                    </h4>
                  </div>
                  <div className="inline-flex gap-x-1 items-center group">
                    <p className=" text-sm text-main-gray font-medium">Detail</p> 
                    <BsArrowRight className="-rotate-45 text-main-gray text-base font-medium group-hover:rotate-0 duration-300" />
                  </div>
                </div>
                <div className="w-full flex justify-between items-end flex-row pb-4 border-b border-main-gray">
                  <div className="flex flex-col space-y-4">
                    <div className="w-14 h-11">
                      <img src="/assets/svgs/pwa.svg" alt="web-developement-icon" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-white text-lg font-semibold">
                      Progressive Web Apps
                    </h4>
                  </div>
                  <div className="inline-flex gap-x-1 items-center group">
                    <p className=" text-sm text-main-gray font-medium">Detail</p> 
                    <BsArrowRight className="-rotate-45 text-main-gray text-base font-medium group-hover:rotate-0 duration-300" />
                  </div>
                </div>
              </div> */}
              <div  className="col-span-12 lg:col-span-6 col-start-1 lg:col-start-7 w-full gap-x-20 xl:gap-x-40 flex flex-row">
                  <div className="inline-flex flex-row gap-x-6">
                      <div className="inline-flex flex-col gap-y-2.5 pt-2">
                        <BsTriangleFill className="w-4 h-4 rotate-0" />
                        <BsTriangleFill className="w-4 h-4 rotate-0" />
                        <BsTriangleFill className="w-4 h-4 rotate-0" />
                      </div>
                      <div>
                        <h3 className="text-main-dark uppercase font-poppins font-bold text-lg tracking-wider">TECH STACK</h3>
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
                        <h3 className="text-main-dark uppercase font-poppins font-bold text-lg tracking-wider">ANIME STACK</h3>
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
        <div className="w-full h-full bg-white py-40">
          <div className="relative w-full h-full">
            <Marquee className="rotate-[-3deg]" maxVelocity={0} reverseOnScrollUp={false} speed={20}>
              <h1 className="text-main-blue uppercase font-righteous block whitespace-nowrap text-[12vw] leading-[14vw] mb-20 align-middle pt-16 pr-10">PROJECTS • PROJECTS • PROJECTS • PROJECTS • </h1>
            </Marquee>
            <div className="absolute top-0 left-0 right-0 w-full flex justify-center items-center h-full">
              <span className="bg-main-dark py-4 px-7 text-base uppercase text-white tracking-[0.2em]">
                LATEST WORKS
              </span>
            </div>
          </div>
          
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
          <Project />
        </div>
        <div className="w-full h-full bg-white py-40">
          <div className="relative w-full h-full">
            <Marquee className="rotate-[-3deg]" maxVelocity={0} reverseOnScrollUp={false} speed={20}>
              <h1 className="text-main-blue uppercase font-righteous block whitespace-nowrap text-[12vw] leading-[14vw] mb-20 align-middle pt-16 pr-10">BLOGS • BLOGS • BLOGS • BLOGS • </h1>
            </Marquee>
            <div className="absolute top-0 left-0 right-0 w-full flex justify-center items-center h-full">
              <span className="bg-main-dark py-4 px-7 text-base uppercase text-white tracking-[0.2em]">
                LATEST NEWS
              </span>
            </div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto pt-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptates ad consequuntur eius enim aperiam ipsam eveniet non facere repellendus voluptatibus ut sequi voluptas perspiciatis possimus tempore architecto, minus provident quasi animi, debitis quis. Ea reprehenderit earum deserunt mollitia ut quisquam modi repellendus, at ipsam aspernatur, itaque porro corrupti. Veritatis fugit quae, amet qui minima corrupti iste temporibus tempore voluptates beatae incidunt nesciunt, nihil officiis? Cum ea, excepturi ipsum quidem aut perferendis officia animi, quae quam dolor totam ad optio numquam in, maiores autem veritatis laudantium distinctio. Id expedita veritatis libero commodi, officia porro obcaecati, mollitia velit ipsum inventore error labore fugit impedit quae praesentium nisi quam vitae eius animi recusandae ex adipisci enim? Incidunt nihil voluptas eos, autem optio molestias a unde, exercitationem libero eius aspernatur laudantium asperiores aperiam sapiente distinctio illo dolorem dolores architecto ratione deleniti. In impedit incidunt sint eum, voluptatibus molestias soluta saepe reiciendis ad quis qui temporibus dignissimos consequatur eveniet sequi voluptatem iure animi minima eaque porro totam aspernatur odio, earum fugiat? In blanditiis, possimus itaque deleniti fugit sapiente facilis id repellat officiis esse? Reprehenderit ipsam veniam consequatur maiores quos doloremque, accusantium tempora adipisci ducimus porro voluptatem architecto laboriosam. Facilis, ex. Voluptatum reprehenderit beatae magni.
          </div>
         
        </div>
        
    </Layout>
  );
}

// let MainHome = tw.main`
//   opacity-100
// `;
