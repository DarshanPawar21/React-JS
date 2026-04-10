import { useState } from "react";
import axios, { Axios } from "axios";
import { user_api } from "../../utils/api";
const SignUp = () => {
    const [user,setuser] = useState({})
    const handlesignup = async() =>{
       const res = await axios.post(user_api,user)
    }
    const password = `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/`;
    const handeluser = ()=>{
        if(user.name == " "){
            alert("Enter the name !")
        }
        else if(user.phone == " "){
            alert("Enter the phone number !")
        }
        handlesignup();
    }
    return (<>

        <div className="container d-flex flex-column justify-content-center" style={{width:"40%",height:"100vh"}}>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name :</label>
                    <input type="text" onChange={(e)=>setuser({...user,name:e.target.value})} className="form-control" id="name" aria-describedby="emailHelp"/>
                        {/* <div id="name" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email :</label>
                    <input type="email" onChange={(e)=>setuser({...user,email:e.target.value})} className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone :</label>
                    <input type="number" onChange={(e)=>setuser({...user,phone:e.target.value})} className="form-control" id="phone"/>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password :</label>
                    <input type="password" onChange={(e)=>setuser({...user,password:e.target.value})} className="form-control" id="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit"  onClick={handeluser} className="btn btn-primary">SIGN UP</button>
            </form>
        </div>
    </>)
}
export default SignUp;