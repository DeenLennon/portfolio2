import {lazy, Suspense} from "react";
import LoadingBar from "./components/loading/LoadingBar";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contacts/Contact"));

function App() {

  return (
    <div className="container">
      <Suspense fallback={<LoadingBar/>}>
      <section id="home">
        <Hero/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="portfolio">
      <Portfolio/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      </Suspense>
    </div>
  )
}

export default App
