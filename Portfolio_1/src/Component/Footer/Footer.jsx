import "../Hero/Hero.css"
const Footer = () => {
    return (<>
        <div className="container-fluid">
            <div className="text-white d-flex justify-content-center gap-4 mt-5">
                <span>Home</span>
                <span>Education</span>
                <span>Project</span>
                <span>Skills</span>

            </div>
            <div className="onli mt-2" style={{ width:"100%"}}>
            </div>
            <span className="text-white mb-5 d-flex justify-content-center mt-1">© 2025 Company, Inc</span>
        </div>
    </>)
}
export default Footer;