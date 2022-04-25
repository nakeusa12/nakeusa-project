import gsap, { Power2 } from "gsap";
import { useState, useEffect, useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContent>
      <NavHead>
        <div className="logo">
          <img src="assets/images/logo.png" alt="" />
        </div>
        <NavBurger onClick={handleOpen}>
          <div className="w-4 h-[3px] rounded-full bg-black" />
          <div className="w-8 h-[3px] rounded-full bg-black" />
          <div className="w-4 h-[3px] rounded-full bg-black" />
        </NavBurger>
      </NavHead>

      {/* <!-- Menu Stuff --> */}
      <ShowMenu toggle={menuOpen} onClick={handleOpen} />
    </NavbarContent>
  );
};

const ShowMenu = ({ toggle, onClick }) => {
  let tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(".overlay", {
      opacity: 1,
      duration: 1,
      top: 0,
      ease: Power2.easeInOut,
    });
    tl.current.to(
      ".menu",
      {
        opacity: 1,
        duration: 1,
        top: 0,
        ease: Power2.easeInOut,
      },
      ">-0.6"
    );
    tl.current.to(
      ".nav",
      {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3,
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

  // const HoverMenuClose = () => {

  // }

  return (
    <>
      {/* overlay */}
      <MenuOverlay className="overlay" />
      <MenuShowNavbar className="bg-slate-800 menu">
        <MenuBackground>Menu</MenuBackground>
        <MenuClose
          className="menuClose"
          onClick={onClick}
        >
          <img src="assets/svgs/exit.svg" alt="" />
        </MenuClose>
        <ul className="z-[3] space-y-10">
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-white transition-all duration-200 ease-in-out hover:text-gray-640 "
              onClick={onClick}
            >
              Home
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-white transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              About
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-white transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Portfolio
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-white transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Blog
            </a>
          </li>
          <li className="-mb-5 opacity-0 nav">
            <a
              href="#"
              className="text-5xl text-white transition-all duration-200 ease-in-out hover:text-gray-400"
              onClick={onClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </MenuShowNavbar>
    </>
  );
};

let NavbarContent = tw.nav`
  fixed z-40 w-full h-full bg-transparent
`;

let NavHead = tw.div`
  flex items-center justify-between w-full p-10
`;

let NavBurger = tw.div`
  inline-flex flex-col gap-1.5 transition-all duration-200 ease-in-out cursor-pointer
`;

let MenuOverlay = tw.div`
  fixed w-full h-screen bg-gray-200 opacity-50 -top-full
`;
let MenuShowNavbar = tw.div`
  fixed flex flex-row items-center justify-center  sm:justify-start w-full h-screen px-40  opacity-30 -top-full 
`;

let MenuClose = tw.div`
  cursor-pointer absolute right-12 top-11
`;

let MenuBackground = styled.div`
  position: absolute;
  font-size: 15rem;
  font-weight: 600;
  color: rgba(235, 235, 235, 0.04);
  user-select: none;
  z-index: 1;
`;
