import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import LangAndTech from "./components/ling-and-tech/LangAndTech"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="flex flex-col">
      <span>[Coloque aqui o hero]</span>
      <span>[Coloque aqui a sessão de benefits]</span>
      <LangAndTech/>
      <span>[Coloque aqui a sesão de team]</span>
      <span>[Coloque aqui a sesão de aboutProject]</span>
      <span>[Coloque aqui a sesão de coments]</span>
      <span>[Coloque aqui o cabecalho]</span>
    </main>
  </React.StrictMode>
);
