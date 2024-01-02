import { useTheme } from "../context/ThemeContext";
import "../styles/AboutMe.scss";
import { motion } from "framer-motion";

function AboutMe() {
    const { theme } = useTheme();

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
    <motion.section
      id="/aboutme"
      className={`about-me ${theme}`}
      initial="initial"
      animate="animate"
      variants={textVariants}
    >
      <motion.h1 className="heading" variants={textVariants}>
        À Propos
      </motion.h1>
      <motion.div className="about-content" variants={textVariants}>
        <div className="about-left">
          <h2 className="about-dev">Développeur</h2>
          <div className="circle lightning">
            <h3 className="front-end">Front-End</h3>
            <h3 className="back-end">Back-End</h3>
            <div className="content"></div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-paragraph">
            J&apos;ai des connaissances en Front-End et en Back-End. Après avoir
            commencé ma carrière en tant que Business Developper, j’ai eu envie
            de travailler dans un domaine qui me tenait à cœur et cela depuis
            plusieurs années. C&apos;est pourquoi, j&apos;ai commencé une
            formation à la Wild Code School pour devenir Développeur Web et Web
            Mobile il y a maintenant 4 mois.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutMe;
