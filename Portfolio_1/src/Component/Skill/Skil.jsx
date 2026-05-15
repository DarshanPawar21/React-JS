import "../Hero/Hero.css";

const skills = [
  "HTML",
  "CSS",
  "Media Query",
  "Bootstrap",
  "C Language",
  "JavaScript + TypeScript",
  "React JS",
  "C++",
  "Python"
];

const Skills = () => {
  return (
    <section className="section-block" id="Ski">
      <div className="container">
        <h2 className="section-title text-center">Skills</h2>
        <div className="skills-grid mt-4">
          {skills.map((skill) => (
            <a
              className="skill-pill"
              href="https://github.com/DarshanPawar21/My-Work"
              key={skill}
            >
              {skill}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
