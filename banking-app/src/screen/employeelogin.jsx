import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginEmployee } from "../features/enterdata";
import "../css/home.css";

const EmployeeLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ Employee_email: "", Employee_password: "" });
    const { loading, error, loginMessage } = useSelector((state) => state.employee_data_login)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((e) => ({ ...e, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginEmployee(formData));
        localStorage.setItem("employee_login", JSON.stringify(formData));
        navigate("/employee/dashboard")
    };

    return (
        <div className="bank-login">
            <div className="bank-login__shell">
                <section className="bank-login__hero">
                    <div className="bank-brand">
                        <span className="bank-brand__mark">E</span>
                        <div>
                            <span className="bank-brand__title">Employee Portal</span>
                            <span className="bank-brand__subtitle">Customer Service Desk</span>
                        </div>
                    </div>
                    <div className="bank-login__copy">
                        <h1>Serve customers faster.</h1>
                        <p>Create customers and accounts, review transactions, and process branch payments.</p>
                    </div>
                </section>

                <section className="bank-login__panel">
                    <div className="bank-login__card">
                        <span className="bank-section-kicker">Desk Access</span>
                        <h2>Employee Login</h2>
                        <p>Sign in to continue daily branch work.</p>

                        {loading && <p className="bank-login__message bank-login__message--info">Logging in...</p>}
                        {error && <p className="bank-login__message bank-login__message--error">{error}</p>}
                        {loginMessage && !error && (
                            <p className="bank-login__message bank-login__message--success">{loginMessage}</p>
                        )}

                        <form className="bank-login__form" onSubmit={handleSubmit}>
                            <div className="bank-login__field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="Employee_email"
                                    value={formData.Employee_email}
                                    onChange={handleChange}
                                    required
                                    placeholder="employee@example.com"
                                />
                            </div>

                            <div className="bank-login__field">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="Employee_password"
                                    value={formData.Employee_password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button className="bank-login__button" type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EmployeeLogin;
