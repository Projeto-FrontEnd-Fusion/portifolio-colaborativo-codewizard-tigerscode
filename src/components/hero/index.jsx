import Header from "./components/header";
import { LiaReact } from "react-icons/lia";
import { TbBrandJavascript, TbBrandTailwind, TbBrandVite } from "react-icons/tb";

const Hero = () => {
    return ( 
        <>
           <Header />

           <section className="pt-[35px]">
               <h1 className="text-center space-y-2">
                    <span className="block font-subtitle text-primary-muted dark:text-gray-text text-[18px]">
                        projeto
                    </span>
                    <span className="block font-title text-primary dark:text-white-one text-[28px]">
                        Frontend Fusion
                    </span>
                    <span className="block font-subtitle text-primary-muted dark:text-gray-text text-[18px]">
                        Codifique o seu futuro hoje!
                    </span>
               </h1>
           </section>

           <section className="flex justify-center items-center gap-10 mt-[91px] text-pirmary-muted dark:text-white">
                <LiaReact size={36} />
                <TbBrandVite size={36} />
                <TbBrandJavascript size={36} />
                <TbBrandTailwind size={36} />
           </section>
        </>
     );
}
 
export default Hero;