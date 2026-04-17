// import { router } from "json-server";
import SignIn from "../component/SignIn/SignIn";
import SignUp from "../component/SignUp/SignUp";
import Home from "../component/Home/Home"
import { Routes,Route } from "react-router";
const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
export default App;