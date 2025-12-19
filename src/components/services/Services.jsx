import "./services.css";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import TeslaModelContainer from "./tesla/TeslaModelContainer";
import Counter from "./Counter";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/developer.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/business.png",
    title: "Product Design",
    counter: 23,
  },
  {
    id: 3,
    img: "/brand.png",
    title: "Branding",
    counter: 46,
  },
];

const Services = () => {

  const [currentServiceId, setCurrentServiceId] = useState(1)

  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <div className="services">
      <div className="services-section left">
        <motion.h1
          ref={ref}
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : undefined}
          className="section-title"
        >
          How do I help?
        </motion.h1>
        <motion.div
          ref={ref}
          variants={listVariants}
          initial="initial"
          animate={isInView ? "animate" : undefined}
          className="service-list"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="service-icon">
                <img src={service.img} alt="" />
              </div>
              <div className="service-info">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counter-list">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>
      {/* <div className="services-section right">{
        currentServiceId === 1 ? (<ComputerModelContainer/>) : currentServiceId === 2 ? (<TeslaModelContainer/>) : ""
        }
      </div> */}
    </div>
  );
};

export default Services;
