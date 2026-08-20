import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
import { get_manager_data, get_user_data, getaccountdata } from "../../features/getdata";
import { get_userdata_manager, get_accountdata_manager, get_transactiondata_manager, get_employee_manager } from "../../features/manager_data/getdata_manager";
import PaginationControls from "../PaginationControls";
function Search_Manager_Employee() {
    const usedispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [click, setclick] = useState(false);
    const [page, setPage] = useState(1);


    const { Manager_data } = useSelector((state) => state.getmanager || {});
    const Mr_Manager = JSON.parse(localStorage.getItem("manager_login") || "{}");


    const real_manager = Manager_data.find((m) => m?.email === Mr_Manager?.email);
    const Mr_IFSCCOde = real_manager?.IFSCCode || Mr_Manager?.IFSCCode;


    const { search_Userdata, loading, error, loginmessage } = useSelector((state) => state.search_User);
    const { Employee_data, pagination } = useSelector((state) => state.get_employee_manager);


    useEffect(() => {
        usedispatch(get_manager_data(Mr_IFSCCOde));
        usedispatch(get_employee_manager({ IFSCCode: Mr_IFSCCOde, page, limit: 10 }));
    }, [usedispatch, Mr_IFSCCOde, page]);

    const handlesubmit = (e) => {
        e.preventDefault();
        setclick(true);
        console.log("Search user:", search);
    };
    console.log(Employee_data);
    return (
        <div className="cbs-branches">
            <div className="cbs-branches__header">
                <div>
                    <h2 className="cbs-branches__title">All Employee</h2>
                    <p className="cbs-branches__subtitle">
                        Every employee registered in the network
                    </p>
                </div>

                <Link to="/manager/dashboard/Employees/add" className="cbs-btn cbs-btn--primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add Employee
                </Link>
            </div>

            <div className="cbs-branches__toolbar">
                <div className="cbs-search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by name, email, or phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={(e) => handlesubmit(e)}>Search</button>
                </div>
                {/* <span className="cbs-branches__count">{user_data?.length || 0} customer</span> */}
            </div>

            <div className="cbs-card cbs-card--table">
                <div className="cbs-table-wrap">
                    <table className="cbs-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Aadhar Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employee_data && Employee_data.map((data, index) => (
                                    <tr key={data.id || index}>
                                        <td className="cbs-table__muted">{data._id}</td>
                                        <td>{data.Employee_name}</td>
                                        <td>{data.Employee_email}</td>
                                        <td className="cbs-table__mono">{data.Employee_phone}</td>
                                        <td>{data.Employee_aadharNumber}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <PaginationControls
                    pagination={pagination}
                    page={page}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}

export default Search_Manager_Employee;
