import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingBar from "./LoadingBar";
import Navbar from "./Navbar";
import ProjectDetail from "./ProjectDetails";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const Hero = lazy(() => import("./Hero"));
const Portfolio = lazy(() => import("./Portfolio"));
const Services = lazy(() => import("./Services"));
const Skills = lazy(() => import("./Skills"));
const Testimonials = lazy(() => import("./Testimonials"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

const SectionLoader = () => (
  <div className="section-loader">
    <motion.div
      className="section-loader__spinner"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// Home page with all sections
const HomePage = () => (
  <main>
    <Suspense fallback={<SectionLoader />}>
      <Hero />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Portfolio />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Services />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Skills />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Contact />
    </Suspense>
    <Suspense fallback={<SectionLoader />}>
      <Footer />
    </Suspense>
  </main>
);

// Scroll to top on route change
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsReady(true), 100);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <React.Fragment>
        <AnimatePresence>
          {isLoading && <LoadingBar />}
        </AnimatePresence>

        <AnimatePresence>
          {!isReady ? (
            <motion.div
              className="app-loader"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="app-loader__content"
              >
                <h1>
                  DL<span>.</span>
                </h1>
                <motion.div
                  className="app-loader__progress"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Navbar />
                      <HomePage />
                    </>
                  }
                />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </motion.div>
          )}
        </AnimatePresence>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;