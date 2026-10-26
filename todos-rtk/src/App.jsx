import { useSelector, useDispatch } from "react-redux";
import { add_todo } from "./slices/addtodos";
import { useState } from "react";
const App = () => {
  const [text, settext] = useState('');
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.todos);

  const handleadd = () => {
    dispatch(add_todo(text));
    settext('');
  }
  return (<>
  <h1>darshan</h1>
      <div>
        <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
        <button className="btn" onClick={handleadd}>submit</button>
      </div>

      <div>
        {
          items.map((t, index) => (
            <h1 key={index}>{t}</h1>
          ))
        }
        <p>{status}</p>
      </div>
      </>)
}
export default App;