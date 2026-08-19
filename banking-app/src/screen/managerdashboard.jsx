import React from "react";
import { Routes, Route } from "react-router-dom"; // <-- Yeh zaroori import hai
import Managersidebar from "../components/manager/managerSide";
import Manager_Navbar from "../components/manager/navmanager";
import Manager_Dashboarddetails from "../components/manager/managerdashboard";
import Search_Manager_User from "../components/manager/managerUser";
import AddUser_Manager from "../components/manager/addmanager_user";
import Search_Manager_Account from "../components/manager/manageraccount";
import Add_Account_Manager from "../components/manager/addmanager_account";
import Search_Transaction_Manager from "../components/manager/managertransaction";
import Search_Manager_Employee from "../components/manager/manageremployee";
import Add_Employee_Manager from "../components/manager/addmanager_employee";
function Managerdashboard() {
  return (
    <>
      <Manager_Navbar />
    <div style={{ display: "flex" }}>
      <Managersidebar />
      
      <main style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Manager_Dashboarddetails />} />
          <Route path="/customers" element={<Search_Manager_User />} />
          <Route path="/customers/add" element={<AddUser_Manager />} />
          <Route path="/accounts" element={<Search_Manager_Account />} />
          <Route path="/accounts/add" element={<Add_Account_Manager />} />
          <Route path="/transactions" element={<Search_Transaction_Manager/>}/> 
          <Route path="/Employees" element={<Search_Manager_Employee/>}/> 
          <Route path="/Employees/add" element={<Add_Employee_Manager/>}/> 
          <Route path="/manager" element={<h1>Manager Page</h1>} />
        </Routes>
      </main>
    </div>
  </>
  );
}

export default Managerdashboard;