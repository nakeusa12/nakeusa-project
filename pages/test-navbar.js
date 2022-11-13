import Head from "next/head";
import { Navbar } from "@components/molecules/Navbar";
import Link from "next/link";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import cn from "classnames";
import { useOnScreen } from "@hooks/useOnScreen";
import Layout from "@components/molecules/Layout";
import { useRouter } from "next/router";
import { MarqueeText } from "@components/atoms/MarqueeText";
import useGetValue from "hooks/useGetValue";
import useCreateValue from "@hooks/useCreateValue";
import useUpdateValue from "@hooks/useUpdateValue";
import useRemoveValue from "@hooks/useRemoveValue";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { database, storage } from "config/firebase";

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
  const posts = useGetValue("posts");
  const create = useCreateValue();
  const createProduct = useCreateValue();

  const update = useUpdateValue();
  const remove = useRemoveValue("posts/-NGVcIbVzKF1Pi3-r_W1");

  const form = useRef();

  const createPost = async () => {
    const path = "/posts";
    const value = { title: "Dicoba dulu", content: "Gimana kah hasilnya" };

    await create.pushValue(path, value);
  };

  const submitPost = (e) => {
    e.preventDefault();
    const name = form.current[0]?.value;
    const desc = form.current[1]?.value;
    const url = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const storageRef = ref(storage, `post/${image.name}`);

    uploadBytes(storageRef, image).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then(
          (downloadUrl) => {
            savePost({
              name,
              desc,
              url,
              image: downloadUrl,
            });
          },
          () => {
            savePost({
              name,
              desc,
              url,
              image: null,
            });
          }
        );
      },
      (error) => {
        console.log(error);
        savePost({
          name,
          desc,
          url,
          image: null,
        });
      }
    );

    // const path = "/posts";
    // const value = { title: name, content: desc, url: url, image: image };
    // await create.pushValue(path, value);
    // console.log(name, desc, url, image);
  };

  const savePost = async (post) => {
    const path = "/posts";
    const value = post;

    await create.pushValue(path, value);
  };

  const createNewProduct = async () => {
    const path = "/products";
    const value = {
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "70000",
      timestamp: Date.now(),
      userId: "001",
    };

    await createProduct.setValueWithKey(path, value);
  };

  const UpdatePost = async () => {
    const path = "/posts/-NGRToS1f3FOMUBIESG6";
    const value = {
      title: "Post dari update Value",
      category: "Olahraga",
      content: "Ini adalah hasil dari update",
      updatedAt: new Date(),
    };

    await update.updateDoc(path, value);
  };

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

  if (posts.isLoading) {
    return <p>Fetching data...</p>;
  }
  const data = Object.values(posts.snapshot);

  return (
    <>
      <Layout title="Test">
        <div className="p-10">
          <button onClick={createPost}>Push Value</button>
          <button onClick={createNewProduct} className="ml-2">
            Add Product
          </button>
          <button onClick={UpdatePost} className="ml-2">
            Update Post
          </button>
          <button onClick={() => remove.withRemove()} className="ml-2">
            Remove Post
          </button>
          {data.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold">{item.title || item.name}</h2>
              <p className="text-sm">{item.content || item.desc}</p>
              <p className="text-sm">{item.url}</p>
              <img src={item.image} alt="image" />
            </div>
          ))}

          <form
            ref={form}
            onSubmit={submitPost}
            className="border p-4 border-black flex flex-col gap-3"
          >
            <input
              type="text"
              className="border border-gray-400 p-2"
              placeholder="Name"
            />
            <textarea
              className="border border-gray-400 p-2"
              placeholder="Desc"
            />
            <input
              type="text"
              className="border border-gray-400 p-2"
              placeholder="url"
            />
            <input type="file" placeholder="image" />
            <button type="submit" className="bg-gray-400 p-2">
              Submit
            </button>
          </form>
        </div>
        <div className="mb-10 dark:bg-red-200">
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
        </div>
        <div className="p-10">
          <Nyobain status={"belum dimulai"} />
          <Nyobain status={"proses"} />
          <Nyobain status={"selesai"} />
        </div>
        <div>
          <MarqueeText
            text={"PROJECTS • PROJECTS • PROJECTS • PROJECTS • "}
            title={"LATEST WORKS"}
          />
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
