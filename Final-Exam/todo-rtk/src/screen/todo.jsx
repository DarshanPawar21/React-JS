import { useSelector, useDispatch } from "react-redux";
import { addtodo,deletetodo } from "../slices/todo-slice";
import { useState } from "react";
import { addTodoAsync } from "../slices/todo-slice";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.task.todos);

  const handleTodo = () => {
    dispatch(addTodoAsync(todo));
    setTodo("");
  };

  return (
    <div className="container-fluid" style={{ width: "100%", height: "100vh" }}>

      <div className="d-flex justify-content-center align-content-center">
        <h1>Todo Application</h1>
      </div>

      <section>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <span className="fs-2 d-flex justify-content-center">Add Your Todo</span>

            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter Your Todo"
              style={{ width: "500px" }}
            />

            <button onClick={handleTodo}>Add Todo</button>
          </div>
        </div>

        {/* <h2>Total Todos: {todos.length}</h2> */}

        <div>
          {todos.map((item, index) => (
            <div class="card m-1" key={index}>
              <div class="card-body">
                {item.title}
              <button className="btn btn-danger" onClick={() => dispatch(deletetodo(index))}>
                Delete
              </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Todo;
