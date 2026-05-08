import "../Hero/Hero.css";

const Nev = () => {
  return (
    <nav className="navbar navbar-expand-lg portfolio-nav fixed-top navbar-dark">
      <div className="container">
        <a className="navbar-brand brand-name" href="#home">
          Darshan Saheb
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav mx-auto text-center gap-lg-4">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#Education">Education</a>
            <a className="nav-link" href="#Pro">Project</a>
            <a className="nav-link" href="#Ski">Skills</a>
            <a className="nav-link" href="#Abo">About</a>
            <a className="nav-link" href="#Cont">Contact</a>
          </div>
          <a className="btn nav-hire-btn" href="#Cont">Hire Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Nev;
