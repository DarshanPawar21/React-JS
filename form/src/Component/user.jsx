import { useState } from "react";

const User = () => {
    const [users, setuser] = useState(JSON.parse(localStorage.getItem("users"))) || [];
    const [search, setsearch] = useState("");
    return (
        <>
            <h3 className="text-center">Customer Infomation</h3>
            <hr></hr>
            <div className="container d-flex ">
                <input type="text" onChange={(e) => setsearch(e.target.value)} />
                <button className="btn btn-primary ms-2" onClick={() => {
                    setuser(users.filter((user) => user.name.toLowerCase() == search.toLowerCase()))
                }}>Search</button>
                <button className="btn btn-primary ms-2" onClick={() => {
                    const cle = [...users]
                    cle.clear()
                    setuser(cle);
                    // setuser(JSON.parse(localStorage.getItem("users")));

                }}>Clear</button>
                <button className="btn btn-warning text-white ms-2" onClick={() => {
                    const arr = [...users]
                    arr.sort((a, b) => a.Fees - b.Fees)
                    setuser(arr);
                }}>Low To High</button>
                <button className="btn btn-warning text-white ms-2" onClick={() => {
                    const arr = [...users]
                    arr.sort((a, b) => b.Fees - a.Fees)
                    setuser(arr);
                }}>High To Low</button>
            </div>
            <div className="container d-flex  justify-content-center gap-4 mt-4" style={{ width: "20%", height: "auto" }}>
                {
                    users.map((use, i) => (
                        <div className="shadow p-4 rounded-4 col">
                            <div className="">
                                <h3>{use.name}</h3>
                                <span className="d-flex flex-column">{use.email}</span>
                                <span className="d-flex flex-column">{use.phone}</span>
                                <span className="d-flex flex-column">Fees : {use.Fees}</span>
                                <button className="btn btn-danger" onClick={() => {
                                    const array = [...users];
                                    array.splice(i, 1);
                                    localStorage.setItem("users", JSON.stringify(array))
                                    setuser(array);
                                }}>Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default User;