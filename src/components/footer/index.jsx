import GitButton from "../hero/components/git-button";
import Menu from "../hero/components/menu";

const Footer = () => {
    return ( 
        <footer className="grid grid-rows-2 grid-cols-3 h-[430px] bg-black dark:bg-pirmary-muted rounded-t-3xl p-8 gap-x-5">
            <div className="row-span-2 col-span-2 space-y-4">
                <GitButton primary={false} />
                <div>
                    <Menu />
                </div>
            </div>
            <div className="row-span-2 col-span-1">
                <div className="grid grid-cols-2 h-fit">
                    <img className="w-[46.6px] h-[49.25px] rounded-full bg-white-one" />

                    <img className="w-[46.6px] h-[49.25px] rounded-full bg-white-one" />

                    <img className="w-[46.6px] h-[49.25px] rounded-full bg-white-one" />

                    <img className="w-[46.6px] h-[49.25px] rounded-full bg-white-one" />

                    <img className="w-[46.6px] h-[49.25px] rounded-full bg-white-one" />

                    <img className="w-[46.6px] h-[49.25px] rounded-full bg-white-one" />
                </div>
            </div>
            <div className="col-span-3 h-fit text-center">
                <span className="font-body text-white-one text-xs">Projeto Frontendfusion - Todos os direitos reservados</span>
            </div>
        </footer>
     );
}
 
export default Footer;