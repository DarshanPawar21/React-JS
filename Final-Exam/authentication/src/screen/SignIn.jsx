import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login_start, login_success, login_error, clear_error } from "../slices/authSlice"

const SignIn = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    const login = async (e) => {
        e.preventDefault()
        dispatch(clear_error())

        if (email == "" || password == "") {
            dispatch(login_error("Please fill all field"))
        }
        else {
            dispatch(login_start())
            const res = await fetch(`http://localhost:3000/users?email=${email}`)
            const data = await res.json()

            if (data.length == 0) {
                dispatch(login_error("User not found"))
            }
            else if (data[0].password != password) {
                dispatch(login_error("Password wrong"))
            }
            else {
                dispatch(login_success(data[0]))
                alert("Login success")
                setemail("")
                setpassword("")
            }
        }
    }

    return (<>
        <div className="container" style={{ width: "100%", height: "80vh" }}>
            <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", height: "80vh" }}>
                <form className="d-flex flex-column gap-3" style={{ width: "400px" }} onSubmit={login}>
                    <h1 className="text-center">Login</h1>
                    {auth.error && <p className="text-danger">{auth.error}</p>}
                    <input value={email} className="rounded-5 p-3" type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                    <input value={password} className="rounded-5 p-3" type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                    <button className="btn btn-warning rounded-5" type="submit">{auth.loading ? "Loading..." : "Login"}</button>
                </form>
            </div>
        </div>
    </>)
}
export default SignIn
