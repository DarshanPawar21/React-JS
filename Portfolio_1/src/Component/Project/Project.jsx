import "../Hero/Hero.css"
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"
import s4 from "../../assets/s4.png"
import s5 from "../../assets/s5.png"


const Project = () => {
    return (<>
        <div className="container">
            <div className="f text-center mt-5 mb-4">
                PROJECT
            </div>
            <div className="container">
                <div className="row d-flex gap-4 justify-content-center">
                    <div className="card mb-3 bo col-4">
                        <img src={s1} className="card-img-top" alt="..." style={{width:"100%",height:"60%"}} />
                            <div className="card-body">
                                <h5 className="card-title fs-2">Todo</h5>
                                <p className="card-text">A To-Do List is a simple yet powerful tool designed to help you organize your daily life by listing tasks in order of importance. At its core, it acts as an "external memory," freeing your brain from the stress of remembering every small detail so you can focus on actually getting work done. For a student or a professional, a well-maintained to-do list is the bridge between feeling overwhelmed by a long list of chores and feeling in control of your schedule.</p>
                                <a className="card-text" href="https://github.com/DarshanPawar21/JavaScript/blob/main/TODO/output.md"><small className="btn btn-primary px-5">Go To</small></a>
                            </div>
                    </div>
                    <div className="card mb-3 bo col-7">
                        <img src={s2} className="card-img-top mt-2 rounded-4" alt="..." style={{width:"100%",height:"100%"}} />
                            <div className="card-body">
                                <h5 className="card-title fs-2">Quiz App</h5>
                                <p className="card-text">Most quiz apps are static and predictable. I built [App Name] to challenge that by creating a dynamic, real-time testing environment. This project pushed me to master complex state management and asynchronous data fetching, ensuring that users get a seamless experience from the first question to the final score breakdown.</p>
                                <a className="card-text" href="https://drive.google.com/file/d/1OD0JLDT1IPvSxBNJU7-CGNr-N4FQqiOj/view"><small className="btn btn-primary px-5">Go To</small></a>
                            </div>
                    </div>
                    <div className="card mb-3 bo col-3">
                        <img src={s3} className="card-img-top mt-2 rounded-4" alt="..." style={{width:"100%",height:"70%"}} />
                            <div className="card-body">
                                <h5 className="card-title fs-2">Task Manager</h5>
                                <p className="card-text">Managing a busy schedule shouldn't be a chore itself. I developed [Project Name] to bridge the gap between complex project management tools and simple to-do lists. By focusing on a clutter-free interface and intuitive drag-and-drop mechanics, this application helps users prioritize what matters most without the digital noise.</p>
                                <a className="card-text" href="https://github.com/DarshanPawar21/JavaScript/blob/main/Final%20Pro/OUTPUT.md"><small className="btn btn-primary px-5">Go To</small></a>
                            </div>
                    </div>
                    <div className="card mb-3 bo col-3">
                        <img src={s4} className="card-img-top mt-2 rounded-4" alt="..." style={{width:"100%",height:"70%"}} />
                            <div className="card-body">
                                <h5 className="card-title fs-2">Weather App</h5>
                                <p className="card-text">In a world of unpredictable climate, [App Name] provides a window into real-time atmospheric conditions across the globe. By integrating a high-performance REST API, this application fetches and parses live meteorological data to provide users with hyper-local forecasts, humidity levels, and wind speeds with millisecond latency.</p>
                                <a className="card-text" href="https://github.com/DarshanPawar21/JavaScript/blob/main/WEATHER/OUTPUT.MD"><small className="btn btn-primary px-5">Go To</small></a>
                            </div>
                    </div>
                    <div className="card mb-3 bo col-5">
                        <img src={s5} className="card-img-top mt-2 rounded-4" alt="..." style={{width:"100%",height:"70%"}} />
                            <div className="card-body">
                                <h5 className="card-title fs-2">Food deliver App</h5>
                                <p className="card-text">A food delivery app is more than a menu; it’s a high-stakes user journey. I built [App Name] to master the flow of dynamic data—from real-time search filtering to a seamless multi-step checkout process. This project highlights my ability to manage complex application states while keeping the interface clean and appetizing.</p>
                                <a className="card-text"><small className="btn btn-primary px-5">Go To</small></a>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </>)
}
        export default Project;