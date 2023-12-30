import { Link } from "react-scroll";
import "../styles/NavBar.scss";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Logo from "../assets/Logo.webp";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="" className="portfolio">
          <span>Portfolio</span>
        </a>
        <ul className="navlist">
          <li>
            <Link to="/" className="active" smooth={true} duration={100}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/aboutme" className="active" smooth={true} duration={100}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="/skills" className="active" smooth={true} duration={100}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="active"
              smooth={true}
              duration={100}
            >
              Mes Projets
            </Link>
          </li>
          <li>
            <Link to="/contact" className="active" smooth={true} duration={100}>
              Me Contacter
            </Link>
          </li>
        </ul>
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
        </div>
          <a href="" className="home-logo" to="/">
            <img className="logo" src={Logo} alt="logo" />
          </a>
    </nav>
  );
}

export default NavBar;
