import "./App.css"
import p1 from "./assets/p1.png"
import me from "./Component/ME/Me.jsx"
const App = () => {
    return(<>
        <div className=" container ">
        <div className="d-flex flex-column justify-content-center align-items-center Box-1">
             <h1 className="text-white text-center mb-4">Portfolio</h1>
             <div className="d-flex align-items-center bg rounded-2  justify-content-center " style={{width:1000,height:600}}>
                <a href={me}>
                <div className="d-flex justify-content-center bg-black shadow rounded-5" style={{width:300,height:200}}>
                    <img className="object-fit-cover " style={{width:2000,height:200}} src={p1} alt="" />
                </div>
                </a>
            </div>
           
        </div>
        </div>
    </>)
}
export default App;