import "./Hero.css";
import profileImg from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-content">
          <span className="hero-tag">
            Full Stack Software Developer Specializing in the MERN Stack
          </span>

          <h1>
            Hi, I'm <span>Okim Peace</span>
          </h1>

          <p>
            I build responsive, modern and scalable web applications using
            React, Node.js, JavaScript and MongoDB. I love solving real-world
            problems through clean, efficient code.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">View Projects</button>

            <button className="btn-secondary">Download CV</button>
          </div>
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
