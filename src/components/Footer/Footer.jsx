import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Okim</h2>

          <p>
            Full Stack Software Developer passionate about building modern,
            responsive and scalable web applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 okimpeace187@gmail.com</p>
          <p>📍 Owerri, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Okim. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
