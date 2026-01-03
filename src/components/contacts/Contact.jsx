import "./contact.css";
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";
import {motion, useInView} from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    }
  }
}

const Contact = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(error);
        },
      );
  };

  const isInView = useInView(ref, {margin: "-200px"})

  return (
    <div className='contact' ref={ref} onSubmit={sendEmail}>
      <div className="contact-section">
        <motion.form action="#" variants={listVariant} animate={isInView ? "animate" : "initial"}>
          <motion.h1 variants={listVariant} className="contact-title">Contact me</motion.h1>
          <motion.div variants={listVariant} className="form-item">
            <label htmlFor="#">Name</label>
            <input type="text" name="name" placeholder="Deen Lennon" />
          </motion.div>
          <motion.div variants={listVariant} className="form-item">
            <label htmlFor="#">Email</label>
            <input type="email" name="email" placeholder="lennonabu21@yahoo.com" />
          </motion.div>
          <motion.div variants={listVariant} className="form-item">
            <label htmlFor="#">Message</label>
            <textarea name="message" id="#" rows={10} placeholder="Write your message..."></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="form-btn">Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="contact-section contact-svg"><ContactSvg/></div>
    </div>
  )
}

export default Contact