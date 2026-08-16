import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navigationbar";
import Sidebar from "../components/silebarnav";
import Dashboarddetails from "../components/dashboarddetails";
import SearchBranch from "../components/serchbranch";
import AddBranch from "../components/addingbranch";
import SearchUser from "../components/serachuser";
import AddUser from "../components/adduser";
const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="dashboard-layout">
                <Sidebar />
                <main>
                    <Routes>
                        <Route path="/" element={<Dashboarddetails />} />
                        <Route path="/branches" element={<SearchBranch />} />
                        <Route path="/branches/add" element={<AddBranch />} />
                        <Route path="/customers" element={<SearchUser />} />
                        <Route path="/customers/add" element={<AddUser />}/>
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default Dashboard;