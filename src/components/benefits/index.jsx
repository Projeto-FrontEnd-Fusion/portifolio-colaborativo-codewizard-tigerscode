import ClickIcon from "../../assets/iconclick.svg";
import CollabIcon from "../../assets/iconcollab.svg";
import SafeIcon from "../../assets/iconsafe.svg";
import TaskIcon from "../../assets/icontask.svg";
import ViewIcon from "../../assets/iconview.svg";

const Card = ({ title, subtitle, icon, hasShadow, isSpecial }) => {
  return (
    <div
      className={`mx-2 mb-4 h-auto rounded-lg p-8 opacity-100 ${hasShadow ? "dark:bg-pirmary-muted dark:bg-primary-muted bg-white shadow-lg" : "bg-transparent shadow-none"} max-w-[400px]:w-[200px] max-sm:w-[80%] sm:w-[400px] md:w-[400px] lg:w-[480px] `}
    >
      {isSpecial && (
        <>
          <div className="mb-5 font-subtitle text-4xl font-extrabold text-primary dark:text-white">
            {title}
          </div>
          <hr className="mb-4 border-t-2 border-primary dark:border-white" />
          <p className="text-lg font-semibold leading-snug text-primary dark:font-normal dark:text-gray-text">
            {subtitle}
          </p>
        </>
      )}
      {!isSpecial && (
        <>
          <div className="mb-4 flex items-center">
            <img src={icon} alt="" className="mr-2 h-6 w-6" />
            <div className="text-xl font-bold text-primary dark:text-white">
              {title}
            </div>
          </div>
          <p className="text-primary dark:text-white">{subtitle}</p>
        </>
      )}
    </div>
  );
};



const Beneficios = () => {
  return (
    <div className="flex items-center justify-center font-body dark:font-body" id="benefits">
      <div className="mb-20 mt-8 flex flex-wrap justify-center gap-4">
        <Card
          title="Vantagens do Projeto"
          subtitle="Participar de um projeto em grupo para aprender programação web frontend e desenvolver um portfólio colaborativo oferece uma série de vantagens!"
          hasShadow={false}
          isSpecial={true}
        />
        <Card
          title="Diversidade de habilidades:"
          subtitle="Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          icon={ClickIcon}
          hasShadow={true}
        />
        <Card
          title="Divisão de tarefas:"
          subtitle="Trabalhar em equipe permite distribuir o trabalho de forma eficiente, acelerando o progresso e permitindo que cada membro se concentre em suas áreas de especialização."
          icon={TaskIcon}
          hasShadow={true}
        />
        <Card
          title="Aprendizado colaborativo:"
          subtitle="Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          icon={CollabIcon}
          hasShadow={true}
        />
        <Card
          title="Diversidade de perspectivas:"
          subtitle="Trabalhar com pessoas diferentes traz uma variedade de perspectivas e abordagens para resolver problemas. Isso pode levar a soluções mais criativas e inovadoras, já que cada membro do grupo pode contribuir com suas ideias únicas."
          icon={ViewIcon}
          hasShadow={true}
        />
        <Card
          title="Habilidades interpessoais:"
          subtitle="Trabalhar em equipe ajuda a aprimorar habilidades de comunicação, colaboração e trabalho em grupo. Essas habilidades são essenciais no ambiente de trabalho, não apenas na área de programação, mas em muitos outros campos também."
          icon={SafeIcon}
          hasShadow={true}
        />
      </div>
    </div>
  );
};

export default Beneficios;
