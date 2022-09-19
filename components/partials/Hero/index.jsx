

export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center px-6 md:px-5">
      <div className="relative md:left-[calc(8.3%)] md:mr-[10%] 2xl:mr-0">
        <div className="w-full block">
          <span className="inline-block bg-main-blue py-2 px-5 text-lg sm:text-xl md:text-2xl text-white font-medium uppercase tracking-[0.15rem]">
            HI EVERYONE 👋
          </span>
        </div>
        <div className="max-w-[1197px] w-full mt-5">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5vw] text-main-dark xl:leading-[124px] tracking-wide">Be Creative In Building A Unique and Quality WebApps</h1>
        </div>
        <div className="mt-10 flex w-full items-center flex-wrap gap-x-5 opacity-50 mb-14">
          <p className="font-semibold text-base sm:text-lg md:text-xl text-black"> WEB DESIGNER </p>
          <span className="text-main-blue text-3xl">&#9656;</span>
          <p className="font-semibold text-base sm:text-lg md:text-xl text-black"> FRONTEND DEVELOPER </p>
          <span className="text-main-blue text-3xl">&#9656;</span>
          <p className="font-semibold text-base sm:text-lg md:text-xl text-black"> CONTENT CREATOR </p>
        </div>
        <button className="py-3 md:py-4 px-10 md:px-12 inline-flex items-center justify-center border border-main-dark text-main-dark text-sm md:text-xl tracking-wider">
          LET’S EXPLORE
        </button>
      </div>
      
      <div></div>
    </section>
  );
};
