import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./screen/admin.jsx";
import Dashboard from "./screen/dashboard.jsx";
import Home from "./screen/home.jsx";
import ManagerLogin from "./screen/managerlogin.jsx";
import AdminDashboard from "./screen/dashboard.jsx";
import Managerdashboard from "./screen/managerdashboard.jsx";
import EmployeeLogin from "./screen/employeelogin.jsx";
import EmployeeDashboard from "./screen/employeedashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manager" element={<ManagerLogin />} />
        <Route path="/employee" element={<EmployeeLogin />} />
        <Route path="Admin/dashboard/*" element={<AdminDashboard />} />
        <Route path="/manager/dashboard/*" element={<Managerdashboard />} />
        <Route path="/employee/dashboard/*" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
