import GitButton from "../hero/components/git-button";
import Menu from "../hero/components/menu";

const Footer = () => {
  return (
    <footer className="grid h-[430px] grid-cols-3 grid-rows-2 gap-x-5 rounded-t-3xl bg-black p-8 dark:bg-pirmary-muted">
      <div className="col-span-2 row-span-2 space-y-4">
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
        <div className="grid h-fit grid-cols-2">
          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one" />

          <img className="h-[49.25px] w-[46.6px] rounded-full bg-white-one" />
        </div>
      </div>
      <div className="col-span-3 h-fit text-center">
        <span className="font-body text-xs text-white-one">
          Projeto Frontendfusion - Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
