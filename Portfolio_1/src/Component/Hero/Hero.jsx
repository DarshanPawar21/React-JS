import p1 from "../../assets/p1.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <span className="hero-kicker">Hey I am</span>
            <h1>Darshan Pawar</h1>
            <h2>Full Stack Developer</h2>
            <div className="social-links" aria-label="Social links">
              <a href="https://www.instagram.com/accounts/login/?hl=en" aria-label="Instagram"><i className="ri-instagram-line" /></a>
              <a href="https://www.linkedin.com/in/darshan-pawar-b2293139a/" aria-label="LinkedIn"><i className="ri-linkedin-box-line" /></a>
              <a href="https://github.com/DarshanPawar21" aria-label="GitHub"><i className="ri-github-fill" /></a>
              <a href="https://wa.me/qr/37BN4T2WJH7ZM1" aria-label="WhatsApp"><i className="ri-whatsapp-line" /></a>
            </div>
            <a href="#Cont" className="btn accent-outline mt-4">Hire Me</a>
            <p className="about-copy" id="Abo">
              I am a Full Stack Developer passionate about building scalable, user-centric web applications. I bridge the gap between complex backend logic and sleek, responsive front-end design. Whether it is architecting a robust database or polishing a UI component, I love solving puzzles through code. I am constantly learning, adapting, and looking for new challenges to push the boundaries of what I can build.
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <div className="profile-frame mx-auto">
              <img src={p1} alt="Darshan Pawar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
