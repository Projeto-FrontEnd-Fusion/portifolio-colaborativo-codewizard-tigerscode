import GitButton from "../hero/components/git-button";
import Menu from "../hero/components/menu";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 grid-rows-2 gap-x-5 rounded-t-3xl bg-black p-8 dark:bg-pirmary-muted">
      <div className="col-span-2 row-span-2 space-y-4 pb-8 lg:row-span-1 lg:flex lg:space-y-0">
        <GitButton primary={false} />
        <div>
          <Menu />
        </div>
      </div>
      <div className="col-span-1 row-span-2">
        {
          //TODO: colocar as imagens quando disponíveis
          //TODO: abstrair imagens para extinguir a repetição
        }
        <div className="grid h-fit grid-cols-2 lg:flex">
          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one" />

          <img className="h-[50px] w-[50px] rounded-full bg-white-one lg:ml-[-18px]" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one lg:ml-[-18px]" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one lg:ml-[-18px]" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one lg:ml-[-18px]" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one lg:ml-[-18px]" />
        </div>

        <div className="hidden pt-10 font-body text-white-two lg:block">
          <p>Dinho silwa - Webdesigner & Engineer</p>
          <p>Davi Santana - Webdesigner & Engineer</p>
          <p>Mercia Freitas - Webdesigner</p>
          <p>Nico Silva - Webengineer</p>
          <p>Ricardo Gomes - Webdesign</p>
          <p>John Doe - Webdevelopment</p>
        </div>
      </div>
      <div className="col-span-3 h-fit text-center lg:col-span-2 lg:text-left">
        <span className="font-body text-xs text-white-one">
          Projeto Frontendfusion - Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
