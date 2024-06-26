import quotes from "json/quote.json";
import { useEffect, useState } from "react";

export const QuoteSection = () => {
  return (
    <section className="max-w-7xl 2xl:max-w-[1440px] w-full mx-auto px-0 xs:px-6 md:px-5 z-10 relative mt-40 md:mt-0">
      <QuoteOfTheDay />
    </section>
  );
};

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState(quotes);

  useEffect(() => {
    filterQuote();

    setInterval(() => {
      filterQuote();
    }, 60000);

    return function cleanup() {
      clearInterval();
    };
  }, []);

  const filterQuote = () => {
    let dataQuote = quote.quotes;
    let randomShow = Math.floor(Math.random() * dataQuote.length);
    let randomQuote = dataQuote[randomShow];
    setQuote(randomQuote);
  };

  return (
    <div className="grid w-full grid-cols-12 gap-5">
      <div className="py-10 px-6 md:px-10 dark:bg-black/30 md:dark:bg-blackk/50 bg-white/30 md:bg-white/50  xl:col-start-2 col-span-12 xl:col-span-10 flex flex-col lg:flex-row gap-10 min-h-[400px]">
        <div className="font-koulen dark:text-main-blue text-main-red text-5xl lg:text-6xl md:max-w-[180px] w-full tracking-wider ">
          Quote{" "}
          <sup className="text-xl tracking-normal align-bottom text-main-dark dark:text-white lg:text-2xl">
            Of The
          </sup>{" "}
          <span className="text-5xl dark:text-main-blue text-main-red">
            DAY
          </span>
        </div>
        <div className="w-full space-y-8">
          <p className="font-bold font-k2d text-2xl sm:text-3xl lg:text-4xl dark:text-white text-main-dark leading-9 sm:leading-10 lg:leading-[48px] whitespace-normal text-left">
            "{quote.content}"
          </p>
          <div className="flex flex-col-reverse items-start gap-5 md:items-center md:flex-row">
            <p className="text-xl leading-8 lg:text-2xl dark:text-white text-main-dark font-sen">
              {quote.author}
            </p>
            <div className="w-40 h-1 dark:bg-main-blue bg-main-red"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
