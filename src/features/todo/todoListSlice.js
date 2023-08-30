import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    },
    reducers: {
        resetTodoTask: (state, action) => {
            state.todoList = action.payload
        },
        addTodoItem: (state, action) => {
            state.todoList.push(action.payload);
        },
        doneTodoItem: (state, action) => {
            const doneTodoItem = state.todoList.find(item => item.id === action.payload);
            if(doneTodoItem){
                doneTodoItem.done = !doneTodoItem.done;
            }
        },
        deleteTodoItem: (state, action) => {
            state.todoList = state.todoList.filter(item => item.id !== action.payload);
        },
    },
});

export const { addTodoItem, doneTodoItem, deleteTodoItem, resetTodoTask } = todoListSlice.actions;
export default todoListSlice.reducer;