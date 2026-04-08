const Nev = () => {
    return (<>
        <div className=" container-fluid mt-2">
            <nav className=" navbar-expand-lg bg-body-tertiary rounded-5 fixed-top mt-2 ">
                <div className="navbar container-fluid rounded-5 " style={{ backgroundColor: "#FFF8E7" }}>
                    <a className="navbar-brand font mx-2 ps-2" href="#">DarshanMart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" d-flex justify-content-end  " id="navbarNav">
                        <ul className="navbar-nav gap-3 me-3 ">
                            <li className="nav-item">
                                <a className="nav-link font" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font" href="/card">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font" href="#">Abount Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="mt-5 d-flex justify-content-end me-5">
            <button className="rounded-bottom mt-2 me-5 text-center btn border-black fs-6" style={{width:"80px",height:"35px" ,backgroundColor: "#FFF8E7"}}>More</button>
        </div>
    </>)
}
export default Nev;