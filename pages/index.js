import Head from "next/head";
import gsap,{ Linear } from "gsap";
import Draggable from "gsap/dist/Draggable";
import { useEffect } from "react";
import tw from "twin.macro";
import { Hero } from "@components/partials/Hero";
import { Navbar } from "@components/partials/Navbar";
import { MySkill } from "@components/partials/MySkill";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    const slides = document.querySelectorAll("#screen-slider");
    const container = document.querySelector("#panelWrap");
    let dots = document.querySelector(".dots");
    let toolTips = document.querySelectorAll(".toolTip");
    let oldSlide = 0;
    let activeSlide = 0;
    let navDots = [];
    let dur = 0.6;
    let offsets = [];
    let toolTipAnims = [];
    let ih = window.innerHeight;
    
    // create nev dots and add tooltip listeners
    for (let i = 0; i < slides.length; i++) {
      let tl = gsap.timeline({ paused: true, reversed: true });
      let newDot = document.createElement("div");
      newDot.className = "dot";
      newDot.index = i;
      navDots.push(newDot);
      newDot.addEventListener("click", slideAnim);
      newDot.addEventListener("mouseenter", dotHover);
      newDot.addEventListener("mouseleave", dotHover);
      dots.appendChild(newDot);
      offsets.push(-slides[i].offsetTop);
      tl.to(toolTips[i], 0.25, { opacity: 1, ease: Linear.easeNone });
      toolTipAnims.push(tl);
    }
    
    // =================== icon animations for slide 1 ===================
    
    // Animation Pulse for "Mousewheel" 
    const mouseAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    mouseAnim.fromTo(
      "#mouseRings circle",
      { attr: { r: 15 } },
      { duration: 0.8, stagger: 0.25, attr: { r: 40 } }
    );
    mouseAnim.fromTo(
      "#mouseRings circle",
      { opacity: 0 },
      { duration: 0.4, stagger: 0.25, opacity: 1 },
      0
    );
    mouseAnim.fromTo(
      "#mouseRings circle",
      { opacity: 1 },
      { duration: 0.6, stagger: 0.25, opacity: 0 },
      0.4
    );
    
    // Animation "Drag & Throw" 
    const handAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    handAnim.to("#hand", {
      duration: 0.75,
      y: -16,
      rotation: 5,
      transformOrigin: "right bottom",
    });
    handAnim.to("#hand", { duration: 0.5, y: 15, ease: "power3.inOut" });
    handAnim.to("#hand", { duration: 1, y: 0, rotation: 0 });
    
    // Animation "Nav Dots" 
    const cursorAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    gsap.set("#cursor", {
      rotation: 240,
      transformOrigin: "center center",
      x: -25,
    });
    cursorAnim.to("#cursor", 0.25, { duration: 0.25, y: -24 });
    cursorAnim.to(
      "#iconCircles circle",
      { duration: 0.5, stagger: 0.15, attr: { r: 6 } },
      "expand"
    );
    cursorAnim.to("#cursor", { duration: 1.1, y: 50 }, "expand");
    cursorAnim.to("#cursor", { duration: 0.75, y: 0 }, "contract");
    cursorAnim.to(
      "#iconCircles circle",
      { duration: 0.5, attr: { r: 4 } },
      "contract"
    );
    
    // Animation "Arrow" 
    const arrowAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    arrowAnim.to("#caret", {
      duration: 0.5,
      attr: { points: "30 40, 50 65, 70 40" },
      repeat: 3,
      yoyo: true,
      ease: "power2.inOut",
      repeatDelay: 0.25,
    });
    
    // =================== END icon animations for slide 1 ===================
    
    // get elements positioned
    gsap.set(".dots", { yPercent: -50 });
    gsap.set(".toolTips", { yPercent: -50 });
    
    // side screen animation with nav dots
    const dotAnim = gsap.timeline({ paused: true });
    dotAnim.to(
      ".dot",
      {
        stagger: { each: 1, yoyo: true, repeat: 1 },
        scale: 1,
        rotation: 0.1,
        ease: "none",
        width: "60px",
        height: "6px",
        backgroundColor: "#2348F7",
      },
      0.5
    );
    dotAnim.time(1);
    
    // tooltips hovers
    function dotHover() {
      toolTipAnims[this.index].reversed()
        ? toolTipAnims[this.index].play()
        : toolTipAnims[this.index].reverse();
    }
    
    // figure out which of the 4 nav controls called the function
    function slideAnim(e) {
      oldSlide = activeSlide;
      // dragging the panels
      if (this.id === "dragger") {
        activeSlide = offsets.indexOf(this.endY);
      } else {
        if (gsap.isTweening(container)) {
          return;
        }
        // up/down arrow clicks
        if (this.id === "downArrow" || this.id === "upArrow") {
          activeSlide =
            this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
          // click on a dot
        } else if (this.className === "dot") {
          activeSlide = this.index;
          // scrollwheel
        } else {
          activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
        }
      }
      // make sure we're not past the end or beginning slide
      activeSlide = activeSlide < 0 ? 0 : activeSlide;
      activeSlide =
        activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
      if (oldSlide === activeSlide) {
        return;
      }
      // if we're dragging we don't animate the container
      if (this.id != "dragger") {
        gsap.to(container, dur, {
          y: offsets[activeSlide],
          ease: "power2.inOut",
          onUpdate: tweenDot,
        });
      }
    }
    
    gsap.set(".hideMe", { opacity: 1 });
    window.addEventListener("wheel", slideAnim);
    window.addEventListener("resize", newSize);
    
    // make the container a draggable element
    let dragMe = Draggable.create(container, {
      // type: "y",
      type: "scroll",
      edgeResistance: 1,
      onDragEnd: slideAnim,
      onDrag: tweenDot,
      onThrowUpdate: tweenDot,
      snap: offsets,
      inertia: true,
      zIndexBoost: false,
      allowNativeTouchScrolling: false,
      bounds: "#masterWrap",
    });
    
    dragMe[0].id = "dragger";
    newSize();
    
    // resize all panels and refigure draggable snap array
    function newSize() {
      offsets = [];
      ih = window.innerHeight;
      gsap.set("#panelWrap", { height: slides.length * ih });
      gsap.set(slides, { height: ih });
      for (let i = 0; i < slides.length; i++) {
        offsets.push(-slides[i].offsetTop);
      }
      gsap.set(container, { y: offsets[activeSlide] });
      dragMe[0].vars.snap = offsets;
    }
    
    // tween the dot animation as the draggable moves
    function tweenDot() {
      gsap.set(dotAnim, {
        time: Math.abs(gsap.getProperty(container, "y") / ih) + 1,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <MainHome>
        <MasterWrap>
          <PanelWrap id="panelWrap">
            <ScreenSlider id="screen-slider">
              <div className="lg:block hidden">
                <div className="absolute top-[5%] xl:top-[8%] 2xl:top-[15%] left-60">
                  <img src="assets/svgs/rectangle1.svg" alt="" />
                </div>
                <div className="absolute top-[60%] -left-16">
                  <img src="assets/svgs/rectangle2.svg" alt="" />
                </div>
                <div className="absolute top-[20%] right-24">
                  <img src="assets/svgs/rectangle3.svg" alt="" />
                </div>
                <div className="absolute top-[50%] -right-2">
                  <img src="assets/svgs/rectangle4.svg" alt="" />
                </div>
                <div className="absolute top-[90%] xl:top-[80%] 2xl:top-[70%]  right-80">
                  <img src="assets/svgs/rectangle5.svg" alt="" />
                </div>
              </div>
              <Hero />
            </ScreenSlider>
            <ScreenSlider id="screen-slider">
              <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-2">
                <MySkill />
                <AboutMe />
              </div>
            </ScreenSlider>
            <ScreenSlider id="screen-slider">
              <div className="w-full grid grid-cols-2">
                <div className="bg-gray-100 min-h-screen">2</div>
                <div>1</div>
              </div>
            </ScreenSlider>
            <ScreenSlider id="screen-slider">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/314556/sittingDog.svg"
                alt="Dog"
                width="120"
              />
              <h3>Random dog</h3>
              <p>Why? Because dogs are cool.</p>
            </ScreenSlider>
            <ScreenSlider id="screen-slider">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/314556/sittingDog.svg"
                alt="Dog"
                width="120"
              />
              <h3>Random dog</h3>
              <p>Why? Because dogs are cool.</p>
            </ScreenSlider>
          </PanelWrap>
        </MasterWrap>
        <SliderMarker />
        <div className="absolute bottom-10 right-10">
          <div className="flex flex-col gap-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </MainHome>
    </>
  );
}

const SliderMarker = () => {
  return <div className="dots"></div>;
};

const AboutMe = () => {
  return (
    <div className="lg:bg-gray-100 bg-transparent lg:min-h-screen w-full flex flex-col justify-center">
      <div className="lg:max-w-lg w-full lg:mx-24 p-10">
        <div className="w-full space-y-2">
          <h3 className="text-sm font-normal text-main-dark uppercase">Summary</h3>
          <h1 className="text-black text-2xl font-bold uppercase">
            ABOUT <span className="text-main-primary">ME</span>
          </h1>
        </div>
        <div className="mt-6 sm:mt-12">
          <p className="text-[15px] sm:text-lg font-semibold text-main-darkest">
            I have a background in information technology, with a focus on
            Frontend Development and UI Design. I am the type of person who
            takes every opportunity to learn something new. That's why I enjoy
            challenges. From there, I was under pressure to learn quickly and
            gain a lot of new experiences. Through innovation, passion and
            expertise. I want to create a high quality website and application.
            Apart from coding, I love Traveling, Fitness & helping others in the
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

let MainHome = tw.main`
  opacity-100
`;
let MasterWrap = tw.div`
  w-full h-full absolute overflow-hidden
`;
let PanelWrap = tw.div` 
  w-full h-screen
`;
let ScreenSlider = tw.section`
  w-full h-screen  bg-white relative
`;
