import CardItem from "./components/card-item";

import { ParticipateForm } from "./components/form";

const Participate = () => {
  return (
    <div className="flex flex-col mb-[270px] px-2 lg:px-[100px] dark:text-white gap-16" id="about">
      <div className="mb-20 space-y-4">
        <h2 className="text-center font-body text-[28px] font-black lg:text-[48px]">
          Sobre o Projeto Frontend Fusion
        </h2>
        <p className="text-center font-body text-sm leading-normal lg:text-[22px]">
          O Frontend Fusion é um projeto inovador focado em proporcionar uma
          experiência envolvente de aprendizado de programação. Nosso objetivo é
          oferecer um ambiente colaborativo onde entusiastas de tecnologia
          possam mergulhar no mundo do desenvolvimento frontend, explorando CSS,
          HTML e JavaScript através de desafios e atividades interativas.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <CardItem
          emoji="💼"
          title="O que procuramos"
          text="Paixão pela programação e desejo de aprender e crescer. Conhecimento básico de CSS, HTML e JavaScript (ou disposição para aprender). Capacidade de trabalhar em equipe e colaborar em projetos conjuntos. Comprometimento e vontade de enfrentar desafios e superar obstáculos."
        />

        <CardItem
          emoji="🎯"
          title="Responsabilidades"
          text="Participar de desafios e atividades gamificadas para desenvolver habilidades em programação. Colaborar com outros membros da equipe para criar projetos frontend inovadores. Contribuir com ideias e feedback para aprimorar continuamente o projeto."
        />

        <CardItem
          emoji="🌟"
          title="Benefícios"
          text="Acesso a uma comunidade de aprendizado dinâmica e colaborativa. Oportunidade de desenvolver habilidades práticas em programação. Experiência valiosa para enriquecer seu currículo e portfólio."
        />
      </div>

      <ParticipateForm />
    </div>
  );
};

export default Participate;
