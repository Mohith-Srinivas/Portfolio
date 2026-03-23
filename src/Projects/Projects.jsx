import "./Projects.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectData from "./ProjectsData";

function Projects() {

  return (
    <section className="projects">

      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">

        {projectData.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <h4>{project.subtitle}</h4>

              <p>{project.description}</p>

              <div className="project-buttons">
                <a href={project.preview} className="project-btn" target="_blank" rel="noreferrer" ><OpenInNewIcon style={{marginRight:"6px"}}/>Preview</a>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;