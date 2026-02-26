import flute from "./FluteList"
const Flute = ()=>{
    return(<>
    {
        flute.map((flute)=>
        <div>
            {flute.name}:
            {flute.emoji}
        </div>
        )
    }
    </>)
}
export default Flute;