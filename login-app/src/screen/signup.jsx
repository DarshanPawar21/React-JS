import axios from "axios";
import LeftFrame from "../components/left-frame";
import Rightfarme from "../components/right-frame";
import "../screen/framelayout.css";
const Signup = () => {
    
    return (<>
        <div className="screen">
            <div className="screen-left">
                <LeftFrame />
            </div>
            <div className="screen-right d-flex justify-content-center align-items-center" style={{ width: "60%" }}>
                <Rightfarme />
            </div>
        </div>
    </>)
}
export default Signup;