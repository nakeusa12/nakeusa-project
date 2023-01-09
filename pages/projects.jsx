import React, { useEffect } from "react";
import gsap, { Linear, TimelineLite } from "gsap";

import Layout from "@components/molecules/Layout";
import { Footer } from "@components/organisms/Footer";

import {projects} from "../json/project.json";

const Projects = () => {
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const tl = new TimelineLite({ paused: true }).to(overlay, 2, {
      autoAlpha: 0,
      y: "40vh",
      ease: Linear.easeNone,
    });

    window.addEventListener("scroll", () => {
      const st = document.documentElement.scrollTop;
      const ht = overlay.scrollHeight;
      const windowScroll = st / ht;
      tl.progress(windowScroll);
    });
  }, []);

  useEffect(() => {
    const itemList = [...document.querySelectorAll(".listProject")];

    for (let i = 0; i < itemList.length; i++) {
      itemList[i].addEventListener("mouseenter", () => {
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

        gsap.to(".showImage", 0.5, { autoAlpha: 0 });
      });

      itemList[i].addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        gsap.to(".showImage", 0.5, {
          x: x + 50,
          y: y - 150,
          autoAlpha: 1,
        });
      });
    }
  }, []);

  return (
    <Layout>
      <section id="overlay" className=" h-screen bg-main-dark flex justify-center items-center shadow-main-dark shadow-[0_100px_100px_100px]">
        <h1>
          Here's a full-screen header container that fades with a parallax
          effect.
        </h1>
      </section>
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 my-20 space-y-20 md:space-y-40 testProjectLagi">
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
                  className="fixed max-w-md object-cover top-0 left-0 opacity-0 invisible z-30 pointer-events-none showImage"
                  alt={item.name}
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
