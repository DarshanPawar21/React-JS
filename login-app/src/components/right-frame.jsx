import React from "react";
import axios from "axios";
import { useState } from "react";
const Rightfarme = () => {
    const [forminfo, Setforminfo] = useState({ name: "", email: "", BOD: "", password: "" });
    const HandleAdd = async (event) => {
        event.preventDefault();
        try {
            alert("User Add Successfuly !");
            const res = await axios.post("http://localhost:3000/api/adduser", forminfo);
            console.log(res);
            Setforminfo({ name: "", email: "", BOD: "", password: "" });
        } catch (err) {
            console.log(err);
        }
    }
    return (<>
        <div className="" style={{ width: "80%", height: "80%" }}>
            <div className="fs-1 fw-bolder text-center">
                Fill Up !
            </div>
            <div>
                <div className="d-flex flex-column justify-content-center fs-4">
                    <form onSubmit={HandleAdd}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name :</label>
                            <input type="text" value={forminfo.name} onChange={(e) => Setforminfo({ ...forminfo, name: e.target.value })} className="form-control bg-transparent border-2 border-black" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email :</label>
                            <input type="email" value={forminfo.email} onChange={(e) => Setforminfo({ ...forminfo, email: e.target.value })} className="form-control bg-transparent border-2 border-black" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">BOD :</label>
                            <input type="date" value={forminfo.BOD} onChange={(e) => Setforminfo({ ...forminfo, BOD: e.target.value })} className="form-control bg-transparent border-2 border-black" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
                            <input type="password" value={forminfo.password} onChange={(e) => Setforminfo({ ...forminfo, password: e.target.value })} className="form-control bg-transparent border-2 border-black" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check fs-6">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label fw-bolder" htmlFor="exampleCheck1">Check Terms and Condition</label>
                        </div>

                        <button type="submit"  className="btn w-100" style={{ backgroundColor: "", border: "2px solid black" }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
};
export default Rightfarme;