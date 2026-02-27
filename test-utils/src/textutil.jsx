import { useState, useEffect } from "react";
const TextUtil = () => {
    useEffect(() => {
        settext(localStorage.getItem("text"));
        setcount(localStorage.getItem("count"));
        setcountword(localStorage.getItem("countword"));
        setSecond(localStorage.getItem("second"));
    }, [])
    const [text, settext] = useState(localStorage.getItem("text") || "");
    const [count, setcount] = useState(localStorage.getItem("count") || 0);
    const [countword, setcountword] = useState(localStorage.getItem("countword") || 0);
    const [Second, setSecond] = useState(localStorage.getItem("second") || 0);
    return (<>
        <div className="Container">
            <div>
                <h2 className="text-center m-3">Text_Utils</h2>
            </div>
            <div className="m-3">
                <div className="form-floating">
                    <textarea value={text} onChange={(e) => {
                        settext(e.target.value)
                        localStorage.setItem("text", text);
                    }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: 100 }}></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
            </div>
            <div className="mx-3">
                <button onClick={() => settext(text.toUpperCase())} className="btn btn-primary">To Uppercase</button>
                <button onClick={() => settext(text.toLowerCase())} className="btn btn-primary mx-2">To Lowercase</button>
                <button onClick={() => {
                    setcount(text.length)
                    // localStorage.setItem("count", count);
                }} className="btn btn-primary mx-2">Count Text</button>
                <button onClick={() => {
                    setcountword(text.split(" ").length);
                    // localStorage.setItem("Countword", countword)
                }} className="btn btn-primary mx-2">Count Word</button>
                <button onClick={() => {
                    setSecond(text.split(" ").length * 60 / 180);
                    // localStorage.setItem("second", Second)
                }} className="btn btn-primary mx-2">Second Count</button>
                <button onClick={() => {
                    settext("");
                    setcount(0);
                    setcountword(0);
                    setSecond(0);
                }} className="btn btn-primary mx-2">Remove Text</button>
            </div>
            <hr />
            <div className="m-3">
                {text}
                <h3 className="m-3">text Count :{count}</h3>
                <h3 className="m-3">text Count Word :{countword}</h3>
                <h3 className="m-3">text Count Second :{Second} s</h3>
            </div>
        </div>
    </>)
}
export default TextUtil;
