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

      <div className="mb-[114px] flex flex-col items-center justify-between gap-y-10 lg:mt-[66px] lg:flex-row-reverse lg:px-[93px]">
        <div>
          <section className="pt-[35px]">
            <h1 className="space-y-2 text-wrap text-center lg:text-right">
              <span className="text-primary-muted block font-subtitle text-[18px] lg:text-[28px] dark:text-gray-text">
                projeto
              </span>
              <span className="block font-title text-[28px] text-primary lg:text-[38px] dark:text-white-one">
                Frontend Fusion
              </span>
              <span className="text-primary-muted block font-subtitle text-[18px] lg:text-[28px] dark:text-gray-text">
                Codifique o seu futuro hoje!
              </span>
            </h1>
          </section>
          <section className="mt-[91px] flex items-center justify-center gap-10 text-pirmary-muted lg:justify-end dark:text-white">
            <LiaReact size={36} className="size-12" />
            <TbBrandVite size={36} className="size-12" />
            <TbBrandJavascript size={36} className="size-12" />
            <TbBrandTailwind size={36} className="size-12" />
          </section>
        </div>

        <PhotoGrid />
      </div>
    </>
  );
};

export default Hero;
