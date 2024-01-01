import "../styles/Header.scss";
import { motion } from "framer-motion";
import aboutMe from "../assets/Profile.webp";
import scroll from "../assets/scroll.png";

function Header() {

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
    const link = document.createElement('a');
    link.href = '/src/assets/Kalki_Prasanna.pdf';
    link.download = 'CV_KALKI_PRASANNA.pdf';
    link.click();
  };

    const handleScrollButtonClick = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    };

  return (
    <section id="/" className="header">
      <motion.div
        className="container header-container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="header-left" variants={textVariants}>
          <h1>Hello, je suis Prasanna KALKI</h1>
          <h3 className="text-animate">Un Développeur Web et Web Mobile</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It waccdcs popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktopqdd publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </motion.div>
        <motion.div className="header-right" variants={textVariants}>
          <div className="img-header">
            <img src={aboutMe} alt="Prasanna" className="user-avatar" />
            <div className="username">Aknolagon</div>
          </div>
          <img src={aboutMe} alt="photo" className="header-image" />
          <div className="header-caption">
            <span>Aknolagon:</span> Développeur Web disponible :D
          </div>
          <div className="header-actions">
            <div className="header-action">
              <span className="header-like">❤</span> J&apos;aime
            </div>
            <button onClick={downloadCV} className="btns">
              Voici mon CV
            </button>
            <div className="header-action">
              <span className="header-comment">💬</span> Commenter
            </div>
          </div>
        </motion.div>
        <motion.div
          className="imageContainer"
          animate="scrollButton"
          variants={textVariants}
          onClick={handleScrollButtonClick}
        >
          <img src={scroll} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Header;
