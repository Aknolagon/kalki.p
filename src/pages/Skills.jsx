import "../styles/Skills.scss";
import css from "../assets//skills/css.png";
import javascript from "../assets//skills/javascript.png";
import html from "../assets//skills/html.png";
import expressjs from "../assets//skills/expressjs.jpg";
import mysql from "../assets//skills/mysql.svg";
import sass from "../assets//skills/sass.svg";

function Skills() {
  return (
    <section className="skills">
        <h1>Skills</h1>
<div>
    <div>
        <h2>Front-End</h2><img className="skills-img" src={css} alt="skills" />
    <img className="skills-img" src={html} alt="skills" />
    <img className="skills-img" src={javascript} alt="skills" />
    <img className="skills-img" src={sass} alt="skills" /></div>
    <h2>Back-End</h2>
    <img className="skills-img" src={mysql} alt="skills" />
    <img className="skills-img" src={expressjs} alt="skills" />
</div>
    </section>
  );
}

export default Skills;
