import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos: []
}
const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add_todo: (state, actions) => {state.todos.push(actions .payload)
        localStorage.setItem("todos",JSON.stringify(state.todos));

        }
    },
    remove_todo: (state, actions) => {
        state.todos.splice(actions.payload, 1)
    },
    update_todo: (state, actions) => {
        const { i, text } = actions.payload;
        state.todos[i].text = text;
    },
},
);
export default todoslice.reducer;
export const { add_todo, remove_todo, update_todo } = todoslice.actions;