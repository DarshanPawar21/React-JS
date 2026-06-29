import { useState } from "react"
import { useSelector } from "react-redux"
import SignUp from "./screen/SignUp"
import SignIn from "./screen/SignIn"
import Home from "./screen/Home"

const App = () => {
    const [page, setpage] = useState("signup")
    const auth = useSelector((state) => state.auth)

    return (<>
        <div>
            {
                auth.isLogin ? <Home /> :
                    page == "signup" ?
                        <SignUp setpage={setpage} /> :
                        <SignIn />
            }
            {
                !auth.isLogin &&
                <div className="text-center mt-3">
                    {
                        page == "signup" ?
                            <p>Already have account ? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setpage("signin")}>Login</span></p> :
                            <p>New user ? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setpage("signup")}>Sign Up</span></p>
                    }
                </div>
            }
        </div>
    </>)
}
export default App
