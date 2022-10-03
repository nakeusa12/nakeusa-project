import Head from "next/head";
import { Header } from "../Header";
import { useEffect, useState } from "react";
import { BsTriangleFill } from "react-icons/bs";

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
      <Header />
      <main
        className="antialiased bg-white dark:bg-black pl-0 md:pl-20 overflow-hidden"
        id="main-container"
      >
        {children}

        {showTopButton && (
          <button
            className="flex-center fixed right-5 md:right-8 bottom-5 md:bottom-8 z-10 rounded-full bg-main-purple text-xl text-white btn-gotop duration-300 ease-in-out"
            onClick={goToTop}
          >
            <span className="inline-flex flex-col gap-y-2.5">
              <BsTriangleFill className="w-3 h-3" />
              <BsTriangleFill className="w-3 h-3" />
              <BsTriangleFill className="w-3 h-3" />
            </span>
          </button>
        )}
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
