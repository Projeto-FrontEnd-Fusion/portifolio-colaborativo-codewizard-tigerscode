import "./style.css"

import AboutCard from "./components/card";
import Button from "./components/button/button";
import Case from "../../assets/case.webp"
import Dart from "../../assets/dart.webp"
import Star from "../../assets/star.webp"

export default function AboutProject() {
    return(
        <section className="aboutProject">
            <div className="container">
                <div className="aboutProject__Header">
                    <h2>
                        Sobre o Projeto Frontend Fusion
                    </h2>
                    <p>
                        O Frontend Fusion é um projeto inovador focado em proporcionar uma experiência envolvente de aprendizado de programação. Nosso objetivo é oferecer um ambiente colaborativo onde entusiastas de tecnologia possam mergulhar no mundo do desenvolvimento frontend, explorando CSS, HTML e JavaScript através de desafios e atividades interativas. 
                    </p>
                </div>

                <AboutCard
                    Img={Case}

                    Title="O Que Procuramos:"

                    Text="
                        Paixão pela programação e desejo de aprender e crescer. 
                        Conhecimento básico de CSS, HTML e JavaScript (ou disposição para aprender).
                        Capacidade de trabalhar em equipe e colaborar em projetos conjuntos.
                        Comprometimento e vontade de enfrentar desafios e superar obstáculos.
                    "
                />

                <AboutCard
                    Img={Dart}

                    Title="Responsabilidades:"

                    Text="
                        Participar de desafios e atividades gamificadas para desenvolver habilidades em programação.
                        Colaborar com outros membros da equipe para criar projetos frontend inovadores.
                        Contribuir com ideias e feedback para aprimorar continuamente o projeto.
                    "
                />

                <AboutCard
                    Img={Star}

                    Title="Benefícios:"

                    Text="
                        Acesso a uma comunidade de aprendizado dinâmica e colaborativa. 
                        Oportunidade de desenvolver habilidades práticas em programação. 
                        Experiência valiosa para enriquecer seu currículo e portfólio.
                        Se você está pronto para embarcar em uma jornada emocionante de aprendizado e crescimento no mundo do desenvolvimento web, junte-se a nós no Frontend Fusion!
                    "
                />

                <div className="aboutProject__Cta">
                    <p>
                        Estamos ansiosos para receber sua inscrição e dar as boas-vindas a você em nossa comunidade!
                    </p>
                    <Button
                        Color="bg-[#06B94E]"
                        HoverColor="hover:bg-[#0368ff]"
                        Size="px-14 py-3 text-[24px]"
                        Text="Quero Participar"
                        Link="#"
                    />
                </div>
            </div>
        </section>
    )
}