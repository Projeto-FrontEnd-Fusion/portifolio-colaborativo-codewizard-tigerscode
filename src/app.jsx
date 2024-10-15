import Hero from "./components/hero";
import Footer from "./components/footer";
import Coments from "./components/coments"

import Benefits from "./components/benefits"
import LangAndTech from "./components/ling-and-tech/LangAndTech"
import Team from "./components/team";
import Participate from "./components/participate";

export const App = () =>{
  return(
    <>
       <main className="flex flex-col bg-light-bg dark:bg-dark-bg">
      <Hero />
      <Benefits />
      <LangAndTech/>
      <Team />
      <Participate />
      <Coments/>
      <Footer />
    </main>
    </>
  )
}