import { useState } from "react";
import "./App.css"
const App = () => {

  const [text, settext] = useState({});
  const [todos, settodos] = useState([])
  console.log(todos)
  const addtodo = () => {
    settodos([text]);
    settext("")
  }

  const uppercase = () => {
    const upperase = todos.map((t) => t.toUpperCase());
    settodos(upperase);
  }
  console.log(text);
  return (<>
    <div className="main-todo">
      <div className="todo-border">
        <h1 className="m-4">Enter Your Todos</h1>
        <div className="input-main mt-3">
          <input type="text" placeholder="Enter Your Todos" onChange={(e) => settext((prev) => ({ ...prev, nam: e.target.value }))} />
          <input type="text" placeholder="Enter Your Todos" onChange={(e) => settext((prev) => ({ ...prev, phone: e.target.value }))} />
          <button className="btn" onClick={addtodo}>Submit</button>
          <button className="btn" onClick={uppercase}>Uppercase</button>
        </div>
        <div className="show">
          {
            todos.map((t, i) => (
              <div>
              <h1 key={i}>name :{t.nam}</h1>
              <h1 key={i}>phone :{t.phone}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </>)
}
export default App;