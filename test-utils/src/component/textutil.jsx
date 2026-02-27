import { useState, useEffect } from "react";
const TextUtil = () => {
    useEffect(() => {
        settext(localStorage.getItem("text",text));
        setcount(localStorage.getItem("count",count));
        setcountword(localStorage.getItem("countword",countword));
        setSecond(localStorage.getItem("second",Second));
    }, [])
    const [text, settext] = useState("");
    const [count, setcount] = useState(0);
    const [countword, setcountword] = useState(0);
    const [Second, setSecond] = useState(0);    
    return (<>
        <div className="Container">
            <div>
                <h2 className="text-center m-3 text-white">Text-Utils</h2>   
            </div>
            <div className="m-3">
                <div className="form-floating">
                    <textarea value={text} onChange={(e) => {
                        settext(e.target.value)
                        localStorage.setItem("text", text);
                    }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: 100 }}></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                </div>
            </div>
            <div className="mx-3 text-center bg-white rounded p-2">
                <button onClick={() => settext(text.toUpperCase())} className="btn btn-primary">To Uppercase</button>
                <button onClick={() => settext(text.toLowerCase())} className="btn btn-primary mx-2">To Lowercase</button>
                <button onClick={() => {
                    setcount(text.length)
                    localStorage.setItem("count", text.length.toString())
                }} className="btn btn-primary mx-2">Count Text</button>
                <button onClick={() => {
                    setcountword(text.split(" ").length);
                    localStorage.setItem("countword", text.split(" ").length.toString())
                }} className="btn btn-primary mx-2">Count Word</button>
                <button onClick={() => {
                    setSecond((text.split(" ").length * 60 / 180) .toFixed(2));
                    localStorage.setItem("second", (text.split(" ").length * 60 / 180) .toFixed(2))  
                }} className="btn btn-primary mx-2">Second Count</button>
                <button onClick={() => {
                    settext("");
                    setcount(0);    
                    setcountword(0);
                    setSecond(0);
                }} className="btn btn-primary mx-2">Remove Text</button>
            </div>
            <hr />
            <div className="m-3 bg-white rounded p-3">
                <h3>Your Word :</h3>
                {text}
                <h3 className="m-3">Text Count :{count}</h3>
                <h3 className="m-3">Text Count Word :{countword}</h3>
                <h3 className="m-3">Text Count Second :{Second} s</h3>
            </div>
        </div>
    </>)
}
export default TextUtil;
