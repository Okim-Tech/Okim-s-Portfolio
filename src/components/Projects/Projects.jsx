import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";
import taskflowImg from "../../assets/images/taskflow.jpg";

const projects = [
  {
    title: "Student Task Management System",
    description:
      "A full-stack web application that helps students organise, manage and track their academic tasks efficiently.",

    technologies: ["React", "Node.js", "Express", "MongoDB"],

    github:
      "https://github.com/Okim-Tech/My-task-management-project-Defence-WOF-.git",

    demo: "https://my-task-management-project-defence-seven.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <span className="section-tag">Projects</span>

        <h2>Featured Project</h2>

        <div className="project-card">
          <div className="project-image">
            <img src={taskflowImg} alt="Student Task Management" />
          </div>

          <div className="project-content">
            <h3>{projects[0].title}</h3>

            <p>{projects[0].description}</p>

            <div className="tech-stack">
              {projects[0].technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={projects[0].demo}
                target="_blank"
                rel="noreferrer"
                className="demo-btn"
              >
                Live Demo
              </a>

              <a
                href={projects[0].github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="more-projects">
        <button className="more-projects-btn">
          View More Projects <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
