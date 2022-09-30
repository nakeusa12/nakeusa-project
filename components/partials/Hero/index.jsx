import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative flex flex-row min-h-screen w-full">
      <div className="relative max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto flex flex-col justify-center px-6 md:px-5 z-10">
        <div className="w-full block">
          <div className="inline-flex items-center bg-main-blue py-2 px-5 xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium uppercase tracking-[0.15rem]">
            HI EVERYONE <span className="wave text-3xl">👋</span>
          </div>
        </div>
        <div className="mt-5 md:mt-10 w-full max-w-6xl">
          <h1 className="font-bold font-koulen text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-main-dark leading-[130%] tracking-wider md:tracking-wide">
            Be Creative In Building A Unique and Quality WebApps
          </h1>
        </div>
        <div className="mt-5 md:mt-10 flex w-full items-center flex-wrap gap-x-3 md:gap-x-5">
          <p className="font-semibold text-base sm:text-lg md:text-xl text-main-dark">
            {" "}
            WEB DESIGNER{" "}
          </p>
          <span className="text-main-blue text-3xl">&#9656;</span>
          <p className="font-semibold text-base sm:text-lg md:text-xl text-main-dark">
            {" "}
            FRONTEND DEVELOPER{" "}
          </p>
          <span className="text-main-blue text-3xl">&#9656;</span>
          <p className="font-semibold text-base sm:text-lg md:text-xl text-main-dark">
            {" "}
            CONTENT CREATOR{" "}
          </p>
        </div>
        <div className="mt-10">
          <button className="py-3 md:py-4 font-sen px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider uppercase">
            LET’S EXPLORE
          </button>
        </div>
      </div>

        {/* <img src="/assets/images/photo.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 1, transition: 'opacity 500ms ease 0s'}} /> */}
      <div className="absolute right-0 top-80 z-0 inline-block opacity-25 aspect-auto w-[850px]">
        <Image
          src="/assets/images/photo.png"
          alt="Picture of the author"
          width={850}
          height={1000}
        />
      </div>
    </section>
  );
};
