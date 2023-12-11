import "../styles/Header.scss";
import Profile from "../assets/Profile3.jpg";

function Header() {
  return (
    <section className="header">

      {/* desktop */}
      <div className="container header-container">
        <div className="header-left">
          <h1>
            Hi, I am <span>Prasanna KALKI</span>
          </h1>
          <h3 className="text-animate">A Web and Web Mobile Developer</h3>
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
          <div className="header-btns">
            <button className="btn">Here my CV</button>
            <button className="btn">Here my Works</button>
          </div>
        </div>
        <div className="header-right">
          <img className="profile" src={Profile} alt="profile" />
        </div>
      </div>

{/* Mobile version */}



    </section>
  );
}

export default Header;
