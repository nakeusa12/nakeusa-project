import { IoIosArrowDown } from "react-icons/io";

export const Hero = () => {
  return (
    <>
      <div className="lg:block hidden">
        <div className="absolute top-[5%] xl:top-[8%] 2xl:top-[15%] left-60">
          <img src="assets/svgs/rectangle1.svg" alt="" />
        </div>
        <div className="absolute top-[60%] -left-16">
          <img src="assets/svgs/rectangle2.svg" alt="" />
        </div>
        <div className="absolute top-[20%] right-24">
          <img src="assets/svgs/rectangle3.svg" alt="" />
        </div>
        <div className="absolute top-[50%] -right-2">
          <img src="assets/svgs/rectangle4.svg" alt="" />
        </div>
        <div className="absolute top-[90%] xl:top-[80%] 2xl:top-[70%]  right-80">
          <img src="assets/svgs/rectangle5.svg" alt="" />
        </div>
      </div>

      <div className="w-full z-10 mx-auto max-w-3xl xl:max-w-5xl 2xl:max-w-[96rem] flex justify-center flex-col lg:px-0 px-8">
        <h4 className="text-main-dark text-lg font-bold tracking-wide">
          Hello, I'm Saiful Nakeusa
        </h4>
        <h1 className="flex flex-wrap items-center mt-5 mb-10">
          {titles.map((title) => (
            <div key={title.name} className="inline-flex items-center ">
              <h1
                className={`sm:flex-none text-xl xs:text-2xl sm:text-3xl md:text-[45px] leading-10 md:leading-[5.5rem] 2xl:text-[60px] font-bold ${
                  title.color ? "text-main-primary" : "text-black"
                }`}
              >
                {title.name}
              </h1>
              {title.slash && (
                <span className="text-xl xs:text-2xl md:text-[45px] 2xl:text-[60px] font-bold md:mx-10 mx-2">
                  /
                </span>
              )}
            </div>
          ))}
        </h1>
        <p className="text-main-dark text-lg font-bold tracking-wide">
          Web Designer and Front-end Web Developer
        </p>
        <ul className="flex items-center mt-1 gap-x-4">
          <li>#project</li>
          <li>#skills</li>
          <li>#my-contact</li>
        </ul>
        <div className="inline-flex pt-4">
          <div className="bg-main-primary text-white p-2 text-3xl font-bold rounded-full">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

const titles = [
  { name: "Building digital products", color: false, slash: true },
  { name: "Visions", color: true, slash: true },
  { name: "Creative", color: false, slash: true },
  { name: "Brands", color: true, slash: true },
  { name: "Experience", color: false, slash: false },
];
