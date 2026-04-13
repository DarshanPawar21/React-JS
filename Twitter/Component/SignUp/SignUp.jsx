import axios from "axios";
import { useState } from "react";
import { user_api } from "../../utils/api.js"
import bird from "../../src/assets/bird.png"
const SignUp = () => {
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [user, setuser] = useState({});
    const [check, setcheck] = useState(false)
    const [eye,seteye] = useState(true)
    const handlesignin = async () => {
        const res = await axios.post(user_api, user);
    }
    const handlechcek = () => {
        if (user.name == "" || user.name == undefined) {
            alert("Enter the Name !");
        }
        else if (user.email == "" || user.email == undefined) {
            alert("Enter the Email !");
        }
        else if (!password.test(user.password)) {
            alert("Enter Stong Password !")
        }
        else {

            <a href="/signin">{handlesignin()}</a>
        }
    }
    return (<>
        <div className="container-fluid d-flex flex-column align-items-center bg-primary text-white" style={{ width: "100%", height: "100vh" }}>
           <div className="">
                <img style={{width:"100%",height:"250px"}} src={bird} alt="" />
           </div>
            <div className="container" style={{ width: "40%" }}>
                <h1 className="text-center">Sign UP</h1>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name :</label>
                        <input type="text" onChange={(e) => setuser({ ...user, name: e.target.value })} className="form-control rounded-5" id="name" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email :</label>
                        <input type="email" onChange={(e) => setuser({ ...user, email: e.target.value })} className="form-control rounded-5" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone :</label>
                        <input type="number" onChange={(e) => setuser({ ...user, phone: e.target.value })} className="form-control rounded-5" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password :</label>
                        <div className="d-flex gap-3 align-items-center">
                            <input type={eye ? `password` : `text`} style={{width:"200%"}} onChange={(e) => setuser({ ...user, password: e.target.value })} className="form-control rounded-5" id="password" />
                            <div className="d-flex btn text-white" checked={!eye} onChange={()=>seteye(eye)}>
                               {
                                if(eye){

                                }
                               }
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" checked={check} onChange={() => setcheck(!check)} id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>

                    <button type="submit" onClick={handlechcek} className={`btn btn-warning w-100 rounded-5 ${check ? "" : "disabled"}`}>Submit</button>
                </form>
            </div>
        </div>
    </>)
}
export default SignUp;
