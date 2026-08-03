import "./Footer.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Okim</h2>

          <p>
            Full Stack Software Developer passionate about building modern,
            responsive and scalable web applications.
          </p>

          <div className="social-wrapper">
            <h4 className="social-title">Let's Connect</h4>

            <div className="social-icons">
              <a
                href="https://wa.me/2347013232515"
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/share/191btuih1k/"
                target="_blank"
                rel="noreferrer"
                className="facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/okim.okim_?igsh=enEwbHo5OXEwZTli"
                target="_blank"
                rel="noreferrer"
                className="instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/PeaceOkim82974"
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com/in/okim-peace-b930a1408"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Okim-Tech"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">
            <FaArrowRight /> Home
          </a>

          <a href="#about">
            <FaArrowRight /> About
          </a>

          <a href="#skills">
            <FaArrowRight /> Skills
          </a>

          <a href="#projects">
            <FaArrowRight /> Projects
          </a>

          <a href="#services">
            <FaArrowRight /> Services
          </a>

          <a href="#contact">
            <FaArrowRight /> Contact
          </a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=okimpeace187@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">
              <FaEnvelope />
            </span>
            okimpeace187@gmail.com
          </a>

          <a href="tel:+2347013232515" className="contact-item">
            <span className="contact-icon">
              <FaPhone />
            </span>
            +234 701 323 2515
          </a>

          <div className="contact-item">
            <span className="contact-icon">
              <FaLocationDot />
            </span>
            Owerri, Nigeria
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Okim. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
