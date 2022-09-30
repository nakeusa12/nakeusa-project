export const QuoteOfTheDay = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-5">
      <div className="py-10 px-6 md:px-10 bg-white bg-opacity-50 xl:col-start-2 col-span-12 xl:col-span-10 flex flex-col lg:flex-row gap-10 min-h-[400px]">
        <div className="font-koulen text-main-blue text-5xl lg:text-6xl md:max-w-[180px] w-full tracking-wider ">
          Quote{" "}
          <sup className="text-main-dark text-xl lg:text-2xl tracking-normal align-bottom">Of The</sup>{" "}
          <span className="text-main-blue text-5xl">DAY</span>
        </div>
        <div className="w-full space-y-8">
          <p className="font-bold font-k2d text-2xl sm:text-3xl lg:text-4xl text-main-dark leading-9 sm:leading-10 lg:leading-[48px] whitespace-normal text-left">
            “I'm selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can't handle
            me at my worst, then you sure as hell don't deserve me at my best.”
          </p>
          <div className="flex gap-5 items-start sm:items-center flex-col-reverse sm:flex-row">
            <p className="text-xl lg:text-2xl text-main-dark leading-8 font-sen">
              Marilyn Monroe
            </p>
            <div className="w-20 sm:w-40 h-1 bg-main-blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
