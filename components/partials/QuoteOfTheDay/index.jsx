export const QuoteOfTheDay = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-5">
      <div className="py-10 px-10 bg-white bg-opacity-50 xl:col-start-2 col-span-12 xl:col-span-10 flex flex-col lg:flex-row gap-12 min-h-[400px]">
        <div className="font-righteous text-main-blue text-5xl lg:text-6xl max-w-[200px] w-full">
          Quote <br />{" "}
          <sup className="text-main-dark text-xl lg:text-2xl">Of The</sup>{" "}
          <span className="text-main-blue text-4xl lg:text-5xl">DAY</span>
        </div>
        <div className="w-full space-y-8">
          <p className="font-bold font-sen text-2xl sm:text-3xl lg:text-4xl text-main-dark leading-9 sm:leading-10 lg:leading-[48px] whitespace-normal">
            “I'm selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can't handle
            me at my worst, then you sure as hell don't deserve me at my best.”
          </p>
          <div className="inline-flex gap-x-5 items-center">
            <p className="text-xl lg:text-2xl text-main-dark leading-8 font-sen">
              Marilyn Monroe
            </p>
            <div className="w-40 h-1 bg-main-blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
