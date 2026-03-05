import "./Edu.css"
const Education = () => {
    return <>
        <div className="container d-flex flex-column  align-items-center">
            <div className="d-flex justify-content-center text-center mt-3 text-white bor p-2 rounded-5 h2" style={{ width: 800 }}>Education</div>
            <div className="d-flex justify-content-between container mt-3">
                <div className="d-flex flex-column ">
                    <h4 className="h1 text-white">HSC</h4>
                    <p className="text-white" style={{ width: 400 }}>"The Higher Secondary Certificate (HSC) is a public examination taken by students in many states of India after completing their 12th grade. It marks a crucial milestone in a student's academic journey, serving as a bridge between school education and higher university studies."</p>
                </div>
                <span className="text-white h1">2024</span>
            </div>
            <div className="d-flex justify-content-between container mt-3">
                <div className="d-flex flex-column ">
                    <h4 className="h1 text-white">BCA</h4>
                    <p className="text-white" style={{ width: 400 }}>"The Higher Secondary Certificate (HSC) is a public examination taken by students in many states of India after completing their 12th grade. It marks a crucial milestone in a student's academic journey, serving as a bridge between school education and higher university studies."</p>
                </div>
                <span className="text-white h1">2025</span>
            </div>
        </div>
        <div className="container bor rounded-5 mt-3">
        </div>
    </>
}
export default Education;