import { ButtonLink } from "@components/atoms/ButtonLink";
import { MarqueeText } from "@components/atoms/MarqueeText";
import { useEffect } from "react";
import gsap from "gsap";

export const ServiceHome = () => {
  useEffect(() => {
    const serviceExplainWrap = document.querySelector(
      ".serviceExplain-wrapper"
    );
    const serviceExplain = document.querySelector(".serviceExplain");
    const techList = document.querySelectorAll(".tech-list");
    let serviceTL = new gsap.timeline({
      scrollTrigger: {
        trigger: serviceExplainWrap,
        start: "top bottom",
      },
    });

    serviceTL.from(serviceExplain, { y: 200, opacity: 0, duration: 0.7 });
    serviceTL.from(techList, { y: 200, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");
  }, []);

  return (
    <section className="w-full h-full mt-40">
      <MarqueeText
        text={"SERVICES • SERVICES • SERVICES • SERVICES • "}
        title={"WHAT CAN I DO"}
      />

      <div className="max-w-7xl 2xl:max-w-[1440px] w-full md:w-11/12 lg:w-4/5 mx-auto px-6 md:px-5 mt-20 mb-40 md:mb-60 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 serviceExplain-wrapper">
        <ServiceExplain />
        <div className="w-full gap-x-20 xl:gap-x-40 gap-y-10 flex sm:flex-row flex-col">
          <TechList
            title={techList.techStack.title}
            item={techList.techStack.list}
          />
          <TechList
            title={techList.animeStack.title}
            item={techList.animeStack.list}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceExplain = () => {
  return (
    <div className="w-full space-y-10 serviceExplain">
      <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal text-main-dark dark:text-white">
        Starting from UI Design as a static and dynamic page, animated
        interaction becomes an attraction for users. WebApps that can be
        accessed when offline on mobile.
      </p>
      <p className="font-k2d text-base md:text-lg font-medium md:leading-8 whitespace-normal text-main-dark dark:text-white">
        I advise you on what improvements to make to your site, while staying
        within the "custom made" vision. According to your philosophy and goals.
      </p>
      <ButtonLink href={"/"} value={"Learn More"} />
    </div>
  );
};

const TechList = ({ title, item }) => {
  return (
    <div className="tech-list">
      <h3 className="text-main-dark dark:text-white uppercase font-poppins font-bold text-lg tracking-wider">
        {title}
      </h3>
      <ul className="text-main-dark dark:text-white space-y-4 font-k2d mt-5 text-base">
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

let techList = {
  techStack: {
    title: "Tech Stack",
    list: [
      "HTML / CSS / JavaScript",
      "React / Next JS",
      "Svelte / SvelteKit JS",
      "Alphine Js",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  animeStack: {
    title: "Anime Stack",
    list: ["Framer Motion", "GSAP", "Lottie JS", "ScrollReveal JS"],
  },
};
