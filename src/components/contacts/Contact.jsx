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

  const formRef = useRef(null);

  const sendEmail = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    );

    console.log("SUCCESS!");
    setSuccess(true);
    setError(false);
    e.target.reset();
  } catch (err) {
    console.error("EmailJS Error:", err);
    setError(true);
  }
};

  //   emailjs
  //     .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form,
  //     import.meta.env.VITE_PUBLIC_KEY,
  //     )
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         setSuccess(true);
  //         setError(false);
  //         form.reset();
  //       }
  //     ).catch((err) =>{
  //       console.error("EmailJS Error:", err);
  //       setError(true);
  //     });
  // };

  const isInView = useInView(formRef, {margin: "-200px"})

  return (
    <div className='contact' >
      <div className="contact-section">
        <motion.form action="#" ref={formRef} onSubmit={sendEmail} variants={listVariant} animate={isInView ? "animate" : "initial"}>
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
          <motion.button variants={listVariant} className="form-btn" type="submit">Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="contact-section contact-svg"><ContactSvg/></div>
    </div>
  )
}

export default Contact