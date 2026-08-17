import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navigationbar";
import Sidebar from "../components/silebarnav";
import Dashboarddetails from "../components/dashboarddetails";
import SearchBranch from "../components/serchbranch";
import AddBranch from "../components/addingbranch";
import SearchUser from "../components/serachuser";
import AddUser from "../components/adduser";
import SearchAccount from "../components/searchaccount";
import AddAccount from "../components/addaccount";
import SearchTransaction from "../components/transaction";
import Searchmanager from "../components/searchmanagee";
import Branch from "../components/addingbranch";
import AddManager from "../components/addmanager";
const AdminDashboard = () => {
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
                        <Route path="/customers/add" element={<AddUser />} />
                        <Route path="/accounts" element={<SearchAccount />} />
                        <Route path="/accounts/add" element={<AddAccount />} />
                        <Route path="/transactions" element={<SearchTransaction />}/>
                        <Route path="/manager" element={<Searchmanager />}/>
                        <Route path="/manager/add" element={<AddManager/>}/>
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default AdminDashboard;