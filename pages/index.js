import Head from "next/head";
// import { useEffect } from "react";
// import tw from "twin.macro";
import { Hero } from "@components/partials/Hero";
import { Navbar } from "@components/partials/Navbar";
import { BsArrowRight } from 'react-icons/bs';
import Layout from "@components/partials/Layout";
import Marquee from 'react-gsap-marquee'
// import { MasonryLayout } from "@components/basics/MasonryLayout";

export default function Home() {
  return (
    <Layout title="Home">
        <Hero />
        <div className="container mx-auto px-5 md:px-6 py-80 z-10 relative">
          <div className="py-10 px-10 bg-red-50 bg-opacity-50 w-full grid grid-cols-12 gap-12">
            <div className="font-righteous text-2xl text-main-dark col-span-12 md:col-span-2">
              <span className="text-main-blue text-6xl">Quote</span> Of The <span className="text-main-blue text-5xl">DAY</span>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-8">
              <p className="font-semibold text-4xl text-main-dark leading-[48px] whitespace-normal">
                “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
              </p>
              <p className="text-2xl leading-8">Marilyn Monroe</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white py-40">
          <div className="relative w-full h-full">
            <Marquee className="rotate-[-3deg]" maxVelocity={0} reverseOnScrollUp={false} speed={20}>
              <h1 className="text-main-blue uppercase font-righteous block whitespace-nowrap text-[12vw] leading-[14vw] mb-20 align-middle pr-10">SERVICES • SERVICES • SERVICES • SERVICES • </h1>
            </Marquee>
            <div className="absolute top-32 left-0 right-0 w-full text-center">
              <span className="bg-main-dark py-4 px-7 text-base uppercase text-white tracking-[0.2em]">
                WHAT CAN I DO
              </span>
            </div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto pt-20 grid grid-cols-12 gap-5">
              <div className="col-span-5 w-full space-y-10">
                <p className="font-nunito text-lg font-medium leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  <br /> <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button className="py-3 md:py-4 px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider uppercase">
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
              <div  className="col-span-7 col-start-9 w-full space-y-5">
               <h3 className="text-main-dark uppercase font-poppins font-bold text-lg tracking-wider">SKILLS</h3>
               <ul className="text-main-dark space-y-2.5">
                <li>HTML - CSS - Javascript</li>
                <li>React - Next Js</li>
                <li>Svelte Js</li>
                <li>Alphine Js</li>
                <li>Tailwind CSS</li>
                <li>Styled Components</li>
                <li>SASS/SCSS</li>
                <li>GSAP</li>
               </ul>
              </div>
          </div>
         
        </div>
        <div className="w-full h-full bg-white py-40">
          <div className="relative w-full h-full">
            <Marquee className="rotate-[-3deg]" maxVelocity={0} reverseOnScrollUp={false} speed={20}>
              <h1 className="text-main-blue uppercase font-righteous block whitespace-nowrap text-[12vw] leading-[14vw] mb-20 align-middle pr-10">PROJECTS • PROJECTS • PROJECTS • PROJECTS • </h1>
            </Marquee>
            <div className="absolute top-32 left-0 right-0 w-full text-center">
              <span className="bg-main-dark py-4 px-7 text-base uppercase text-white tracking-[0.2em]">
                LATEST WORKS
              </span>
            </div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto pt-20">
            <ul className="w-full flex flex-wrap mt-14 justify-between">
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col  justify-start">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col justify-end">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col  justify-start">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col justify-end">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
         
        </div>
        {/* <div className="w-full h-full bg-white py-40">
          <div className="text-center text-white uppercase">PROJECTS</div>
          <div className="w-full max-w-7xl mx-auto pt-40">
            <h2 className="font-poppins text-2xl font-semibold tracking-[0.08em] text-left text-main-gray uppercase">PROJECTS</h2>
            <ul className="w-full flex flex-wrap mt-14 justify-between">
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col  justify-start">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col justify-end">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col  justify-start">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
              <li className="max-w-xl w-full h-full">
                <div className="h-[60rem] w-full flex flex-col justify-end">
                  <div className="w-full bg-green-100 relative h-[40rem]">
                    <img src="/assets/images/images.png" className="h-full w-full bg-blue-100" alt="" />
                  </div>
                  <div className="mt-10 space-y-4">
                    <h3 className="font-bold text-black text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
                    <p className="font-poppins text-xl text-main-gray">2020 - Web Designer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full bg-main-secondDark py-40">
          <div className="text-center text-white uppercase">About Me</div>
          <div className="w-full max-w-7xl mx-auto pt-40">
            <h2 className="font-poppins text-2xl font-semibold tracking-[0.08em] text-left text-main-gray uppercase">About Me</h2>
            <div className="w-full grid grid-cols-12 gap-5 mt-14">
             <div className="col-span-6 space-y-6">
              <p className="text-xl font-semibold text-white">
              I’ve a background in information technology, with a focus on Frontend Development. I am the type of person who takes every opportunity to learn something new. That's why I enjoy challenges. From there, I was under pressure to learn quickly and gain a lot of new experiences.  Through innovation, passion and expertise. 
              </p>
              <p className="text-xl font-semibold text-white">I want to create a high quality website and application. Apart from coding, I love Traveling, Fitness & helping others in the community.</p>
             </div>
            </div>
          </div>
         
        </div> */}
    </Layout>
  );
}

// let MainHome = tw.main`
//   opacity-100
// `;
