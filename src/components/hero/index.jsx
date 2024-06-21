import Header from "./components/header";
import { LiaReact } from "react-icons/lia";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandVite,
} from "react-icons/tb";
import PhotoGrid from "./components/photo-grid";

const Hero = () => {
  return (
    <>
      <Header />

      <div className="mb-[114px] flex flex-col items-center justify-between space-y-10 px-10 md:px-[93px] lg:mt-[66px] lg:flex-row-reverse">
        <div className="w-full lg:w-fit">
          <section className="pt-[35px]">
            <h1 className="space-y-2 text-wrap text-center lg:text-right">
              <span className="block font-subtitle text-[18px] text-primary-muted lg:text-[28px] dark:text-gray-text">
                projeto
              </span>
              <span className="block font-title text-[28px] text-primary lg:text-[38px] dark:text-white-one">
                Frontend Fusion
              </span>
              <span className="block font-subtitle text-[18px] text-primary-muted lg:text-[28px] dark:text-gray-text">
                Codifique o seu futuro hoje!
              </span>
            </h1>
          </section>
          <section className="mt-[91px] flex items-center justify-center gap-10 text-primary-muted lg:justify-end dark:text-white">
            <LiaReact className="size-8 transition-all duration-1000 md:size-10 lg:size-12" />
            <TbBrandVite className="size-8 transition-all duration-1000 md:size-10 lg:size-12" />
            <TbBrandJavascript className="size-8 transition-all duration-1000 md:size-10 lg:size-12" />
            <TbBrandTailwind className="size-8 transition-all duration-1000 md:size-10 lg:size-12" />
          </section>
        </div>

        <PhotoGrid />
      </div>
    </>
  );
};

export default Hero;
