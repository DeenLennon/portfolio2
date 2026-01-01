// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import "./portfolio.css"
// import {motion, useInView, useScroll, useTransform} from "motion/react";

// const items = [
//   {
//     id: "1",
//     img: "/landingpage.jpg",
//     title: "Web development tutorial website",
//     desc: "An astute web developer",
//     link: "/",
//   },
//   {
//     id: "2",
//     img: "/socialmediaapp.jpg",
//     title: "A student base social media application",
//     desc: "An astute web developer",
//     link: "/",
//   },
//   {
//     id: "3",
//     img: "/newsblog.jpg",
//     title: "A real time news blog application",
//     desc: "An astute web developer",
//     link: "/",
//   },
//   {
//     id: "4",
//     img: "/cssanimation.jpg",
//     title: "Web animation full course",
//     desc: "An astute web developer",
//     link: "/",
//   },
//   {
//     id: "5",
//     img: "/Ecommerce.jpg",
//     title: "E-commerce website for electrical solutions",
//     desc: "An astute web developer",
//     link: "/",
//   },
// ]

// const imgVariants = {
//   initial: {
//     x: -500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     }
//   }
// }

// const textVariants = {
//   initial: {
//     x: 500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       staggerChildren: 0.05,
//     }
//   }
// }

// const ListItem = ({item}) => {

//   const ref = useRef(null)
//   const isInView = useInView(ref, {margin: "-100px"});

//   return(
//     <div className="portfolio-item" ref={ref}>
//       <motion.div variants={imgVariants} animate={isInView ? "animate" : "initial"} className="pImg">
//         <img src={item.img} alt="" />
//       </motion.div>
//       <motion.div variants={textVariants} animate={isInView ? "animate" : "initial"} className="pText">
//         <motion.h1 variants={textVariants}>{item.title}</motion.h1>
//         <motion.p variants={textVariants}>{item.desc}</motion.p>
//         <motion.a variants={textVariants} href={item.link}>
//           <button>View</button>
//         </motion.a>
//       </motion.div>
//     </div>
//   )
// }

// const Portfolio = () => {

//   const [containerDistance, setContainerDistance] = useState(0)

//   const ref = useRef(null)

//   useEffect(() => {
//     if(ref.current){
//       const rect = ref.current.getBoundingClientRect();
//       setContainerDistance(rect.left)
//     }
//   }, [])

//   const {scrollYProgress} = useScroll({target:ref})
//   const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length])

//   return (
//     <div className="portfolio" ref={ref}>
//       <motion.div className="portfolio-list" style={{x: xTranslate}}>
//         <div className="empty" style={{width:window.innerWidth - containerDistance }}/>
//         {items.map(item => (
//           <ListItem item={item} key={item.id}/>
//         ))}
//       </motion.div>
//       <section/>
//       <section/>
//       <section/>
//       <section/>
//       <section/>
//       <div className="progress-bar">
//         <svg width="100%" height="100%" viewBox="0 0 160 160">
//           <circle cx="80" cy="80" r="70" fill="none" stroke="#ddd" strokeWidth={20}/>
//           <motion.circle cx="80" cy="80" r="70" fill="none" stroke="#e44a0dff" strokeWidth={20} style={{pathLength: scrollYProgress}} transform="rotate(-90 80 80)"/>
//         </svg>
//       </div>
//     </div>
//   )
// }

// export default Portfolio

// import { useEffect, useRef, useState } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import "./portfolio.css";

