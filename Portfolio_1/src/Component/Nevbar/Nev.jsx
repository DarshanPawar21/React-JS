import '../Hero/Hero.css'
import Edu from "../Education/Edu.jsx"
const Nev = () => {
    return <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex bg-black mt-4 text-white position-fixed z-2 pt-3 pb-3">
                <div className='d-flex align-items-center'>
                    <div className='d-flex '>
                        <span className=" fs-4  colo pt-2" href="#">Darshan Saheb</span>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                    </div>
                </div>
                <div className=" collapse navbar-collapse pt-3 d-flex justify-content-center" id="navbarNav">
                    <div className="d-flex justify-content-center gap-5">
                        <span className="nav-item">
                            <a className="nav-link" aria-current="page" href="">Home</a>
                        </span>
                        <span className="nav-item">
                            <a className="nav-link" href="#Education">Education</a>
                        </span>
                        <span className="nav-item">
                            <a className="nav-link" href="#Pro">Project</a>
                        </span>
                        <span className="nav-item">
                            <a className="nav-link" href="#Ski" aria-disabled="true">Skills</a>
                        </span>
                        <span className="nav-item">
                            <a className="nav-link" href="Abo" aria-disabled="true">Abount</a>
                        </span>
                        <span className="nav-item">
                            <a className="nav-link" href="#Cont" aria-disabled="true">Contact</a>
                        </span>
                    </div>
                </div>
                <button class="btn  px-4 mt-2 me-3 bt btn-outline-warning" type="submit">Here Me</button>
            </div>

        </nav>
    </>
};
export default Nev;
