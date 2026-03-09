import p1 from "../../assets/p2.jpeg";
import './Hero.css'
const Hero = () => {
    return (<>
        <div className="container-fluid d-flex " style={{ width: "90%", height: "80vh" }}>
            <div className="d-flex flex-column  justify-content-center align-content-center" style={{ width: "100%", height: "100%" }}>
                <div className=" d-flex flex-column mt-5 mb-5">
                    <span className="fs-3 ms-5 text-secondary">Hey I am</span>
                    <span className="fs-3  ms-5 text-secondary fw-bolder">Darshan Pawar</span>
                    <span className="tex ms-5 " style={{}}>Full Stack Devloper</span>
                    <div className="d-flex gap-2 fs-2 mt-2 ms-5 text-white">
                        <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-decoration-none text-white"><i class="ri-instagram-line"></i></a>
                        <a href="https://www.linkedin.com/in/darshan-pawar-b2293139a/" className="text-decoration-none text-white"><i class="ri-linkedin-box-line"></i></a>
                        <a href="https://github.com/DarshanPawar21" className="text-decoration-none text-white"><i class="ri-github-fill"></i></a>
                        <a><i class="ri-whatsapp-line"></i></a>
                    </div>
                    <div className="d-flex gap-3 mt-4 ms-5">
                        <a href="#"><button className="btn px-4 bt1 px-4 btn-outline-info">Hire Me</button></a>
                        {/* <button className="btn btn-outline-secondary px-4">Hire Me</button> */}
                    </div>
                </div>
                <div className="text-white fs-5 ms-5">
                    <p>
I am a Full Stack Developer passionate about building scalable, user-centric web applications. I bridge the gap between complex backend logic and sleek, responsive front-end design. Whether it’s architecting a robust database or polishing a UI component, I love solving puzzles through code. I am constantly learning, adapting, and looking for new challenges to push the boundaries of what I can build. Let’s create something impactful together.
                    </p>
                </div>
            </div>
            <div className=" d-flex justify-content-center align-items-center mt-5" style={{ width: "100%" }}>
                <div className="sil rounded-circle d-flex" style={{ width: "80%", height: "90%" }}>
                    <img className="object-fit-cover rounded-circle" style={{width:"100%"}} src={p1} alt="" />
                </div>
            </div>
        </div>


    </>)
}
export default Hero;