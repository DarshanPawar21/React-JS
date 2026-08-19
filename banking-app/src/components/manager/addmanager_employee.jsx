import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/branchs.css";
import { useDispatch, useSelector } from "react-redux";
import { Account_Adding, } from "../../features/enterdata";
import { get_manager_data } from "../../features/getdata";
import { Employee_adding } from "../../features/enterdata";
function Add_Employee_Manager() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Manager data ko safely fallback array [] ke saath receive karein
    const { Manager_data = [] } = useSelector((state) => state.getmanager || {});
    const Mr_Manager = JSON.parse(localStorage.getItem("manager_login") || "{}");

    const {employee_data} = useSelector((state)=>state.adding_employee) 
    
    const real_manager = Manager_data?.find((m) => m?.email === Mr_Manager?.email);
    const Mr_IFSCCOde = real_manager?.IFSCCode || Mr_Manager?.IFSCCode || "";

    const [user, setUser] = useState({
        Employee_aadharNumber: "",
        IFSCCode: Mr_IFSCCOde,
        Employee_name :"",
        Employee_email :"",
        Employee_phone :"",
        Employee_password :"",
    });

    console.log(real_manager);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // useEffect me correct Action function pass karein
    useEffect(() => {
        dispatch(get_manager_data(Mr_IFSCCOde));
    }, [dispatch]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Employee_adding(user));
        console.log("Submitted User Data:", user);
        
        navigate("/manager/dashboard/Employees");
    };

    return (
        <div className="cbs-card" style={{ padding: "20px", marginBottom: "20px" }}>
            <h3>Add New Account</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                <input
                    type="text"
                    name="Employee_name"
                    placeholder="Employee Name"
                    value={user.Employee_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Employee_email"
                    placeholder="Employee email"
                    value={user.Employee_email}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="Employee_phone"
                    placeholder="Employee phone"
                    value={user.Employee_phone}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="Employee_aadharNumber"
                    placeholder="Employee Aadhar Number"
                    value={user.Employee_aadharNumber}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="Employee_password"
                    placeholder="enter the password"
                    value={user.Employee_password}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-success">Create Account</button>
                <Link to="/manager/dashboard/Employees" className="cbs-btn cbs-btn--secondary">
                    Cancel
                </Link>
            </form>
        </div>
    );
}

export default Add_Employee_Manager;