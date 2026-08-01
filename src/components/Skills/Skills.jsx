import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "REST API",
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
