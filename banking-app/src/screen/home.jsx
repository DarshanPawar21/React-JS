import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="simple-dashboard">
      <div className="simple-dashboard__header">
        <h1>Who Are You?</h1>
        <p>Select your role to navigate to the respective portal</p>
      </div>

      <div className="role-selection__cards">
        <div 
          className="role-selection__card" 
          onClick={() => navigate("/admin")}
        >
          <div className="role-icon">🛡️</div>
          <h3>Admin</h3>
          <p>Full system control and user management access.</p>
        </div>

        <div 
          className="role-selection__card" 
          onClick={() => navigate("/manager")}
        >
          <div className="role-icon">💼</div>
          <h3>Manager</h3>
          <p>Oversee branch operations and team activities.</p>
        </div>

        <div 
          className="role-selection__card" 
          onClick={() => navigate("/employee")}
        >
          <div className="role-icon">👤</div>
          <h3>Employee</h3>
          <p>Access daily tasks, customer services, and workflows.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;