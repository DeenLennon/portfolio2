import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Speech from "./Speech";
import "../styles/hero.css";

// Lazy load heavy 3D components
const Canvas = lazy(() => import("@react-three/fiber").then(mod => ({ default: mod.Canvas })));
const Shape = lazy(() => import("./Shape"));

const awardsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const awardItemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const followVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.15,
      delayChildren: 0.5,
    }
  }
};

const followItemVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Left Content */}
      <div className="hero-section left">
        <motion.h1 
          className="hero-title"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Hello Guys, <br />
          <span>I&apos;m Deen Lennon</span>
        </motion.h1>

        <motion.div 
          variants={awardsVariants}
          initial="hidden"
          animate="visible"
          className="awards"
        >
          <motion.h2 className="top-rated"  variants={awardItemVariants}>Top Rated DevSecOps</motion.h2>
          <motion.p className="handon-p" variants={awardItemVariants}>
            With hands-on experience in Full Stack Web Development, specializing in 
            secure, scalable applications.
          </motion.p>
          <motion.div variants={awardItemVariants} className="awards-list">
            {['/blogger.png', '/envato.png', '/slack.png'].map((src, i) => (
              <motion.img 
                key={src}
                variants={awardItemVariants}
                src={src} 
                alt={`Platform ${i + 1}`}
                loading="lazy"
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.a 
          href="#services" 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg className="mouse-svg" viewBox="0 0 24 36" fill="none">
              <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="2"/>
              <motion.circle 
                cx="12" 
                cy="10" 
                r="3" 
                fill="currentColor"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          <span>Scroll Down</span>
        </motion.a>
      </div>

      {/* Right Content */}
      <div className="hero-section right">
        <motion.div 
          variants={followVariants}
          initial="hidden"
          animate="visible"
          className="follow"
        >
          {[
            { src: '/instagram.png', label: 'Instagram', url: import.meta.env.VITE_INSTAGRAM_URL },
            { src: '/x4.png', label: 'Twitter', url: import.meta.env.VITE_TWITTER_URL },
            { src: '/facebook.png', label: 'Facebook', url: import.meta.env.VITE_FACEBOOK_URL }
          ].map((social) => (
            <motion.a 
              key={social.label}
              variants={followItemVariants}
              href="/"
              aria-label={social.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={social.src} alt={social.label} loading="lazy" />
            </motion.a>
          ))}
          <motion.div variants={followItemVariants} className="follow-text-container">
            <div className="follow-text">FOLLOW ME</div>
          </motion.div>
        </motion.div>

        <Speech />

        <motion.div 
          className="certificate"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src="/certificate1.png" alt="Certification badge" loading="lazy" />
          A CERTIFIED
          <br />
          <span className="dev-sec">DevSecOps</span>
          <br />
          FULL STACK DEVELOPER
        </motion.div>

        <motion.a 
          href="#contact" 
          className="contact-link"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="contact-btn" 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <svg className="circle-svg" viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#d88898" />
              <path
                id="innerCirclePath"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                fill="none"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">* Hire Now *</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  * Contact Me *
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      {/* Background 3D & Image */}
      <div className="bg">
        <Suspense fallback={null}>
          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <Shape />
            </Suspense>
          </Canvas>
        </Suspense>
        <div className="hero-image">
          <img src="/heropic.png" alt="Deen Lennon" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
