import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
import ContactSvg from "./ContactSvg";
import "../styles/contact.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { margin: "-100px", once: true });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setSuccess(true);
      e.target.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" aria-label="Contact section">
      <motion.div 
        className="contact-section"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="contact-form-wrapper">
          <motion.h2 variants={itemVariants} className="contact-title">
            Let&apos;s Work Together
          </motion.h2>

          <form ref={formRef} onSubmit={sendEmail} noValidate>
            <motion.div variants={itemVariants} className="form-item">
              <label htmlFor="contact-name">Name</label>
              <input 
                type="text" 
                id="contact-name"
                name="name" 
                placeholder="Deen Lennon" 
                required
                minLength={2}
                aria-required="true"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="form-item">
              <label htmlFor="contact-email">Email</label>
              <input 
                type="email" 
                id="contact-email"
                name="email" 
                placeholder="lennonabu21@yahoo.com" 
                required
                aria-required="true"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="form-item">
              <label htmlFor="contact-message">Message</label>
              <textarea 
                id="contact-message"
                name="message" 
                rows={6} 
                placeholder="Type your message here."
                required
                minLength={10}
                aria-required="true"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <button 
                className="form-btn" 
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.div>

            {success && (
              <motion.div 
                className="form-status form-status--success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Your message has been sent successfully!
              </motion.div>
            )}

            {error && (
              <motion.div 
                className="form-status form-status--error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>

      <motion.div 
        className="contact-section contact-svg"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ContactSvg />
      </motion.div>
    </section>
  );
};

export default Contact;
