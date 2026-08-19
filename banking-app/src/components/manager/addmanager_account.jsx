import { useState,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/branchs.css";
import { useDispatch, useSelector } from "react-redux";
import { Account_Adding } from "../../features/enterdata";
import { get_manager_data } from "../../features/getdata";

function Add_Account_Manager() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { Account_data, loading, error, loginMessage } = useSelector((state) => state.aading_account);


    const { Manager_data } = useSelector((state) => state.getmanager || {});
    const Mr_Manager = JSON.parse(localStorage.getItem("manager_login") || "{}");

    const { User_data } = useSelector((state) => state.get_user_manager || {});
    const real_manager = Manager_data.find((m) => m?.email === Mr_Manager?.email);
    const Mr_IFSCCOde = real_manager?.IFSCCode || Mr_Manager?.IFSCCode;

    const [user, setUser] = useState({
        aadharNumber: "",
        IFSCCode: Mr_IFSCCOde,
        accountType: "saving",
        balance: ""
    });

    console.log();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        dispatch(get_manager_data());
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Account_Adding(user));
        console.log("Submitted User Data:", user);
        navigate("/dashboard/account");
    };

    return (
        <div className="cbs-card" style={{ padding: "20px", marginBottom: "20px" }}>
            <h3>Add New Account</h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
                <input
                    type="text"
                    name="aadharNumber"
                    placeholder="Aadhar Number"
                    value={user.aadharNumber}
                    onChange={handleChange}
                    required
                />
                {/* <input
                    type="text"
                    name="IFSCCode"
                    placeholder="Branch IFSC Code"
                    value={user.IFSCCode}
                    onChange={handleChange}
                    required
                /> */}
                <select
                    name="accountType"
                    value={user.accountType}
                    onChange={handleChange}
                >
                    <option value="savings">Saving</option>
                    <option value="current">Current</option>
                </select>
                <input
                    type="number"
                    name="balance"
                    placeholder="Initial Deposit Amount"
                    value={user.balance}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-success">Create Account</button>
                <Link to="/admin/dashboard/accounts" className="cbs-btn cbs-btn--secondary">
                    Cancel
                </Link>
            </form>
        </div>

    );
}

export default Add_Account_Manager;