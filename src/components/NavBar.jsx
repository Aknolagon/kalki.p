import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import { RiInstagramFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
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
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/aboutme">À propos</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/work">Mes Projets</Link>
          </li>
          <li>
            <Link to="/contact">Contacter</Link>
          </li>
        </ul>
        <div className="social-links">
          <li>
            <a
              href="https://www.instagram.com/ore_wa_pras/"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill />
            </a>
          </li>
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
      </div>
      <Link className="home-logo" to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
    </nav>
  );
}

export default NavBar;
