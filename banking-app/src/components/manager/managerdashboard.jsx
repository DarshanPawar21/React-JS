import React, { useEffect } from "react";
import "../../css/dashboard.css";
import { get_userdata_manager,get_accountdata_manager,get_transactiondata_manager, get_employee_manager } from "../../features/manager_data/getdata_manager";
import { get_manager_data, getaccountdata} from "../../features/getdata";
import { useSelector, useDispatch } from "react-redux";
// import { get_accountdata_manager } from "../../features/manager_data/getdata_manager";
function Manager_Dashboarddetails() {
  const dispatch = useDispatch();


  const { Manager_data } = useSelector((state) => state.getmanager || {});
  
  
  
  const { User_data, loading } = useSelector((state) => state.get_user_manager || {});
  const {Account_data} = useSelector((state)=>state.get_account_manager)
  const {Transaction_data} = useSelector((state)=>state.get_transaction_manager);
  const {Employee_data} = useSelector((state)=>state.get_employee_manager);
  
  
  const Mr_Manager = JSON.parse(localStorage.getItem("manager_login") || "{}");

  const real_manager = Manager_data.find((m) => m?.email === Mr_Manager?.email);
  const Mr_IFSCCOde = real_manager?.IFSCCode || Mr_Manager?.IFSCCode;

  console.log(Employee_data);

  useEffect(() => {
    dispatch(get_manager_data());
    dispatch(getaccountdata());
    dispatch(get_userdata_manager(Mr_IFSCCOde));
    dispatch(get_accountdata_manager(Mr_IFSCCOde));
    dispatch(get_transactiondata_manager(Mr_IFSCCOde));
    dispatch(get_employee_manager(Mr_IFSCCOde));
  }, [dispatch,Mr_IFSCCOde]);


    // useEffect(() => {
    // }, [dispatch, Mr_IFSCCOde]);
  return (
    <div className="simple-dashboard">
      <div className="simple-dashboard__header">
        <h1>Dashboard</h1>
        <p>Welcome back, Manager</p>
      </div>

      <div className="simple-dashboard__cards">
        <div className="simple-dashboard__card">
          <h3>Total Customers</h3>
          <p key={User_data.id}>{User_data.length}</p>
        </div>

        <div className="simple-dashboard__card">
          <h3>Total Accounts</h3>
          <p key={Account_data.id}>{Account_data.length}</p>
        </div>

        <div className="simple-dashboard__card">
          <h3>Transactions</h3>
          <p key={Transaction_data.id}>{Transaction_data.length}</p>
        </div>
        <div className="simple-dashboard__card">
          <h3>Employee</h3>
          <p key={Employee_data.id}>{Employee_data.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Manager_Dashboarddetails;