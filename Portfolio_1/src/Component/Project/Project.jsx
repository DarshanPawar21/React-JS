import "./project.css"
const Project = () => {
    return <>
        <div className="container d-flex flex-column  align-items-center">
            <div className="d-flex justify-content-center text-center mt-3 text-white bor p-2 rounded-5 h2" style={{ width: 800 }}>Projects</div>
            <div className="container mt-4">
                <div class=" text-center text-danger">
                    <div class="row">
                        <div class="col ">
                            <div class="card bg-black bor text-white">
                                <div class="card-body">
                                    <h5 class="card-title">Todos</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col"><div class="card bg-black bor text-white">
                            <div class="card-body">
                                <h5 class="card-title">Weather</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                        <div class="col"><div class="card bg-black bor text-white">
                            <div class="card-body">
                                <h5 class="card-title">Quiz</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                        <div class="col"><div class="card bg-black bor text-white">
                            <div class="card-body">
                                <h5 class="card-title">E-commerce</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div></div>
                    </div>
                </div>
            </div>

        </div>
        <div className="container bor rounded-5 mt-4">
        </div>
    </>
}
export default Project;