// // Portfolio items data
// const PORTFOLIO_ITEMS = [
//   {
//     id: 1,
//     image: "/landingpage.jpg",
//     title: "Web Development Tutorial Website",
//     description: "A comprehensive platform for learning modern web development techniques and best practices.",
//     link: "/projects/web-tutorial",
//   },
//   {
//     id: 2,
//     image: "/socialmediaapp.jpg",
//     title: "Student-Based Social Media Application",
//     description: "A social networking platform designed specifically for student collaboration and engagement.",
//     link: "/projects/student-social",
//   },
//   {
//     id: 3,
//     image: "/newsblog.jpg",
//     title: "Real-Time News Blog Application",
//     description: "A dynamic news platform featuring live updates and engaging multimedia content.",
//     link: "/projects/news-blog",
//   },
//   {
//     id: 4,
//     image: "/cssanimation.jpg",
//     title: "Web Animation Full Course",
//     description: "Complete guide to creating stunning web animations using modern CSS and JavaScript.",
//     link: "/projects/animation-course",
//   },
//   {
//     id: 5,
//     image: "/Ecommerce.jpg",
//     title: "E-commerce Platform for Electrical Solutions",
//     description: "Full-featured online store specializing in electrical products and solutions.",
//     link: "/projects/ecommerce",
//   },
// ];

// // Animation variants
// const IMAGE_VARIANTS = {
//   initial: {
//     x: -500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };

// const TEXT_VARIANTS = {
//   initial: {
//     x: 500,
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       staggerChildren: 0.05,
//     },
//   },
// };

// /**
//  * PortfolioItem Component
//  * Displays individual portfolio item with scroll animations
//  */
// const PortfolioItem = ({ item }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <div className="portfolio-item" ref={ref}>
//       <motion.div
//         variants={IMAGE_VARIANTS}
//         animate={isInView ? "animate" : "initial"}
//         className="pImg"
//       >
//         <img src={item.image} alt={item.title} loading="lazy" />
//       </motion.div>
      
//       <motion.div
//         variants={TEXT_VARIANTS}
//         animate={isInView ? "animate" : "initial"}
//         className="pText"
//       >
//         <motion.h2 variants={TEXT_VARIANTS}>{item.title}</motion.h2>
//         <motion.p variants={TEXT_VARIANTS}>{item.description}</motion.p>
//         <motion.div variants={TEXT_VARIANTS}>
//           <a href={item.link} aria-label={`View ${item.title}`}>
//             <button type="button">View Project</button>
//           </a>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// /**
//  * Portfolio Component
//  * Main portfolio section with horizontal scroll animation
//  */
// const Portfolio = () => {
//   const [containerOffset, setContainerOffset] = useState(0);
//   const containerRef = useRef(null);

//   // Calculate container offset on mount
//   useEffect(() => {
//     const updateOffset = () => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         setContainerOffset(rect.left);
//       }
//     };

//     updateOffset();
//     window.addEventListener("resize", updateOffset);

//     return () => window.removeEventListener("resize", updateOffset);
//   }, []);

//   // Scroll animation setup
//   const { scrollYProgress } = useScroll({ target: containerRef });
//   const xTranslate = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -window.innerWidth * PORTFOLIO_ITEMS.length]
//   );

//   return (
//     <section className="portfolio" ref={containerRef}>
//       <motion.div className="portfolio-list" style={{ x: xTranslate }}>
//         {/* Offset spacer for initial alignment */}
//         <div
//           className="portfolio-spacer"
//           style={{ width: window.innerWidth - containerOffset }}
//           aria-hidden="true"
//         />
        
//         {/* Portfolio items */}
//         {PORTFOLIO_ITEMS.map((item) => (
//           <PortfolioItem key={item.id} item={item} />
//         ))}
//       </motion.div>

//       {/* Scroll sections for proper height */}
//       {PORTFOLIO_ITEMS.map((item) => (
//         <section key={`section-${item.id}`} aria-hidden="true" />
//       ))}

//       {/* Progress indicator */}
//       <div className="progress-bar" aria-label="Scroll progress">
//         <svg width="100%" height="100%" viewBox="0 0 160 160">
//           {/* Background circle */}
//           <circle
//             cx="80"
//             cy="80"
//             r="70"
//             fill="none"
//             stroke="#ddd"
//             strokeWidth={20}
//           />
//           {/* Progress circle */}
//           <motion.circle
//             cx="80"
//             cy="80"
//             r="70"
//             fill="none"
//             stroke="#e44a0d"
//             strokeWidth={20}
//             style={{ pathLength: scrollYProgress }}
//             transform="rotate(-90 80 80)"
//             strokeLinecap="round"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./portfolio.css";

