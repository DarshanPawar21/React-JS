import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
import { get_employee_data } from "../../features/getdata";
import { get_accountdata_employee } from "../../features/employee_data/getdata_employee";
import { search_getaccount_data } from "../../features/searchslice";
import PaginationControls from "../PaginationControls";

function Search_Employee_Account() {
    const usedispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [click, setclick] = useState(false);
    const [activeSearch, setActiveSearch] = useState("");
    const [page, setPage] = useState(1);


    const { Employee_data } = useSelector((state) => state.get_employeedata || {});
    const Mr_Employee = JSON.parse(localStorage.getItem("employee_login") || "{}");


    const real_employee = Employee_data.find((e) => e?.Employee_email === Mr_Employee?.email || e?.Employee_email === Mr_Employee?.Employee_email);
    const Employee_IFSCCode = real_employee?.IFSCCode || Mr_Employee?.IFSCCode;
    
    const { Account_data, pagination } = useSelector((state) => state.get_account_employee || {});
    const { search_Account_data, pagination: searchPagination } = useSelector((state) => state.search_Account);

    useEffect(() => {
        usedispatch(get_employee_data());
        if (Employee_IFSCCode) {
            if (click) {
                usedispatch(search_getaccount_data({ search: activeSearch, IFSCCode: Employee_IFSCCode, page, limit: 10 }));
            } else {
                usedispatch(get_accountdata_employee({ IFSCCode: Employee_IFSCCode, page, limit: 10 }));
            }
        }
    }, [usedispatch, Employee_IFSCCode, click, activeSearch, page]);

    const handlesubmit = (e) => {
        e.preventDefault();
        setActiveSearch(search);
        setPage(1);
        setclick(true);
    };

    const tableData = click ? search_Account_data : Account_data;
    const currentPagination = click ? searchPagination : pagination;

    return (
        <div className="cbs-branches">
            <div className="cbs-branches__header">
                <div>
                    <h2 className="cbs-branches__title">All Account</h2>
                    <p className="cbs-branches__subtitle">Every customer registered in the network</p>
                </div>
                <Link to="/employee/dashboard/accounts/add" className="cbs-btn cbs-btn--primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add Account
                </Link>
            </div>
            <div className="cbs-branches__toolbar">
                <div className="cbs-search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input type="text" placeholder="Search by name, email, or phone..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="btn btn-primary" onClick={handlesubmit}>Search</button>
                </div>
            </div>
            <div className="cbs-card cbs-card--table">
                <div className="cbs-table-wrap">
                    <table className="cbs-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Account Number</th>
                                <th>Account Type</th>
                                <th>IFSC Code</th>
                                <th>Aadhar Number</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(tableData) && tableData.length > 0 ? (
                                tableData.map((data) => (
                                    <tr key={data._id}>
                                        <td className="cbs-table__muted">{data._id}</td>
                                        <td>{data.accountNumber}</td>
                                        <td>{data.accountType}</td>
                                        <td className="cbs-table__mono">{data.IFSCCode}</td>
                                        <td>{data.aadharNumber}</td>
                                        <td>{data.balance}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No accounts available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <PaginationControls
                    pagination={currentPagination}
                    page={page}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}

export default Search_Employee_Account;
