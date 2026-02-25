import { useState } from "react";

const Counter = () => {

    const  [count, setcount] = useState(0)

    return (<>

        <h1>{count}</h1>
        <button onClick={()=>setcount(count + 1)}>++</button>
    </>)
}
export default Counter;