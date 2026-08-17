import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./screen/admin.jsx";
import Dashboard from "./screen/dashboard.jsx";
import Home from "./screen/home.jsx";
import ManagerLogin from "./screen/managerlogin.jsx";
import AdminDashboard from "./screen/dashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manager" element={<ManagerLogin />} />
        <Route path="Admin/dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
