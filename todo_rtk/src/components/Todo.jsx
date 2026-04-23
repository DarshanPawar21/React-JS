import { useSelector, useDispatch } from "react-redux"
import { add_todo, remove_todo, update_todo } from "../features/Todo_slice";
import { useState } from "react";
const Todo = () => {
    const todolist = useSelector((state) => state.todo.todo)
    const dispatch = useDispatch();
    const [text, settext] = useState("")
    return (<>
        <div>
            <h1 className="text-center mt-5">Your Todo</h1>
        </div>
        <div className="container" style={{ width: "100%", height: "80vh" }}>
            <div className="d-flex justify-content-center" style={{ width: "100%", height: "30vh" }}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <input value={text} className="rounded-5 p-3" type="text" placeholder="Todo..." style={{ width: "400px", height: "50px" }} onChange={(e) => settext(e.target.value)} />
                    <button className="btn btn-warning mt-3 w-75 rounded-5" onClick={() => dispatch(add_todo({ text, status: "false" }))}>Add</button>
                </div>
            </div>
            <div>
                {
                    todolist.map((todo, i) =>
                        <div className="card " key={i} style={{ width: "100%" }}>
                            <div className="card-body">
                                <h5 className="card-title">{todo.text}</h5>
                                <div className="d-flex gap-3">
                                    <button className="btn btn-danger" onClick={() => dispatch(remove_todo(i))}>Remove</button>
                                    <button className="btn btn-primary" onClick={(e) => settext(todo.text)}>Update</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </>)
}
export default Todo;