import { useEffect, useRef, useState } from "react";
import gsap, { Power2 } from "gsap";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="fixed left-0 top-0 right-0 overflow-hidden py-5 px-6 md:h-screen md:w-20 border-b md:border-r border-gray-200 z-50 flex md:flex-col justify-between bg-white">
        <div className="w-full gap-y-10 flex md:flex-col flex-row items-center justify-between">
          <a href="#" className="w-10 h-10">
            <img
              src="/assets/svgs/logo.svg"
              className="w-full h-full"
              alt="logo-snakeusa"
            />
          </a>
          <div className="inline-flex gap-x-6 items-center">
            <div className="block md:hidden">
              <button className="bg-black w-6 h-6 rounded-full"></button>
            </div>
            {menuOpen ? (
              <button
                className="inline-flex flex-col gap-1.5 transition-all duration-200 ease-in-out cursor-pointer"
                onClick={handleOpen}
              >
                X
              </button>
            ) : (
              <button
                className="inline-flex flex-col gap-1.5 transition-all duration-200 ease-in-out cursor-pointer"
                onClick={handleOpen}
              >
                <div className="w-4 h-[3px] rounded-full bg-black ml-auto" />
                <div className="w-8 h-[3px] rounded-full bg-black" />
                <div className="w-4 h-[3px] rounded-full bg-black mr-auto" />
              </button>
            )}
          </div>
        </div>
        <div className="hidden md:block">
          <button className="bg-black w-6 h-6 rounded-full"></button>
        </div>
        <div className="hidden md:block">UP</div>
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
      x: 80,
    });
    tl.current.to(
      ".menu",
      {
        opacity: 1,
        duration: 0.8,
        x: 80,
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
      ">-0.7"
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
