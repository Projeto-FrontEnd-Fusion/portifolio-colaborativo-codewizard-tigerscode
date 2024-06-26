import Card from "./card/index";

import Html from "../../assets/html.svg";
import Css from "../../assets/css.svg";
import Javascript from "../../assets/javascript.svg";
import React from "../../assets/react.svg";
import TailwindCss from "../../assets/tailwind.svg";
import GitHub from "../../assets/github.svg";
import Vscode from "../../assets/vscode.svg";
import Git from "../../assets/git.svg";

function LangAndTech() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center pb-8">
        <h1 className="font-subtitle text-[22px] md:text-[31px] text-black dark:text-white-two pb-4">
          Linguagens e Tecnologias
        </h1>
        <div className="w-[306px] md:w-[512px] h-[2px] bg-[#0F0920] dark:bg-white-two "></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
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
