import { useState } from "react"
const Counter = () => {
    const [count, setCount] = useState(0)
    return (<>
        <h1>{count}</h1>
        <button className="btn" onClick={() => { setCount(count + 1) }}>+1</button>
        <button className="btn" onClick={() => { setCount(count - 1) }}>-1</button>
        <button className="btn" onClick={() => { setCount(count * 2) }}>*2</button>
        <button className="btn" onClick={() => { setCount(count / 12) }}>/12</button>
    </>)
}
export default Counter;