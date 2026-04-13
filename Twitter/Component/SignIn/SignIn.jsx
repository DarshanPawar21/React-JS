import { useEffect, useState } from "react";
import { user_api } from "../../utils/api"
import bird from "../../src/assets/bird.png"
import axios from "axios";
const SignIn = () => {
    // const data = user_api;
    
    const [user,setuser] = useState({})
    const [data,setdata] = useState([])
    const [check,setcheck] = useState(false)
    // console.log(data)
    useEffect(()=>{  
    handcheck()
    },[])

     const handcheck = async() =>{
        const res = await axios.get(user_api);
        setdata(res.data)
        console.log(data)
    }

    const handlesignin = () =>{
        const res = data.findIndex((e)=>e.email==user.email && e.password==user.password)
        if(res!=-1)
        {
            console.log(res)
            console.log(data)
            alert("you are signed in !")
        }
        else{
            alert("signin failed !!")
        }
    }

    return (<>
        <div className="container-fluid d-flex flex-column align-items-center bg-primary text-white" style={{ width: "100%", height: "100vh" }}>
            <div className="">
                            <img style={{width:"100%",height:"250px"}} src={bird} alt="" />
                       </div>
            <div className="container" style={{ width: "50%" }}>
                <h1 className="text-center">Sign In</h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email :</label>
                        <input type="email" onChange={(e)=>setuser({...user,email :e.target.value})} className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password :</label>
                        <input type="password" onChange={(e)=>setuser({...user,password :e.target.value})} className="form-control" id="password" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" checked={check} onChange={()=>setcheck(!check)} id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>

                    <button type="submit" onClick={handlesignin} className={`btn btn-warning w-100 ${check ? "" : "disabled" }`}>Submit</button>   
            </div>
        </div>
    </>)
}
export default SignIn;