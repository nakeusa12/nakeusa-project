import Image from "next/image";

export const BlogCard = () => {
  return (
    <div className="relative cursor-pointer rounded border-2 dark:border-main-dark border-gray-200 p-10 group">
      <span className="text-sm text-main-dark/70 dark:text-white/70">
        08 Oct, 2022 &#9679; 4 minutes ago
      </span>
      <div className="w-full aspect-auto my-5 group-hover:scale-105 duration-500 ease-in-out">
        <Image
          src="/assets/images/img-travelling.png"
          alt="post"
          layout="responsive"
          width={100}
          height={40}
          objectFit={"cover"}
          objectPosition={"center"}
        />
      </div>
      <div className="flex-col flex justify-between gap-y-10">
        <div className="w-full space-y-3 relative">
          <h3 className="text-main-dark dark:text-white text-xl font-semibold font-k2d">
            Islands in the archipelago with very beautiful views
          </h3>
          <p className="text-sm text-main-dark/70 dark:text-white/70 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        <div className="w-full text-left">
          <a href="#" className="inline-flex items-center ">
            <span className="w-0 h-[3px] group-hover:w-16  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
            <span className="relative mx-2 text-main-dark dark:text-white">
              Read More
            </span>
            <span className="w-16 h-[3px] group-hover:w-0  duration-500 ease-in-out bg-main-dark dark:bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  );
};
