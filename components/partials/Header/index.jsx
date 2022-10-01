import { useEffect, useRef, useState } from "react";
import { useTheme } from 'next-themes';
import gsap, { Power2 } from "gsap";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

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

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <a
          role={"button"}
          className="font-extrabold text-sm"
          onClick={() => setTheme("light")}
        >
          LIGHT
        </a>
      );
    } else {
      return (
        <a
          role={"button"}
          className="font-extrabold text-sm"
          onClick={() => setTheme("dark")}
        >
          DARK
        </a>
      );
    }
  }

  return (
    <>
      <header className="fixed left-0 top-0 right-0 overflow-hidden z-50 dark:bg-main-dark bg-white md:w-20">
        <nav className="md:min-h-screen border-b md:border-r dark:border-gray-500 border-gray-200 flex flex-col w-full justify-between items-center py-6 md:py-10">
          <div className="w-full flex md:flex-col flex-row items-center justify-between px-5 m:px-0">
            <a href="#" className="w-10 h-10 block md:hidden">
              <img
                src="/assets/svgs/logo.svg"
                className="w-full h-full"
                alt="logo-snakeusa"
              />
            </a>
            <div className="inline-flex gap-x-6 items-center">
              <div className="block md:hidden">
                {renderThemeChanger()}
              </div>
              <button
                className="inline-flex flex-col gap-1.5 transition-all duration-200 ease-in-out cursor-pointer"
                onClick={handleOpen}
              >
                <div
                  className={`w-4 h-[3px] rounded-full dark:bg-white bg-black ml-auto ${
                    menuOpen &&
                    "-rotate-45 -mb-[3.3px] mr-[3px] duration-100 transition-all "
                  }`}
                />
                <div
                  className={`w-8 h-[3px] rounded-full dark:bg-white bg-black ${
                    menuOpen && "rotate-45 duration-100 transition-all"
                  }`}
                />
                <div
                  className={`w-4 h-[3px] rounded-full dark:bg-white bg-black mr-auto ${
                    menuOpen &&
                    "-rotate-45 -mt-[3.5px] ml-[2.5px] duration-100 transition-all"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="hidden md:block -rotate-90">
            <Link href={"/"}>
              <a className="uppercase text-sm whitespace-nowrap tracking-widest dark:text-white text-main-blue font-medium cursor-pointer">Saiful Nakeusa</a>
            </Link>
          </div>
          <div className="hidden md:block">
            {renderThemeChanger()}
            <div id="sun-moon">
              <div className="moon"></div>
            </div>
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
    tl.current.to(".overlay", {
      opacity: 1,
      duration: 1,
      x: 0,
    });
    tl.current.to(
      ".menu",
      {
        opacity: 1,
        duration: 0.5,
        x: 0,
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
      tl.current.reverse();
    }
  }, [toggle]);

  return (
    <>
      {/* overlay */}
      <div className="overlay fixed w-full h-screen bg-main-blue -translate-x-full z-30" />
      <div className="fixed flex flex-row items-center justify-center sm:justify-start w-full h-screen px-40 -translate-x-full bg-white z-40 menu">
        {/* <MenuBackground>Menu</MenuBackground> */}
        <div
          className="cursor-pointer absolute right-12 top-11"
          onClick={onClick}
        >
          <img src="assets/svgs/exit.svg" alt="" />
        </div>
        <ul className="z-[3] space-y-10">
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-main-dark transition-all duration-200 ease-in-out hover:text-gray-640 "
              onClick={onClick}
            >
              Home
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              About
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Portfolio
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Blog
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-main-dark transition-all duration-200 ease-in-out hover:text-gray-400"
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
