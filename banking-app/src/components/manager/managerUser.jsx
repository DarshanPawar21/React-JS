import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
import { get_manager_data, get_user_data, getaccountdata } from "../../features/getdata";
import { get_userdata_manager, get_accountdata_manager, get_transactiondata_manager } from "../../features/manager_data/getdata_manager";
import { search_getUser_data } from "../../features/searchslice";

function Search_Manager_User() {
    const usedispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [click, setclick] = useState(false);


    const { Manager_data } = useSelector((state) => state.getmanager || {});
    const Mr_Manager = JSON.parse(localStorage.getItem("manager_login") || "{}");

    const { User_data } = useSelector((state) => state.get_user_manager || {});
    const real_manager = Manager_data.find((m) => m?.email === Mr_Manager?.email);
    const Mr_IFSCCOde = real_manager?.IFSCCode || Mr_Manager?.IFSCCode;


    const { search_Userdata, loading, error, loginmessage } = useSelector((state) => state.search_User);

    // console.log(User_data)

    useEffect(() => {
        usedispatch(get_manager_data(Mr_IFSCCOde));
        usedispatch(get_userdata_manager(Mr_IFSCCOde));

    }, [usedispatch, Mr_IFSCCOde]);

    const handlesubmit = (e) => {
        e.preventDefault();
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

                <Link to="/manager/dashboard/customers/add" className="cbs-btn cbs-btn--primary">
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
                                <th>Phone</th>
                                <th>Aadhar Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {click ? (
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
                                 User_data&& User_data.length > 0 ? (
                                    User_data.map((data) => (
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

export default Search_Manager_User;