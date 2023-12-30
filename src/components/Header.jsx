import "../styles/Header.scss";
import aboutMe from "../assets/Profile.webp";

function Header() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Kalki_Prasanna.pdf';
    link.download = 'CV_KALKI_PRASANNA.pdf';
    link.click();
  };

  return (
    <section id="/" className="header">
      {/* desktop */}
      <div className="container header-container">
        <div className="header-left">
          <h1>
            Hello, je suis <span>Prasanna KALKI</span>
          </h1>
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
        </div>
        <div className="header-right">
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
        </div>
      </div>
      {/* Mobile version */}
    </section>
  );
}

export default Header;
