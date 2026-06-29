import { useDispatch, useSelector } from "react-redux"
import { logout } from "../slices/authSlice"

const Home = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return (<>
        <div className="container">
            <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "80vh" }}>
                <h1>Home</h1>
                <h3>Welcome {auth.user && auth.user.name}</h3>
                <p>{auth.user && auth.user.email}</p>
                <button className="btn btn-danger" onClick={() => dispatch(logout())}>Logout</button>
            </div>
        </div>
    </>)
}
export default Home
