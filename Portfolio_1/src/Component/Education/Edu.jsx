import "../Hero/Hero.css";

const educationItems = [
  {
    title: "R.N Naik High School",
    degree: "SSC",
    year: "2022",
    text: "I successfully completed core subjects like Mathematics, Science, and Social Studies, building a strong foundation for future learning."
  },
  {
    title: "R.N Naik High Sec School",
    degree: "HSC",
    year: "2024",
    text: "Completing Standard 12 in Commerce gave me a practical understanding of business, finance, accounting, and economics."
  },
  {
    title: "Bachelor of Computer Applications",
    degree: "BCA",
    year: "Pursuing",
    text: "BCA helps me connect software development, database management, networking, and modern web application concepts with practical projects."
  }
];

const Education = () => {
  return (
    <section className="section-block" id="Education">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>
        <div className="row g-4 mt-2">
          {educationItems.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.title}>
              <article className="info-card h-100 text-center">
                <h3>{item.title}</h3>
                <strong>{item.degree}</strong>
                <span>{item.year}</span>
                <p>{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
