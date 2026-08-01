import "./Navbar.css";
import logoImg from "../../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoImg} alt="Okim logo" className="logo-img" />
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="hire-btn">
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
