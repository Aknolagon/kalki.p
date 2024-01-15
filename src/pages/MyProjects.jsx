import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/MyProjects.scss";
import { projetsData } from "../constant/data";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { RiGithubFill } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";

function MyProjects() {
  const { theme } = useTheme();

  const [currentProject, setCurrentProject] = useState(0);

  const handlePreviousClick = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    } else {
      setCurrentProject(projetsData.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentProject < projetsData.length - 1) {
      setCurrentProject(currentProject + 1);
    } else {
      setCurrentProject(0);
    }
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section variants={textVariants} initial="initial" animate="animate">
      <div id="/projects" className={`projects ${theme}`}>
        <h1 className="heading">Mes Projets</h1>
        <div className="project-container">
          <ul className="project-box">
            <button
              className="glowing-btn"
              type="button"
              onClick={handlePreviousClick}
            >
              <span className="glowing-txt">&lt;</span>
            </button>
            <li className="project-layer">
              <img
                src={projetsData[currentProject].img}
                alt={projetsData[currentProject].title}
              />
              <div className="project-text">
                <h2>{projetsData[currentProject].title}</h2>
                <p>{projetsData[currentProject].text}</p>
                <div className="icon-url">
                  <p
                    href={projetsData[currentProject].url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Current Project image"
                  >
                    <GiEarthAsiaOceania />
                  </p>
                  <p
                    href={projetsData[currentProject].github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Current Project text"
                  >
                    <RiGithubFill />
                  </p>
                </div>
              </div>
            </li>
            <button
              className="glowing-btn"
              type="button"
              onClick={handleNextClick}
            >
              <span className="glowing-txt">&gt;</span>
            </button>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default MyProjects;
