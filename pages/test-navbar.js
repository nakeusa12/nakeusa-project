import { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cn from "classnames";
import { useOnScreen } from "@hooks/useOnScreen";
import Layout from "@components/molecules/Layout";
import { useRouter } from "next/router";
import { MarqueeText } from "@components/atoms/MarqueeText";
import parse from "html-react-parser";

gsap.registerPlugin(ScrollTrigger);

const themes = [
  { name: "Light" },
  { name: "Dark" },
  { name: "Emerald" },
  { name: "Pink" },
];

export default function TestNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Layout title="Test">
        <div className="mb-10 dark:bg-red-200"></div>
        <div className="p-10">
          <Nyobain status={"belum dimulai"} />
          <Nyobain status={"proses"} />
          <Nyobain status={"selesai"} />
        </div>
        <div className="p-10 flex flex-col gap-10">
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-['aaaaaaaaaaaaaaa'] before:w-full before:absolute before:bottom-3 before:left-0 before:text-transparent before:decoration-main-dark before:underline before:decoration-wavy wavy">
              Home
            </div>
          </div>
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-[''] before:absolute before:h-[4px] before:bg-main-dark before:w-full before:bottom-2 before:left-0 before:origin-left before:transform before:duration-200 before:ease-out before:scale-x-0 before:hover:scale-x-100">
              About
            </div>
          </div>
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-[''] before:absolute before:h-[4px] before:bg-main-dark before:w-full before:bottom-2 before:left-0 before:origin-left before:transform before:duration-200 before:ease-out before:scale-x-0 before:hover:scale-x-100">
              Project
            </div>
          </div>
          <div className="inline-flex">
            <div className="text-5xl dark:text-white text-main-dark transition-all duration-200 overflow-hidden pb-5 ease-in-out relative before:content-[''] before:absolute before:h-[4px] before:bg-main-dark before:w-full before:bottom-2 before:left-0 before:origin-left before:transform before:duration-200 before:ease-out before:scale-x-0 before:hover:scale-x-100">
              Contact
            </div>
          </div>
        </div>
        <HoverImage />
      </Layout>
    </>
  );
}

const HoverImage = () => {
  useEffect(() => {
    const links = [...document.querySelectorAll("li")];

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseover", () => {
        for (let j = 0; j < links.length; j++) {
          if (j !== i) {
            links[j].style.opacity = 0.2;
            links[j].style.zIndex = 0;
          } else {
            links[j].style.opacity = 1;
            links[j].style.zIndex = 3;
          }
        }
      });

      links[i].addEventListener("mouseleave", () => {
        for (let i = 0; i < links.length; i++) {
          links[i].style.opacity = 1;
        }
      });

    }

  }, []);

  return (
    <div className="p-10">
      <canvas></canvas>

      <section class="projects-section">
        <div class="projects">
          <ul>
            <li>PROJECT ONE</li>
            <li>PROJECT TWO</li>
            <li>PROJECT THREE</li>
            <li>PROJECT FOUR</li>
            <li>PROJECT FIVE</li>
            <li>PROJECT SIX</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const Nyobain = ({ status }) => {
  return (
    <div
      className={`flex gap-x-4 items-center capitalize 
        ${
          (status === "belum dimulai" && "text-red-500") ||
          (status === "proses" && "text-blue-500") ||
          (status === "selesai" && "text-green-500")
        } `}
    >
      {status}
      <div
        className={`w-4 h-4 rounded-full ${
          (status === "belum dimulai" && "bg-red-500") ||
          (status === "proses" && "bg-blue-500") ||
          (status === "selesai" && "bg-green-500")
        } }`}
      />
    </div>
  );
};

const GalleryItem = ({ src, category, title, updateActiveImage, index }) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      // className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      className={cn(
        "gallery-item-wrapper aspect-video h-full grid border w-full",
        { "is-reveal": onScreen }
      )}
      ref={ref}
    >
      <div className="w-full bg-red-50 max-w-3xl h-auto mx-auto flex flex-col justify-center relative will-change-transform">
        <div className="w-full h-[450px]">
          <img
            src={src}
            className="gallery-item-image object-contain object-center origin-center w-full h-full will-change-transform scale-y-75 -skew-y-2 transition-all duration-300 grayscale sepia-[20%] brightness-[80%] ease-in-out"
            alt="project"
          />
        </div>
        <div className="flex w-full items-center justify-between mt-5">
          <div className="text-main-dark">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-lg">{category}</p>
          </div>
          <span>#{index + 1}</span>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const projectContainer = useRef();
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    let sections = gsap.utils.toArray(".gallery-item-wrapper");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectContainer.current,
        start: "top top",
        scrub: 0.5,
        markers: true,
        pin: true,
        snap: 1 / (sections.length - 1),
        end: () => `+=${projectContainer.current.offsetWidth}`,
      },
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section className="section-wrapper">
      <div
        className="h-screen px-0 w-[400%] flex flex-nowrap"
        ref={projectContainer}
      >
        <div className="absolute left-20 -z-10 h-full leading-4 text-main-blue font-semibold inline-flex flex-row items-center gap-x-4 text-[12rem] -rotate-90 font-sen">
          <span>{activeImage}</span>
          <span>/</span>
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
};

const images = [
  {
    src: "https://www.datocms-assets.com/23447/1625738350-photoscoper.png?auto=format&dpr=1&w=1600",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://www.datocms-assets.com/23447/1596891182-embersword-hero.png?auto=format&dpr=1&w=1600",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://www.datocms-assets.com/23447/1585257493-base.jpg?auto=format&dpr=1&w=1600",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://www.datocms-assets.com/23447/1596369335-boa-hero.png?auto=format&dpr=1&w=1600",
    title: "Cereus Penuvianus",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

const useArrayRef = () => {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
};

export const Project = () => {
  const projectContainer = useRef();
  const [projects, setProjectsRef] = useArrayRef();

  useEffect(() => {
    const totalProjects = projects.current.length;

    gsap.to(projects.current, {
      xPercent: -100 * (totalProjects - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalProjects - 1),
        end: () => "+=" + projectContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="flex flex-nowrap h-screen w-[400%]" ref={projectContainer}>
      {projectData.map((card, index) => {
        return (
          <ProjectCard
            key={index}
            total={index + 1}
            ref={setProjectsRef}
            value={card}
            title={card.title}
            img={card.src}
            category={card.category}
          />
        );
      })}
    </div>
  );
};

const ProjectCard = forwardRef(({ title, img, category, total }, ref) => {
  return (
    <div
      className="flex flex-col justify-center items-center relative w-full h-full bg-red-200"
      ref={ref}
    >
      <div className="inline-flex items-center font-sen font-bold gap-x-2 text-main-blue text-xl">
        {total} <div className="w-40 h-1 bg-main-blue"></div>
      </div>
      <div className=" bg-green-400 w-96 h-40">
        <Image
          src={img}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="mt-10 space-y-4">
        <h3 className="font-bold text-black text-4xl font-sen">{title}</h3>
        <p className="font-sen text-xl text-main-gray">2020 - {category}</p>
      </div>
    </div>
  );
});

const projectData = [
  {
    src: "/assets/images/images.png",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/assets/images/images.png",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/assets/images/images.png",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "/assets/images/images.png",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];
