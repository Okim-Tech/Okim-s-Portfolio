import "./Skills.css";

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
      <div className="skills-container">
        <span className="section-tag">My Skills</span>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
