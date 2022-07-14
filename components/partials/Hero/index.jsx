import { IoIosArrowDown } from "react-icons/io";
import { Square } from "./square";

export const Hero = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto z-10">
        <div className="w-full min-h-screen flex justify-center flex-col">
          <h4 className="text-main-gray text-lg font-poppins font-bold tracking-wide inline-flex items-center">
            SAIFUL NAKEUSA <span className="w-10 h-0.5 bg-main-gray mx-3" /> WEB DESIGNER & FRONTEND DEVELOPER
          </h4>
          <h1 className="text-white font-righteous text-6xl leading-relaxed max-w-6xl tracking-wider font-medium">
            Building Creative WebApp / <span className="text-main-primary">Quality</span> / Visual / <span className="text-main-primary">Unique</span> / Experience.
          </h1>
        </div>
      </div>

     <div className="absolute inset-x-40 inset-y-24 w-full mx-auto">
      <Square />
     </div>
    </section>
  );
};
