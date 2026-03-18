import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";
import User from "./user";
const Form = () => {
    const Rex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const Navigate = useNavigate();
    const [user, setuser] = useState({})
    const [Check, setCheck] = useState(false)
    const [eye,seteye] = useState(false)
    const HandelSubmit = (e) => {
        e.preventDefault();
        if (user.name == "" || user.name == undefined) {
            alert("Enter The Name !")
        }
        if (user.email == "" || user.email == undefined) {
            alert("Enter The Email !")
        }
        if (!Rex.test(user.password) || user.password == undefined) {
            alert("Invalid Password")
        }
        else {
            console.log("------------")
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users));
            alert("Form Submit !");
            Navigate("/user")
        }
    }
    return (<>
        <div className="container align-content-center" style={{ width: "40%", height: "100vh" }}>
            <form onSubmit={HandelSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Full Name :
                    </label>
                    <input
                        onChange={(e) => setuser({ ...user, name: e.target.value })}
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                    />
                    {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email :
                    </label>
                    <input
                        onChange={(e) => setuser({ ...user, email: e.target.value })}
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                    />
                    {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone :
                    </label>
                    <input
                        onChange={(e) => setuser({ ...user, phone: e.target.value })}
                        type="number"
                        className="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                    />
                    {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password :
                    </label>
                    <input
                        onChange={(e) => setuser({ ...user, password: e.target.value })}
                        type={eye?"text":"password"}
                        className="form-control"
                        id="password"
                    />
                    <div className="" style={{width:"20px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>seteye(!eye)} viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" checked={Check} onChange={() => setCheck(!Check)} className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className={`btn btn-primary ${Check ? "" : `disabled`}`} style={{ width: "100%" }}>
                    Submit
                </button>
            </form>
        </div>

    </>)
}
export default Form;