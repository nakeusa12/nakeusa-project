import { IoDocumentText } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full h-full z-10 relative pt-16 pb-10">
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 grid md:grid-cols-2 gap-x-10">
        <div className="w-full flex flex-col gap-y-20">
          <span className="text-2xl sm:text-3xl lg:text-4xl dark:text-white text-main-dark">
            For work enquiries or if you just want to say hello, email{" "}
            <Link href={"mailto:sfulnakeusa@gmail.com"}>
              <a className="inline-block relative cursor-pointer top-1.5 md:py-0.5 overflow-hidden group">
                <span className="dark:bg-main-blue bg-main-red w-full h-full absolute -bottom-12 duration-200 ease-out group-hover:bottom-0 opacity-0 group-hover:opacity-100"></span>
                <span className="block relative duration-200 ease-out group-hover:text-white">
                  sfulnakeusa@gmail.com
                </span>
              </a>
            </Link>
          </span>
          <ul className="w-full flex flex-row items-center justify-center md:justify-start flex-wrap gap-10 xl:gap-20 dark:text-white text-main-dark">
            <Link href={"https://twitter.com/nakeusaa"}>
              <a target="_blank">
                <FaTwitter className="text-3xl" />
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/nakeusa09/"}>
              <a target="_blank">
                <FaLinkedin className="text-3xl" />
              </a>
            </Link>
            <Link href={"https://github.com/nakeusa12"}>
              <a target="_blank">
                <FaGithub className="text-3xl" />
              </a>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1mXB2BXdFI2BjquCVnhAiNdxoEDCI01TR/view?usp=share_link"
              }
            >
              <a target="_blank">
                <IoDocumentText className="text-3xl text-main-dark dark:text-white" />
              </a>
            </Link>
          </ul>
          <p className="dark:text-white text-main-dark ">
            Thanks to several websites for the inspiration. coding by me ©2022
          </p>
        </div>
        <div className=""></div>
      </div>
    </footer>
  );
};
