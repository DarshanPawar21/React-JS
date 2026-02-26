import { useState } from "react";
const TextUtil = () => {
    const [text, settext] = useState("");
    const [count,setcount] = useState(0);
    const [countword,setcountword] = useState(0);
    return (<>
        <div className="Container">
            <div>
                <h2 className="text-center m-3">Text_Utils</h2>
            </div>
            <div className="m-3">
                <div className="form-floating">
                    <textarea onChange={(e)=>settext(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: 100 }}></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
            </div>
            <div className="mx-3">
                <button onClick={()=>settext(text.toUpperCase())} className="btn btn-primary">To Uppercase</button>
                <button onClick={()=>settext(text.toLowerCase())} className="btn btn-primary mx-2">To Lowercase</button>
                <button onClick={()=>setcount(count.length)} className="btn btn-primary mx-2">Count Text</button>
                <button onClick={()=>setcountword(countword.split(" "))} className="btn btn-primary mx-2">Count Word</button>
            </div>
            <hr />
            <div className="m-3">
                {text}
                <h3 className="m-3">text Count :{count}</h3>
                <h3 className="m-3">text Count :{countword}</h3>
            </div>
        </div>
    </>)
}
export default TextUtil;