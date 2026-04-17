import axios from "axios";
import { tweets_api } from "../../utils/api"
import { useEffect, useEffectEvent, useState } from "react";
const Home = () => {

    const [tweets, settweets] = useState([])
    const [text, settext] = useState("")
    const handlegettweet = async () => {
        // handlepost()
        const res = await axios.get(tweets_api)
        settweets(res.data)
    }
    const handlepost = async () => {
        const date = new Date();
        const users = JSON.parse(localStorage.getItem("signin"))
        const data = {
            text: text,
            users: users.name,
            email: users.email,
            time: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()} : ${date.getMinutes()}`
        }
        const res = await axios.post(tweets_api, data)
        handlegettweet();
    }
    useEffect(() => {
        handlegettweet()
    }, [])

    return (<>
        <div className=" d-flex bg-white" style={{ width: "100%", height: "100vh" }}>
            <div className="">
                <div class="container-fluid bg-black ps-4" style={{ width: "400px", height: "100vh", }}>
                    <h2 className="text-white p-3">Tweeter</h2>
                    <div className="fs-3 d-flex ms-4 mb-3 text-white" href="/signup">
                        - Signup
                    </div>
                    <div className="fs-3 d-flex ms-4 text-white">
                        - Signin
                    </div>
                    <div className="fs-3 d-flex ms-4 mt-3 text-white">
                        - Abount
                    </div>
                </div>

            </div>
            <div className="ms-2 d-flex flex-column gap-2 p-3" style={{ width: "100%" }}>
                {
                    tweets.map((tweet, i) =>
                        <div class="card position-relative border-3 border-black" key={i}>
                            <div class="card-body" style={{ width: "100%", height: "auto" }}>
                                <div className="d-flex align-items-center">
                                    <h6 class="card-titl">{tweet.users}</h6>
                                    <span class="card-subtitle ms-2 mb-2 mt-1 text-body-secondary">{tweet.email}</span>
                                </div>
                                <span class="card-text">{tweet.text}</span>
                                <span className="card-text p-2 position-absolute top-0 end-0">{tweet.time}</span>
                                <span className="card-text text-black p-2 position-absolute bottom-0 end-0">
                                <svg style={{width:"20px",height:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                                133.98K
                                </span>
                            </div>
                        </div>)
                }
            </div>

            <div className="d-flex flex-column ms-5 justify-content-end fixed-bottom " style={{ width: "100%", height: "91vh" }}>
                <div className="d-flex flex-column  align-items-center mb-5" style={{ width: "100%", height: "19%" }}>
                    <input type="text" onChange={(e) => settext(e.target.value)} placeholder="Enter your Tweets !" className="ps-3 d-flex justify-content-center rounded-5 border-none mb-4" style={{ width: "50%", height: "40%" }} />
                    <button className="btn btn-warning rounded-5 w-25" onClick={handlepost} style={{ width: "", height: "" }}>Post</button>
                </div>
            </div>
        </div>
    </>)
}
export default Home;