import quotes from "../../../json/quote.json";
import { useEffect, useState } from "react";

export const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState(quotes);

  useEffect(() => {
    filterQuote();

    setInterval(() => {
      filterQuote();
    }, 60000);
  }, []);

  const filterQuote = () => {
    let dataQuote = quote.quotes;
    let randomShow = Math.floor(Math.random() * dataQuote.length);
    let randomQuote = dataQuote[randomShow];
    setQuote(randomQuote);
  };

  return (
    <div className="w-full grid grid-cols-12 gap-5">
      <div className="py-10 px-6 md:px-10 dark:bg-black/30 md:dark:bg-blackk/50 bg-white/30 md:bg-white/50  xl:col-start-2 col-span-12 xl:col-span-10 flex flex-col lg:flex-row gap-10 min-h-[400px]">
        <div className="font-koulen dark:text-main-blue text-main-red text-5xl lg:text-6xl md:max-w-[180px] w-full tracking-wider ">
          Quote{" "}
          <sup className="text-main-dark dark:text-white text-xl lg:text-2xl tracking-normal align-bottom">
            Of The
          </sup>{" "}
          <span className="dark:text-main-blue text-main-red text-5xl">
            DAY
          </span>
        </div>
        <div className="w-full space-y-8">
          <p className="font-bold font-k2d text-2xl sm:text-3xl lg:text-4xl dark:text-white text-main-dark leading-9 sm:leading-10 lg:leading-[48px] whitespace-normal text-left">
            "{quote.content}"
          </p>
          <div className="flex gap-5 items-start md:items-center flex-col-reverse md:flex-row">
            <p className="text-xl lg:text-2xl dark:text-white text-main-dark leading-8 font-sen">
              {quote.author}
            </p>
            <div className="w-40 h-1 dark:bg-main-blue bg-main-red"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
