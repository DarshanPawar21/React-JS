import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/branchs.css";
import { useDispatch, useSelector } from "react-redux";
import { Account_Adding } from "../../features/enterdata";
import { get_employee_data } from "../../features/getdata";

function Add_Account_Employee() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Employee_data = [] } = useSelector((state) => state.get_employeedata || {});
    const Mr_Employee = JSON.parse(localStorage.getItem("employee_login") || "{}");
    const real_employee = Employee_data.find((e) => e?.Employee_email === Mr_Employee?.email || e?.Employee_email === Mr_Employee?.Employee_email);
    const Employee_IFSCCode = real_employee?.IFSCCode || Mr_Employee?.IFSCCode || "";

    const [user, setUser] = useState({
        aadharNumber: "",
        IFSCCode: "",
        accountType: "saving",
        balance: ""
    });

    useEffect(() => {
        dispatch(get_employee_data());
    }, [dispatch]);

    useEffect(() => {
        setUser((prev) => ({ ...prev, IFSCCode: Employee_IFSCCode }));
    }, [Employee_IFSCCode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Account_Adding(user));
        navigate("/employee/dashboard/accounts");
    };

    return (
        <div className="cbs-card" style={{ padding: "20px", marginBottom: "20px" }}>
            <h3>Add New Account</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                <input type="text" name="aadharNumber" placeholder="Aadhar Number" value={user.aadharNumber} onChange={handleChange} required />
                <select name="accountType" value={user.accountType} onChange={handleChange}>
                    <option value="savings">Saving</option>
                    <option value="current">Current</option>
                </select>
                <input type="number" name="balance" placeholder="Initial Deposit Amount" value={user.balance} onChange={handleChange} />
                <button type="submit" className="btn btn-success">Create Account</button>
                <Link to="/employee/dashboard/accounts" className="cbs-btn cbs-btn--secondary">Cancel</Link>
            </form>
        </div>
    );
}

export default Add_Account_Employee;
