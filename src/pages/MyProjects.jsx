import "../styles/MyProjects.scss";
import { projetsData } from "../constant/data";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { RiGithubFill } from "react-icons/ri";

function MyProjects() {
  return (
    <section>
      <div id="/projects" className="projects">
        <h1 className="heading">Mes Projets</h1>
        <div className="project-container">
          <ul className="project-box">
            {projetsData.map((project) => (
              <div className="project-layer" key={project.id}>
                <img src={project.img} alt={project.title} />
                <div className="project-text">
                  <h2>{project.title}</h2>
                  <p>{project.text}</p>
                  <a
                    className="url"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GiEarthAsiaOceania />
                  </a>
                  <a
                    className="url"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiGithubFill />
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
