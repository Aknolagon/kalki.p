import "../styles/AboutMe.scss";
// import "../components/NavBar.scss";
import About from "../assets/Profile.webp";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="heading">
        À Propos
      </h2>
      <div className="about-content">
        <div className="about-left">
          <div className="about-header">
            <img src={About} alt="Prasanna" className="user-avatar" />
            <div className="username">Aknolagon</div>
          </div>
          <img src={About} alt="photo" className="about-image" />
          <div className="about-caption">
            <span>Aknolagon:</span> Développeur Web disponible :D
          </div>
          <div className="about-actions">
            <div className="about-action">
              <span className="about-like">❤</span> J&apos;aime
            </div>
            <button className="btns">
              <a>Voici mon CV</a>
            </button>
            <div className="about-action">
              <span className="about-comment">💬</span> Commenter
            </div>
          </div>
        </div>

        <div className="about-right">
          <h3 className="text-animate">Front-End et Back-End Développeur!</h3>
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
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
