import { useSelector,useDispatch } from "react-redux"
import { increament,decreament } from "../slice/counter_slice"
const Counter = () =>{
    const data = useSelector((state)=>state.counter_1.value);
    const dispatch = useDispatch();
    return(<>
        <h1>{data}</h1>
        <button onClick={()=>dispatch(increament())}>++</button>
        <button onClick={()=>dispatch(decreament())}>--</button>
    </>)
}
export default Counter;