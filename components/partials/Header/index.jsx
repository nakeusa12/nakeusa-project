import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap, { Power2 } from "gsap";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [solidHeader, setSolidHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setSolidHeader(true);
      } else {
        setSolidHeader(false);
      }
    });
  }, []);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed left-0 top-0 right-0 overflow-hidden z-50 md:w-20 md:dark:bg-black md:bg-white ${solidHeader ? "dark:bg-black bg-white" : "bg-transparent"}`}>
        <nav className="md:min-h-screen  md:border-r dark:border-gray-900/50 border-gray-200 flex flex-col w-full justify-between items-center py-6 md:py-10">
          <div className="w-full flex md:flex-col flex-row items-center justify-between px-5 m:px-0">
            <a
              href="#"
              className="block md:hidden text-3xl font-bold font-koulen tracking-wide dark:text-white text-main-dark"
            >
              SN<span className="dark:text-main-blue text-main-red">.</span>
            </a>
            <div className="inline-flex gap-x-6 items-center">
              <div className="block md:hidden">
                <SwicthTheme />
              </div>
              <div className="inline-block cursor-pointer" onClick={handleOpen}>
                <div
                  className={`w-6 h-[2.5px] bg-main-dark dark:bg-white my-1 mx-0 duration-300 ${
                    menuOpen
                      ? "-rotate-45  -translate-x-[5px] translate-y-[6px]"
                      : ""
                  }`}
                ></div>
                <div className="w-6 h-[2.5px] my-1 mx-0"></div>
                <div
                  className={`w-6 h-[2.5px] bg-main-dark dark:bg-white my-1 mx-0 duration-300 ${
                    menuOpen
                      ? "rotate-45 -translate-x-[5px] -translate-y-[7px]"
                      : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <div className="hidden md:block -rotate-90">
            <Link href={"/"}>
              <a className="uppercase text-sm whitespace-nowrap tracking-widest dark:text-white text-main-dark font-medium cursor-pointer">
                Saiful Nakeusa
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            <SwicthTheme />
          </div>
        </nav>
      </header>

      <ShowMenu toggle={menuOpen} onClick={handleOpen} />
    </>
  );
};

const ShowMenu = ({ toggle, onClick }) => {
  let tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, ease: Power2.easeInOut });
    tl.current.fromTo(
      ".overlay",
      0.8,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
      }
    );
    tl.current.fromTo(
      ".menu",
      0.5,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
      },
      ">-0.7"
    );
    tl.current.to(
      ".nav",
      {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        stagger: 0.2,
      },
      ">-0.5"
    );
  }, []);

  useEffect(() => {
    if (toggle) {
      tl.current.play().timeScale(1);
    } else {
      tl.current.timeScale(2);
      tl.current.reverse();
    }
  }, [toggle]);

  return (
    <>
      {/* overlay */}
      <div className="overlay fixed w-full h-screen bg-main-red dark:bg-main-blue z-30" />
      <div className="fixed flex flex-row items-center justify-center sm:justify-start w-full h-screen px-40 bg-white dark:bg-black z-40 menu">
        {/* <MenuBackground>Menu</MenuBackground> */}
        <ul className="z-[3] space-y-10">
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl dark:text-white text-main-dark transition-all duration-200 ease-in-out hover:text-gray-640 "
              onClick={onClick}
            >
              Home
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl dark:text-white text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              About
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl dark:text-white text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Portfolio
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl dark:text-white text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Blog
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl dark:text-white text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const SwicthTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // const [audio, setAudio] = useState(null);

  const darkRef = useRef(null);
  const lightRef = useRef(null);

  const currentTheme = theme === "system" ? systemTheme : theme;

  // useEffect(() => {
  //   setAudio(new Audio("https://www.fesliyanstudios.com/play-mp3/387"));
  // }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const DarkTheme = () => {
    gsap.from(darkRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    setTheme("light");
    // audio.play();
  };

  const LightTheme = () => {
    gsap.from(lightRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    setTheme("dark");
    // audio.play();
  };

  return (
    <>
      {currentTheme === "dark" ? (
        <button type="button" aria-label="moon" onClick={DarkTheme}>
          <svg
            className="scale-100 opacity-100"
            width="25"
            height="25"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={darkRef}
          >
            <path
              d="M30 15C30 15 30 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C5.625 23.25 30 15 30 15Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      ) : (
        <button type="button" aria-label="sun" onClick={LightTheme}>
          <svg
            className="scale-100 opacity-100"
            width="25"
            height="25"
            viewBox="0 0 40 40"
            fill="none"
            ref={lightRef}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20.0002" r="7.77778" fill="#272727" />
            <circle cx="20" cy="3.33333" r="3.33333" fill="#272727" />
            <circle cx="20" cy="36.6666" r="3.33333" fill="#272727" />
            <circle cx="36.6666" cy="20.0001" r="3.33333" fill="#272727" />
            <circle cx="32.3333" cy="8.33333" r="3.33333" fill="#272727" />
            <circle cx="32.3333" cy="31.3333" r="3.33333" fill="#272727" />
            <circle cx="7.33333" cy="9.33333" r="3.33333" fill="#272727" />
            <circle cx="7.33333" cy="31.3333" r="3.33333" fill="#272727" />
            <circle cx="3.33333" cy="20.0001" r="3.33333" fill="#272727" />
          </svg>
        </button>
      )}
    </>
  );
};
