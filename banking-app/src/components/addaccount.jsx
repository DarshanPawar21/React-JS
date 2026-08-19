import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/branchs.css";
import { useDispatch, useSelector } from "react-redux";
import { Account_Adding } from "../features/enterdata";
function AddAccount() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

const { Account_data, loading, error, loginMessage } = useSelector((state) => state.aading_account);

    const [user, setUser] = useState({
        aadharNumber: "",
        IFSCCode: "",
        accountType: "saving",
        balance: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

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
                    <input
                        type="text"
                        name="IFSCCode"
                        placeholder="Branch IFSC Code"
                        value={user.IFSCCode}
                        onChange={handleChange}
                        required
                    />
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

export default AddAccount;