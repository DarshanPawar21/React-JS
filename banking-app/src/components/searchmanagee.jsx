import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
import { get_manager_data } from "../features/getdata";
import PaginationControls from "./PaginationControls";
function Searchmanager() {
    const usedispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [click, setclick] = useState(false);
    const [page, setPage] = useState(1);

    const { Manager_data, pagination, loading, error, loginmessage } = useSelector((state) => state.getmanager)

    useEffect(() => {
        usedispatch(get_manager_data({ page, limit: 10 }));
    }, [usedispatch, page]);

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("Search user:", search);
    };
    // console.log(Manager_data);
    return (
        <div className="cbs-branches">
            <div className="cbs-branches__header">
                <div>
                    <h2 className="cbs-branches__title">All Customers</h2>
                    <p className="cbs-branches__subtitle">
                        Every customer registered in the network
                    </p>
                </div>

                <Link to="/admin/dashboard/manager/add" className="cbs-btn cbs-btn--primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add User
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
                                <th>aadhar Number</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Manager_data.map((data) => (
                                    <tr key={data._id}>
                                        <td className="cbs-table__muted">{data._id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td className="cbs-table__mono">{data.aadharNumber}</td>
                                        <td>{data.phone}</td>
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

export default Searchmanager;
