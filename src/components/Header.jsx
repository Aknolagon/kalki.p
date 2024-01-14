import "../styles/Header.scss";
import { motion } from "framer-motion";
import aboutMe from "../assets/Profile.webp";
import avatar from "../assets/Avatar.webp";
import scroll from "../assets/scroll.webp";
import { useTheme } from "../context/ThemeContext";

function Header() {
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
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const downloadCV = () => {
    const path = "/Kalki_Prasanna.pdf";

    fetch(path)
      .then((response) => response.blob())
      .then((req) => {
        const url = URL.createObjectURL(req);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Kalki_Prasanna.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
  };

  const handleScrollButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="/" className={`header ${theme}`}>
      <motion.div
        className="container header-container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="header-left" variants={textVariants}>
          <h1>Hello, je suis Prasanna KALKI</h1>
          <h2 className="text-animate">Un Développeur Web et Web Mobile</h2>
          <p className="para">
            J&apos;ai des connaissances en Front-End et en Back-End. Après avoir
            commencé ma carrière en tant que Business Developper, j’ai eu envie
            de travailler dans un domaine qui me tenait à cœur et cela depuis
            plusieurs années. C&apos;est pourquoi, j&apos;ai commencé une
            formation à la Wild Code School afin de devenir un Développeur Web et Web
            Mobile, il y a maintenant 4 mois.
          </p>
        </motion.div>
        <motion.div className="header-right" variants={textVariants}>
          <div className="img-header">
            <img src={avatar} alt="Prasanna" className="user-avatar" />
            <div className="username">Aknolagon</div>
          </div>
          <img src={aboutMe} alt="photo" className="header-image" />
          <div className="header-caption">
            <span>Aknolagon:</span> Développeur Web disponible :D
          </div>
          <div className="header-actions">
            <div className="header-cv">
              <button onClick={downloadCV} className="btns">
                <span className="btns-txt">
                  Voici mon <span className="faulty-letter">C</span>V
                </span>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="imageContainer"
          animate="scrollButton"
          variants={textVariants}
          onClick={handleScrollButtonClick}
        >
          <img className="img-scroll" src={scroll} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Header;
