import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/hero";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="flex flex-col bg-light-bg dark:bg-dark-bg">
      <Hero />
      <span>[Coloque aqui a sessão de benefits]</span>
      <span>[Coloque aqui a sesão de tech-and-lang]</span>
      <span>[Coloque aqui a sesão de team]</span>
      <span>[Coloque aqui a sesão de aboutProject]</span>
      <span>[Coloque aqui a sesão de coments]</span>
      <span>[Coloque aqui o cabecalho]</span>
    </main>
  </React.StrictMode>
);
