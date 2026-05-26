import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { loginUser } from "../slices/login.js"; 
import bgImage from "../assets/bg.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { user, error } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => { if (user) navigate("/dashboard"); }, [user, navigate]);

  const handleSubmit = (e) => { e.preventDefault(); dispatch(loginUser({ email, password })); };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: "100vh", width: "100vw", backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="p-4 rounded-4 shadow" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="alert alert-danger p-2 small text-center">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label fw-semibold">Email:</label><input type="email" className="form-control" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
          <div className="mb-4"><label className="form-label fw-semibold">Password:</label><input type="password" className="form-control" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">Login</button>
        </form>

        <div className="text-center mt-3 small">Already have an account? <button type="button" onClick={() => navigate('/register')} className="btn btn-link p-0 pb-1 text-decoration-underline fw-medium">Register here</button></div>
      </div>
    </div>
  );
};

export default Login;