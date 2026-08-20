 import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginEmployee } from "../features/enterdata";

const EmployeeLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ Employee_email: "", Employee_password: "" });
    const {employee_login_data,loading,error,loginMessage,isAuthenticated,user}= useSelector((state)=>state.employee_data_login)

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate("/dashboard");
    //     }
    // }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((e) => ({ ...e, [name]: value }));
    };
    // console.log(manager_login_data);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginEmployee(formData));
        localStorage.setItem("employee_login",JSON.stringify(formData));
        navigate("/employee/dashboard")
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            background: '#f4f7fb',
        }}>
            <div style={{
                width: '100%',
                maxWidth: '420px',
                background: '#fff',
                borderRadius: '14px',
                boxShadow: '0 18px 40px rgba(0,0,0,0.08)',
                padding: '32px',
            }}>
                <h1 style={{ margin: '0 0 18px', fontSize: '28px', color: '#1f2a44' }}>
                    Employee Login
                </h1>

                {loading && <p style={{ color: '#1a76d2' }}>Logging inâ€¦</p>}
                {error && <p style={{ color: '#d32f2f' }}>{error}</p>}
                {loginMessage && !error && (
                    <p style={{ color: '#2e7d32' }}>{loginMessage}</p>
                )}

                <form onSubmit={handleSubmit}>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#445668' }}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="Employee_email"
                        value={formData.Employee_email}
                        onChange={handleChange}
                        required
                        placeholder="Employee@example.com"
                        style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: '1px solid #d4d7dd',
                            marginBottom: '16px',
                            fontSize: '15px',
                        }}
                    />

                    <label style={{ display: 'block', marginBottom: '8px', color: '#445668' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="Employee_password"
                        value={formData.Employee_password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                        style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: '1px solid #d4d7dd',
                            marginBottom: '24px',
                            fontSize: '15px',
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '13px 16px',
                            borderRadius: '10px',
                            border: 'none',
                            background: '#1f62f0',
                            color: '#fff',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmployeeLogin;

