export const Nav = () => {
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MR COOL...</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center gap-5" id="navbarNav">
                    <ul className="navbar-nav d-flex gap-5">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">SIGN UP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SIGN IN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}