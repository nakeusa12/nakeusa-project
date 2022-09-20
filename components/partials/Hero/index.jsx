export const Hero = () => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-6 md:px-5 min-h-screen">
      <div className="relative md:left-[calc(8.3%)] md:mr-[20%] 2xl:mr-0 z-10">
        <div className="w-full block">
          <span className="inline-block bg-main-blue py-2 px-5 xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium uppercase tracking-[0.15rem]">
            HI EVERYONE 👋
          </span>
        </div>
        <div className="max-w-[1197px] w-full mt-5">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5vw] text-main-dark xl:leading-[130%] tracking-wide">
            Be Creative In Building A Unique and Quality WebApps
          </h1>
        </div>
        <div className="mt-10 flex w-full items-center flex-wrap gap-x-5 mb-14">
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
        <button className="py-3 md:py-4 px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider uppercase">
          LET’S EXPLORE
        </button>
      </div>

      {/* <div className="absolute right-0 top-1/3">
        <img src="/assets/images/photo.png" className=" h-full w-full" alt="" />
      </div> */}

      <div>
        <div className="styles__Photo-sc-xja5w-4 bg-red-100 absolute right-0 top-0 z-0 inline-block opacity-25">
          <div
            style={{position: 'relative', overflow: 'hidden'}}
          >
            <img
//               sizes=""
//               srcset="https://www.datocms-assets.com/23447/1628268831-adr5017.jpg?auto=format&amp;dpr=0.07&amp;w=3200 200w,
// https://www.datocms-assets.com/23447/1628268831-adr5017.jpg?auto=format&amp;dpr=0.13&amp;w=3200 400w,
// https://www.datocms-assets.com/23447/1628268831-adr5017.jpg?auto=format&amp;dpr=0.25&amp;w=3200 800w,
// https://www.datocms-assets.com/23447/1628268831-adr5017.jpg?auto=format&amp;dpr=0.38&amp;w=3200 1200w,
// https://www.datocms-assets.com/23447/1628268831-adr5017.jpg?auto=format&amp;dpr=0.5&amp;w=3200 1600w,
// https://www.datocms-assets.com/23447/1628268831-adr5017.jpg?auto=format&amp;dpr=0.75&amp;w=3200 2400w,
// https://www.datocms-assets.com/23447/1628268831-adr5017.jpg?auto=format&amp;dpr=1&amp;w=3200 3200w"
              src="/assets/images/photo.png"
              alt="Adam Roberts in his designer habitat"
              loading="lazy"
              style={{maxWidth: '800px', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 1, transition: 'opacity 500ms ease 0s'}}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
