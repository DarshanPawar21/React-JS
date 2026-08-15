import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/branchs.css";
import { Link } from "react-router-dom";
import { branchadding } from "../features/enterdata";
import { useSelector, useDispatch } from "react-redux";



function Branch() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, loginMessage, isAuthenticated } = useSelector((state) => state.addbranchs)

    const [branch, setBranch] = useState({
        branchName: "",
        branchCity: "",
        IFSCCode: "",
        branchPhone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBranch({ ...branch, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(branchadding(branch))
        navigate("/dashboard/branches")
    };

    return (
        <div className="cbs-branch-form">
            {/* Header Section */}
            <div className="cbs-branch-form__header">
                <h2 className="cbs-branch-form__title">Add New Branch</h2>
                <p className="cbs-branch-form__subtitle">
                    Enter details below to register a new bank branch into the network.
                </p>
            </div>

            {/* Form Card */}
            <div className="cbs-card cbs-branch-form__card">
                <form onSubmit={handleSubmit}>
                    <div className="cbs-branch-form__grid">

                        {/* Branch Name */}
                        <div className="cbs-field">
                            <label>Branch Name</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                placeholder="e.g. MG Road Branch"
                                name="branchName"
                                value={branch.branchName}
                                onChange={handleChange}/>
                        </div>

                        {/* City */}
                        <div className="cbs-field">
                            <label>City / Location</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                placeholder="e.g. Mumbai"
                                name="branchCity"
                                value={branch.branchCity}
                                onChange={handleChange}
                            />
                        </div>

                        {/* IFSC Code */}
                        <div className="cbs-field  w-100">
                            <label>IFSC Code</label>
                            <input
                                type="text"
                                className="cbs-field__input spe"
                                placeholder="e.g. CBS0001234"
                                name="IFSCCode"
                                value={branch.IFSCCode}
                                onChange={handleChange}/>
                        </div>

                        {/* Branch Manager */}
                        {/* <div className="cbs-field">
                            <label>Branch Manager</label>
                            <input
                                type="text"
                                className="cbs-field__input"
                                placeholder="Manager's Full Name"
                                name="manager"
                                value={branch.manager}
                                onChange={handleChange}
                            />
                        </div> */}

                        {/* Phone Number */}
                        <div className="cbs-field cbs-branch-form__full">
                            <label>Contact Phone Number</label>
                            <input
                                type="tel"
                                className="cbs-field__input"
                                placeholder="10-digit phone number"
                                name="branchPhone"
                                value={branch.branchPhone}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    {/* Form Actions */}
                    <div className="cbs-branch-form__actions">
                        <Link to="/dashboard/branches" type="button" className="cbs-btn cbs-btn--secondary">
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
                            Save Branch
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Branch;