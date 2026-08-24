import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginManager } from "../features/enterdata.js";
import "../css/home.css";

const ManagerLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const { loading, error, loginMessage } = useSelector((state) => state.manager_Login)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((e) => ({ ...e, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginManager(formData));
        localStorage.setItem("manager_login", JSON.stringify(formData));
        navigate("/manager/dashboard")
    };

    return (
        <div className="bank-login">
            <div className="bank-login__shell">
                <section className="bank-login__hero">
                    <div className="bank-brand">
                        <span className="bank-brand__mark">M</span>
                        <div>
                            <span className="bank-brand__title">Manager Portal</span>
                            <span className="bank-brand__subtitle">Branch Operations</span>
                        </div>
                    </div>
                    <div className="bank-login__copy">
                        <h1>Run your branch with clarity.</h1>
                        <p>Track customers, accounts, transactions, and employees connected to your branch.</p>
                    </div>
                </section>

                <section className="bank-login__panel">
                    <div className="bank-login__card">
                        <span className="bank-section-kicker">Branch Access</span>
                        <h2>Manager Login</h2>
                        <p>Sign in to manage branch activity.</p>

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
                                    placeholder="manager@example.com"
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

export default ManagerLogin;
