import "./Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.h1
        className="loader-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        OKIM
      </motion.h1>

      <motion.p
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Full Stack Software Developer
      </motion.p>

      <div className="loader-bar">
        <div className="loader-progress"></div>
      </div>
    </div>
  );
};

export default Loader;
