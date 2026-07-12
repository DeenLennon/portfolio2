import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "../styles/testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/client1.jpg",
    text: "Deen delivered our platform ahead of schedule and exceeded all expectations. His attention to security and performance optimization saved us thousands in infrastructure costs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael David",
    role: "Product Manager, CloudScale",
    image: "/client2.jpg",
    text: "Working with Deen was a game-changer for our startup. He transformed our MVP into a scalable product that handled 10x our expected traffic during launch.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "CTO, FinanceFlow",
    image: "/client3.jpg",
    text: "The DevSecOps practices Deen implemented reduced our deployment time by 70% while improving our security posture. Highly recommended for any serious project.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, EduTech Platform",
    image: "/client4.jpg",
    text: "Exceptional full-stack skills combined with great communication. Deen understood our educational platform needs and built features that our users genuinely love.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <motion.div
        className="testimonials__header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="testimonials__subtitle">Testimonials</span>
        <h2 className="testimonials__title">What Clients Say</h2>
        <p className="testimonials__description">
          Feedback from professionals I&apos;ve had the pleasure of working with.
        </p>
      </motion.div>

      <div className="testimonials__content">
        {/* Main Testimonial Card */}
        <motion.div
          className="testimonials__main"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="testimonials__quote-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonial-card__stars">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-card__text">
                &ldquo;{TESTIMONIALS[activeIndex].text}&rdquo;
              </p>

              <div className="testimonial-card__author">
                <img
                  src={TESTIMONIALS[activeIndex].image}
                  alt={TESTIMONIALS[activeIndex].name}
                  loading="lazy"
                />
                <div>
                  <h4>{TESTIMONIALS[activeIndex].name}</h4>
                  <span>{TESTIMONIALS[activeIndex].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Dots */}
        <div className="testimonials__nav">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              className={`testimonials__dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="testimonials__logos"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Trusted by innovative companies</p>
          <div className="testimonials__logo-grid">
            {["TechStart", "CloudScale", "FinanceFlow", "EduTech", "DataSync", "AppWorks"].map((company) => (
              <div key={company} className="testimonials__logo">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
