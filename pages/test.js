import { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap, { Power4, TweenMax } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cn from "classnames";
import { useOnScreen } from "@hooks/useOnScreen";
import Layout from "@components/molecules/Layout";
import { useRouter } from "next/router";
import { MarqueeText } from "@components/atoms/MarqueeText";
import parse from "html-react-parser";

gsap.registerPlugin(ScrollTrigger);

const themes = [
  { name: "Light" },
  { name: "Dark" },
  { name: "Emerald" },
  { name: "Pink" },
];

export default function Test() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Layout title="Test">
        <div className="mb-10 dark:bg-red-200"></div>

        <div className="p-10 flex flex-col gap-10">
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-['aaaaaaaaaaaaaaa'] before:w-full before:absolute before:bottom-3 before:left-0 before:text-transparent before:decoration-main-dark before:underline before:decoration-wavy wavy">
              Home
            </div>
          </div>
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-[''] before:absolute before:h-[4px] before:bg-main-dark before:w-full before:bottom-2 before:left-0 before:origin-left before:transform before:duration-200 before:ease-out before:scale-x-0 before:hover:scale-x-100">
              About
            </div>
          </div>
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-[''] before:absolute before:h-[4px] before:bg-main-dark before:w-full before:bottom-2 before:left-0 before:origin-left before:transform before:duration-200 before:ease-out before:scale-x-0 before:hover:scale-x-100">
              Project
            </div>
          </div>
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:bg-red-500 before:transition-transform before:duration-300 before:ease-linear before:scale-x-0 before:origin-bottom-right before:hover:scale-x-100 before:hover:origin-bottom-left before:h-[4px]">
              Contact
            </div>
          </div>
        </div>

        {/* <div className="p-10">
          <SkewScroll />
        </div> */}
     
      </Layout>
    </>
  );
}

const SkewScroll = () => {
  const skewScrollRef = useRef(null);

  // useEffect(() => {
  //   const skewScroll = skewScrollRef.current;
  //   let pageYOffset = window.pageYOffset;
  //   const newPageOffset = window.pageYOffset;
  //   const diff = newPageOffset - pageYOffset;

  //   TweenMax.to(skewScroll, .5, {
  //     skewX: -diff * 0.03,
  //     skewY: diff * 0.1,
  //     ease: Power4.ease
  //   })
  //   pageYOffset = newPageOffset;

  // }, []);

  return (
    <section
      className="testSkew flex flex-col items-center"
      ref={skewScrollRef}
    >
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
      <div class="post w-[80%] h-[400px] bg-slate-400 my-7"></div>
    </section>
  );
};