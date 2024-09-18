import CardItem from "./components/card-item";

const Participate = () => {
    return ( 
        <div className="px-8">
            <div className="space-y-4">
                <h2 className="font-body text-center font-black text-[28px]">Sobre o Projeto Frontend Fusion</h2>
                <p className="font-body text-center text-sm">
                    O Frontend Fusion é um projeto inovador focado em proporcionar uma experiência envolvente de aprendizado de programação. Nosso objetivo é oferecer um ambiente colaborativo onde entusiastas de tecnologia possam mergulhar no mundo do desenvolvimento frontend, explorando CSS, HTML e JavaScript através de desafios e atividades interativas.
                </p>
            </div>

            <CardItem emoji="💼" title="O que procuramos" text="Paixão pela programação e desejo de aprender e crescer. Conhecimento básico de CSS, HTML e JavaScript (ou disposição para aprender).Capacidade de trabalhar em equipe e colaborar em projetos conjuntos. Comprometimento e vontade de enfrentar desafios e superar obstáculos." />
        </div>
     );
}
 
export default Participate;