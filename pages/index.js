import { Hero } from "@components/partials/Hero";
import Layout from "@components/partials/Layout";
import { BsTriangleFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
import gsap from "gsap";
// import { Project } from "@components/partials/Project";
import { QuoteOfTheDay } from "@components/partials/QuoteOfTheDay";
import { MarqueeText } from "@components/basics/MarqueeText";
import { useRef, useState, useEffect } from "react";
import { useOnScreen } from "@hooks/useOnScreen";
import cn from "classnames";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto px-6 md:px-5 z-10 relative">
        <QuoteOfTheDay />
      </div>
      <div className="w-full h-full bg-white">
        <MarqueeText
          text={"SERVICES • SERVICES • SERVICES • SERVICES • "}
          title={"WHAT CAN I DO"}
        />

        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="w-full space-y-10">
            <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="py-3 md:py-4 px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider uppercase font-k2d">
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
                <ul className="text-main-dark space-y-4 font-k2d mt-5 text-base">
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
                <ul className="text-main-dark space-y-4 font-k2d mt-5 text-base">
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
      {/* <div className="bg-white py-40">
        <MarqueeText text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "} title={"LATEST WORKS"} />

      </div> */}
      <div className="w-full h-full bg-white py-40">
        <MarqueeText text={"BLOGS • BLOGS • BLOGS • BLOGS • "} title={"LATEST NEWS"} />

        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="group relative cursor-pointer">
            <div className="w-full aspect-video md:aspect-square overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
              />
            </div>
            <div className="w-full block space-y-5 relative py-5">
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
            <div className="w-full aspect-video md:aspect-square overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
              />
            </div>
            <div className="w-full block space-y-5 relative py-5">
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
            <div className="w-full aspect-video md:aspect-square overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1664055258388-6efc6fbe0aa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 ease-out "
                alt="post"
              />
            </div>
            <div className="w-full block space-y-5 relative py-5">
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
      <section className="w-full h-full bg-white z-10 relative pt-20 pb-10">
        <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 grid md:grid-cols-2 gap-x-10">
          <div className="w-full flex flex-col gap-y-20">
            <span className="text-2xl sm:text-3xl lg:text-4xl">
              For work enquiries or if you just want to say hello, email <a href="#">sfulnakeusa@gmail.com</a>
            </span>
            <ul className="w-full flex flex-row items-center justify-center md:justify-start flex-wrap gap-10 xl:gap-20">
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
            <p>Thanks grilledpixels and some other websites. coding by me</p>
          </div>
          <div className="">
           
          </div>
        </div>
      </section>
    </Layout>
  );
}

// const Project = () => {
//   const projectContainer = useRef();
//   const [activeImage, setActiveImage] = useState(1);

//   // useEffect(() => {
//   //   let sections = gsap.utils.toArray(".project-item-wrapper");

//   //   gsap.to(sections, {
//   //     xPercent: -100 * (sections.length - 1),
//   //     ease: "none",
//   //     scrollTrigger: {
//   //       trigger: projectContainer.current,
//   //       start: "top top",
//   //       scrub: 1,
//   //       markers: true,
//   //       pin: true,
//   //       snap: 1 / (sections.length - 1),
//   //       end: () => `+=${projectContainer.current.offsetWidth}`,
//   //     },
//   //   });
//   // }, []);

//   const handleUpdateActiveImage = (index) => {
//     setActiveImage(index + 1);
//   };

//   return (
//     <div className="h-screen w-[400%] flex flex-nowrap " ref={projectContainer}>
//       <div className="activeImageProject font-k2d">
//         <span>{activeImage}</span>
//         <span>/</span>
//         <span>{images.length}</span>
//       </div>
//       {images.map((image, index) => (
//         <ProjectItem
//           key={index}
//           index={index}
//           {...image}
//           updateActiveImage={handleUpdateActiveImage}
//         />
//       ))}
//     </div>
//   );
// };

// const ProjectItem = ({ src, category, title, updateActiveImage, index }) => {
//   const ref = useRef(null);

//   const onScreen = useOnScreen(ref, 0.5);

//   useEffect(() => {
//     if (onScreen) {
//       updateActiveImage(index);
//     }
//   }, [onScreen, index]);

//   return (
//     <div
//       className={cn(
//         "project-item-wrapper h-full grid grid-cols-[10vw_minmax(300px,_1fr)_20%] w-full"
//       )}
//       ref={ref}
//     >
//       <div></div>
//       <div className="w-full h-auto mx-auto flex flex-col justify-center relative will-change-transform px-5 md:px-0 bg-teal-200">
//         <div className="h-full w-full aspect-video">
//           <img
//             src={src}
//             className="project-item-image object-contain object-center origin-center w-full h-full will-change-transform transition-all duration-300 ease-in-out"
//             alt="project"
//           />
//         </div>
//         <div className="flex w-full items-center justify-between mt-5 absolute flex-col bottom-2">
//           <div className="font-k2d relative">
//             <h1 className="project-info-title text-4xl font-poppins md:text-7xl font-extrabold text-gray-50 ">
//               {title}
//             </h1>
//             <p className="project-info-category relative font-normal text-xl md:text-3xl text-main-dark">
//               2020 - {category}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// const images = [
//   {
//     src: "https://www.datocms-assets.com/23447/1625738350-photoscoper.png?auto=format&dpr=1&w=1600",
//     title: "BridgeZero - Website for work and visit visas",
//     category: "Web Designer",
//   },
//   {
//     src: "https://www.datocms-assets.com/23447/1596891182-embersword-hero.png?auto=format&dpr=1&w=1600",
//     title: "BridgeZero - Website for work and visit visas",
//     category: "Web Designer",
//   },
//   {
//     src: "https://www.datocms-assets.com/23447/1585257493-base.jpg?auto=format&dpr=1&w=1600",
//     title: "BridgeZero - Website for work and visit visas",
//     category: "Web Designer",
//   },
//   {
//     src: "https://www.datocms-assets.com/23447/1596369335-boa-hero.png?auto=format&dpr=1&w=1600",
//     title: "BridgeZero - Website for work and visit visas",
//     category: "Web Designer",
//   },
// ];
