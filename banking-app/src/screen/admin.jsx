import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../features/enterdata.js";
import "../css/home.css";

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, loginMessage } = useSelector((state) => state.counter);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((e) => ({ ...e, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAdmin(formData));
        navigate("/Admin/dashboard")
    };

    return (
        <div className="bank-login">
            <div className="bank-login__shell">
                <section className="bank-login__hero">
                    <div className="bank-brand">
                        <span className="bank-brand__mark">A</span>
                        <div>
                            <span className="bank-brand__title">Admin Portal</span>
                            <span className="bank-brand__subtitle">System Control</span>
                        </div>
                    </div>
                    <div className="bank-login__copy">
                        <h1>Control the full banking network.</h1>
                        <p>Manage branches, customers, accounts, transactions, and teams from one secure console.</p>
                    </div>
                </section>

                <section className="bank-login__panel">
                    <div className="bank-login__card">
                        <span className="bank-section-kicker">Secure Access</span>
                        <h2>Admin Login</h2>
                        <p>Enter your credentials to continue.</p>

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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="admin@example.com"
                                />
                            </div>

                            <div className="bank-login__field">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
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

export default Admin;
