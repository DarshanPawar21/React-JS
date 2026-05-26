import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, resetLogin } from "../slices/login.js";
import bgImage from "../assets/bg.jpg";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Maan lete hain aapke slice state mein 'allUsers' array aa raha hai
    const { user, allUsers = [] } = useSelector((state) => state.login);

    const handleLogout = () => {
        dispatch(logoutUser());
        dispatch(resetLogin());
        navigate("/login");
    };

    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh", width: "100%", backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className="p-4 rounded-4 shadow" style={{ backgroundColor: "rgba(255, 255, 255, 0.90)", width: "100%", maxWidth: "800px" }}>
                <h2 className="text-center">Welcome, {user?.name} !</h2>
                <hr />
                <h3>Your Details:</h3>
                <p><strong>Name :</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <hr />
                
                {/* Single line map for all login users */}
                <h3>All Users:</h3>
                <ul className="list-group mb-3" style={{ maxHeight: "150px", overflowY: "auto" }}>
                    {allUsers.map((u, i) => <li key={u.id || i} className="list-group-item">{u.name} - {u.email}</li>)}
                </ul>

                <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;