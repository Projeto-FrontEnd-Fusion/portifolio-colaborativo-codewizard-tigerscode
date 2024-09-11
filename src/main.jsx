import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/hero";

import "./index.css";
import Footer from "./components/footer";
import Coments from "./components/coments"

import Benefits from "./components/benefits"
import LangAndTech from "./components/ling-and-tech/LangAndTech"
import Team from "./components/team";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="flex flex-col bg-light-bg dark:bg-dark-bg">
      <Hero />
      <Benefits />
      <LangAndTech/>
      <Team />
      <span>[Coloque aqui a sesão de aboutProject]</span>
      <Coments/>
      <Footer />
    </main>
  </React.StrictMode>
);
