// import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addtodo } from "../slices/todo-slice";
import { useState } from "react";
const Todo = () => {
    const [todo,settodo] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);

    const handletodo =  () =>{
        dispatch(addtodo(todo));
        
    }
    return (<>
        <div className="container-fluid" style={{ width: "100%", height: "100vh" }}>
            <div className="d-flex justify-content-center align-content-center">
                <h1>Todo Application</h1>
            </div>
            <section>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <span className="fs-2 d-flex justify-content-center">Add Your</span>
                        <input type="text" onChange={(e) => settodo(e.target.value)} className="" placeholder="Enter Your Todo" style={{ width: "500px" }} />
                    </div>
                </div>
                <h2>{todos.length}</h2>
            </section>
        </div>
    </>)

}
export default Todo;