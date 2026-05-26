import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, resetState } from '../slices/authSlice.js';
import bgImage from "../assets/bg.jpg";

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, message } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        // e.target se name aur value dono nikaal rahe hain
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    useEffect(() => {
        if (isLoading === "Success") {
            alert(message || 'Account created successfully!');
            setFormData({ name: '', email: '', password: '' });
            dispatch(resetState());
            navigate('/login');
        }
    }, [isLoading, message, dispatch, navigate]);

    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{height: "100vh", width: "100vw", backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
            <div className="p-4 rounded-4 shadow" style={{ backgroundColor: "rgba(255, 255, 255, 0.90)", width: "100%", maxWidth: "600px" }}>
                <h2 className='text-center mb-4' style={{ color: '#333' }}>Register</h2>
                {isLoading === "failed" && (<p className="alert alert-danger text-center p-2 small">{error}</p>)}
                
                <form onSubmit={handleSubmit}>
                    {/* 1. Full Name Input (Added name="name") */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Full Name:</label>
                        <input name="name" type="text" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your full name"/>
                    </div>
                    
                    {/* 2. Email Input (Added name="email") */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address:</label>
                        <input name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="example@mail.com"/>
                    </div>
                    
                    {/* 3. Password Input (Added name="password") */}
                    <div className="mb-4">
                        <label className="form-label fw-semibold">Password:</label>
                        <input name="password" type="password" className="form-control" value={formData.password} onChange={handleChange} placeholder="******"/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" disabled={isLoading === "Loading"}>
                        {isLoading === "Loading" && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                        {isLoading === "Loading" ? 'Registering...' : 'Register'}
                    </button>
                </form>
                
                <div className="text-center mt-3 small">
                    <span>Already have an account? </span>
                    <button type="button" onClick={() => navigate('/login')} className="btn btn-link p-0 pb-1 text-decoration-underline fw-medium" style={{ verticalAlign: 'baseline' }}>
                        Login here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;