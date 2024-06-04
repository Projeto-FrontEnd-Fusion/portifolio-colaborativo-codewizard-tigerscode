import Header from "./components/header";
import { LiaReact } from "react-icons/lia";
import { TbBrandJavascript, TbBrandTailwind, TbBrandVite } from "react-icons/tb";
import PhotoGrid from "./components/photo-grid";

const Hero = () => {
    return ( 
        <>
            <Header />

            <div className="mb-[114px] lg:flex lg:justify-between lg:items-center lg:flex-row-reverse lg:mt-[66px] lg:px-[96.5px]">
                <div>
                    <section className="pt-[35px]">
                       <h1 className="text-center text-wrap space-y-2  lg:text-right">
                            <span className="block font-subtitle text-primary-muted dark:text-gray-text text-[18px] lg:text-[28px]">
                                projeto
                            </span>
                            <span className="block font-title text-primary dark:text-white-one text-[28px] lg:text-[38px]">
                                Frontend Fusion
                            </span>
                            <span className="block font-subtitle text-primary-muted dark:text-gray-text text-[18px] lg:text-[28px]">
                                Codifique o seu futuro hoje!
                            </span>
                       </h1>
                    </section>
                    <section className="flex justify-center items-center gap-10 mt-[91px] text-pirmary-muted dark:text-white lg:justify-end">
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
}
 
export default Hero;