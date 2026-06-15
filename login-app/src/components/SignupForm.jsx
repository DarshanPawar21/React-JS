import { useState } from "react";
import { Nav } from "./nav";
// import "../components/sty"
import { pushForm } from "../slices/sign_up";
import { useDispatch,useSelector } from "react-redux";

const handleform = ()=>{
  
}
const Sign_up = () => {
  return (<>
    <Nav />
    <div className="container-fluid" style={{ width: "100%" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: "92vh" }}>
        <div className="bg-light border border-black rounded-4" style={{ width: "900px", height: "400px" }}>
          <div className="d-flex justify-content-center align-items-center" style={{width:"100%",height:"100%"}}>
            <div className="d-flex flex-column gap-3 align-items-center p-4" style={{width:"100%", height:"auto"}}>
              <h1>SIGN UP</h1>
              <div className="d-flex gap-2" style={{width:"100%"}}>
                <label className="fs-4" htmlFor="">Name:</label>
                <input onChange={} className="form-control" type="text" />
              </div>
              <div className="d-flex gap-2" style={{width:"100%"}}>
                <label className="fs-4" htmlFor="">Email:</label>
                <input className="form-control" type="email" />
              </div>
              <div className="d-flex gap-2" style={{width:"100%"}}>
                <label className="fs-4" htmlFor="">Phone:</label>
                <input className="form-control" type="number" />
              </div>
              <div className="text-center" style={{width:"70%"}}>
                <label className="fw-bolder" htmlFor="">Create a New Password :</label>
                <input className="form-control" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default Sign_up;