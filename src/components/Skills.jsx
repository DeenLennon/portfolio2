import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "./Counter";
import "../styles/skills.css";

const STATS = [
  { from: 0, to: 15, text: "Projects Completed", suffix: "+" },
  { from: 0, to: 12, text: "Happy Clients", suffix: "+" },
  { from: 0, to: 5, text: "Years Experience", suffix: "+" },
  { from: 0, to: 99, text: "Success Rate", suffix: "%" },
];

const SKILLS = [
  { name: "React / Next.js", level: 80 },
  { name: "Node.js / Express", level: 75 },
  { name: "Cybersecurity / Ethical Hacking", level: 65 },
  { name: "TypeScript", level: 30 },
  { name: "Python / Django", level: 65 },
  { name: "DevOps / Docker", level: 20 },
  { name: "AWS / Cloud", level: 10 },
  { name: "MongoDB / PostgreSQL", level: 50 },
  { name: "Digital Electronics", level: 75 },
];

const TOOLS = [
  "VS Code", "Git", "Arduino", "Docker", "Kubernetes", 
  "Node", "AWS", "Wireshark", "Linux", "Postman", "Parrot",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="skills" id="skills" ref={ref}>
      {/* Stats Counter */}
      <motion.div
        className="skills__stats"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {STATS.map((stat, index) => (
          <Counter
            key={index}
            from={stat.from}
            to={stat.to}
            text={stat.text}
            suffix={stat.suffix}
          />
        ))}
      </motion.div>

      <div className="skills__content">
        {/* Left: Skills Bars */}
        <motion.div
          className="skills__left"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="skills__title">My Expertise</h2>
          <p className="skills__description">
            Proficient in modern web technologies with a focus on performance, 
            security, and scalable architecture.
          </p>

          <div className="skills__bars">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-bar"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="skill-bar__header">
                  <span className="skill-bar__name">{skill.name}</span>
                  <span className="skill-bar__percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar__track">
                  <motion.div
                    className="skill-bar__fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Tools & Experience */}
        <motion.div
          className="skills__right"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="skills__tools">
            <h3>Tools & Technologies</h3>
            <div className="skills__tools-grid">
              {TOOLS.map((tool) => (
                <motion.span
                  key={tool}
                  className="tool-tag"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(216, 136, 152, 0.15)" }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="skills__experience">
            <h3>Experience</h3>
            <div className="timeline">
              {[
                { year: "2025 - Present", role: "Digital Technologies Instructor", company: "AIS Intl. Schools" },
                { year: "2022 - 2024", role: "Full Stack Developer", company: "Digital Agency" },
                { year: "2021 - 2022", role: "Junior Developer", company: "Startup Hub" },
                { year: "2020 - 2021", role: "Digital Electronics", company: "Self-Employed" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline__item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="timeline__dot" />
                  <div className="timeline__content">
                    <span className="timeline__year">{item.year}</span>
                    <h4>{item.role}</h4>
                    <p>{item.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

 
export default Skills;
