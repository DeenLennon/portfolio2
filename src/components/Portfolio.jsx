// Portfolio.jsx — FIXED VERSION

import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/portfolio.css";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    image: "/landingpage.jpg",
    title: "Web Development Tutorial Website",
    description: "A comprehensive platform for learning modern web development techniques and best practices. Features interactive code editors and video tutorials.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "/projects/web-tutorial",
  },
  {
    id: 2,
    image: "/socialmediaapp.jpg",
    title: "Student-Based Social Media Application",
    description: "A social networking platform designed specifically for student collaboration, resource sharing, and academic engagement.",
    tags: ["React", "Firebase", "React Native"],
    link: "/projects/student-social",
  },
  {
    id: 3,
    image: "/newsblog.jpg",
    title: "Real-Time News Blog Application",
    description: "A dynamic news platform featuring live updates, engaging multimedia content, and personalized feed algorithms.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    link: "/projects/news-blog",
  },
  {
    id: 4,
    image: "/cssanimation.jpg",
    title: "Web Animation Full Course",
    description: "Complete guide to creating stunning web animations using modern CSS, GSAP, and Framer Motion techniques.",
    tags: ["CSS3", "Sass", "Framer Motion"],
    link: "/projects/animation-course",
  },
  {
    id: 5,
    image: "/Ecommerce.jpg",
    title: "E-commerce Platform for Electrical Solutions",
    description: "Full-featured online store specializing in electrical products with inventory management and payment processing.",
    tags: ["React", "Stripe", "AWS"],
    link: "/projects/ecommerce",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.4 },
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }
  }),
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const contentItemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const PortfolioItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="portfolio-item"
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={item.direction}
    >
      <motion.div
        className="pImg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="image-overlay" />
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="pText"
      >
        <motion.div variants={contentItemVariants} className="tags">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </motion.div>

        <motion.h2 variants={contentItemVariants}>{item.title}</motion.h2>
        <motion.p variants={contentItemVariants}>{item.description}</motion.p>

        <motion.div variants={contentItemVariants}>
          <button
            type="button"
            className="view-project-btn"
            onClick={() => navigate(item.link)}
          >
            View Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  // Preload images
  useEffect(() => {
    PORTFOLIO_ITEMS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const currentItem = PORTFOLIO_ITEMS[currentIndex];

  const navigateToPage = useCallback((newIndex) => {
    if (newIndex >= 0 && newIndex < PORTFOLIO_ITEMS.length) {
      setCurrentIndex([newIndex, newIndex > currentIndex ? 1 : -1]);
    }
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setCurrentIndex([newIndex, 1]);
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? PORTFOLIO_ITEMS.length - 1 : currentIndex - 1;
    setCurrentIndex([newIndex, -1]);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <section
      className="portfolio"
      id="portfolio"
      aria-label="Portfolio gallery"
    >
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Projects</h2>
        <p>A selection of my recent work across web and mobile platforms</p>
      </motion.div>

      <div className="portfolio-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <PortfolioItem
            key={currentItem.id}
            item={{ ...currentItem, direction }}
          />
        </AnimatePresence>

        <button
          className="nav-button nav-button-prev"
          onClick={goToPrevious}
          aria-label="Previous project"
          disabled={currentIndex === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className="nav-button nav-button-next"
          onClick={goToNext}
          aria-label="Next project"
          disabled={currentIndex === PORTFOLIO_ITEMS.length - 1}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div
        className="pagination-dots"
        role="tablist"
        aria-label="Project pagination"
      >
        {PORTFOLIO_ITEMS.map((item, index) => (
          <button
            key={item.id}
            className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => navigateToPage(index)}
            aria-label={`Go to project ${index + 1}: ${item.title}`}
            aria-selected={index === currentIndex}
            role="tab"
          >
            <span className="sr-only">{item.title}</span>
          </button>
        ))}
      </div>

      {/* <div className="project-counter" aria-live="polite">
        <span className="current-number">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="separator">/</span>
        <span className="total-number">{String(PORTFOLIO_ITEMS.length).padStart(2, '0')}</span>
      </div> */}

      {/* <div className="progress-bar" aria-hidden="true">
        <motion.div
          className="progress-fill"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentIndex + 1) / PORTFOLIO_ITEMS.length) * 100}%`,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div> */}
    </section>
  );
};

export default Portfolio;