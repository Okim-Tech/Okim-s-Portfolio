import "./About.css";
import profileImg from "../../assets/images/profile.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      {/* "About Me" tag moved outside the content container */}
      <span className="section-tag">About Me</span>

      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Peace Okim" />
        </div>

        <div className="about-content">
          <h2>
            Passionate About Building
            <span> Modern Web Applications</span>
          </h2>

          <p>
            I'm Okim Peace, a Full Stack Software Developer who enjoys creating
            clean, responsive, and user-friendly web applications. My journey
            into software development began with a strong interest in technology
            and problem-solving. Through continuous learning, hands-on projects,
            and practical experience, I have developed the ability to build
            complete web applications — from creating intuitive user interfaces
            to developing backend systems, APIs, and database solutions.
          </p>

          <p>
            I work with HTML, CSS, JavaScript, React, Node.js, Express and
            MongoDB. My goal is to build software that solves real problems
            while delivering an excellent user experience. I am constantly
            improving my skills, exploring modern technologies, and looking for
            opportunities to collaborate, build meaningful products, and grow as
            a software engineer.
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
