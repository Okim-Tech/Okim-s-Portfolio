import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-content">
          <h2 className="hero-title">
            Hi, I'm <br />
            <span>Okim Peace</span>
          </h2>

          <h2 className="hero-subtitle">Full Stack Software Developer</h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications using
            React, Node.js, Express and MongoDB. I enjoy building practical
            solutions that help businesses and individuals achieve their goals
            through modern web technologies.
          </p>

          <div className="hero-buttons">
            <a a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="/peace-okim-cv.pdf" className="btn-secondary">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-socials">
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
            href="mailto:okimpeace187@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Side */}
        <div className="hero-image">
          <img src={profileImg} alt="Peace Okim" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
