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
          <li className="navbar-link slideInDown-1">
            <Link href="" to="/" className="navbar-item" smooth={true} duration={100}>
              Accueil
            </Link>
          </li>
          <li className="navbar-link slideInDown-2">
            <Link
            href=""
              to="/skills"
              className="navbar-item"
              smooth={true}
              duration={100}
            >
              Skills
            </Link>
          </li>
          <li className="navbar-link slideInDown-3">
            <Link href=""
              to="/projects"
              className="navbar-item"
              smooth={true}
              duration={100}
            >
              Mes Projets
            </Link>
          </li>
          <li className="navbar-link slideInDown-4">
            <Link href=""
              to="/contact"
              className="navbar-item"
              smooth={true}
              duration={100}
            >
              Me Contacter
            </Link>
          </li>
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
      <ul className="social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/prasanna-kalki-64b5231b4/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin"
          >
            <RiLinkedinFill />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Aknolagon"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <RiGithubFill />
          </a>
        </li>
        <li>
          <Link href="" to="/contact" smooth={true} duration={100} aria-label="Email">
            <BiLogoGmail />
          </Link>
        </li>
      </ul>
      <a href="" className="home-logo slideInDown-8" to="/">
        <img className="logo" src={Logo} alt="logo" aria-label="Logo" />
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
