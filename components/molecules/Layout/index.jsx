import Head from "next/head";
import gsap, { TweenMax } from "gsap";
import { Header } from "../../organisms/Header";
import { useEffect, useRef, useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import { CustomCursor } from "@components/atoms/CustomCursor";

const Layout = ({ children, titlePage, metaDescription }) => {
  const title = titlePage ? `${titlePage} - Saiful Nakeusa` : "Saiful Nakeusa";

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });

    () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="noise"></div>
      <CustomCursor />
      <Header />
      <main
        className="relative pl-0 overflow-hidden antialiased bg-white dark:bg-black md:pl-20"
        id="main-container"
      >
        {children}

        <button
          className={`fixed z-10 text-xl transition-all duration-300 ease-in-out rounded-full flex-center right-5 md:right-8 bottom-5 md:bottom-8 bg-main-purple text-main-dark dark:text-white btn-gotop ${
            showTopButton ? "opacity-100" : "opacity-0"
          }`}
          onClick={goToTop}
        >
          <BsTriangleFill className="w-4 h-4 md:w-5 md:h-5" />
          {/* <span className=""></span> */}
        </button>
      </main>
    </>
  );
};

export default Layout;
