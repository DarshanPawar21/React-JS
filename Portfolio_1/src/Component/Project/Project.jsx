import "../Hero/Hero.css";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";

const projects = [
    {
    title:"HRMS",
    image:s6,
    linkL:"https://drive.google.com/file/d/14tLbJCI6QasGYIoC_J1W3ajFagb4LhoE/view",
    text:"A human resource management system (HRMS) designed to streamline employee data, attendance, and leave management for efficient HR operations."
  },
  {
    title: "Todo",
    image: s1,
    link: "https://github.com/DarshanPawar21/JavaScript/blob/main/TODO/output.md",
    text: "A simple task list that helps users organize daily work, prioritize important items, and stay in control of their schedule."
  },
  {
    title: "Quiz App",
    image: s2,
    link: "https://drive.google.com/file/d/1OD0JLDT1IPvSxBNJU7-CGNr-N4FQqiOj/view",
    text: "A quiz experience focused on smooth question flow, score handling, and responsive layouts across different screen sizes."
  },
  {
    title: "Task Manager",
    image: s3,
    link: "https://github.com/DarshanPawar21/JavaScript/blob/main/Final%20Pro/OUTPUT.md",
    text: "A clean task management interface designed to help users plan, track, and complete important work without clutter."
  },
  {
    title: "Weather App",
    image: s4,
    link: "https://github.com/DarshanPawar21/JavaScript/blob/main/WEATHER/OUTPUT.MD",
    text: "A weather app concept that displays useful weather information in a clear and mobile-friendly interface."
  },
  {
    title: "Food Delivery App",
    image: s5,
    link: "https://drive.google.com/file/d/1p5exiIdh3rl7smmyrJ3cN7VhSHSq9Pw4/view",
    text: "A food ordering flow with search, product browsing, and checkout-focused screens built for a polished user journey."
  }
];

const Project = () => {
  return (
    <section className="section-block" id="Pro">
      <div className="container">
        <h2 className="section-title text-center">Project</h2>
        <div className="row g-4 mt-2">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-xl-4" key={project.title}>
              <article className="project-card h-100">
                <img src={project.image} alt={project.title} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <a className="btn accent-btn" href={project.link}>Go To</a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
