import { useState } from "react";
import "../Hero/Hero.css"
const Cont = () => {
    const [user,setuser] = useState({});
    return <>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center row">
                <div className="f text-center mb-5"id="Cont">
                    Contact
                </div>
                <div className="col-6 align-items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4UC87GK8NcYW-_7wkw06stFE3NXH2BBe3g&s" alt="" style={{ width: 350 }} />
                </div>
                <div className="col-6 text-white">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name :</label>
                            <input type="text" onChange={(e)=>
                                    setuser({...user,name :e.target.value})} class="form-control bg-black text-white onli" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control bg-black text-white onli" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone :</label>
                            <input type="number" class="form-control bg-black text-white onli" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <button type="submit" class="btn bt1 btn-outline-warning" style={{width:"100%"}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Cont;