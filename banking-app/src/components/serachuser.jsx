import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
import { get_user_data } from "../features/getdata";
import { search_getUser_data } from "../features/searchslice";

function SearchUser() {
    const usedispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [click, setclick] = useState(false);

    const { user_data } = useSelector((state) => state.geting_user);
    const { search_Userdata, loading, error, loginmessage } = useSelector((state) => state.search_User);
    console.log(search_Userdata);
    useEffect(() => {
        usedispatch(get_user_data());
    }, [usedispatch]);

    const handlesubmit = (e) => {
        e.preventDefault();
        usedispatch(get_user_data());
        usedispatch(search_getUser_data(search));
        setclick(true);
        console.log("Search user:", search);
    };
    console.log(search_Userdata);
    return (
        <div className="cbs-branches">
            <div className="cbs-branches__header">
                <div>
                    <h2 className="cbs-branches__title">All Customers</h2>
                    <p className="cbs-branches__subtitle">
                        Every customer registered in the network
                    </p>
                </div>

                <Link to="/dashboard/customers/add" className="cbs-btn cbs-btn--primary">
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
                <span className="cbs-branches__count">{user_data?.length || 0} customer</span>
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
                            {click ? (
                                // --- CLICK = TRUE (Search Result Data) ---
                                search_Userdata && search_Userdata.length > 0 ? (
                                    search_Userdata.map((data) => (
                                        <tr key={data._id || data.id}>
                                             <td className="cbs-table__muted">{data._id || data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td className="cbs-table__mono">{data.phone}</td>
                                            <td>{data.aadharNumber}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No search results found</td>
                                    </tr>
                                )
                            ) : (
                                // --- CLICK = FALSE (Pehle Wala / Default Data) ---
                                 user_data&& user_data.length > 0 ? (
                                    user_data.map((data) => (
                                        <tr key={data._id || data.id}>
                                            <td className="cbs-table__muted">{data._id || data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td className="cbs-table__mono">{data.phone}</td>
                                            <td>{data.aadharNumber}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No branches available</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SearchUser;