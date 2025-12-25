// import Hero from "./components/hero/Hero"
// import Services from "./components/services/Services"
// import Portfolio from "./components/portfolio/Portfolio"
// import Contact from "./components/contacts/Contact"

import {lazy, Suspense} from "react";
import LoadingBar from "./components/loading/LoadingBar";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contacts/Contact"));

function App() {

  return (
    <div className="container">
      <Suspense fallback={<LoadingBar/>} height={"100vh"} offset={-100}>
      <section id="#home">
        <Hero/>
      </section>
      </Suspense>
      <Suspense fallback={<LoadingBar/>} height={"100vh"} offset={-100}>
      <section id="#services">
        <Services/>
      </section>
      </Suspense>
      <Suspense fallback={<LoadingBar/>} height={"600vh"} offset={-100}>
      <Portfolio/>
      </Suspense>
      <Suspense fallback={<LoadingBar/>} height={"100vh"} offset={-100}>
      <section id="#contact">
        <Contact/>
      </section>
      </Suspense>
    </div>
  )
}

export default App
