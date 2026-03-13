import { useState } from "react";
import React from "react";
const Form = () => {
    const [text,setext] = useState({})
    return (<>
        <div style={{height:"100vh"}} className="container-fluid row d-flex justify-content-center">
            <Form className="d-flex flex-column justify-content-center col-6">
                <div className="mb-3">
                    <label HTMLhtmlFor="Name" className="HTMLhtmlForm-label">Full Name </label>
                    <input  type="text" className="HTMLhtmlForm-control" id="Name" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="HTMLhtmlForm-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label HTMLhtmlFor="email" className="HTMLhtmlForm-label">Email address</label>
                    <input  type="email" className="HTMLhtmlForm-control" id="email" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="HTMLhtmlForm-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label HTMLhtmlFor="phone" className="HTMLhtmlForm-label">Phone </label>
                    <input onChange={(e)=>{
                        setext({...text,phone : e.target.value})
                    }} type="number" className="HTMLhtmlForm-control" id="phone" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="HTMLhtmlForm-text">We'll never share your email with anyone else.</div> */}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    </>)
}
export default Form;