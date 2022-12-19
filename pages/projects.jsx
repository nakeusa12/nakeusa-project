import Layout from "@components/molecules/Layout";
import { Footer } from "@components/organisms/Footer";
import gsap from "gsap";
import React, { useRef } from "react";
import { useEffect } from "react";
import { projects } from "../json/data.json";

const Projects = () => {

  useEffect(() => {
    const itemList = [...document.querySelectorAll(".listProject")];
    // gsap.set(".showImage", { yPercent: -50, xPercent: -50 });

    for (let i = 0; i < itemList.length; i++) {
      itemList[i].addEventListener("mousemove", () => {
        for (let j = 0; j < itemList.length; j++) {
          if (j !== i) {
            gsap.to(itemList[j], 0.5, { opacity: 0.2, zIndex: 0 });
          } else {
            gsap.to(itemList[j], 0.5, { opacity: 1, zIndex: 3 });
          }
        }
      });

      itemList[i].addEventListener("mouseleave", () => {
        for (let i = 0; i < itemList.length; i++) {
          gsap.to(itemList[i], 0.5, { opacity: 1, zIndex: 1 });
        }
      });
    }

    // itemList.forEach((el) => {
    //   const image = el.querySelector(".showImage"),
    //     setX = gsap.quickSetter(image, "x", "px"),
    //     setY = gsap.quickSetter(image, "y", "px"),
    //     align = (e) => {
    //       setX(e.clientX);
    //       setY(e.clientY);
    //     },
    //     startFollow = () => document.addEventListener("mousemove", align),
    //     stopFollow = () => document.removeEventListener("mousemove", align),
    //     fade = gsap.to(image, {
    //       autoAlpha: 1,
    //       ease: "none",
    //       paused: true,
    //       onReverseComplete: stopFollow,
    //     });

    //   el.addEventListener("mouseenter", (e) => {
    //     fade.play();
    //     startFollow();
    //     align(e);
    //   });

    //   el.addEventListener("mouseleave", () => fade.reverse());
    // });
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 space-y-20 md:space-y-40">
        <div>
          <h1 className="text-4xl uppercase">My Project</h1>
        </div>
        <ul>
          <li>
            <div className="w-full h-px bg-main-dark"></div>
          </li>
          {projects.map((item, index) => (
            <li key={index}>
              <div className="w-full flex flex-row justify-between items-start py-10 relative listProject">
                <div className="flex-1">
                  <h3 className="text-4xl font-semibold">{item.name}</h3>
                  <p className="text-lg">{item.category}</p>
                </div>
                <div className="flex-1 flex flex-wrap gap-2 justify-end max-w-md">
                  {item.stack.map((stack) => (
                    <p
                      key={stack.value}
                      className="bg-main-dark py-2 px-3 inline text-main-whiteGray rounded-md text-sm"
                    >
                      {stack.label}
                    </p>
                  ))}
                </div>
                <img
                  src={item.image}
                  className="fixed w-96 h-96 object-cover top-0 left-0 opacity-0 invisible z-10 pointer-events-none showImage"
                  alt=""
                />
              </div>
              <div className="w-full h-px bg-main-dark"></div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </Layout>
  );
};

export default Projects;
