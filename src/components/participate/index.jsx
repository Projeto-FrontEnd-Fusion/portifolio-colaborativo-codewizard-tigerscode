import CardItem from "./components/card-item";

const Participate = () => {
  return (
    <div className="mb-[270px] px-8 lg:px-[100px] dark:text-white" id="about">
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

      <div className="mx-auto mt-[180px] flex w-full max-w-[750px] flex-col items-center gap-4 lg:gap-10" id="participants">
        <p className="text-center font-body text-primary lg:text-[32px] dark:text-white">
          Estamos ansiosos para receber sua inscrição e dar as boas-vindas a
          você em nossa comunidade!
        </p>
        <a href="#">
          <button className="min-h-[42px] w-[216px] max-w-[459px] rounded-lg bg-btn-primary px-8 py-4 font-body text-lg font-bold text-white-tree transition-colors duration-500 hover:bg-btn-secondary lg:w-[459px] lg:rounded-2xl lg:px-12 lg:py-4 lg:text-4xl">
            Quero Participar
          </button>
        </a>
      </div>
    </div>
  );
};

export default Participate;
