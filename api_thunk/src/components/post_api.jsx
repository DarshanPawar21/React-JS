import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../slices/api.js";
function counter() {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return(<>
        <div className="container-fluid">
            <h1>{count}</h1>
            <button className="btn btn-primary me-2" onClick={()=>dispatch(increment())}>1++</button>
            <button className="btn btn-primary" onClick={()=>dispatch(decrement())}>1--</button>
        </div>
    </>)
}
export default counter;