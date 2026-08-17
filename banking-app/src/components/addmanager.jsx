import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/branchs.css";
import { useDispatch, useSelector } from "react-redux";
import { Manager_Adding } from "../features/enterdata";
function AddManager() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { ManagerAdding_data, loading, error, loginMessage } = useSelector((state) => state.manager_adding)

    const [user, setUser] = useState({
        name: "",
        email: "",
        IFSCCode: "",
        aadharNumber: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Manager_Adding(user));
        console.log("Submitted User Data:", user);
        navigate("/dashboard/manager");
    };
    console.log(ManagerAdding_data);
    return (
        <div className="cbs-branch-form">
            <div className="cbs-branch-form__header">
                <h2 className="cbs-branch-form__title">Add New Manager</h2>
                <p className="cbs-branch-form__subtitle">
                    Enter details below to register a new user into the system.
                </p>
            </div>

            <div className="cbs-card cbs-branch-form__card">
                <form onSubmit={handleSubmit}>
                    <div className="cbs-branch-form__grid">
                        <div className="cbs-field">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                placeholder="e.g. Rahul Sharma"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cbs-field">
                            <label>IFSC Code</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                placeholder="e.g. Rahul Sharma"
                                name="IFSCCode"
                                value={user.IFSCCode}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="cbs-field">
                            <label>Email Address</label>
                            <input
                                type="email"
                                className="cbs-field__input"
                                placeholder="e.g. rahul@example.com"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cbs-field">
                            <label>Aadhaar Number</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                placeholder="12-digit Aadhaar Number"
                                name="aadharNumber"
                                value={user.aadharNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cbs-field">
                            <label>Contact Phone Number</label>
                            <input
                                type="tel"
                                className="cbs-field__input"
                                placeholder="10-digit phone number"
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="cbs-field cbs-branch-form__full">
                            <label>Password</label>
                            <input
                                type="password"
                                className="cbs-field__input"
                                placeholder="Enter password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="cbs-branch-form__actions">
                        <Link to="/dashboard/manager" className="cbs-btn cbs-btn--secondary">
                            Cancel
                        </Link>
                        <button type="submit" className="cbs-btn cbs-btn--warning">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                            Save Manager
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddManager;