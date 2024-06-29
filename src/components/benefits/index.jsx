import ClickIcon from '../../assets/iconclick.svg';
import CollabIcon from '../../assets/iconcollab.svg';
import SafeIcon from '../../assets/iconsafe.svg';
import TaskIcon from '../../assets/icontask.svg';
import ViewIcon from '../../assets/iconview.svg';

const Card = ({ title, subtitle, icon, hasShadow, isSpecial }) => {
  return (
    <div className={`w-[600px] h-[290px] p-8 rounded-lg opacity-100 mb-4 mx-2 ${hasShadow ? 'shadow-lg bg-white dark:bg-pirmary-muted' : 'shadow-none bg-transparent'}`}>
      {isSpecial && (
        <>
          <div className="font-subtitle font-extrabold text-4xl text-primary dark:text-white mb-5">
            {title}
          </div>
          <hr className="border-t-2 border-primary dark:border-white mb-4" />
          <p className="font-semibold text-lg text-primary dark:text-gray-text dark:font-normal leading-snug">
            {subtitle}
          </p>
        </>
      )}
      {!isSpecial && (
        <>
          <div className="flex items-center mb-4">
            <img src={icon} alt="" className="w-6 h-6 mr-2" />
            <div className="text-xl text-primary dark:text-white font-bold">{title}</div>
          </div>
          <p className="text-primary dark:text-white">{subtitle}</p>
        </>
      )}
    </div>
  );
};

const Beneficios = () => {
  return (
    <div className="flex items-center justify-center font-body dark:font-body">
      <div className="mt-8 mb-20 flex flex-wrap justify-center gap-4">
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
