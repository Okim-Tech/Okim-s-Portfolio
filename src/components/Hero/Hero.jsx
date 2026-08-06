import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import profileImg from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="hero-container">
        {/* Left Side (Text & Info) */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-greeting">Hi, I'm</span>

          <h1 className="hero-title">
            <span>Okim Peace</span>
          </h1>

          <h2 className="hero-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Software Developer",
                  "MERN Stack Developer",
                  "React & Node.js Specialist",
                  "Frontend & Backend Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 60,
              }}
            />
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications using
            React, Node.js, Express and MongoDB. I enjoy building practical
            solutions that help businesses and individuals achieve their goals
            through modern web technologies.
          </p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href="/Okim-Peace-CV.pdf"
              download="Okim-Peace-CV.pdf"
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/Okim-Tech"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/okim-peace-b930a1408"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=okimpeace187@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={profileImg} alt="Peace Okim" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
