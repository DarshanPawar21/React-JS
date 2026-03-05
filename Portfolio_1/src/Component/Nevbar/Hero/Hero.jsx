import p1 from "../../../assets/p1.png";
import './Hero.css'
const Hero = () => {
    return (<>
        <div className="container d-flex flex-column align-items-center">
            
                <h2 className="text-white mb-3 glow-text" style={{textShadow: "0 0 20px #adff2f" }}>Darshan_Pawar</h2>

            <div className=" bor d-flex justify-content-center overflow-hidden rounded-circle" style={{width:500,height:500}}>
                <img className="object-fit-fill shadow " style={{width:'100%',height:"100%"}} src={p1} alt="" />
            </div>
        </div>
        <div className="container bor rounded-5 mt-5">
        </div>
    </>)
}
export default Hero;