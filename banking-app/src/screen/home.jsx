import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bank-home">
      <div className="bank-home__shell">
        <section className="bank-home__hero">
          <div className="bank-brand">
            <span className="bank-brand__mark">B</span>
            <div>
              <span className="bank-brand__title">Core Banking System</span>
              <span className="bank-brand__subtitle">Branch Operations Suite</span>
            </div>
          </div>

          <div className="bank-home__copy">
            <h1>Banking work, made clear.</h1>
            <p>
              A focused workspace for branch teams to manage customers, accounts,
              transactions, and daily operations with confidence.
            </p>
          </div>

          <div className="bank-home__stats">
            <div className="bank-home__stat">
              <strong>24/7</strong>
              <span>Operational view</span>
            </div>
            <div className="bank-home__stat">
              <strong>3</strong>
              <span>Secure portals</span>
            </div>
            <div className="bank-home__stat">
              <strong>CBS</strong>
              <span>Unified banking</span>
            </div>
          </div>
        </section>

        <section className="bank-home__panel">
          <span className="bank-section-kicker">Choose Portal</span>
          <h2>Continue as</h2>
          <p>Select your role to open the right workspace.</p>

          <div className="role-selection__cards">
            <div
              className="role-selection__card"
              onClick={() => navigate("/admin")}
            >
              <div className="role-icon">Admin</div>
              <h3>Admin</h3>
              <p>Full system control, reporting, and user management access.</p>
            </div>

            <div
              className="role-selection__card"
              onClick={() => navigate("/manager")}
            >
              <div className="role-icon">Manager</div>
              <h3>Manager</h3>
              <p>Oversee branch accounts, customers, employees, and activity.</p>
            </div>

            <div
              className="role-selection__card"
              onClick={() => navigate("/employee")}
            >
              <div className="role-icon">Employee</div>
              <h3>Employee</h3>
              <p>Serve customers, create accounts, and process transactions.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
