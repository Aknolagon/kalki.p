import "../styles/AboutMe.scss";

function AboutMe() {
  return (
    <section id="/aboutme" className="about-me">
      <h1 className="heading">À Propos</h1>
      <div className="about-content">
        <div className="about-left">
          <h2>Développeur</h2>
          <div className="circle lightning">
            <h3 className="front-end">Front-End</h3>
            <h3 className="back-end">Back-End</h3>
            <div className="content"></div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-paragraph">
            J&apos;ai des connaissances en Front-End et en Back-End. Après avoir
            commencé ma carrière en tant que Business Developper, j’ai eu
            envie de travailler dans un domaine qui me tenait à cœur et cela
            depuis plusieurs années. C&apos;est pourquoi, j&apos;ai commencé une
            formation à la Wild Code School pour devenir Développeur Web et Web
            Mobile il y a maintenant 4 mois.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
