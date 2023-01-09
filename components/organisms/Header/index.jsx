import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap, { Expo, Power2 } from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const handleOpen = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 right-0 overflow-hidden z-50 md:w-20 md:dark:bg-black md:bg-white ${
          solidHeader ? "dark:bg-black bg-white" : "bg-transparent"
        }`}
      >
        <nav className="md:min-h-screen  md:border-r dark:border-gray-900/50 border-gray-200 flex flex-col w-full justify-between items-center py-6 md:py-10">
          <div className="w-full flex md:flex-col flex-row items-center justify-between px-5 m:px-0">
            <Link href={"/"}>
              <a className="block md:hidden text-3xl font-bold font-koulen tracking-wide dark:text-white text-main-dark">
                SN<span className="dark:text-main-blue text-main-red">.</span>
              </a>
            </Link>
            <div className="inline-flex gap-x-6 items-center">
              <div className="block md:hidden">
                <SwicthTheme />
              </div>
              <div className="inline-block cursor-pointer" onClick={handleOpen}>
                <div
                  className={`w-6 h-[2.5px] bg-main-dark dark:bg-white my-1 mx-0 duration-300 ${
                    menuOpen ? "-rotate-45  translate-y-[6px]" : ""
                  }`}
                ></div>
                <div className="w-6 h-[2.5px] my-1 mx-0"></div>
                <div
                  className={`w-6 h-[2.5px] bg-main-dark dark:bg-white my-1 mx-0 duration-300 ${
                    menuOpen ? "rotate-45 -translate-y-[7px]" : ""
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
  const router = useRouter();
  let tl = useRef();
  let menu = useRef();
  let imgMenu = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, reversed: true });
    tl.current.fromTo(
      menu.current,
      1,
      { xPercent: -100, ease: Expo.easeInOut },
      { xPercent: 0, ease: Expo.easeInOut }
    );
    tl.current.from(".nav", {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: Expo.easeOut,
    });
    tl.current.to(imgMenu.current, 1, { width: "100%", ease: Expo.easeInOut }, "-=0.5");
  }, []);

  useEffect(() => {
    if (toggle) {
      tl.current.play().timeScale(1);
    } else {
      tl.current.timeScale(1.5);
      tl.current.reverse();
    }
  }, [toggle]);

  return (
    <>
      {/* overlay */}
      <div
        ref={menu}
        className="fixed h-screen pl-20 bg-white dark:bg-black z-40 w-full"
      >
        {/* <MenuBackground>Menu</MenuBackground> */}
        <div className="h-screen w-full grid grid-cols-12">
          <ul className="z-[3] col-span-12 lg:col-span-6 w-full flex h-full flex-col justify-center px-20">
            {ListMenu.map((item, index) => (
              <li className="py-4 nav" key={index}>
                <Link href={item.href}>
                  <a
                    className={`${
                      router.pathname === item.href ? "" : ""
                    } text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-[''] before:absolute before:inset-x-0 before:bottom-3 before:bg-main-dark dark:before:bg-white before:transition-transform before:duration-300 before:ease-linear before:scale-x-0 before:origin-bottom-right before:hover:scale-x-100 before:hover:origin-bottom-left before:h-[4px]`}
                    onClick={onClick}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block lg:col-span-6 w-full overflow-hidden">
            <img
              ref={imgMenu}
              src="/assets/images/img-travelling.png"
              className="w-0 scale-100 h-full object-cover"
              alt="img"
            />
          </div>
        </div>
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

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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

const ListMenu = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/projects",
    name: "Project",
  },
  {
    href: "/blogs",
    name: "Blog",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];
