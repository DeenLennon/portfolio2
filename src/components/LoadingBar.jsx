// import React from "react";
import { motion } from "framer-motion";

const LoadingBar = () => {
  return (
    <motion.div 
      className="loading-bar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-bar__progress" />
    </motion.div>
  );
};

export default LoadingBar;