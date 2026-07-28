import "./About.css";
import profileImg from "../../assets/images/profile.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Peace Okim" />
        </div>

        <div className="about-content">
          <span className="section-tag">About Me</span>

          <h2>
            Passionate About Building
            <span> Modern Web Applications</span>
          </h2>

          <p>
            I'm Peace Okim, a Full Stack Software Developer who enjoys creating
            clean, responsive, and user-friendly web applications. I recently
            completed my full-stack development training and continue improving
            my skills by building practical projects.
          </p>

          <p>
            I work with HTML, CSS, JavaScript, React, Node.js, Express and
            MongoDB. My goal is to build software that solves real problems
            while delivering an excellent user experience.
          </p>

          <div className="about-info">
            <div>
              <h3>Location</h3>
              <p>Owerri, Nigeria</p>
            </div>

            <div>
              <h3>Email</h3>
              <p>okimpeace187@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
