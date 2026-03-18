import { useState } from "react";

const User = () => {
    const [users, setuser] = useState(JSON.parse(localStorage.getItem("users"))) || [];
    return (<div className="container d-flex gap-4 mt-4">
        {
            users.map((use) => (
                <div>
                    <h3>{use.name}</h3>
                    <span className="d-flex flex-column">{use.email}</span>
                    <span>{use.phone}</span>
                </div>
            ))
        }
    </div>)
}
export default User;