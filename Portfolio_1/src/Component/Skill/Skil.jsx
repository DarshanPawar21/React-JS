import { motion } from "framer-motion";
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
  "Python",
  "Node JS",
  "Mongo DB",
  "SQL",
];

const Skills = () => {
  return (
    <section className="section-block" id="Ski">
      <motion.div className="container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <h2 className="section-title text-center">Skills</h2>
        <div className="skills-grid mt-4">
          {skills.map((skill, index) => (
            <motion.a
              className="skill-pill"
              href="https://github.com/DarshanPawar21/My-Work"
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              {skill}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
