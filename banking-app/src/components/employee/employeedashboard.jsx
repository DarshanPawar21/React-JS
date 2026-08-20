import React, { useEffect } from "react";
import "../../css/dashboard.css";
import { get_userdata_employee, get_accountdata_employee, get_transactiondata_employee } from "../../features/employee_data/getdata_employee";
import { get_employee_data } from "../../features/getdata";
import { useSelector, useDispatch } from "react-redux";
import EmployeeDashboardChart from "../chart/employeedashboardChart";

function Employee_Dashboarddetails() {
  const dispatch = useDispatch();

  const { Employee_data = [] } = useSelector((state) => state.get_employeedata || {});
  const { User_data = [] } = useSelector((state) => state.get_user_employee || {});
  const { Account_data = [] } = useSelector((state) => state.get_account_employee || {});
  const { Transaction_data = [] } = useSelector((state) => state.get_transaction_employee || {});

  const Mr_Employee = JSON.parse(localStorage.getItem("employee_login") || "{}");
  const real_employee = Employee_data.find((e) => e?.Employee_email === Mr_Employee?.email || e?.Employee_email === Mr_Employee?.Employee_email);
  const Employee_IFSCCode = real_employee?.IFSCCode || Mr_Employee?.IFSCCode;

  useEffect(() => {
    dispatch(get_employee_data());
    if (Employee_IFSCCode) {
      dispatch(get_userdata_employee(Employee_IFSCCode));
      dispatch(get_accountdata_employee(Employee_IFSCCode));
      dispatch(get_transactiondata_employee(Employee_IFSCCode));
    }
  }, [dispatch, Employee_IFSCCode]);

  return (
    <div className="simple-dashboard">
      <div className="simple-dashboard__header">
        <h1>Dashboard</h1>
        <p>Welcome back, Employee</p>
      </div>

      <div className="simple-dashboard__cards">
        <div className="simple-dashboard__card">
          <h3>Total Customers</h3>
          <p>{User_data.length}</p>
        </div>

        <div className="simple-dashboard__card">
          <h3>Total Accounts</h3>
          <p>{Account_data.length}</p>
        </div>

        <div className="simple-dashboard__card">
          <h3>Transactions</h3>
          <p>{Transaction_data.length}</p>
        </div>
      </div>
      <EmployeeDashboardChart />
    </div>
  );
}

export default Employee_Dashboarddetails;
