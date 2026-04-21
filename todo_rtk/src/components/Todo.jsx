import { useSelector, useDispatch } from "react-redux"
import { add_todo } from "../features/Todo_slice";
const Todo = () => {
    const todolist = useSelector((state) => state.todo.todo)
    const dispatch = useDispatch();
    return (<>
        <div>
            <button onClick={() => dispatch(add_todo())}>Add</button>
        </div>
        <div>
            {
                todolist.map((todo,i) => <div key={i}>{todo}</div>)
            }
        </div>
    </>)
}
export default Todo;