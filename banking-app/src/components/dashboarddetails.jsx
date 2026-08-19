import React from "react";
import "../css/dashboard.css";
import { getaccountdata, gettransaction, getuserdata, getbranchdata } from "../features/getdata";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { get_employee_data } from "../features/getdata";

function Dashboarddetails() {
  const dispatch = useDispatch();
  const { userdata } = useSelector((state) => state.getuser);
  const { accountdata } = useSelector((state) => state.getaccount)
  const { transactiondata } = useSelector((state) => state.gettransaction)
  const { getbranch } = useSelector((state) => state.getbranch);
  const {Employee_data} = useSelector((state)=>state.get_employeedata)
  // console.log(getbranchdata)
  useEffect(() => {
    dispatch(getuserdata());
    dispatch(getaccountdata());
    dispatch(gettransaction())
    dispatch(getbranchdata());
    dispatch(get_employee_data());
  }, [dispatch])

  console.log(Employee_data)
  return (
    <div className="simple-dashboard">
      <div className="simple-dashboard__header">
        <h1>Dashboard</h1>
        <p>Welcome back, Admin</p>
      </div>

      <div className="simple-dashboard__cards">
        <div className="simple-dashboard__card">
          <h3>Total Customers</h3>
          <p key={userdata.id}>{userdata.length}</p>
        </div>

        <div className="simple-dashboard__card">
          <h3>Total Accounts</h3>
          <p key={accountdata.id}>{accountdata.length}</p>
        </div>

        <div className="simple-dashboard__card">
          <h3>Transactions</h3>
          <p key={transactiondata.id}>{transactiondata.length}</p>
        </div>
        <div className="simple-dashboard__card">
          <h3>Total Branch</h3>
          <p key={getbranch.id}>{getbranch.length}</p>
        </div>
        <div className="simple-dashboard__card">
          <h3>Total Employee</h3>
          <p key={Employee_data.id}>{Employee_data.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboarddetails;