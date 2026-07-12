import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/services.css";

const SERVICES = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. From landing pages to complex SaaS platforms.",
    features: ["React / Next.js", "Node.js / Express", "Database Design", "API Integration"],
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Flutter", "iOS / Android", "App Store Deployment"],
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "DevSecOps",
    description: "Secure development practices integrated into your pipeline. CI/CD automation with security-first approach.",
    features: ["CI/CD Pipelines", "Security Audits", "Docker / K8s", "Cloud Infrastructure"],
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Chip body */}
        <rect x="7" y="7" width="10" height="10" rx="1.5" />

        {/* Inner core */}
        <rect x="10" y="10" width="4" height="4" />

        {/* Top pins */}
        <path d="M9 7V4M12 7V4M15 7V4" />

        {/* Bottom pins */}
        <path d="M9 20V17M12 20V17M15 20V17" />

        {/* Left pins */}
        <path d="M4 9H7M4 12H7M4 15H7" />

        {/* Right pins */}
        <path d="M17 9H20M17 12H20M17 15H20" />
      </svg>
    ),
    title: "Digital Electronics, Robotics & Device Repairs",
    description: "Professional solutions in digital electronics, robotics, and expert laptop and smartphone repairs. Delivering reliable diagnostics, maintenance, and innovative technology solutions.",
    features: ["Digital Electronics", "Robotics", "Laptop Repairs", "Smartphone Repairs"]
  },
  {
    id: 5,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Shield */}
        <path d="M12 2L5 5v6c0 5 3.5 9 7 11 3.5-2 7-6 7-11V5l-7-3z" />

        {/* Lock Body */}
        <rect x="9" y="11" width="6" height="5" rx="1" />

        {/* Lock Shackle */}
        <path d="M10 11V9a2 2 0 1 1 4 0v2" />

        {/* Keyhole */}
        <circle cx="12" cy="13.5" r="0.6" />
        <path d="M12 14.1v1.2" />
      </svg>
    ),
    title: "Cybersecurity",
    description: "Building hands-on experience in cybersecurity through ethical hacking techniques, vulnerability analysis, and implementing security best practices to improve system resilience.",
    features: ["Ethical Hacking", "Basic Penetration Testing", "Vulnerability Scanning", "Security Awareness"
    ]
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Technical Consulting",
    description: "Strategic technology guidance to help you make informed decisions and achieve your business objectives.",
    features: ["Architecture Review", "Tech Stack Selection", "Code Audits", "Team Training"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="services" id="services" ref={ref}>
      <motion.div
        className="services__header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="services__title">My Services</h2>
        <p className="services__description">
          Comprehensive development solutions engineered for your needs, from concept to deployment.
        </p>
      </motion.div>

      <motion.div
        className="services__grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="service-card__icon">{service.icon}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <ul className="service-card__features">
              {service.features.map((feature, i) => (
                <li key={i}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
