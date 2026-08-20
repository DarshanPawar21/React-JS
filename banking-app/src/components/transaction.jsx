import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
import { gettransaction } from "../features/getdata";
import { search_gettransaction_data, serach_transaction } from "../features/searchslice";
import PaginationControls from "./PaginationControls";
function SearchTransaction() {
    const usedispatch = useDispatch();

    const { transactiondata, pagination, loading, error, loginmessage } = useSelector((state) => state.gettransaction);
    const { Search_Transaction, pagination: searchPagination } = useSelector((state) => state.serach_Transactiondata)
    const [search, setsearch] = useState("")
    const [click, setclick] = useState(false);
    const [activeSearch, setActiveSearch] = useState("");
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (click) {
            usedispatch(search_gettransaction_data({ search: activeSearch, page, limit: 10 }));
        } else {
            usedispatch(gettransaction({ page, limit: 10 }));
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
    console.log(Search_Transaction);
    return (
        <div className="cbs-branches">
            <div className="cbs-branches__header">
                <div>
                    <h2 className="cbs-branches__title">All Account</h2>
                    <p className="cbs-branches__subtitle">
                        Every customer registered in the network
                    </p>
                </div>

                {/* <Link to="/dashboard/accounts/add" className="cbs-btn cbs-btn--primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add Account
                </Link> */}
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
                        onChange={(e) => setsearch(e.target.value)}
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
                                <th>IFSC Code</th>
                                <th>Account Number</th>
                                <th>Account Type</th>
                                <th>User ID</th>
                                <th>Transaction Type</th>
                                <th>Transaction Amount</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {click ?
                                (Search_Transaction && Search_Transaction.map((data) => (
                                    <tr>
                                        <td className="cbs-table__muted">{data.IFSCCode}</td>
                                        <td>{data.accountNumber}</td>
                                        <td>{data.accountType}</td>
                                        <td>{data.user_id}</td>
                                        <td className="cbs-table__mono">{data.transactionType}</td>
                                        <td>{data.tranamount}</td>
                                        <td>{data.balance}</td>
                                    </tr>
                                ))):
                                    (transactiondata && transactiondata.map((data) => (
                                        <tr>
                                            <td className="cbs-table__muted">{data.IFSCCode}</td>
                                            <td>{data.accountNumber}</td>
                                            <td>{data.accountType}</td>
                                            <td>{data.user_id}</td>
                                            <td className="cbs-table__mono">{data.transactionType}</td>
                                            <td>{data.tranamount}</td>
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

export default SearchTransaction;
