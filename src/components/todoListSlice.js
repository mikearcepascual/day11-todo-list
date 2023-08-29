import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        addTodoItem: (state, action) => {
            state.todoList.push(action.payload);
        },
        doneTodoItem: (state, action) => {
            state.todoList[action.payload].done = !state.todoList[action.payload].done;
        },
        deleteTodoItem: (state, action) => {
            state.todoList.splice(action.payload, 1);
        },
    },
});

export const { addTodoItem, doneTodoItem, deleteTodoItem } = todoListSlice.actions;
export default todoListSlice.reducer;