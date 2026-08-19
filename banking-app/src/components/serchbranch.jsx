import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getbranchdata } from "../features/getdata";
import { search_getbranch_data } from "../features/searchslice";
import "../css/sercgbranch.css";
import { useSelector, useDispatch } from "react-redux";
function SearchBranch() {
  const usedispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [click, setclick] = useState(false)

  const { getbranch } = useSelector((state) => state.getbranch);
  const { search_brachdata, loading, error, loginMessage } = useSelector((state) => state.serach_branch);


  // console.log(getbranch)

  useEffect(() => {
    usedispatch(getbranchdata());
    // useDispatch(search_getbranch_data());
  }, [usedispatch]);

  const handlesubmit = (e) => {
    e.preventDefault();
    usedispatch(search_getbranch_data(search))
    setclick(true)
    console.log(search)
  }
  console.log(search_brachdata)
  return (
    <div className="cbs-branches">
      <div className="cbs-branches__header">
        <div>
          <h2 className="cbs-branches__title">All Branches</h2>
          <p className="cbs-branches__subtitle">
            Every branch registered in the network
          </p>
        </div>

        <Link to="/admin/dashboard/branches/add" className="cbs-btn cbs-btn--primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Branch
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
            placeholder="Search by name, city, or IFSC..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary" onClick={(e) => handlesubmit(e)}>Search</button>
        </div>
        <span className="cbs-branches__count">1 branch</span>
      </div>

      <div className="cbs-card cbs-card--table">
        <div className="cbs-table-wrap">
          <table className="cbs-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Branch Name</th>
                <th>City</th>
                <th>IFSC</th>
                {/* <th>Manager</th> */}
                <th>Phone</th>
                {/* <th className="cbs-table__action-col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {click ? (
                // --- CLICK = TRUE (Search Result Data) ---
                search_brachdata && search_brachdata.length > 0 ? (
                  search_brachdata.map((data) => (
                    <tr key={data._id || data.id}>
                      <td className="cbs-table__muted">{data._id || data.id}</td>
                      <td>{data.branchName}</td>
                      <td>{data.branchCity}</td>
                      <td className="cbs-table__mono">{data.IFSCCode}</td>
                      <td>{data.branchPhone}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No search results found</td>
                  </tr>
                )
              ) : (
                // --- CLICK = FALSE (Pehle Wala / Default Data) ---
                getbranch && getbranch.length > 0 ? (
                  getbranch.map((data) => (
                    <tr key={data._id || data.id}>
                      <td className="cbs-table__muted">{data._id || data.id}</td>
                      <td>{data.branchName}</td>
                      <td>{data.branchCity}</td>
                      <td className="cbs-table__mono">{data.IFSCCode}</td>
                      <td>{data.branchPhone}</td>
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

export default SearchBranch;







