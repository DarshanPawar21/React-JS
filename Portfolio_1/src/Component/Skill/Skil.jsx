// import "./skills.css"
const Skills = () => {
    return <>
        <div className="container d-flex flex-column  align-items-center">
            <div className="d-flex justify-content-center text-center mt-3 text-white bor p-2 rounded-5 h2" style={{ width: 800 }}>Skills</div>
            <div className='my-4 container'>
                <div className='mb-5 row gap-3 justify-content-center'>
                    <button className='col-2 btn bor text-white btn-outline-success '>HTML</button>
                    <button className='col-2 btn bor text-white btn-outline-success'>CSS</button>
                    <button className='col-2 btn bor text-white btn-outline-success'>C</button>
                    <button className='col-2 btn bor text-white btn-outline-success'>Bootstrap</button>
                    <button className='col-2 btn bor text-white btn-outline-success'>JavaScript</button>
                    <button className='col-2 btn bor text-white btn-outline-success'>React JS</button>

                </div>
                <div className='container bor'></div>
            </div>
        </div>
    </>
}
export default Skills;