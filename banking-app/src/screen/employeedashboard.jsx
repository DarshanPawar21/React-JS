import React from "react";
import { Routes, Route } from "react-router-dom"; // <-- Yeh zaroori import hai
import Employee_Navbar from "../components/employee/navemployee";
import Employeesidebar from "../components/employee/employeeside";
import Employee_Dashboarddetails from "../components/employee/employeedashboard";
import Search_Employee_User from "../components/employee/employeeUser";
import AddUser_Employee from "../components/employee/addemployee_user";
import Search_Employee_Account from "../components/employee/employeeaccount";
import Add_Account_Employee from "../components/employee/addemployee_account";
import Search_Transaction_Employee from "../components/employee/employeetransaction";
import Employee_Make_Transaction from "../components/employee/employeeMakeTransaction";

function Employeedashboard() {
  return (
    <>
      <Employee_Navbar />
    <div style={{ display: "flex" }}>
      <Employeesidebar />
      
      <main style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Employee_Dashboarddetails />} />
          <Route path="/customers" element={<Search_Employee_User />} />
          <Route path="/customers/add" element={<AddUser_Employee />} />
          <Route path="/accounts" element={<Search_Employee_Account />} />
          <Route path="/accounts/add" element={<Add_Account_Employee />} />
          <Route path="/transactions" element={<Search_Transaction_Employee />} />
          <Route path="/transaction" element={<Employee_Make_Transaction />} />
          <Route path="/employee" element={<h1>Employee Page</h1>} />
        </Routes>
      </main>
    </div>
  </>
  );
}

export default Employeedashboard;
