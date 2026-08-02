import "./Skills.css";
import { color, motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiExpress, SiMongodb, SiVite } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#e34f26",
    description: "Structure of modern websites",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#1572b6",
    description: "Responsive and beautiful designs",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#f7df1e",
    description: "Interactive web applications",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61dafb",
    description: "Frontend user interfaces",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#339933",
    description: "Backend development",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#ffffff",
    description: "REST API development",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#47a248",
    description: "NoSQL database",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#f05032",
    description: "Version control",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#ffffff",
    description: "Code collaboration",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "#646cff",
    description: "Fast React development",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">My Skills</span>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
