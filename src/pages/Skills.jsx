import "../styles/Skills.scss";
import { skillsData } from "../constant/data";

function Skills() {
  return (
    <section id="/skills" className="skills">
      <div className="heading">
        <h1>
          Skills
        </h1>
      </div>
      <div className="contents">
        <ul className="skills-set">
          {skillsData.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <img src={skill.img} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}



export default Skills;
