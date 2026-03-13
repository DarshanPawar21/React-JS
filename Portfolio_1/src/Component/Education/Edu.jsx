import "../Hero/Hero.css"
const Education = () => {
    return (<>
        <div className="container-fluid ">
            <div className="f text-center mt-5 text" id="Education">
                Education
            </div>
            <div className="container" >
                <div className="container d-flex justify-content-center gap-5 row">
                    <div class="col-5 card text-center bg-black onli text-white mt-5 ">
                        <div class="card-header fs-2 ">
                            R.N Naik High School 
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fs-3">SCC</h5>
                            <span>2022</span>
                            <p class="card-text">I have successfully navigated core subjects like Mathematics, Science, and Social Studies, which provides you with a well-rounded understanding of the world. From here, the doors open to three main streams: Science (for those eyeing Engineering or Medical), Commerce (for those interested in Business, Finance, and Accounting).</p>
                            {/* <a href="https://www.justdial.com/Surat/R-N-Naik-High-School-Ranchhod-Nagar-Opposite-Adarsh-Chemical-Udhna/0261PX261-X261-100921181036-V1L3_BZDET" class="btn btn-primary px-5">Link</a> */}
                        </div>
                    </div>
                    <div class="card text-center bg-black onli text-white mt-5 col-6">
                        <div class="card-header fs-2 ">
                            R.N Naik High Sec School
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fs-3">HSC</h5>
                            <span>2024</span>
                            <p class="card-text fs-6">Completing Standard 12 in the Commerce stream is a significant achievement that provides you with a versatile foundation in how the world of business and finance operates. This field is unique because it blends logical reasoning with practical application, covering everything from the micro-level of personal accounting to the macro-level of national economics. </p>
                            {/* <a href="https://www.justdial.com/Surat/R-N-Naik-High-School-Ranchhod-Nagar-Opposite-Adarsh-Chemical-Udhna/0261PX261-X261-100921181036-V1L3_BZDET" class="btn btn-primary px-5">Link</a> */}
                        </div>
                    </div>
                    <div class="card text-center bg-black onli text-white ">
                        <div class="card-header fs-2">
                            BCA
                        </div>
                        <div class="card-body">
                            {/* <h5 class="card-title fs-3"></h5> */}
                            <p class="card-text fs-6">Pursuing a BCA (Bachelor of Computer Applications) is a dynamic choice that bridges the gap between theoretical computer science and practical business applications. This degree is designed to equip you with a professional understanding of software development, database management, and networking. Unlike a traditional science degree, the BCA curriculum is highly industry-oriented, focusing on modern programming languages like Java, C++, and Python, as well as the architectural logic behind web applications and mobile platforms. It is the ideal path for anyone looking to build a career in the rapidly evolving tech sector.</p>
                            {/* <a href="https://udhnacollege.ac.in/" class="btn btn-primary px-5">Link</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Education;