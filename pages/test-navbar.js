import Head from "next/head";
import { Navbar } from "@components/partials/Navbar";
import Link from "next/link";
import { forwardRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cn from "classnames";
import { useOnScreen } from "@hooks/useOnScreen";
import Layout from "@components/partials/Layout";
import { MarqueeText } from "@components/basics/MarqueeText";
gsap.registerPlugin(ScrollTrigger);

export default function TestNavbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <>
      <Layout title="Test">
        <div className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          explicabo a, non ullam tempore rem molestiae nesciunt officiis
          excepturi ad architecto et eaque rerum atque? Unde veniam nisi totam
          aut facere dolores nam error, architecto quidem eos beatae temporibus
          tempora, sequi vitae esse eius officia, aperiam doloribus id. Optio
          reiciendis natus, veritatis, dolor consectetur perspiciatis molestias
          adipisci accusamus porro facere impedit debitis dolores similique!
          Esse consequatur, nihil autem reprehenderit sunt minima aut officia
          dicta porro nobis quisquam, dolorem, eligendi cum ducimus facilis.
          Cupiditate numquam maiores minima possimus. Tenetur dignissimos a quo
          quam doloribus aspernatur non, ex modi. Aliquam consequatur
          doloremque, nostrum ad voluptate, dolorum sapiente repellat culpa
          voluptatum eveniet nobis itaque at explicabo eum enim facere beatae
          tempore harum. Possimus voluptatibus nemo beatae blanditiis tempora
          dolorem, dolor excepturi modi! Ea nulla sit id, obcaecati tenetur
          omnis nemo magni asperiores? Inventore, quod repellendus molestiae
          quisquam repellat fuga odio quam beatae qui modi necessitatibus
          excepturi, cumque eum eaque sit ut sequi placeat! Consequatur
          voluptatum dignissimos doloremque, id hic quasi sint officiis ducimus
          veniam qui, temporibus saepe nemo quidem illum maiores voluptas
          consequuntur eius. Sit eveniet atque aperiam accusantium!
          Perspiciatis, aliquid! Ipsa voluptas reiciendis velit asperiores
          placeat iusto, dolores voluptates sequi nemo quas illo labore rem
          facilis odio corporis quidem. Repellat doloribus nulla maxime, modi
          porro obcaecati qui sapiente alias omnis sint voluptates expedita
          quasi architecto officia illo reiciendis cupiditate debitis
          consectetur nemo quisquam harum quos mollitia. Repellat qui totam
          perferendis aspernatur doloribus illum iusto nam pariatur. Eveniet rem
          corporis sint laborum consequuntur repellendus? Molestias tempore eum
          ullam minus quibusdam reprehenderit dolorem animi cum voluptate,
          adipisci officia voluptatibus dicta esse porro aut culpa doloremque
          quasi, aliquid, facere id voluptates ex sit! Reiciendis doloremque
          fugiat blanditiis delectus incidunt nobis voluptatem quam perferendis
          sint necessitatibus sequi ipsum quisquam recusandae, quod nam ducimus
          accusantium nihil autem. Quam animi inventore molestias suscipit sint
          voluptatibus esse iusto natus tempora distinctio, ducimus ipsa
          incidunt ipsum modi dolorum quibusdam, tenetur ea, tempore voluptatem
          voluptates! Omnis, repellendus, animi rem, itaque laudantium fugit
          nostrum sequi mollitia atque sunt perferendis molestias error
          assumenda! Earum enim harum praesentium laborum molestias possimus
          vero, sequi alias rerum, quos maiores distinctio recusandae nostrum
          amet odio, corrupti voluptates nemo maxime aut fuga facere magni.
          Asperiores voluptas explicabo mollitia non! Dolore aperiam assumenda
          iusto dignissimos velit fugiat tempora nulla debitis quisquam
          consequuntur eligendi quasi perspiciatis odit ratione, rerum quidem
          accusamus quas pariatur numquam sunt necessitatibus autem ea nesciunt?
          Nobis temporibus qui, assumenda nam, facilis deleniti culpa sit
          commodi at fugit, animi iusto. Laborum magnam odit a harum itaque
          libero magni blanditiis eaque dolore, possimus animi ut culpa. Magni
          deleniti rem impedit, natus velit, ea facere repellat iure quidem
          mollitia molestias maxime animi nobis provident! Et, optio commodi
          deserunt harum aliquid dolorum eius voluptatem architecto vel numquam
          quae repellendus totam, nam accusantium sapiente dolore suscipit
          minima autem atque. Laboriosam numquam nulla laborum necessitatibus
          repellat enim ex natus perspiciatis blanditiis, ad voluptate ipsa
          illum delectus est minima modi nam consequuntur explicabo facilis!
          Excepturi natus in alias asperiores ex exercitationem porro, harum,
          amet, rerum officiis obcaecati! Beatae dignissimos ipsum nobis a earum
          repellendus iusto perspiciatis? Repellat doloribus veritatis nulla
          iusto at architecto assumenda perspiciatis atque perferendis
          recusandae libero quasi, saepe magnam? Repellendus laudantium incidunt
          veritatis rem aut quidem, doloribus, repudiandae corporis voluptatum
          nostrum laboriosam dolorem architecto nobis excepturi voluptas saepe
          similique dolores officia, eaque quas nihil ipsum consequatur iure
          accusantium. Voluptatem perferendis, vitae ratione assumenda magni
          autem tempore sunt praesentium esse labore, reprehenderit quis
          consequatur est quam mollitia nam deserunt sint, consectetur
          voluptates asperiores aliquam eligendi nisi. Doloribus accusamus
          voluptatibus assumenda voluptas, adipisci natus, vitae quod,
          consequuntur unde ea nam iste et ipsum minima eum alias eius
          veritatis. Hic unde quod ullam molestiae. Reprehenderit quisquam
          nostrum, adipisci dignissimos sequi ut, aliquid debitis, illo omnis
          excepturi numquam! Veritatis recusandae voluptate dolore alias ab
          explicabo itaque harum ipsum voluptatum quia, unde minima molestiae
          inventore cupiditate deleniti fugiat corporis. Dignissimos debitis
          exercitationem repudiandae quidem. Laboriosam nostrum reiciendis
          voluptates assumenda, aliquam id excepturi sequi nemo nisi corporis
          omnis saepe sint at perferendis autem ipsum enim architecto est
          perspiciatis quae rem cupiditate. Nisi repudiandae, nobis tenetur
          excepturi cumque praesentium quos eligendi pariatur illum molestiae
          optio unde. Cupiditate delectus veritatis labore dignissimos, ducimus
          eos dolorum quidem vitae eligendi consequatur ipsam alias a ab, at et
          sed qui assumenda totam aliquid doloribus repellendus aperiam
          excepturi. Aspernatur rem magni illum voluptatem iste, architecto
          officiis praesentium libero in quas ipsa nam dolorum ut dolores aut
          dicta sit recusandae vero! Iste laborum, ut officiis necessitatibus
          natus aliquam consequatur delectus facilis quos, accusantium quas.
          Delectus laboriosam error repellat iure reprehenderit nesciunt illo
          necessitatibus, maxime suscipit, voluptatem, quibusdam vero cum! Iusto
          doloribus omnis nostrum et veniam similique molestiae quaerat aliquid
          repellendus, harum libero vitae quos inventore temporibus, obcaecati
          itaque expedita eos tempore reprehenderit ducimus! Harum dolor
          repellat ducimus adipisci id fuga ipsum incidunt! Iste aliquid, odit
          nihil esse quaerat temporibus maxime! Corrupti quis obcaecati quam
          maiores ipsum explicabo exercitationem? Doloribus placeat labore rem
          voluptate magnam, suscipit deserunt non eum quos facere nisi
          reprehenderit molestias tenetur aliquam, assumenda numquam impedit
          laudantium libero ab dolore magni ad iste. Odit architecto laboriosam
          officiis eum omnis, sunt, dolorem dolore aspernatur eius, tempora
          explicabo natus. Porro laboriosam consequatur, sequi excepturi sed
          perspiciatis explicabo nobis officiis. Eos aperiam neque quis quo,
          molestiae fugit laborum error dicta cum saepe rerum ad vero aliquid
          deserunt! Voluptatum animi, architecto laboriosam mollitia, quas
          consequuntur nam nobis, praesentium provident perspiciatis adipisci
          quam rem doloribus esse impedit sunt nemo ullam molestias tempora iste
          quis sint quibusdam cumque. Deleniti culpa in ipsa libero dolores
          earum adipisci quo, non vitae quis nisi eligendi corrupti dicta
          itaque. Voluptate expedita nesciunt doloremque tenetur cumque
          cupiditate illo animi reiciendis consectetur amet consequatur officia
          praesentium laborum porro officiis itaque, soluta at ipsum
          dignissimos! Voluptate assumenda facilis nihil labore enim, veniam
          error rerum perferendis. Dolorem voluptatum aliquid error amet sed eum
          perferendis quia quas temporibus nostrum aspernatur non, sequi odio
          incidunt quasi, necessitatibus, ullam laboriosam. Recusandae
          aspernatur deleniti cupiditate beatae repellendus repellat ipsa vitae
          iusto blanditiis animi. Iure a ea impedit vitae nisi.
        </div>
        <div className="p-10">
          <Nyobain status={"belum dimulai"} />
          <Nyobain status={"proses"} />
          <Nyobain status={"selesai"} />
        </div>

        <div className="p-20">
          {/* <UploadImages /> */}
          tes
        </div>

        <div>
          <MarqueeText
            text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "}
            title={"LATEST WORKS"}
          />

          <Gallery />
        </div>
        <div className="pt-40 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          explicabo a, non ullam tempore rem molestiae nesciunt officiis
          excepturi ad architecto et eaque rerum atque? Unde veniam nisi totam
          aut facere dolores nam error, architecto quidem eos beatae temporibus
          tempora, sequi vitae esse eius officia, aperiam doloribus id. Optio
          reiciendis natus, veritatis, dolor consectetur perspiciatis molestias
          adipisci accusamus porro facere impedit debitis dolores similique!
          Esse consequatur, nihil autem reprehenderit sunt minima aut officia
          dicta porro nobis quisquam, dolorem, eligendi cum ducimus facilis.
          Cupiditate numquam maiores minima possimus. Tenetur dignissimos a quo
          quam doloribus aspernatur non, ex modi. Aliquam consequatur
          doloremque, nostrum ad voluptate, dolorum sapiente repellat culpa
          voluptatum eveniet nobis itaque at explicabo eum enim facere beatae
          tempore harum. Possimus voluptatibus nemo beatae blanditiis tempora
          dolorem, dolor excepturi modi! Ea nulla sit id, obcaecati tenetur
          omnis nemo magni asperiores? Inventore, quod repellendus molestiae
          quisquam repellat fuga odio quam beatae qui modi necessitatibus
          excepturi, cumque eum eaque sit ut sequi placeat! Consequatur
          voluptatum dignissimos doloremque, id hic quasi sint officiis ducimus
          veniam qui, temporibus saepe nemo quidem illum maiores voluptas
          consequuntur eius. Sit eveniet atque aperiam accusantium!
          Perspiciatis, aliquid! Ipsa voluptas reiciendis velit asperiores
          placeat iusto, dolores voluptates sequi nemo quas illo labore rem
          facilis odio corporis quidem. Repellat doloribus nulla maxime, modi
          porro obcaecati qui sapiente alias omnis sint voluptates expedita
          quasi architecto officia illo reiciendis cupiditate debitis
          consectetur nemo quisquam harum quos mollitia. Repellat qui totam
          perferendis aspernatur doloribus illum iusto nam pariatur. Eveniet rem
          corporis sint laborum consequuntur repellendus? Molestias tempore eum
          ullam minus quibusdam reprehenderit dolorem animi cum voluptate,
          adipisci officia voluptatibus dicta esse porro aut culpa doloremque
          quasi, aliquid, facere id voluptates ex sit! Reiciendis doloremque
          fugiat blanditiis delectus incidunt nobis voluptatem quam perferendis
          sint necessitatibus sequi ipsum quisquam recusandae, quod nam ducimus
          accusantium nihil autem. Quam animi inventore molestias suscipit sint
          voluptatibus esse iusto natus tempora distinctio, ducimus ipsa
          incidunt ipsum modi dolorum quibusdam, tenetur ea, tempore voluptatem
          voluptates! Omnis, repellendus, animi rem, itaque laudantium fugit
          nostrum sequi mollitia atque sunt perferendis molestias error
          assumenda! Earum enim harum praesentium laborum molestias possimus
          vero, sequi alias rerum, quos maiores distinctio recusandae nostrum
          amet odio, corrupti voluptates nemo maxime aut fuga facere magni.
        </div>
      </Layout>
    </>
  );
}

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
    console.log(sections);

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
