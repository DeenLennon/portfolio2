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
      <section id="#home">
        <Hero/>
      </section>
      </Suspense>
      <Suspense fallback={<LoadingBar/>}>
      <section id="#services">
        <Services/>
      </section>
      </Suspense>
      <Suspense fallback={<LoadingBar/>}>
      <Portfolio/>
      </Suspense>
      <Suspense fallback={<LoadingBar/>}>
      <section id="#contact">
        <Contact/>
      </section>
      </Suspense>
    </div>
  )
}

export default App
