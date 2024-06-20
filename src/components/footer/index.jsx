import { useContext } from "react";
import GitButton from "../hero/components/git-button";
import Menu from "../hero/components/menu";
import { TeamContext } from "../../contexts/team-context";

const Footer = () => {
  const { teamData } = useContext(TeamContext);

  return (
    <footer className="dark:bg-primary-muted-muted grid grid-cols-3 grid-rows-2 gap-x-5 rounded-t-3xl bg-black p-8">
      <div className="col-span-2 row-span-2 gap-2 space-y-4 pb-8 lg:row-span-1 lg:flex lg:space-y-0">
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
        <div className="grid h-fit justify-end sm:grid-cols-2 lg:flex">
          {teamData?.people?.map((person, item) => (
            <img
              key={item}
              src={person.githubImgUrl}
              alt={person.name}
              className="h-[50px] w-[50px] cursor-pointer rounded-full bg-white-one transition-all duration-500 lg:ml-[-18px] lg:hover:mr-[18px]"
            />
          ))}
        </div>

        <div className="hidden pt-10 font-body text-white-two lg:block">
          <ul>
            {teamData?.people?.map((person, index) => (
              <li key={index}>
                {person.name} - {person.subTitle || "Não informado"}
              </li>
            ))}
          </ul>
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
