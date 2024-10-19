import Card from "./card/index";

import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Javascript from "../../assets/javascript.svg";
import React from "../../assets/react.svg";
import TailwindCss from "../../assets/tailwind.svg";
import GitHub from "../../assets/github.svg";
import Vscode from "../../assets/vscode.svg";
import Git from "../../assets/git.svg";

// Problema: As tecnologias e seus ícones estão hard-coded dentro do JSX, o que pode ser difícil de manter se novas tecnologias forem adicionadas ou removidas.
// Melhoria: Criar um array de objetos com as informações das tecnologias (nome, ícone e descrição). Isso facilita a manutenção e torna o código mais reutilizável e escalável.

function LangAndTech() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pb-8">
        <h1 className="pb-4 font-subtitle text-[22px] text-black md:text-[31px] dark:text-white-two">
          Linguagens e Tecnologias
        </h1>
        <div className="h-[2px] w-[306px] bg-[#0F0920] md:w-[512px] dark:bg-white-two"></div>
      </div>
      <div className="grid grid-cols-2 gap-8 px-4 md:grid-cols-4">
        <Card title="Html" src={Html} alt="Html icon" />
        <Card title="Css" src={Css} alt="Css icon" />
        <Card title="Javascript" src={Javascript} alt="JavaScript icon" />
        <Card title="React" src={React} alt="React icon" />
        <Card title="Tailwind Css" src={TailwindCss} alt="Tailwind icon" />
        <Card title="GitHub" src={GitHub} alt="GitHub icon" />
        <Card title="Git" src={Git} alt="Git icon" />
        <Card title="Vscode" src={Vscode} alt="Vscode icon" />
      </div>
    </div>
  );
}

export default LangAndTech;
