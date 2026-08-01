import "./Projects.css";
import { motion } from "framer-motion";
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
    image: taskflowImg,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">Projects</span>

        <h2>Featured Project</h2>

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="project-buttons">
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="more-projects">
          <button className="more-projects-btn">
            View More Projects <FaArrowRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
