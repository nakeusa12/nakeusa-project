import Head from "next/head";
// import { useEffect } from "react";
// import tw from "twin.macro";
import { Hero } from "@components/partials/Hero";
import { Navbar } from "@components/partials/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <main className="bg-main-dark">
        <Navbar />
        <Hero />
        <div className="bg-white w-full min-h-screen h-screen grid grid-cols-12 grid-rows-3 gap-4">
          <div className="w-full col-span-4 row-span-2 bg-red-100">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tempora dolores beatae numquam, vero suscipit, sint accusamus iusto autem ducimus incidunt sunt, ut distinctio natus vitae debitis! Nam placeat, unde deleniti voluptates nobis error quae suscipit, nisi incidunt nesciunt aperiam eaque aliquid optio repudiandae velit similique recusandae adipisci dolorem natus debitis. Minus repellendus itaque inventore, reiciendis obcaecati, est laboriosam quidem mollitia neque nobis enim. Eveniet, itaque ea nesciunt consequatur enim accusantium ratione a possimus nemo! Quod reprehenderit error fugiat magnam maiores laudantium pariatur obcaecati ab laborum, aliquid animi dolorem, possimus et non accusamus libero numquam. Corporis eius optio maiores dicta. Tenetur, laudantium labore libero repellendus doloremque sint architecto a ipsum unde inventore aperiam, rem facere quibusdam, quos expedita neque culpa ut dolor alias! Magnam ipsam aperiam saepe voluptas totam. Sapiente tempore ipsam dolores accusantium dolorem iste unde ipsum blanditiis esse harum. Ducimus aspernatur, at iusto odit culpa blanditiis fuga saepe deleniti magni neque sequi rem voluptates.
          </div>
          <div className="w-full col-span-8 row-span-2 bg-green-100">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tempora dolores beatae numquam, vero suscipit, sint accusamus iusto autem ducimus incidunt sunt, ut distinctio natus vitae debitis! Nam placeat, unde deleniti voluptates nobis error quae suscipit, nisi incidunt nesciunt aperiam eaque aliquid optio repudiandae velit similique recusandae adipisci dolorem natus debitis. Minus repellendus itaque inventore, reiciendis obcaecati, est laboriosam quidem mollitia neque nobis enim. Eveniet, itaque ea nesciunt consequatur enim accusantium ratione a possimus nemo! Quod reprehenderit error fugiat magnam maiores laudantium pariatur obcaecati ab laborum, aliquid animi dolorem, possimus et non accusamus libero numquam. Corporis eius optio maiores dicta. Tenetur, laudantium labore libero repellendus doloremque sint architecto a ipsum unde inventore aperiam, rem facere quibusdam, quos expedita neque culpa ut dolor alias! Magnam ipsam aperiam saepe voluptas totam. Sapiente tempore ipsam dolores accusantium dolorem iste unde ipsum blanditiis esse harum. Ducimus aspernatur, at iusto odit culpa blanditiis fuga saepe deleniti magni neque sequi rem voluptates. Ab eius quia, quaerat unde ea veritatis repellat enim deserunt amet totam eligendi quibusdam error aperiam iusto rem corporis a, 
          </div>
          <div className="w-full col-span-12 row-span-1 bg-blue-100">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tempora dolores beatae numquam, vero suscipit, sint accusamus iusto autem ducimus incidunt sunt, ut distinctio natus vitae debitis! Nam placeat, unde deleniti voluptates nobis error quae suscipit, nisi incidunt nesciunt aperiam eaque aliquid optio repudiandae velit similique recusandae adipisci dolorem natus debitis. Minus repellendus itaque inventore, reiciendis obcaecati, est laboriosam quidem mollitia neque nobis enim. Eveniet, itaque ea nesciunt consequatur enim accusantium ratione a possimus nemo! Quod reprehenderit error fugiat magnam maiores laudantium pariatur obcaecati ab laborum, aliquid animi dolorem, possimus et non accusamus libero numquam. Corporis eius optio maiores dicta. 
          </div>
        </div>
      </main>
    </>
  );
}

let MainHome = tw.main`
  opacity-100
`;