// Portfolio items data
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    image: "/landingpage.jpg",
    title: "Web Development Tutorial Website",
    description: "A comprehensive platform for learning modern web development techniques and best practices.",
    link: "/projects/web-tutorial",
  },
  {
    id: 2,
    image: "/socialmediaapp.jpg",
    title: "Student-Based Social Media Application",
    description: "A social networking platform designed specifically for student collaboration and engagement.",
    link: "/projects/student-social",
  },
  {
    id: 3,
    image: "/newsblog.jpg",
    title: "Real-Time News Blog Application",
    description: "A dynamic news platform featuring live updates and engaging multimedia content.",
    link: "/projects/news-blog",
  },
  {
    id: 4,
    image: "/cssanimation.jpg",
    title: "Web Animation Full Course",
    description: "Complete guide to creating stunning web animations using modern CSS and JavaScript.",
    link: "/projects/animation-course",
  },
  {
    id: 5,
    image: "/Ecommerce.jpg",
    title: "E-commerce Platform for Electrical Solutions",
    description: "Full-featured online store specializing in electrical products and solutions.",
    link: "/projects/ecommerce",
  },
];

// Animation variants for slide transitions
const SLIDE_VARIANTS = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Animation variants for content
const IMAGE_VARIANTS = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
  },
};

const TEXT_VARIANTS = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

/**
 * PortfolioItem Component
 * Displays individual portfolio item
 */
const PortfolioItem = ({ item }) => {
  return (
    <motion.div
      className="portfolio-item"
      variants={SLIDE_VARIANTS}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <motion.div variants={IMAGE_VARIANTS} className="pImg">
        <img src={item.image} alt={item.title} loading="lazy" />
      </motion.div>

      <motion.div variants={TEXT_VARIANTS} className="pText">
        <motion.h2 variants={TEXT_VARIANTS}>{item.title}</motion.h2>
        <motion.p variants={TEXT_VARIANTS}>{item.description}</motion.p>
        <motion.div variants={TEXT_VARIANTS}>
          <a href={item.link} aria-label={`View ${item.title}`}>
            <button type="button">View Project</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/**
 * Portfolio Component
 * Main portfolio section with pagination navigation
 */
const Portfolio = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  // Calculate current item
  const currentItem = PORTFOLIO_ITEMS[currentIndex];

  // Navigate to specific page
  const navigateToPage = (newIndex) => {
    if (newIndex >= 0 && newIndex < PORTFOLIO_ITEMS.length) {
      setCurrentIndex([newIndex, newIndex > currentIndex ? 1 : -1]);
    }
  };

  // Navigate to next item
  const goToNext = () => {
    const newIndex = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    setCurrentIndex([newIndex, 1]);
  };

  // Navigate to previous item
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? PORTFOLIO_ITEMS.length - 1 : currentIndex - 1;
    setCurrentIndex([newIndex, -1]);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
  };

  return (
    <section
      className="portfolio"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Portfolio gallery"
    >
      <div className="portfolio-container">
        {/* Portfolio Items with AnimatePresence */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <PortfolioItem key={currentItem.id} item={currentItem} />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="nav-button nav-button-prev"
          onClick={goToPrevious}
          aria-label="Previous project"
          disabled={currentIndex === 0}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          className="nav-button nav-button-next"
          onClick={goToNext}
          aria-label="Next project"
          disabled={currentIndex === PORTFOLIO_ITEMS.length - 1}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots" role="navigation" aria-label="Project pagination">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <button
            key={item.id}
            className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => navigateToPage(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          >
            <span className="sr-only">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Project Counter */}
      <div className="project-counter" aria-live="polite">
        <span className="current-number">{currentIndex + 1}</span>
        <span className="separator">/</span>
        <span className="total-number">{PORTFOLIO_ITEMS.length}</span>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar" aria-hidden="true">
        <motion.div
          className="progress-fill"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentIndex + 1) / PORTFOLIO_ITEMS.length) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </section>
  );
};

export default Portfolio;