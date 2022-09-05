import Head from "next/head";
// import { useEffect } from "react";
// import tw from "twin.macro";
import { Hero } from "@components/partials/Hero";
import { Navbar } from "@components/partials/Navbar";
import { BsArrowRight } from 'react-icons/bs';
// import { MasonryLayout } from "@components/basics/MasonryLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Personal Website Saiful Nakeusa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <main className="bg-main-dark">
        <Navbar />
        <Hero />
        <div className="w-full h-full bg-main-secondDark py-40">
          <div className="text-center text-white uppercase">SERVICES</div>
          <div className="w-full max-w-7xl mx-auto pt-40">
            <h2 className="font-poppins text-2xl font-semibold tracking-[0.08em] text-left text-main-gray uppercase">SERVICES</h2>
            <div className="w-full grid grid-cols-12 gap-5 mt-14">
              <div className="col-span-7 w-full grid grid-rows-4 gap-y-10">
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
              </div>
              <div  className="col-span-5 col-start-9 w-full space-y-5">
               <h3 className="text-white uppercase font-poppins font-bold text-lg tracking-wider">SKILLS</h3>
               <ul className="text-white space-y-2.5">
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
         
        </div>
        <div className="w-full h-full bg-main-dark py-40">
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
                    <h3 className="font-bold text-white text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
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
                    <h3 className="font-bold text-white text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
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
                    <h3 className="font-bold text-white text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
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
                    <h3 className="font-bold text-white text-4xl font-poppins">BridgeZero - Website for work and visit visas</h3>
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
         
        </div>
      </main>
    </>
  );
}

// let MainHome = tw.main`
//   opacity-100
// `;
