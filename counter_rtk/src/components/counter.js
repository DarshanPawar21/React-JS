import { useSelector, useDispatch } from 'react-redux';
import { increament, decreament } from '../slices/counter_slice.js';
const counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (<> 
        <div style={{ textAlign: 'center' }}>
            <h2>Redux Toolkit Counter</h2>
            <h1>{counter}</h1>

            <button onClick={() => dispatch(increamentment())}>+1</button>
            <button onClick={() => dispatch(decreament())}>-1</button>

            <br /><br />


        </div>
    </>)
}
export default counter;