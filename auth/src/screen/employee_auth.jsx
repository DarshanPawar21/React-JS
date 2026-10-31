import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Auth_Admin_api } from "../slices/admin.js";

const Employee_Auth = () => {
    const dispatch = useDispatch();

    // const { loading, error, loadingMeassage } = useSelector((state) => state.auth_Employee);

    const [data_employee, setdata] = useState({})

const handlesubmt = (e) => {
        e.preventDefault();
        dispatch(Auth_Admin_api(data_employee));
    }

    return (<>
        <div className="container mt-5">
            <h1 className="text-center">Emmployee Login</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => {setdata({...data_employee,email : e.target.value})}} />
                    {/* <div id="emailHelp" className="form-text">We’ll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => {setdata({...data_employee,password : e.target.value})}}/>
                </div>
                {/* <div className="mb-3 form-field">
                <input type="checkbox" id="exampleCheck1" className="check" />
                <label htmlFor="exampleCheck1">Check me out</label>
            </div> */}
                <button type="submit" className="btn-solid theme-primary text-center">Submit</button>
            </form>
        </div>
    </>)
};

export default Admin_Auth;