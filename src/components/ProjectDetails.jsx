// src/pages/ProjectDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/projectDetails.css";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    image: "/landingpage.jpg",
    title: "Web Development Tutorial Website",
    description: "A comprehensive platform for learning modern web development techniques and best practices. Features interactive code editors and video tutorials.",
    longDescription: "This platform was built to bridge the gap between theoretical knowledge and practical application in web development. It features a custom-built interactive code editor that runs in the browser, allowing users to write, test, and debug code in real-time without any setup. The video tutorial system supports adaptive streaming and includes interactive quizzes to reinforce learning.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "/projects/web-tutorial",
    liveUrl: "https://example.com/web-tutorial",
    githubUrl: "https://github.com/yourusername/web-tutorial",
    features: [
      "Interactive browser-based code editor",
      "Adaptive video streaming with quiz integration",
      "Progress tracking and certification system",
      "Community forum and peer review",
    ],
    techStack: ["React 18", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    image: "/socialmediaapp.jpg",
    title: "Student-Based Social Media Application",
    description: "A social networking platform designed specifically for student collaboration, resource sharing, and academic engagement.",
    longDescription: "Built from the ground up to address the unique needs of student communities. The platform enables real-time collaboration on group projects, shared resource libraries with version control, and an AI-powered study buddy matching system.",
    tags: ["React", "Firebase", "React Native"],
    link: "/projects/student-social",
    liveUrl: "https://example.com/student-social",
    githubUrl: "https://github.com/yourusername/student-social",
    features: [
      "Real-time group collaboration rooms",
      "Resource library with version history",
      "AI study buddy matching",
      "Cross-platform mobile support",
    ],
    techStack: ["React Native", "Firebase", "Redux", "TensorFlow.js", "Cloud Functions"],
    year: "2024",
    role: "Lead Developer",
  },
  {
    id: 3,
    image: "/newsblog.jpg",
    title: "Real-Time News Blog Application",
    description: "A dynamic news platform featuring live updates, engaging multimedia content, and personalized feed algorithms.",
    longDescription: "A high-performance news aggregation platform that delivers personalized content through machine learning algorithms. Handles thousands of concurrent users with sub-second update latency using GraphQL subscriptions and edge caching.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    link: "/projects/news-blog",
    liveUrl: "https://example.com/news-blog",
    githubUrl: "https://github.com/yourusername/news-blog",
    features: [
      "Real-time GraphQL subscriptions",
      "ML-powered content personalization",
      "Edge-cached global CDN delivery",
      "Advanced search with Elasticsearch",
    ],
    techStack: ["Next.js 14", "GraphQL", "PostgreSQL", "Redis", "Elasticsearch", "Vercel"],
    year: "2023",
    role: "Backend Engineer",
  },
  {
    id: 4,
    image: "/cssanimation.jpg",
    title: "Web Animation Full Course",
    description: "Complete guide to creating stunning web animations using modern CSS, GSAP, and Framer Motion techniques.",
    longDescription: "An educational platform focused entirely on web animation. Includes interactive playgrounds where users can experiment with animation parameters and see results instantly. Covers everything from basic CSS transitions to complex 3D WebGL animations.",
    tags: ["CSS3", "Sass", "Framer Motion"],
    link: "/projects/animation-course",
    liveUrl: "https://example.com/animation-course",
    githubUrl: "https://github.com/yourusername/animation-course",
    features: [
      "Live animation playground",
      "Step-by-step tutorial system",
      "Performance benchmarking tools",
      "Export to CSS/GSAP/Framer Motion",
    ],
    techStack: ["React", "GSAP", "Three.js", "Framer Motion", "Sass", "Vite"],
    year: "2024",
    role: "Frontend Developer",
  },
  {
    id: 5,
    image: "/Ecommerce.jpg",
    title: "E-commerce Platform for Electrical Solutions",
    description: "Full-featured online store specializing in electrical products with inventory management and payment processing.",
    longDescription: "A complete e-commerce solution for an electrical supply company. Features include real-time inventory tracking, automated reordering, multi-currency support, and integration with major payment gateways including Stripe and PayPal.",
    tags: ["React", "Stripe", "AWS"],
    link: "/projects/ecommerce",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    features: [
      "Real-time inventory management",
      "Multi-currency checkout",
      "Automated supplier reordering",
      "Advanced analytics dashboard",
    ],
    techStack: ["React", "Node.js", "Stripe", "AWS Lambda", "DynamoDB", "S3"],
    year: "2023",
    role: "Full Stack Developer",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = PORTFOLIO_ITEMS.find(
    (p) => p.link === `/projects/${projectId}`
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate("/#portfolio")} className="back-btn">
          Back to Portfolio
        </button>
      </div>
    );
  }

  const currentIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PORTFOLIO_ITEMS[currentIndex - 1] : null;
  const nextProject = currentIndex < PORTFOLIO_ITEMS.length - 1 ? PORTFOLIO_ITEMS[currentIndex + 1] : null;

  return (
    <motion.main
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Navigation */}
      <motion.nav
        className="project-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button onClick={() => navigate("/#portfolio")} className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Portfolio
        </button>
      </motion.nav>

      {/* Hero Image */}
      <motion.section
        className="project-hero"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="project-hero-image">
          <img src={project.image} alt={project.title} />
          <div className="project-hero-overlay" />
        </div>
        
        <motion.div
          className="project-hero-content"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="project-meta">
            <span className="project-year">{project.year}</span>
            <span className="project-role">{project.role}</span>
          </div>
          <h1>{project.title}</h1>
        </motion.div>
      </motion.section>

      {/* Project Description */}
      <motion.section
        className="project-body"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <div className="project-description">
          <h2>About the Project</h2>
          <p>{project.longDescription}</p>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="project-tech"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h3>Tech Stack</h3>
          <div className="tech-tags">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="project-features"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <h3>Key Features</h3>
          <ul>
            {project.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d88898" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="project-actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
          </a>
        </motion.div>
      </motion.section>

      {/* Project Navigation Footer */}
      <motion.footer
        className="project-footer-nav"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        {prevProject ? (
          <button
            onClick={() => navigate(prevProject.link)}
            className="footer-nav-btn footer-nav-prev"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <div>
              <span className="footer-nav-label">Previous</span>
              <span className="footer-nav-title">{prevProject.title}</span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextProject ? (
          <button
            onClick={() => navigate(nextProject.link)}
            className="footer-nav-btn footer-nav-next"
          >
            <div>
              <span className="footer-nav-label">Next</span>
              <span className="footer-nav-title">{nextProject.title}</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ) : (
          <div />
        )}
      </motion.footer>
    </motion.main>
  );
};

export default ProjectDetail;