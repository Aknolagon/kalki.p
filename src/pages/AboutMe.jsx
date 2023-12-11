import "../styles/AboutMe.scss";
// import "../components/NavBar.scss";
import About from "../assets/Profile2.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="heading">About <span>Me</span></h2>
<div className="about-img">
  <img src={About} alt="about" />
  <span className="circle-spin"></span>
</div>

<div className="about-content">
<h3>Front-End And Back-End Developer!</h3>
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
          <div className="btn-box">
            <button className="btns"><a>Read More</a></button>
          </div>
    </section>
  );
}

export default AboutMe;
