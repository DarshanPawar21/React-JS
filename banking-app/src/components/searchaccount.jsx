import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
import { get_user_data } from "../features/getdata";
import { search_getaccount_data } from "../features/searchslice";
import { getaccountdata } from "../features/getdata";
import PaginationControls from "./PaginationControls";
function SearchAccount() {
    const usedispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [click, setclick] = useState(false);
    const [activeSearch, setActiveSearch] = useState("");
    const [page, setPage] = useState(1);

    const { accountdata, pagination, loading, error, loginmessage } = useSelector((state) => state.getaccount)
    const { search_Account_data, pagination: searchPagination } = useSelector((state)=>state.search_Account)
    useEffect(() => {
        if (click) {
            usedispatch(search_getaccount_data({ search: activeSearch, page, limit: 10 }));
        } else {
            usedispatch(getaccountdata({ page, limit: 10 }));
        }
    }, [usedispatch, click, activeSearch, page]);

    const handlesubmit = (e) => {
        e.preventDefault();
        setActiveSearch(search);
        setPage(1);
        setclick(true);
        console.log("Search user:", search);
    };
    const currentPagination = click ? searchPagination : pagination;
    console.log(search_Account_data);
    return (
        <div className="cbs-branches">
            <div className="cbs-branches__header">
                <div>
                    <h2 className="cbs-branches__title">All Account</h2>
                    <p className="cbs-branches__subtitle">
                        Every customer registered in the network
                    </p>
                </div>

                <Link to="/admin/dashboard/accounts/add" className="cbs-btn cbs-btn--primary">
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
                    <input
                        type="text"
                        placeholder="Search by name, email, or phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={(e) => handlesubmit(e)}>Search</button>
                </div>
                {/* <span className="cbs-branches__count">{?.length || 0} customer</span> */}
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
                            {!click ?
                            (accountdata && accountdata.map((data) => (
                                    <tr key={data._id}>
                                        <td className="cbs-table__muted">{data._id}</td>
                                        <td>{data.accountNumber}</td>
                                        <td>{data.accountType}</td>
                                        <td className="cbs-table__mono">{data.IFSCCode}</td>
                                        <td>{data.aadharNumber}</td>
                                        <td>{data.balance}</td>
                                    </tr>
                                ))):
                                (search_Account_data && search_Account_data.map((data) => (
                                    <tr key={data._id}>
                                        <td className="cbs-table__muted">{data._id}__</td>
                                        <td>{data.accountNumber}</td>
                                        <td>{data.accountType}</td>
                                        <td className="cbs-table__mono">{data.IFSCCode}</td>
                                        <td>{data.aadharNumber}</td>
                                        <td>{data.balance}</td>
                                    </tr>
                                )))
                            }
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

export default SearchAccount;
