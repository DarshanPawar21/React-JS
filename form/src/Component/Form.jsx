import { useState } from "react";
import React from "react";
const Form = () => {
    const [user, setuser] = useState({})

    const HandelSubmit = () => {
        localStorage.setItem("user", JSON.stringify(user));
        alert("Form Submit !");
    }
    return (<>
        <div className="container align-content-center" style={{width:"40%",height:"100vh"}}>
            <form onSubmit={HandelSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Full Name : 
                    </label>
                    <input
                        onChange={(e)=>setuser({...user,name : e.target.value})}
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
                        onChange={(e)=>setuser({...user,email : e.target.value})}
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
                        onChange={(e)=>setuser({...user,phone : e.target.value})}
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
                        onChange={(e)=>setuser({...user,password : e.target.value})}
                        type="password"
                        className="form-control"
                        id="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{width:"100%"}}>
                    Submit
                </button>
            </form>
        </div>

    </>)
}
export default Form;