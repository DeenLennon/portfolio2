import { Suspense } from "react";
import Shape from "./Shape";
import "./hero.css";
import Speech from "./Speech";
import {motion} from "motion/react"
import { Canvas } from "@react-three/fiber";

const awardsVariants = {
  initial:{
    x: -100,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
}

const followVariants = {
  initial:{
    y: -100,
    opacity: 0,
  },
  animate:{
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-section left">
        <motion.h1 initial={{y: -100, opacity:0}} animate={{y: 0, opacity: 1}} transition={{duration: 1}} className="hero-title">
          Hello Guys, <br />
          <span>I'm Deen Lennon</span>
        </motion.h1>
        <motion.div variants={awardsVariants} initial="initial" animate="animate" className="awards">
          <motion.h2 variants={awardsVariants}>Top Rated DevSec</motion.h2>
          <motion.p variants={awardsVariants}>With hands on experience of Full Stack Web Development</motion.p>
          <motion.div variants={awardsVariants} className="awards-list">
            <motion.img variants={awardsVariants} src="/blogger.png" alt="" />
            <motion.img variants={awardsVariants} src="/envato.png" alt="" />
            <motion.img variants={awardsVariants} src="/slack.png" alt="" />
          </motion.div>
        </motion.div>
        <motion.a animate={{y:[0,5], opacity:[0,1,0]}} transition={{repeat: Infinity, duration: 4, ease: "easeInOut"}} href="#services" className="scroll">
          <svg className="mouse-svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9V15C19 18.87 15.87 22 12 22C8.13 22 5 18.87 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path animate={{y: [0,5]}} transition={{repeat: Infinity, duration: 4, ease: "easeInOut"}}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hero-section right">
        <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/twitter.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="follow-text-container">
            <div className="follow-text">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        <Speech />
        <motion.div animate={{opacity: [0,1]}} transition={{duration: 1}} className="certificate">
          <img src="/certificate1.png" alt="" />
          A CERTIFIED
          <br />
          <span className="dev-sec">DevSecOps</span>
          <br />
          FULL STACK DEVELOPER
        </motion.div>
        <motion.a href="#contact" className="contact-link" animate={{x: [200, 0], opacity: [0, 1]}} transition={{duration: 2}}>
          <motion.div className="contact-btn" animate={{rotate: [0,360]}} transition={{duration: 10, repeat: Infinity, ease: "linear"}}>
            <svg className="circle-svg" viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                fill="none"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">* Hire Now *</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="48%">
                  * Contact Me *
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmls="http://www.w3.org/2000/svg"
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
      <div className="bg">
        <Canvas>
          <Suspense fallback="Loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hero-image">
          <img src="/student.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
