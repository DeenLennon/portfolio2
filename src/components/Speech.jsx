
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div 
      className="speech-bubble" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Hello everyone, this is Deen Lennon",
            2000,
            "I am a Full-Stack Developer",
            2000,
            "I build secure & scalable apps",
            2000,
            "Let's create something amazing!",
            3000,
          ]}
          wrapper="span"
          speed={45}
          deletionSpeed={55}
          repeat={Infinity}
          cursor={true}
        />
      </div>
      <img src="/heropicspeech.png" alt="Deen Lennon avatar" loading="lazy" />
    </motion.div>
  );
};

export default Speech;
