import { TypeAnimation } from "react-type-animation";
import {motion} from "motion/react"

const Speech = () => {
  return (
    <motion.div className="speech-bubble" animate={{opacity:[0,1]}} transition={{duration: 1}}>
      <div className="bubble">
        <TypeAnimation
          sequence={[
            //wait 1s before starting
            1000,
            // Same substring at the start will only be typed out once, initially
            "Hello everyone this is Deen Lennon",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I am a Full Stack Developer",
            1000
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img src="/heropicspeech.png" alt="" />
    </motion.div>
  );
};

export default Speech;
