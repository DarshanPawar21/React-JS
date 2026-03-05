import "./Contact.css"
const Cont = () => {
    return <>
        <div className="container d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center text-center mt-3 text-white bor p-2 rounded-5 h2" style={{ width: 800 }}>Contact</div>
            <div className="d-flex gap-2">
                <div className="bor p-3 rounded-5" >
                    <i class="ri-instagram-line text-white h1"> darshanpawar589</i>
                </div>
                <div className="bor p-3 rounded-5" >
                    <i class="ri-linkedin-box-fill text-white h1"> darshan_pawar</i>
                </div>
                <div className="bor p-3 rounded-5" >
                   <i class="ri-github-fill text-white h1">DARSHAN PAWAR</i>
                </div>
            </div>
        </div>

        <div className="container bor rounded-5 mt-4">
        </div>
    </>
}
export default Cont;