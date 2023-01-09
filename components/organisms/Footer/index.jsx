import { IoDocumentText } from "react-icons/io5";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full h-full z-10 relative pt-16 pb-10">
      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 grid md:grid-cols-2 gap-x-10">
        <div className="w-full flex flex-col gap-y-20">
          <span className="text-2xl sm:text-3xl lg:text-4xl dark:text-white text-main-dark">
            For work enquiries or if you just want to say hello, email{" "}
            <Link href={"mailto:sfulnakeusa@gmail.com"}>
                <span className="emailFooter bg-gradient-to-r from-main-red to-main-red dark:from-main-blue dark:to-main-blue">
                  sfulnakeusa@gmail.com
                </span>
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
        <div className=""></div>
      </div>
    </footer>
  );
};