import Head from "next/head";
import gsap, { TweenMax } from "gsap";
import { Header } from "../Header";
import { useEffect, useRef, useState } from "react";
import { BsTriangleFill } from "react-icons/bs";
import { CustomCursor } from "@components/basics/CustomCursor";
import { Footer } from "../Footer";

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
        className="antialiased bg-white dark:bg-black pl-0 md:pl-20 overflow-hidden"
        id="main-container"
      >
        {children}

        <Footer />

        {showTopButton && (
          <button
            className="flex-center fixed right-5 md:right-8 bottom-5 md:bottom-8 z-10 rounded-full bg-main-purple text-xl text-main-dark dark:text-white btn-gotop duration-300 ease-in-out"
            onClick={goToTop}
          >
            <span className="">
              <BsTriangleFill className="w-3 h-3 md:w-5 md:h-5" />
            </span>
          </button>
        )}
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
