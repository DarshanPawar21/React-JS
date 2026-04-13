// import { router } from "json-server";
import SignIn from "../component/SignIn/SignIn";
import SignUp from "../component/SignUp/SignUp";
import { Routes,Route } from "react-router";
const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}
export default App;