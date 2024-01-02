import "../styles/Skills.scss";
import { skillsFrontData } from "../constant/data";
import { skillsBackData } from "../constant/data";
import { skillsToolsData } from "../constant/data";
import { useTheme } from "../context/ThemeContext";

function Skills() {
  const { theme } = useTheme();

  return (
    <section id="/skills" className={`skills ${theme}`}>
      <div className="heading">
        <h1>Skills</h1>
      </div>
      <div className="contents">
        <ul className="skills-set">
          <h2 className="divider">Front</h2>
          {skillsFrontData.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <img src={skill.img} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </ul>
        <ul className="skills-set">
          <h2 className="divider">Back</h2>
          {skillsBackData.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <img src={skill.img} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </ul>
        <ul className="skills-set">
          <h2 className="divider">Tools</h2>
          {skillsToolsData.map((skill) => (
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
