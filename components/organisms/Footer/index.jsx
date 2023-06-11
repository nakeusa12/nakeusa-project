import { IoDocumentText } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full h-full pt-16 pb-10">
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5">
        <div className="flex flex-col w-full max-w-2xl gap-y-20">
          <span className="text-2xl sm:text-3xl lg:text-4xl dark:text-white text-main-dark">
            For work enquiries or if you just want to say hello, email{" "}
            <Link href={"mailto:sfulnakeusa@gmail.com"}>
                <span className="emailFooter bg-gradient-to-r from-main-red to-main-red dark:from-main-blue dark:to-main-blue">
                  sfulnakeusa@gmail.com
                </span>
            </Link>
               
          </span>
          <ul className="flex flex-row flex-wrap items-center justify-center w-full gap-10 md:justify-start xl:gap-20 dark:text-white text-main-dark">
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
                "https://drive.google.com/file/d/1ysWp7qah9Thgqi1qRSxKkVXo8eie9eZz/view?usp=sharing"
              }
            >
              <a target="_blank" style={{}}>
                <IoDocumentText className="text-3xl text-main-dark dark:text-white" />
              </a>
            </Link>
          </ul>
          <p className="dark:text-white text-main-dark ">
            Thanks to several websites for the inspiration. coding by me ©2022
          </p>
        </div>
      </div>
    </footer>
  );
};