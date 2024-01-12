import { Link } from "react-scroll";
import "../styles/NavBar.scss";
import { useState } from "react";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import Logo from "../assets/Logo.webp";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const { handleTheme } = useTheme();
  const [isOnMode, setIsOnMode] = useState(false);

  const handleOnMode = () => {
    setIsOnMode((prevMode) => !prevMode);
    handleTheme();
  };

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="nav-container">
        <a href="" className="portfolio">
          <span>Portfolio</span>
        </a>
        <ul className="navbar-links">
          <Link to="/" className="navbar-link" smooth={true} duration={100}>
            <li className="navbar-item slideInDown-1">Accueil</li>
          </Link>
          {/* <li className="navbar-item slideInDown-2">
            <Link
              to="/aboutme"
              className="navbar-link"
              smooth={true}
              duration={100}
            >
              À propos
            </Link>
          </li> */}
          <Link
            to="/skills"
            className="navbar-link"
            smooth={true}
            duration={100}
          >
            <li className="navbar-item">Skills</li>
          </Link>
          <Link
            to="/projects"
            className="navbar-link"
            smooth={true}
            duration={100}
          >
            <li className="navbar-item">Mes Projets</li>
          </Link>
          <Link
            to="/contact"
            className="navbar-link"
            smooth={true}
            duration={100}
          >
            <li className="navbar-item">Me Contacter</li>
          </Link>
        </ul>
      </div>
      <div className="mode">
        <button
          className={`glowing-btn ${isOnMode ? "on" : "off"}`}
          onClick={handleOnMode}
        >
          <span className="glowing-txt">
            {isOnMode ? (
              <>
                O<span className="faulty-letter">N</span>
              </>
            ) : (
              <>
                O<span className="faulty-letter">F</span>F
              </>
            )}
          </span>
        </button>
      </div>
      <div className="social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/prasanna-kalki-64b5231b4/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinFill />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Aknolagon"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill />
          </a>
        </li>
        <li>
          <Link to="/contact" smooth={true} duration={100}>
            <BiLogoGmail />
          </Link>
        </li>
      </div>
      <a href="" className="home-logo slideInDown-8" to="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <button
        className="navbar-burger"
        type="button"
        onClick={handleShowLinks}
        aria-label={showLinks ? "Close-Burger" : "Open-Burger"}
      >
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default NavBar;
