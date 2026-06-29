import { useState } from "react";

import axios, { Axios } from "axios";
import { user_api } from "../../../utils/api";
import bird from "../../src/assets/bir.png"
const SignUp = () => {
    const [user, setuser] = useState({})
    const handlesignup = async () => {
        const res = await axios.post(user_api, user)
    }
    const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const handeluser = () => {
        if (user.name == "" || user.name == undefined) {
            alert("Enter the name !")
        }
        else if (user.phone == "" || user.phone < undefined) {
            alert("Enter the phone number !")
        }
        else if (!password.test(user.password)) {
            alert("Enter the stonge password !")
        }
        else {
            handlesignup();
        }
    }
    return (<>
        <div className="container-flute bg-primary">
            <div>
                <img src="" alt="" />
            </div>
            <div className="container d-flex flex-column justify-content-center text-white" style={{ width: "40%", height: "100vh" }}>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name </label>
                        <input type="text" onChange={(e) => setuser({ ...user, name: e.target.value })} className="form-control rounded-5" id="name" aria-describedby="emailHelp" />
                        {/* <div id="name" className="form-text">We'll never share your email with anyone else.</div> */}
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
                        <input type="password" onChange={(e) => setuser({ ...user, password: e.target.value })} className="form-control rounded-5" id="password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" onClick={handeluser} className="btn btn-warning text-white w-100">SIGN UP</button>
                </form>
            </div>
        </div>
    </>)
}
export default SignUp;