import './Nev.css'
const Nev = () => {
    return <>
        <div className="container bg-black">
            <nav className="navbar navbar-expand-lg d-flex justify-content-center my-4 bor rounded-5 ">
                <div className="collapse navbar-collapse d-flex justify-content-center  " id="navbarNav">
                    <ul className="navbar-nav gap-5 h3">
                        <li className="nav-item">
                            <span className="navbar text-white" href="#">Home</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    </>
};
export default Nev;
